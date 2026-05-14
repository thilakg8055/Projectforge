// "use client";

// import { motion } from "framer-motion";

// export default function Navbar() {
//     return (
//         <motion.nav
//             initial={{ y: -50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             className="flex justify-between items-center px-8 py-4 border-b border-white/10"
//         >
//             <h1 className="text-xl font-bold text-white">
//                 ⚙️ ProjectForge
//             </h1>

//             <div className="flex gap-6 items-center text-sm text-gray-300">
//                 <a href="/cse">CSE / AI</a>
//                 <a href="/ece-iot">ECE / IoT</a>
//                 <a href="/robotics">Robotics</a>
//                 <a href="/projects">Projects</a>
//                 <a href="/contact">Contact</a>

//                 <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg">
//                     Get Quote
//                 </button>
//             </div>
//         </motion.nav>
//     );
// }

// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import Link from "next/link";
// import { useState } from "react";

// const links = [
//     { href: "/cse", label: "CSE / AI" },
//     { href: "/ece-iot", label: "ECE / IoT" },
//     { href: "/robotics", label: "Robotics" },
//     { href: "/projects", label: "Projects" },
//     { href: "/contact", label: "Contact" },
// ];

// export default function Navbar() {
//     const [hovered, setHovered] = useState<string | null>(null);
//     const { scrollY } = useScroll();
//     const bgOpacity = useTransform(scrollY, [0, 80], [0, 0.85]);
//     const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);

//     return (
//         <motion.nav
//             initial={{ y: -60, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//             className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
//             style={{}}
//         >
//             <motion.div
//                 className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3 rounded-2xl"
//                 style={{
//                     backgroundColor: `rgba(2, 11, 26, ${bgOpacity.get()})`,
//                     borderColor: `rgba(34, 211, 238, ${borderOpacity.get() * 0.15})`,
//                     borderWidth: 1,
//                     borderStyle: "solid",
//                     backdropFilter: "blur(20px)",
//                     boxShadow: "0 0 40px rgba(34,211,238,0.04)",
//                 }}
//             >
//                 {/* Logo */}
//                 <Link href="/">
//                     <motion.div
//                         whileHover={{ scale: 1.04 }}
//                         className="flex items-center gap-2 cursor-pointer"
//                     >
//                         <div
//                             className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black"
//                             style={{
//                                 background: "linear-gradient(135deg, #06b6d4, #10b981)",
//                                 boxShadow: "0 0 20px rgba(6,182,212,0.5)",
//                             }}
//                         >
//                             ⚙
//                         </div>
//                         <span
//                             className="text-lg font-bold tracking-tight"
//                             style={{
//                                 background: "linear-gradient(90deg, #22d3ee, #10b981)",
//                                 WebkitBackgroundClip: "text",
//                                 WebkitTextFillColor: "transparent",
//                             }}
//                         >
//                             ProjectForge
//                         </span>
//                     </motion.div>
//                 </Link>

//                 {/* Links */}
//                 <div className="hidden md:flex gap-1 items-center">
//                     {links.map((l) => (
//                         <Link key={l.href} href={l.href}>
//                             <motion.div
//                                 onHoverStart={() => setHovered(l.href)}
//                                 onHoverEnd={() => setHovered(null)}
//                                 className="relative px-4 py-2 rounded-xl text-sm font-medium transition-colors"
//                                 style={{
//                                     color: hovered === l.href ? "#22d3ee" : "rgba(148,163,184,0.9)",
//                                 }}
//                             >
//                                 {hovered === l.href && (
//                                     <motion.div
//                                         layoutId="nav-pill"
//                                         className="absolute inset-0 rounded-xl"
//                                         style={{
//                                             background: "rgba(34,211,238,0.08)",
//                                             border: "1px solid rgba(34,211,238,0.15)",
//                                         }}
//                                         transition={{ type: "spring", duration: 0.35 }}
//                                     />
//                                 )}
//                                 <span className="relative z-10">{l.label}</span>
//                             </motion.div>
//                         </Link>
//                     ))}

//                     <Link href="/contact">
//                         <motion.button
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.97 }}
//                             className="ml-3 px-5 py-2.5 rounded-xl text-sm font-semibold text-black"
//                             style={{
//                                 background: "linear-gradient(135deg, #22d3ee, #10b981)",
//                                 boxShadow: "0 0 20px rgba(34,211,238,0.35), 0 0 40px rgba(16,185,129,0.15)",
//                             }}
//                         >
//                             Get Quote →
//                         </motion.button>
//                     </Link>
//                 </div>
//             </motion.div>
//         </motion.nav>
//     );
// }



"use client";

import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const links = [
    { href: "/", label: "Home" },
    { href: "/cse", label: "CSE / AI" },
    { href: "/ece-iot", label: "ECE / IoT" },
    { href: "/ds-ml", label: "DS / ML" },
    { href: "/robotics", label: "Robotics" },
    { href: "/projects", label: "Projects" },
    // { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [hovered, setHovered] = useState<string | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    const { scrollY } = useScroll();

    // ── These are motion values — they update reactively without re-render ──
    const bgAlpha = useTransform(scrollY, [0, 80], [0, 0.88]);
    const borderAlpha = useTransform(scrollY, [0, 80], [0, 0.18]);
    const shadowAlpha = useTransform(scrollY, [0, 80], [0, 0.12]);
    const py = useTransform(scrollY, [0, 80], [20, 12]);

    // Build CSS strings from motion values using useMotionTemplate
    const bgColor = useMotionTemplate`rgba(2,11,26,${bgAlpha})`;
    const borderColor = useMotionTemplate`rgba(34,211,238,${borderAlpha})`;
    const boxShadow = useMotionTemplate`0 0 60px rgba(34,211,238,${shadowAlpha}), 0 1px 0 rgba(34,211,238,${borderAlpha})`;

    return (
        <motion.nav
            initial={{ y: -64, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            style={{
                position: "fixed", top: 0, left: 0, right: 0,
                zIndex: 1000,
                paddingLeft: "5%", paddingRight: "5%",
                paddingTop: py, paddingBottom: py,
            }}
        >
            <motion.div
                style={{
                    maxWidth: 1280, margin: "0 auto",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "10px 20px",
                    borderRadius: 16,
                    backgroundColor: bgColor,
                    border: "1px solid",
                    borderColor,
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    boxShadow,
                }}
            >
                {/* ── Logo ─────────────────────────────────────────────────────── */}
                <Link href="/" style={{ textDecoration: "none" }}>
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}
                    >
                        <div style={{
                            width: 32, height: 32, borderRadius: 10,
                            background: "linear-gradient(135deg,#06b6d4,#10b981)",
                            boxShadow: "0 0 18px rgba(6,182,212,0.55)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontSize: 15, flexShrink: 0,
                        }}>⚙</div>

                        <span style={{
                            fontSize: 16, fontWeight: 800, letterSpacing: "-0.4px",
                            background: "linear-gradient(90deg,#22d3ee,#10b981)",
                            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                            fontFamily: "var(--font-geist-sans)",
                        }}>ProjectForge</span>
                    </motion.div>
                </Link>

                {/* ── Desktop links ─────────────────────────────────────────────── */}
                <div style={{
                    display: "flex", alignItems: "center", gap: 2,
                }} className="nav-desktop">
                    {links.map((l) => (
                        <Link key={l.href} href={l.href} style={{ textDecoration: "none" }}>
                            <motion.div
                                onHoverStart={() => setHovered(l.href)}
                                onHoverEnd={() => setHovered(null)}
                                style={{
                                    position: "relative",
                                    padding: "8px 14px", borderRadius: 10,
                                    fontSize: 13, fontWeight: 500,
                                    color: hovered === l.href ? "#22d3ee" : "rgba(148,163,184,0.85)",
                                    transition: "color 0.18s",
                                    cursor: "pointer",
                                    fontFamily: "var(--font-geist-sans)",
                                }}
                            >
                                {/* Sliding pill highlight */}
                                {hovered === l.href && (
                                    <motion.div
                                        layoutId="nav-pill"
                                        style={{
                                            position: "absolute", inset: 0, borderRadius: 10,
                                            background: "rgba(34,211,238,0.07)",
                                            border: "1px solid rgba(34,211,238,0.14)",
                                        }}
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <span style={{ position: "relative", zIndex: 1 }}>{l.label}</span>
                            </motion.div>
                        </Link>
                    ))}

                    {/* CTA */}
                    <Link href="/contact" style={{ textDecoration: "none", marginLeft: 8 }}>
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 32px rgba(34,211,238,0.55), 0 0 64px rgba(16,185,129,0.25)" }}
                            whileTap={{ scale: 0.96 }}
                            style={{
                                padding: "9px 20px", borderRadius: 10,
                                background: "linear-gradient(135deg,#06b6d4,#10b981)",
                                border: "none", cursor: "pointer",
                                color: "#000", fontSize: 13, fontWeight: 700,
                                fontFamily: "var(--font-geist-sans)",
                                boxShadow: "0 0 20px rgba(34,211,238,0.35)",
                                letterSpacing: "0.1px",
                            }}
                        >
                            Get Quote →
                        </motion.button>
                    </Link>
                </div>

                {/* ── Mobile hamburger ──────────────────────────────────────────── */}
                <motion.button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    whileTap={{ scale: 0.92 }}
                    style={{
                        display: "none", flexDirection: "column", gap: 5,
                        background: "none", border: "none", cursor: "pointer",
                        padding: 6,
                    }}
                    className="nav-mobile-btn"
                    aria-label="Toggle menu"
                >
                    {[0, 1, 2].map((i) => (
                        <motion.span
                            key={i}
                            animate={mobileOpen
                                ? i === 1 ? { opacity: 0, scaleX: 0 }
                                    : i === 0 ? { rotate: 45, y: 9 }
                                        : { rotate: -45, y: -9 }
                                : { rotate: 0, y: 0, opacity: 1, scaleX: 1 }
                            }
                            style={{
                                display: "block", width: 22, height: 2, borderRadius: 2,
                                background: "rgba(34,211,238,0.8)",
                                transformOrigin: "center",
                            }}
                        />
                    ))}
                </motion.button>
            </motion.div>

            {/* ── Mobile drawer ────────────────────────────────────────────────── */}
            <motion.div
                initial={false}
                animate={mobileOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    overflow: "hidden", maxWidth: 1280, margin: "8px auto 0",
                    borderRadius: 14,
                    background: "rgba(2,11,26,0.92)",
                    border: "1px solid rgba(34,211,238,0.12)",
                    backdropFilter: "blur(24px)",
                }}
                className="nav-mobile-drawer"
            >
                <div style={{ padding: "12px 8px" }}>
                    {links.map((l, i) => (
                        <motion.div
                            key={l.href}
                            initial={{ opacity: 0, x: -12 }}
                            animate={mobileOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
                            transition={{ delay: i * 0.05 }}
                        >
                            <Link
                                href={l.href}
                                onClick={() => setMobileOpen(false)}
                                style={{
                                    display: "block", padding: "12px 16px", borderRadius: 10,
                                    fontSize: 14, fontWeight: 500,
                                    color: "rgba(148,163,184,0.9)",
                                    textDecoration: "none",
                                    fontFamily: "var(--font-geist-sans)",
                                    transition: "background 0.15s, color 0.15s",
                                }}
                                onMouseEnter={e => { (e.target as HTMLElement).style.background = "rgba(34,211,238,0.07)"; (e.target as HTMLElement).style.color = "#22d3ee"; }}
                                onMouseLeave={e => { (e.target as HTMLElement).style.background = "transparent"; (e.target as HTMLElement).style.color = "rgba(148,163,184,0.9)"; }}
                            >
                                {l.label}
                            </Link>
                        </motion.div>
                    ))}
                    <div style={{ padding: "8px 8px 4px" }}>
                        <Link href="/contact" style={{ textDecoration: "none" }} onClick={() => setMobileOpen(false)}>
                            <button style={{
                                width: "100%", padding: "12px",
                                borderRadius: 10, border: "none",
                                background: "linear-gradient(135deg,#06b6d4,#10b981)",
                                color: "#000", fontSize: 14, fontWeight: 700,
                                cursor: "pointer", fontFamily: "var(--font-geist-sans)",
                            }}>Get Quote →</button>
                        </Link>
                    </div>
                </div>
            </motion.div>

            {/* Responsive rules */}
            <style>{`
        @media (min-width: 768px) {
          .nav-desktop     { display: flex !important; }
          .nav-mobile-btn  { display: none !important; }
          .nav-mobile-drawer { display: none !important; }
        }
        @media (max-width: 767px) {
          .nav-desktop     { display: none !important; }
          .nav-mobile-btn  { display: flex !important; }
          .nav-mobile-drawer { display: block !important; }
        }
      `}</style>
        </motion.nav>
    );
}