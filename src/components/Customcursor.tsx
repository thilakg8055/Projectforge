"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const trailRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let mouseX = 0, mouseY = 0;
        let trailX = 0, trailY = 0;

        const onMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`;
            }
            if (glowRef.current) {
                glowRef.current.style.transform = `translate(${mouseX - 20}px, ${mouseY - 20}px)`;
            }
        };

        const animate = () => {
            trailX += (mouseX - trailX) * 0.12;
            trailY += (mouseY - trailY) * 0.12;
            if (trailRef.current) {
                trailRef.current.style.transform = `translate(${trailX - 16}px, ${trailY - 16}px)`;
            }
            requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", onMove);
        animate();

        // Hide default cursor
        document.body.style.cursor = "none";

        // Hover effects
        const addHover = () => {
            cursorRef.current?.classList.add("scale-150");
            glowRef.current?.classList.add("opacity-80");
        };
        const removeHover = () => {
            cursorRef.current?.classList.remove("scale-150");
            glowRef.current?.classList.remove("opacity-80");
        };

        const interactables = document.querySelectorAll("a, button, [role=button]");
        interactables.forEach(el => {
            el.addEventListener("mouseenter", addHover);
            el.addEventListener("mouseleave", removeHover);
        });

        return () => {
            window.removeEventListener("mousemove", onMove);
            document.body.style.cursor = "auto";
        };
    }, []);

    return (
        <>
            {/* Outer glow */}
            <div
                ref={glowRef}
                className="pointer-events-none fixed top-0 left-0 z-[9998] w-10 h-10 rounded-full opacity-40 transition-opacity duration-300"
                style={{
                    background: "radial-gradient(circle, rgba(34,211,238,0.6) 0%, rgba(16,185,129,0.3) 50%, transparent 70%)",
                    filter: "blur(4px)",
                    willChange: "transform",
                }}
            />
            {/* Trail ring */}
            <div
                ref={trailRef}
                className="pointer-events-none fixed top-0 left-0 z-[9999] w-8 h-8 rounded-full border border-cyan-400/50"
                style={{
                    willChange: "transform",
                    boxShadow: "0 0 10px rgba(34,211,238,0.4)",
                }}
            />
            {/* Core dot */}
            <div
                ref={cursorRef}
                className="pointer-events-none fixed top-0 left-0 z-[10000] w-3 h-3 rounded-full transition-transform duration-100"
                style={{
                    background: "linear-gradient(135deg, #22d3ee, #10b981)",
                    boxShadow: "0 0 8px rgba(34,211,238,0.8), 0 0 20px rgba(16,185,129,0.5)",
                    willChange: "transform",
                }}
            />
        </>
    );
}