"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const mount = mountRef.current!;
        const W = window.innerWidth, H = window.innerHeight;

        // Scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(70, W / H, 0.1, 1000);
        camera.position.z = 30;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(W, H);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);
        mount.appendChild(renderer.domElement);

        // ── PARTICLE FIELD ──────────────────────────────────────────────
        const particleCount = 1800;
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const sizes = new Float32Array(particleCount);

        const cyanColor = new THREE.Color("#22d3ee");
        const greenColor = new THREE.Color("#10b981");
        const blueColor = new THREE.Color("#3b82f6");

        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 120;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 60;

            const pick = Math.random();
            const c = pick < 0.33 ? cyanColor : pick < 0.66 ? greenColor : blueColor;
            colors[i * 3] = c.r + (Math.random() - 0.5) * 0.2;
            colors[i * 3 + 1] = c.g + (Math.random() - 0.5) * 0.2;
            colors[i * 3 + 2] = c.b + (Math.random() - 0.5) * 0.2;
            sizes[i] = Math.random() * 2.5 + 0.5;
        }

        const pgeo = new THREE.BufferGeometry();
        pgeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        pgeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
        pgeo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

        const pmat = new THREE.PointsMaterial({
            size: 0.3,
            vertexColors: true,
            transparent: true,
            opacity: 0.75,
            sizeAttenuation: true,
        });
        const particles = new THREE.Points(pgeo, pmat);
        scene.add(particles);

        // ── GLOWING ORBS ────────────────────────────────────────────────
        const orbs: THREE.Mesh[] = [];
        const orbData = [
            { color: 0x06b6d4, x: -15, y: 8, size: 3.5 },
            { color: 0x10b981, x: 18, y: -6, size: 2.8 },
            { color: 0x3b82f6, x: 5, y: -14, size: 4 },
            { color: 0x22d3ee, x: -20, y: -10, size: 2 },
            { color: 0x34d399, x: 22, y: 12, size: 2.4 },
        ];

        orbData.forEach(({ color, x, y, size }) => {
            const geo = new THREE.SphereGeometry(size, 32, 32);
            const mat = new THREE.MeshBasicMaterial({
                color,
                transparent: true,
                opacity: 0.06,
            });
            const mesh = new THREE.Mesh(geo, mat);
            mesh.position.set(x, y, -10);
            scene.add(mesh);
            orbs.push(mesh);

            // Add wireframe ring
            const ringGeo = new THREE.TorusGeometry(size + 0.5, 0.05, 8, 80);
            const ringMat = new THREE.MeshBasicMaterial({
                color,
                transparent: true,
                opacity: 0.15,
            });
            const ring = new THREE.Mesh(ringGeo, ringMat);
            ring.position.set(x, y, -10);
            ring.rotation.x = Math.PI / 4;
            scene.add(ring);
            orbs.push(ring);
        });

        // ── CONNECTING LINES (network mesh) ─────────────────────────────
        const linePositions: number[] = [];
        const nodeCount = 40;
        const nodes: THREE.Vector3[] = [];
        for (let i = 0; i < nodeCount; i++) {
            nodes.push(new THREE.Vector3(
                (Math.random() - 0.5) * 80,
                (Math.random() - 0.5) * 60,
                (Math.random() - 0.5) * 30 - 15
            ));
        }
        for (let i = 0; i < nodeCount; i++) {
            for (let j = i + 1; j < nodeCount; j++) {
                if (nodes[i].distanceTo(nodes[j]) < 18) {
                    linePositions.push(nodes[i].x, nodes[i].y, nodes[i].z);
                    linePositions.push(nodes[j].x, nodes[j].y, nodes[j].z);
                }
            }
        }
        const lgeo = new THREE.BufferGeometry();
        lgeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(linePositions), 3));
        const lmat = new THREE.LineBasicMaterial({
            color: 0x06b6d4,
            transparent: true,
            opacity: 0.08,
        });
        scene.add(new THREE.LineSegments(lgeo, lmat));

        // ── MOUSE PARALLAX ──────────────────────────────────────────────
        let mx = 0, my = 0;
        const onMouse = (e: MouseEvent) => {
            mx = (e.clientX / window.innerWidth - 0.5) * 2;
            my = -(e.clientY / window.innerHeight - 0.5) * 2;
        };
        window.addEventListener("mousemove", onMouse);

        // ── RESIZE ──────────────────────────────────────────────────────
        const onResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener("resize", onResize);

        // ── ANIMATION LOOP ──────────────────────────────────────────────
        let frameId: number;
        let t = 0;
        const animate = () => {
            frameId = requestAnimationFrame(animate);
            t += 0.003;

            particles.rotation.y += 0.0008;
            particles.rotation.x += 0.0003;

            camera.position.x += (mx * 3 - camera.position.x) * 0.03;
            camera.position.y += (my * 2 - camera.position.y) * 0.03;
            camera.lookAt(scene.position);

            orbs.forEach((orb, i) => {
                const phase = i * 0.8;
                orb.position.y += Math.sin(t + phase) * 0.008;
                orb.rotation.z += 0.004;
            });

            renderer.render(scene, camera);
        };
        animate();

        return () => {
            cancelAnimationFrame(frameId);
            window.removeEventListener("mousemove", onMouse);
            window.removeEventListener("resize", onResize);
            renderer.dispose();
            if (mount.contains(renderer.domElement)) {
                mount.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div
            ref={mountRef}
            className="fixed inset-0 z-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 20% 50%, #0a1628 0%, #020b0b 50%, #020812 100%)" }}
        />
    );
}