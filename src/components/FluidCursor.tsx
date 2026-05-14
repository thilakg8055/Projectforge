"use client";

import { useEffect, useRef } from "react";

/**
 * FluidCursor
 * Full WebGL Navier-Stokes fluid simulation cursor effect.
 * Ported from the vanilla JS fluid sim — works as a fixed full-screen canvas
 * layered under UI content (pointer-events: none).
 *
 * Drop this into layout.tsx and it renders site-wide automatically.
 */
export default function FluidCursor() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;

        // ─── Config ────────────────────────────────────────────────────────────────
        const config = {
            TEXTURE_DOWNSAMPLE: 1,
            DENSITY_DISSIPATION: 0.97,
            VELOCITY_DISSIPATION: 0.98,
            PRESSURE_DISSIPATION: 0.8,
            PRESSURE_ITERATIONS: 25,
            CURL: 30,
            SPLAT_RADIUS: 0.003,
        };

        // ─── WebGL Context ─────────────────────────────────────────────────────────
        const params = {
            alpha: true,
            depth: false,
            stencil: false,
            antialias: false,
            premultipliedAlpha: false,
        };

        let gl: WebGL2RenderingContext | WebGLRenderingContext;
        let isWebGL2 = false;

        const gl2 = canvas.getContext("webgl2", params) as WebGL2RenderingContext;
        if (gl2) {
            gl = gl2;
            isWebGL2 = true;
        } else {
            gl =
                (canvas.getContext("webgl", params) as WebGLRenderingContext) ||
                (canvas.getContext("experimental-webgl", params) as WebGLRenderingContext);
        }

        if (!gl) return;

        let halfFloat: any;
        let supportLinearFiltering: any;

        if (isWebGL2) {
            (gl as WebGL2RenderingContext).getExtension("EXT_color_buffer_float");
            supportLinearFiltering = gl.getExtension("OES_texture_float_linear");
        } else {
            halfFloat = gl.getExtension("OES_texture_half_float");
            supportLinearFiltering = gl.getExtension("OES_texture_half_float_linear");
        }

        gl.clearColor(0.0, 0.0, 0.0, 0.0);

        const halfFloatTexType = isWebGL2
            ? (gl as WebGL2RenderingContext).HALF_FLOAT
            : halfFloat?.HALF_FLOAT_OES;

        function getSupportedFormat(
            internalFormat: number,
            format: number,
            type: number
        ): { internalFormat: number; format: number } | null {
            if (!supportRenderTextureFormat(internalFormat, format, type)) {
                if (internalFormat === (gl as any).R16F)
                    return getSupportedFormat((gl as any).RG16F, (gl as any).RG, type);
                if (internalFormat === (gl as any).RG16F)
                    return getSupportedFormat((gl as any).RGBA16F, gl.RGBA, type);
                return null;
            }
            return { internalFormat, format };
        }

        function supportRenderTextureFormat(
            internalFormat: number,
            format: number,
            type: number
        ) {
            const tex = gl.createTexture();
            gl.bindTexture(gl.TEXTURE_2D, tex);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, 4, 4, 0, format, type, null);
            const fbo = gl.createFramebuffer();
            gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
            return gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE;
        }

        let formatRGBA: { internalFormat: number; format: number } | null;
        let formatRG: { internalFormat: number; format: number } | null;
        let formatR: { internalFormat: number; format: number } | null;

        if (isWebGL2) {
            const g = gl as WebGL2RenderingContext;
            formatRGBA = getSupportedFormat(g.RGBA16F, gl.RGBA, halfFloatTexType);
            formatRG = getSupportedFormat(g.RG16F, (g as any).RG, halfFloatTexType);
            formatR = getSupportedFormat(g.R16F, (g as any).RED, halfFloatTexType);
        } else {
            formatRGBA = getSupportedFormat(gl.RGBA, gl.RGBA, halfFloatTexType);
            formatRG = getSupportedFormat(gl.RGBA, gl.RGBA, halfFloatTexType);
            formatR = getSupportedFormat(gl.RGBA, gl.RGBA, halfFloatTexType);
        }

        // ─── Shaders ────────────────────────────────────────────────────────────────
        function compileShader(type: number, source: string) {
            const shader = gl.createShader(type)!;
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
                console.error(gl.getShaderInfoLog(shader));
            return shader;
        }

        const baseVert = compileShader(gl.VERTEX_SHADER, `
      precision highp float;
      attribute vec2 aPosition;
      varying vec2 vUv;
      varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB;
      uniform vec2 texelSize;
      void main(){
        vUv = aPosition * 0.5 + 0.5;
        vL = vUv - vec2(texelSize.x, 0.0);
        vR = vUv + vec2(texelSize.x, 0.0);
        vT = vUv + vec2(0.0, texelSize.y);
        vB = vUv - vec2(0.0, texelSize.y);
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `);

        const clearFrag = compileShader(gl.FRAGMENT_SHADER, `
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D uTexture;
      uniform float value;
      void main(){ gl_FragColor = value * texture2D(uTexture, vUv); }
    `);

        const displayFrag = compileShader(gl.FRAGMENT_SHADER, `
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D uTexture;
      void main(){ gl_FragColor = texture2D(uTexture, vUv); }
    `);

        const splatFrag = compileShader(gl.FRAGMENT_SHADER, `
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D uTarget;
      uniform float aspectRatio;
      uniform vec3 color;
      uniform vec2 point;
      uniform float radius;
      void main(){
        vec2 p = vUv - point.xy;
        p.x *= aspectRatio;
        vec3 splat = exp(-dot(p,p)/radius) * color;
        vec3 base = texture2D(uTarget, vUv).xyz;
        gl_FragColor = vec4(base + splat, 1.0);
      }
    `);

        const advectionFrag = compileShader(gl.FRAGMENT_SHADER, `
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D uVelocity; uniform sampler2D uSource;
      uniform vec2 texelSize;
      uniform float dt; uniform float dissipation;
      void main(){
        vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
        gl_FragColor = dissipation * texture2D(uSource, coord);
        gl_FragColor.a = 1.0;
      }
    `);

        const advectionManualFrag = compileShader(gl.FRAGMENT_SHADER, `
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D uVelocity; uniform sampler2D uSource;
      uniform vec2 texelSize;
      uniform float dt; uniform float dissipation;
      vec4 bilerp(sampler2D sam, vec2 p){
        vec4 st; st.xy = floor(p-0.5)+0.5; st.zw = st.xy+1.0;
        vec4 uv = st * texelSize.xyxy;
        vec4 a = texture2D(sam,uv.xy); vec4 b = texture2D(sam,uv.zy);
        vec4 c = texture2D(sam,uv.xw); vec4 d = texture2D(sam,uv.zw);
        vec2 f = p - st.xy;
        return mix(mix(a,b,f.x),mix(c,d,f.x),f.y);
      }
      void main(){
        vec2 coord = gl_FragCoord.xy - dt * texture2D(uVelocity,vUv).xy;
        gl_FragColor = dissipation * bilerp(uSource, coord);
        gl_FragColor.a = 1.0;
      }
    `);

        const divergenceFrag = compileShader(gl.FRAGMENT_SHADER, `
      precision highp float;
      varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB;
      uniform sampler2D uVelocity;
      vec2 sampleV(vec2 uv){
        vec2 m=vec2(1.0);
        if(uv.x<0.0){uv.x=0.0;m.x=-1.0;} if(uv.x>1.0){uv.x=1.0;m.x=-1.0;}
        if(uv.y<0.0){uv.y=0.0;m.y=-1.0;} if(uv.y>1.0){uv.y=1.0;m.y=-1.0;}
        return m*texture2D(uVelocity,uv).xy;
      }
      void main(){
        float L=sampleV(vL).x; float R=sampleV(vR).x;
        float T=sampleV(vT).y; float B=sampleV(vB).y;
        gl_FragColor = vec4(0.5*(R-L+T-B),0,0,1);
      }
    `);

        const curlFrag = compileShader(gl.FRAGMENT_SHADER, `
      precision highp float;
      varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB;
      uniform sampler2D uVelocity;
      void main(){
        float L=texture2D(uVelocity,vL).y; float R=texture2D(uVelocity,vR).y;
        float T=texture2D(uVelocity,vT).x; float B=texture2D(uVelocity,vB).x;
        gl_FragColor = vec4(R-L-T+B,0,0,1);
      }
    `);

        const vorticityFrag = compileShader(gl.FRAGMENT_SHADER, `
      precision highp float;
      varying vec2 vUv; varying vec2 vT; varying vec2 vB;
      uniform sampler2D uVelocity; uniform sampler2D uCurl;
      uniform float curl; uniform float dt;
      void main(){
        float T=texture2D(uCurl,vT).x; float B=texture2D(uCurl,vB).x;
        float C=texture2D(uCurl,vUv).x;
        vec2 force = vec2(abs(T)-abs(B),0.0);
        force *= 1.0/length(force+0.00001)*curl*C;
        vec2 vel = texture2D(uVelocity,vUv).xy;
        gl_FragColor = vec4(vel+force*dt,0,1);
      }
    `);

        const pressureFrag = compileShader(gl.FRAGMENT_SHADER, `
      precision highp float;
      varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB; varying vec2 vUv;
      uniform sampler2D uPressure; uniform sampler2D uDivergence;
      vec2 bnd(vec2 uv){ return min(max(uv,0.0),1.0); }
      void main(){
        float L=texture2D(uPressure,bnd(vL)).x; float R=texture2D(uPressure,bnd(vR)).x;
        float T=texture2D(uPressure,bnd(vT)).x; float B=texture2D(uPressure,bnd(vB)).x;
        float div=texture2D(uDivergence,vUv).x;
        gl_FragColor = vec4((L+R+B+T-div)*0.25,0,0,1);
      }
    `);

        const gradSubFrag = compileShader(gl.FRAGMENT_SHADER, `
      precision highp float;
      varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB; varying vec2 vUv;
      uniform sampler2D uPressure; uniform sampler2D uVelocity;
      vec2 bnd(vec2 uv){ return min(max(uv,0.0),1.0); }
      void main(){
        float L=texture2D(uPressure,bnd(vL)).x; float R=texture2D(uPressure,bnd(vR)).x;
        float T=texture2D(uPressure,bnd(vT)).x; float B=texture2D(uPressure,bnd(vB)).x;
        vec2 vel=texture2D(uVelocity,vUv).xy;
        vel.xy -= vec2(R-L,T-B);
        gl_FragColor = vec4(vel,0,1);
      }
    `);

        // ─── GLProgram helper ───────────────────────────────────────────────────────
        function createProgram(vert: WebGLShader, frag: WebGLShader) {
            const p = gl.createProgram()!;
            gl.attachShader(p, vert);
            gl.attachShader(p, frag);
            gl.linkProgram(p);
            if (!gl.getProgramParameter(p, gl.LINK_STATUS))
                console.error(gl.getProgramInfoLog(p));
            const uniforms: Record<string, WebGLUniformLocation | null> = {};
            const count = gl.getProgramParameter(p, gl.ACTIVE_UNIFORMS) as number;
            for (let i = 0; i < count; i++) {
                const name = gl.getActiveUniform(p, i)!.name;
                uniforms[name] = gl.getUniformLocation(p, name);
            }
            return { program: p, uniforms, bind: () => gl.useProgram(p) };
        }

        const clearProg = createProgram(baseVert, clearFrag);
        const displayProg = createProgram(baseVert, displayFrag);
        const splatProg = createProgram(baseVert, splatFrag);
        const advProg = createProgram(baseVert, supportLinearFiltering ? advectionFrag : advectionManualFrag);
        const divProg = createProgram(baseVert, divergenceFrag);
        const curlProg = createProgram(baseVert, curlFrag);
        const vortProg = createProgram(baseVert, vorticityFrag);
        const pressureProg = createProgram(baseVert, pressureFrag);
        const gradProg = createProgram(baseVert, gradSubFrag);

        // ─── FBOs ───────────────────────────────────────────────────────────────────
        let textureWidth: number, textureHeight: number;
        let density: any, velocity: any, divergence: any, curl: any, pressure: any;

        function createFBO(texId: number, w: number, h: number, iFmt: number, fmt: number, type: number, param: number) {
            gl.activeTexture(gl.TEXTURE0 + texId);
            const tex = gl.createTexture();
            gl.bindTexture(gl.TEXTURE_2D, tex);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, param);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, param);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.texImage2D(gl.TEXTURE_2D, 0, iFmt, w, h, 0, fmt, type, null);
            const fbo = gl.createFramebuffer();
            gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
            gl.viewport(0, 0, w, h);
            gl.clear(gl.COLOR_BUFFER_BIT);
            return [tex, fbo, texId];
        }

        function createDoubleFBO(texId: number, w: number, h: number, iFmt: number, fmt: number, type: number, param: number) {
            let fbo1 = createFBO(texId, w, h, iFmt, fmt, type, param);
            let fbo2 = createFBO(texId + 1, w, h, iFmt, fmt, type, param);
            return {
                get read() { return fbo1; },
                get write() { return fbo2; },
                swap() { [fbo1, fbo2] = [fbo2, fbo1]; },
            };
        }

        function initFramebuffers() {
            textureWidth = gl.drawingBufferWidth >> config.TEXTURE_DOWNSAMPLE;
            textureHeight = gl.drawingBufferHeight >> config.TEXTURE_DOWNSAMPLE;
            const type = halfFloatTexType;
            const linear = supportLinearFiltering ? gl.LINEAR : gl.NEAREST;

            density = createDoubleFBO(2, textureWidth, textureHeight, formatRGBA!.internalFormat, formatRGBA!.format, type, linear);
            velocity = createDoubleFBO(0, textureWidth, textureHeight, formatRG!.internalFormat, formatRG!.format, type, linear);
            divergence = createFBO(4, textureWidth, textureHeight, formatR!.internalFormat, formatR!.format, type, gl.NEAREST);
            curl = createFBO(5, textureWidth, textureHeight, formatR!.internalFormat, formatR!.format, type, gl.NEAREST);
            pressure = createDoubleFBO(6, textureWidth, textureHeight, formatR!.internalFormat, formatR!.format, type, gl.NEAREST);
        }

        initFramebuffers();

        // ─── Blit quad ──────────────────────────────────────────────────────────────
        const buf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), gl.STATIC_DRAW);
        const ibuf = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibuf);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), gl.STATIC_DRAW);
        gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(0);

        const blit = (destination: WebGLFramebuffer | null) => {
            gl.bindFramebuffer(gl.FRAMEBUFFER, destination);
            gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
        };

        // ─── Splat ──────────────────────────────────────────────────────────────────
        function splat(x: number, y: number, dx: number, dy: number, color: number[]) {
            splatProg.bind();
            gl.uniform1i(splatProg.uniforms.uTarget, velocity.read[2]);
            gl.uniform1f(splatProg.uniforms.aspectRatio, canvas!.width / canvas!.height);
            gl.uniform2f(splatProg.uniforms.point, x / canvas!.width, 1.0 - y / canvas!.height);
            gl.uniform3f(splatProg.uniforms.color, dx, -dy, 1.0);
            gl.uniform1f(splatProg.uniforms.radius, config.SPLAT_RADIUS);
            blit(velocity.write[1]);
            velocity.swap();

            gl.uniform1i(splatProg.uniforms.uTarget, density.read[2]);
            gl.uniform3f(splatProg.uniforms.color, color[0] * 0.3, color[1] * 0.3, color[2] * 0.3);
            blit(density.write[1]);
            density.swap();
        }

        function multipleSplats(amount: number) {
            for (let i = 0; i < amount; i++) {
                splat(
                    canvas!.width * Math.random(),
                    canvas!.height * Math.random(),
                    1000 * (Math.random() - 0.5),
                    1000 * (Math.random() - 0.5),
                    [Math.random() * 10, Math.random() * 10, Math.random() * 10]
                );
            }
        }

        // ─── Pointer state ──────────────────────────────────────────────────────────
        const pointers = [{ x: 0, y: 0, dx: 0, dy: 0, down: false, moved: false, color: [0.2, 0.6, 1.0] }];

        // ─── Main loop ──────────────────────────────────────────────────────────────
        let lastTime = Date.now();
        let animId: number;
        multipleSplats(Math.floor(Math.random() * 10) + 5);

        function update() {
            animId = requestAnimationFrame(update);

            if (canvas!.width !== canvas!.clientWidth || canvas!.height !== canvas!.clientHeight) {
                canvas!.width = canvas!.clientWidth;
                canvas!.height = canvas!.clientHeight;
                initFramebuffers();
            }

            const dt = Math.min((Date.now() - lastTime) / 1000, 0.016);
            lastTime = Date.now();

            gl.viewport(0, 0, textureWidth, textureHeight);

            // Advect velocity
            advProg.bind();
            gl.uniform2f(advProg.uniforms.texelSize, 1 / textureWidth, 1 / textureHeight);
            gl.uniform1i(advProg.uniforms.uVelocity, velocity.read[2]);
            gl.uniform1i(advProg.uniforms.uSource, velocity.read[2]);
            gl.uniform1f(advProg.uniforms.dt, dt);
            gl.uniform1f(advProg.uniforms.dissipation, config.VELOCITY_DISSIPATION);
            blit(velocity.write[1]); velocity.swap();

            // Advect density
            gl.uniform1i(advProg.uniforms.uVelocity, velocity.read[2]);
            gl.uniform1i(advProg.uniforms.uSource, density.read[2]);
            gl.uniform1f(advProg.uniforms.dissipation, config.DENSITY_DISSIPATION);
            blit(density.write[1]); density.swap();

            // Apply splats from moved pointers
            for (const p of pointers) {
                if (p.moved) {
                    splat(p.x, p.y, p.dx, p.dy, p.color);
                    p.moved = false;
                }
            }

            // Curl
            curlProg.bind();
            gl.uniform2f(curlProg.uniforms.texelSize, 1 / textureWidth, 1 / textureHeight);
            gl.uniform1i(curlProg.uniforms.uVelocity, velocity.read[2]);
            blit(curl[1]);

            // Vorticity
            vortProg.bind();
            gl.uniform2f(vortProg.uniforms.texelSize, 1 / textureWidth, 1 / textureHeight);
            gl.uniform1i(vortProg.uniforms.uVelocity, velocity.read[2]);
            gl.uniform1i(vortProg.uniforms.uCurl, curl[2]);
            gl.uniform1f(vortProg.uniforms.curl, config.CURL);
            gl.uniform1f(vortProg.uniforms.dt, dt);
            blit(velocity.write[1]); velocity.swap();

            // Divergence
            divProg.bind();
            gl.uniform2f(divProg.uniforms.texelSize, 1 / textureWidth, 1 / textureHeight);
            gl.uniform1i(divProg.uniforms.uVelocity, velocity.read[2]);
            blit(divergence[1]);

            // Clear pressure
            clearProg.bind();
            const pTexId = pressure.read[2];
            gl.activeTexture(gl.TEXTURE0 + pTexId);
            gl.bindTexture(gl.TEXTURE_2D, pressure.read[0]);
            gl.uniform1i(clearProg.uniforms.uTexture, pTexId);
            gl.uniform1f(clearProg.uniforms.value, config.PRESSURE_DISSIPATION);
            blit(pressure.write[1]); pressure.swap();

            // Pressure solve
            pressureProg.bind();
            gl.uniform2f(pressureProg.uniforms.texelSize, 1 / textureWidth, 1 / textureHeight);
            gl.uniform1i(pressureProg.uniforms.uDivergence, divergence[2]);
            let pId = pressure.read[2];
            gl.uniform1i(pressureProg.uniforms.uPressure, pId);
            gl.activeTexture(gl.TEXTURE0 + pId);
            for (let i = 0; i < config.PRESSURE_ITERATIONS; i++) {
                gl.bindTexture(gl.TEXTURE_2D, pressure.read[0]);
                blit(pressure.write[1]); pressure.swap();
            }

            // Gradient subtract
            gradProg.bind();
            gl.uniform2f(gradProg.uniforms.texelSize, 1 / textureWidth, 1 / textureHeight);
            gl.uniform1i(gradProg.uniforms.uPressure, pressure.read[2]);
            gl.uniform1i(gradProg.uniforms.uVelocity, velocity.read[2]);
            blit(velocity.write[1]); velocity.swap();

            // Display
            gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
            displayProg.bind();
            gl.uniform1i(displayProg.uniforms.uTexture, density.read[2]);
            blit(null);
        }

        update();

        // ─── Events ─────────────────────────────────────────────────────────────────
        // Use window events so it works even when hovering over UI elements
        const onMouseMove = (e: MouseEvent) => {
            const rect = canvas!.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            pointers[0].moved = true;
            pointers[0].dx = (x - pointers[0].x) * 10.0;
            pointers[0].dy = (y - pointers[0].y) * 10.0;
            pointers[0].x = x;
            pointers[0].y = y;
            pointers[0].down = true;
            // Rich color trail — cycle through blue/cyan/teal/indigo
            pointers[0].color = [
                Math.random() * 0.3 + 0.1,   // low red
                Math.random() * 0.5 + 0.3,   // mid green
                Math.random() * 0.5 + 0.7,   // high blue
            ];
        };

        const onTouchMove = (e: TouchEvent) => {
            const rect = canvas!.getBoundingClientRect();
            for (let i = 0; i < e.targetTouches.length; i++) {
                const t = e.targetTouches[i];
                const x = t.pageX - rect.left;
                const y = t.pageY - rect.top;
                if (!pointers[i]) pointers.push({ x, y, dx: 0, dy: 0, down: false, moved: false, color: [0.2, 0.6, 1.0] });
                pointers[i].moved = true;
                pointers[i].dx = (x - pointers[i].x) * 10.0;
                pointers[i].dy = (y - pointers[i].y) * 10.0;
                pointers[i].x = x;
                pointers[i].y = y;
                pointers[i].color = [Math.random() * 0.3 + 0.1, Math.random() * 0.5 + 0.3, Math.random() * 0.5 + 0.7];
            }
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("touchmove", onTouchMove, { passive: true });

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("touchmove", onTouchMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 1,          // above background, below UI
                pointerEvents: "none",
                mixBlendMode: "screen",  // blend fluid colours beautifully over dark bg
            }}
        />
    );
}