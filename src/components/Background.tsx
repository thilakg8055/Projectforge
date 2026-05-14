"use client";

import { useEffect, useRef } from "react";

/**
 * Background
 *
 * A clean, professional deep-space background:
 * - Pure CSS radial gradient base (deep navy → black)
 * - One subtle animated grid (perspective vanishing-point style)
 * - Tiny star-field via canvas (static, <200 dots, no GPU cost)
 * - Zero Three.js — lightweight, no import overhead
 *
 * Mount once in layout.tsx at z-index 0 behind everything.
 */
export default function Background() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            drawStars();
        };

        function drawStars() {
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // 180 stars, varying opacity and size
            for (let i = 0; i < 180; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const r = Math.random() * 1.2 + 0.2;
                const a = Math.random() * 0.55 + 0.08;
                ctx.beginPath();
                ctx.arc(x, y, r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,255,255,${a})`;
                ctx.fill();
            }
        }

        resize();
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, []);

    return (
        <>
            {/* Layer 0 — solid deep-navy gradient */}
            <div
                style={{
                    position: "fixed",
                    inset: 0,
                    zIndex: 0,
                    background:
                        "radial-gradient(ellipse 120% 80% at 50% -10%, #0a1628 0%, #050d1c 45%, #020810 75%, #000000 100%)",
                }}
            />

            {/* Layer 1 — star canvas */}
            <canvas
                ref={canvasRef}
                style={{
                    position: "fixed",
                    inset: 0,
                    zIndex: 0,
                    pointerEvents: "none",
                    opacity: 0.9,
                }}
            />

            {/* Layer 2 — animated perspective grid */}
            <div
                style={{
                    position: "fixed",
                    inset: 0,
                    zIndex: 0,
                    pointerEvents: "none",
                    overflow: "hidden",
                }}
            >
                <svg
                    viewBox="0 0 1440 900"
                    preserveAspectRatio="xMidYMid slice"
                    style={{ width: "100%", height: "100%", opacity: 0.18 }}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        {/* Grid fades out toward top */}
                        <linearGradient id="gridFade" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="black" stopOpacity="1" />
                            <stop offset="40%" stopColor="black" stopOpacity="0" />
                        </linearGradient>
                        <mask id="fade">
                            <rect width="1440" height="900" fill="url(#gridFade)" />
                        </mask>
                    </defs>

                    <g mask="url(#fade)" stroke="#3b82f6" strokeWidth="0.6" fill="none">
                        {/* Horizontal perspective lines — converge to vanishing point at top-center */}
                        {Array.from({ length: 22 }).map((_, i) => {
                            const t = i / 21;
                            const y = 900 - t * t * 820; // quad curve: dense at bottom
                            const xOff = (1 - t) * 600;  // lines narrow toward VP
                            return (
                                <line
                                    key={`h${i}`}
                                    x1={xOff}
                                    y1={y}
                                    x2={1440 - xOff}
                                    y2={y}
                                />
                            );
                        })}

                        {/* Vertical perspective lines — fan from vanishing point */}
                        {Array.from({ length: 18 }).map((_, i) => {
                            const t = (i / 17 - 0.5) * 2; // -1 to 1
                            const xBottom = 720 + t * 680;
                            return (
                                <line
                                    key={`v${i}`}
                                    x1={720}       // vanishing point x
                                    y1={0}         // vanishing point y (above screen)
                                    x2={xBottom}
                                    y2={900}
                                />
                            );
                        })}
                    </g>

                    {/* Subtle horizon glow */}
                    <ellipse
                        cx="720"
                        cy="0"
                        rx="420"
                        ry="80"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="1"
                        opacity="0.25"
                    />
                </svg>

                {/* CSS animated scanline — barely visible, luxury feel */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(59,130,246,0.012) 3px, rgba(59,130,246,0.012) 4px)",
                        pointerEvents: "none",
                    }}
                />
            </div>

            {/* Layer 3 — bottom vignette */}
            <div
                style={{
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "30vh",
                    zIndex: 0,
                    background:
                        "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)",
                    pointerEvents: "none",
                }}
            />
        </>
    );
}