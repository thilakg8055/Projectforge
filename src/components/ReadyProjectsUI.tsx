// "use client";

// import { motion } from "framer-motion";

// export default function ReadyProjectsUI({ projects }: any) {
//     return (
//         <section className="px-8 py-20">
//             <h2 className="text-4xl font-bold mb-2">Ready to deliver</h2>

//             <p className="text-gray-400 mb-10">
//                 Every project includes code, documentation, PPT and setup guide.
//             </p>

//             <div className="grid md:grid-cols-3 gap-6">
//                 {projects.map((p: any, i: number) => (
//                     <motion.div
//                         key={i}
//                         whileHover={{ scale: 1.03 }}
//                         className="bg-white/5 border border-white/10 rounded-xl p-6"
//                     >
//                         <h3 className="text-xl mb-2">{p.title}</h3>

//                         {/* OPTIONAL TECH */}
//                         {p.tech_stack && (
//                             <div className="flex flex-wrap gap-2 text-xs text-gray-400 mb-4">
//                                 {p.tech_stack.map((t: string, i: number) => (
//                                     <span key={i} className="bg-white/10 px-2 py-1 rounded">
//                                         {t}
//                                     </span>
//                                 ))}
//                             </div>
//                         )}

//                         <p className="text-orange-500 mb-4">{p.price}</p>

//                         <button className="bg-orange-500 px-4 py-2 rounded-lg w-full">
//                             Customize →
//                         </button>
//                     </motion.div>
//                 ))}
//             </div>
//         </section>
//     );
// }


// "use client";

// import { motion } from "framer-motion";

// export default function ReadyProjectsUI({ projects }: any) {
//     return (
//         <section className="px-8 py-20">
//             <h2 className="text-4xl font-bold mb-2">Ready to deliver</h2>

//             <p className="text-gray-400 mb-10">
//                 Every project includes code, documentation, PPT and setup guide.
//             </p>

//             <div className="grid md:grid-cols-3 gap-6">
//                 {projects.map((p: any, i: number) => (
//                     <motion.div
//                         key={i}
//                         whileHover={{ scale: 1.03 }}
//                         className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
//                     >

//                         {/* 🔥 IMAGE FIX */}
//                         {p.image_urls?.length > 0 && (
//                             <img
//                                 src={p.image_urls[0]}
//                                 alt={p.title}
//                                 className="w-full h-40 object-cover"
//                             />
//                         )}

//                         <div className="p-6">
//                             <h3 className="text-xl mb-2">{p.title}</h3>

//                             {/* TECH */}
//                             {p.tech_stack && (
//                                 <div className="flex flex-wrap gap-2 text-xs text-gray-400 mb-4">
//                                     {p.tech_stack.map((t: string, i: number) => (
//                                         <span key={i} className="bg-white/10 px-2 py-1 rounded">
//                                             {t}
//                                         </span>
//                                     ))}
//                                 </div>
//                             )}

//                             <p className="text-orange-500 mb-4">{p.price}</p>

//                             <button className="bg-orange-500 px-4 py-2 rounded-lg w-full">
//                                 Customize →
//                             </button>
//                         </div>

//                     </motion.div>
//                 ))}
//             </div>
//         </section>
//     );
// }



// "use client";

// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import Link from "next/link";

// export default function ReadyProjectsUI({ projects }: any) {
//     const ref = useRef(null);
//     const inView = useInView(ref, { once: true, margin: "-80px" });

//     return (
//         <section ref={ref} className="relative z-10 px-6 py-32 max-w-7xl mx-auto">
//             {/* Ambient */}
//             <div
//                 className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
//                 style={{
//                     background: "radial-gradient(ellipse, rgba(34,211,238,0.06) 0%, transparent 70%)",
//                     filter: "blur(40px)",
//                 }}
//             />

//             <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 className="text-center mb-16"
//             >
//                 <span
//                     className="inline-block text-xs font-semibold tracking-[0.25em] uppercase px-4 py-2 rounded-full mb-4"
//                     style={{
//                         background: "rgba(16,185,129,0.08)",
//                         border: "1px solid rgba(16,185,129,0.2)",
//                         color: "#10b981",
//                     }}
//                 >
//                     Ready to Deliver
//                 </span>
//                 <h2
//                     className="text-5xl font-black mt-4 mb-4"
//                     style={{ fontFamily: "'italic'" }}
//                 >
//                     <span className="text-white">Shipped </span>
//                     <span
//                         style={{
//                             background: "linear-gradient(135deg, #10b981, #22d3ee)",
//                             WebkitBackgroundClip: "text",
//                             WebkitTextFillColor: "transparent",
//                         }}
//                     >
//                         in 24–72h
//                     </span>
//                 </h2>
//                 <p className="text-slate-400 max-w-md mx-auto">
//                     Every project includes code, documentation, PPT and setup guide.
//                 </p>
//             </motion.div>

//             <div className="grid md:grid-cols-3 gap-6">
//                 {projects.map((p: any, i: number) => (
//                     <motion.div
//                         key={i}
//                         initial={{ opacity: 0, y: 40 }}
//                         animate={inView ? { opacity: 1, y: 0 } : {}}
//                         transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//                         whileHover={{ y: -8, scale: 1.01 }}
//                         className="group relative overflow-hidden rounded-3xl"
//                         style={{
//                             background: "rgba(6,11,26,0.7)",
//                             border: "1px solid rgba(34,211,238,0.08)",
//                             backdropFilter: "blur(20px)",
//                             boxShadow: "0 4px 40px rgba(0,0,0,0.4)",
//                         }}
//                     >
//                         {/* Hover border glow */}
//                         <div
//                             className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
//                             style={{
//                                 boxShadow: "inset 0 0 0 1px rgba(34,211,238,0.2), 0 0 40px rgba(34,211,238,0.06)",
//                             }}
//                         />

//                         {/* Image */}
//                         {p.image_urls?.length > 0 ? (
//                             <div className="relative overflow-hidden h-48">
//                                 <img
//                                     src={p.image_urls[0]}
//                                     alt={p.title}
//                                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                                 />
//                                 <div
//                                     className="absolute inset-0"
//                                     style={{
//                                         background: "linear-gradient(to bottom, transparent 40%, rgba(6,11,26,0.9) 100%)",
//                                     }}
//                                 />
//                             </div>
//                         ) : (
//                             <div
//                                 className="h-48 flex items-center justify-center text-5xl"
//                                 style={{
//                                     background: "linear-gradient(135deg, rgba(34,211,238,0.06), rgba(16,185,129,0.04))",
//                                 }}
//                             >
//                                 🧠
//                             </div>
//                         )}

//                         <div className="p-6">
//                             <h3 className="text-lg font-bold text-white mb-3">{p.title}</h3>

//                             {/* Tech stack pills */}
//                             {p.tech_stack && (
//                                 <div className="flex flex-wrap gap-2 mb-4">
//                                     {p.tech_stack.map((t: string, j: number) => (
//                                         <span
//                                             key={j}
//                                             className="text-xs px-2.5 py-1 rounded-lg font-medium"
//                                             style={{
//                                                 background: "rgba(34,211,238,0.08)",
//                                                 border: "1px solid rgba(34,211,238,0.12)",
//                                                 color: "#94a3b8",
//                                             }}
//                                         >
//                                             {t}
//                                         </span>
//                                     ))}
//                                 </div>
//                             )}

//                             {/* Price */}
//                             <div className="flex items-center justify-between mb-5">
//                                 <span
//                                     className="text-xl font-black"
//                                     style={{
//                                         background: "linear-gradient(135deg, #22d3ee, #10b981)",
//                                         WebkitBackgroundClip: "text",
//                                         WebkitTextFillColor: "transparent",
//                                     }}
//                                 >
//                                     {p.price}
//                                 </span>
//                                 {p.level && (
//                                     <span
//                                         className="text-xs px-2.5 py-1 rounded-full capitalize"
//                                         style={{
//                                             background: "rgba(16,185,129,0.1)",
//                                             color: "#34d399",
//                                             border: "1px solid rgba(16,185,129,0.15)",
//                                         }}
//                                     >
//                                         {p.level}
//                                     </span>
//                                 )}
//                             </div>

//                             {/* Includes */}
//                             <div className="flex gap-3 mb-5 text-xs text-slate-500">
//                                 {["Code", "PPT", "Report", "Setup"].map((inc) => (
//                                     <span key={inc} className="flex items-center gap-1">
//                                         <span className="text-emerald-400">✓</span> {inc}
//                                     </span>
//                                 ))}
//                             </div>

//                             <Link href={`/projects/${p.id}`}>
//                                 <motion.button
//                                     whileHover={{ scale: 1.02 }}
//                                     whileTap={{ scale: 0.98 }}
//                                     className="w-full py-3 rounded-xl font-semibold text-sm text-black"
//                                     style={{
//                                         background: "linear-gradient(135deg, #22d3ee, #10b981)",
//                                         boxShadow: "0 0 20px rgba(34,211,238,0.2)",
//                                     }}
//                                 >
//                                     Customize →
//                                 </motion.button>
//                             </Link>
//                         </div>
//                     </motion.div>
//                 ))}
//             </div>

//             {/* View all */}
//             <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={inView ? { opacity: 1 } : {}}
//                 transition={{ delay: 0.5 }}
//                 className="text-center mt-12"
//             >
//                 <Link href="/projects">
//                     <motion.button
//                         whileHover={{ scale: 1.03 }}
//                         whileTap={{ scale: 0.97 }}
//                         className="px-10 py-4 rounded-2xl font-semibold text-sm"
//                         style={{
//                             background: "rgba(34,211,238,0.06)",
//                             border: "1px solid rgba(34,211,238,0.2)",
//                             color: "#22d3ee",
//                         }}
//                     >
//                         View All Projects →
//                     </motion.button>
//                 </Link>
//             </motion.div>
//         </section>
//     );
// }


"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

const INCLUDES = ["Code", "PPT", "Setup"];

const LEVEL_STYLE: Record<string, { bg: string; color: string; border: string }> = {
    beginner: { bg: "rgba(16,185,129,0.1)", color: "#34d399", border: "rgba(16,185,129,0.2)" },
    intermediate: { bg: "rgba(251,191,36,0.1)", color: "#fbbf24", border: "rgba(251,191,36,0.2)" },
    advanced: { bg: "rgba(239,68,68,0.1)", color: "#f87171", border: "rgba(239,68,68,0.2)" },
};

// Fallback icons per card slot
const FALLBACK_ICONS = ["🧠", "📡", "💻", "🤖", "📊", "⚙️"];

function ProjectCard({ p, i }: { p: any; i: number }) {
    const [hov, setHov] = useState(false);
    const lvl = LEVEL_STYLE[p.level] ?? LEVEL_STYLE.beginner;

    return (
        <motion.div
            onHoverStart={() => setHov(true)}
            onHoverEnd={() => setHov(false)}
            whileHover={{ y: -7 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}

            style={{
                position: "relative", overflow: "hidden",
                borderRadius: 22,
                background: hov ? "rgba(8,16,36,0.9)" : "rgba(6,11,26,0.7)",
                border: `1px solid ${hov ? "rgba(34,211,238,0.2)" : "rgba(255,255,255,0.07)"}`,
                backdropFilter: "blur(20px)",
                boxShadow: hov
                    ? "0 24px 60px rgba(34,211,238,0.09), 0 0 0 1px rgba(34,211,238,0.12)"
                    : "0 4px 32px rgba(0,0,0,0.35)",
                transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
                display: "flex", flexDirection: "column",
                minHeight: 520,
                height: 520,
                width: "100%",
            }}
        >
            {/* Top glow on hover */}
            <motion.div
                animate={{ opacity: hov ? 1 : 0 }}
                transition={{ duration: 0.35 }}
                style={{
                    position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
                    width: "80%", height: 1,
                    background: "linear-gradient(90deg,transparent,rgba(34,211,238,0.5),transparent)",
                    pointerEvents: "none",
                }}
            />

            {/* Image / placeholder */}
            {p.image_urls?.length > 0 ? (
                <div style={{ height: 220, overflow: "hidden", position: "relative", flexShrink: 0 }}>
                    <motion.img
                        animate={{ scale: hov ? 1.06 : 1 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        src={p.image_urls[0]}
                        alt={p.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                    {/* Gradient overlay */}
                    <div style={{
                        position: "absolute", inset: 0,
                        background: "linear-gradient(to bottom, transparent 35%, rgba(6,11,26,0.92) 100%)",
                    }} />
                    {/* Level badge over image */}
                    {p.level && (
                        <span style={{
                            position: "absolute", top: 12, right: 12,
                            fontSize: 10, padding: "4px 10px", borderRadius: 100,
                            background: lvl.bg, color: lvl.color,
                            border: `1px solid ${lvl.border}`,
                            fontFamily: "var(--font-geist-sans)", fontWeight: 600,
                            textTransform: "capitalize", letterSpacing: "0.3px",
                        }}>{p.level}</span>
                    )}
                </div>
            ) : (
                <div style={{
                    height: 160, flexShrink: 0,
                    background: "linear-gradient(135deg,rgba(34,211,238,0.05),rgba(16,185,129,0.04))",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 44, position: "relative",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}>
                    {FALLBACK_ICONS[i % FALLBACK_ICONS.length]}
                    {p.level && (
                        <span style={{
                            position: "absolute", top: 12, right: 12,
                            fontSize: 10, padding: "4px 10px", borderRadius: 100,
                            background: lvl.bg, color: lvl.color,
                            border: `1px solid ${lvl.border}`,
                            fontFamily: "var(--font-geist-sans)", fontWeight: 600,
                            textTransform: "capitalize",
                        }}>{p.level}</span>
                    )}
                </div>
            )}

            {/* Body */}
            <div style={{ padding: "20px 22px 22px", display: "flex", flexDirection: "column", flex: 1 }}>

                {/* Title */}
                <h3 style={{
                    fontSize: 16, fontWeight: 800, letterSpacing: "-0.3px", lineHeight: 1.3,
                    color: hov ? "#fff" : "rgba(255,255,255,0.88)",
                    fontFamily: "var(--font-geist-sans)",
                    marginBottom: 12, transition: "color 0.2s",
                }}>{p.title}</h3>

                {/* Tech stack */}
                {p.tech_stack?.length > 0 && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                        {p.tech_stack.slice(0, 4).map((t: string, j: number) => (
                            <span key={j} style={{
                                fontSize: 10, padding: "3px 9px", borderRadius: 7,
                                background: "rgba(255,255,255,0.05)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                color: "rgba(255,255,255,0.38)",
                                fontFamily: "var(--font-geist-mono)",
                                letterSpacing: "0.2px",
                            }}>{t}</span>
                        ))}
                    </div>
                )}

                {/* Includes row */}
                <div style={{
                    display: "flex", gap: 14, marginBottom: 18,
                    paddingBottom: 18,
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}>
                    {INCLUDES.map(inc => (
                        <span key={inc} style={{
                            fontSize: 11, color: "rgba(255,255,255,0.3)",
                            fontFamily: "var(--font-geist-sans)",
                            display: "flex", alignItems: "center", gap: 4,
                        }}>
                            <span style={{ color: "#34d399", fontSize: 10 }}>✓</span>{inc}
                        </span>
                    ))}
                </div>

                {/* Price + CTA — pinned to bottom */}
                <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                    <div>
                        <span style={{
                            fontSize: 22, fontWeight: 900, lineHeight: 1,
                            background: "linear-gradient(135deg,#22d3ee,#10b981)",
                            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                            fontFamily: "var(--font-geist-sans)",
                            display: "block",
                            filter: hov ? "drop-shadow(0 0 10px rgba(34,211,238,0.5))" : "none",
                            transition: "filter 0.3s",
                        }}>{p.price}</span>
                        <span style={{ fontSize: 10, color: "rgba(255,255,255,0.25)", fontFamily: "var(--font-geist-sans)" }}>
                            one-time
                        </span>
                    </div>

                    <Link href={`/contact`} style={{ textDecoration: "none", flex: "0 0 auto" }}>
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 28px rgba(34,211,238,0.45)" }}
                            whileTap={{ scale: 0.97 }}
                            style={{
                                padding: "10px 20px", borderRadius: 11,
                                background: hov
                                    ? "linear-gradient(135deg,#06b6d4,#10b981)"
                                    : "rgba(34,211,238,0.1)",
                                border: `1px solid ${hov ? "transparent" : "rgba(34,211,238,0.18)"}`,
                                color: hov ? "#000" : "#22d3ee",
                                fontSize: 12, fontWeight: 700,
                                fontFamily: "var(--font-geist-sans)",
                                cursor: "pointer",
                                transition: "background 0.25s, color 0.25s, border-color 0.25s",
                                whiteSpace: "nowrap",
                            }}
                        >Customize →</motion.button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}

export default function ReadyProjectsUI({ projects }: { projects: any[] }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section
            ref={ref}
            style={{
                position: "relative", zIndex: 10,
                padding: "100px 5%",
                maxWidth: 1280, margin: "0 auto",
            }}
        >
            {/* ── Divider ──────────────────────────────────────────────────────── */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    height: 1, marginBottom: 72,
                    background: "linear-gradient(90deg,transparent,rgba(16,185,129,0.25),rgba(34,211,238,0.2),transparent)",
                    transformOrigin: "left",
                }}
            />

            {/* ── Header ───────────────────────────────────────────────────────── */}
            <div style={{
                display: "flex", justifyContent: "space-between",
                alignItems: "flex-end", flexWrap: "wrap", gap: 24,
                marginBottom: 48,
            }}>
                <div>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        style={{
                            fontSize: 11, fontWeight: 600, letterSpacing: "2.5px",
                            textTransform: "uppercase", color: "#10b981",
                            marginBottom: 14,
                            fontFamily: "var(--font-geist-mono)",
                        }}
                    >Ready to Deliver</motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 18 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.65, delay: 0.08 }}
                        style={{
                            fontSize: "clamp(32px,4vw,52px)",
                            fontWeight: 900, letterSpacing: "-1.5px", lineHeight: 1.05,
                            fontFamily: "var(--font-geist-sans)", color: "#fff",
                        }}
                    >
                        Shipped in{" "}
                        <span style={{
                            background: "linear-gradient(135deg,#10b981,#22d3ee)",
                            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                        }}>24–72 hours</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.2 }}
                        style={{
                            fontSize: 14, color: "rgba(255,255,255,0.35)",
                            marginTop: 10, fontFamily: "var(--font-geist-sans)",
                        }}
                    >Every project includes code, documentation, PPT and setup guide.</motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.3 }}
                >
                    <Link href="/projects" style={{ textDecoration: "none" }}>
                        <motion.button
                            whileHover={{ scale: 1.04, borderColor: "rgba(34,211,238,0.4)" }}
                            whileTap={{ scale: 0.97 }}
                            style={{
                                padding: "10px 22px", borderRadius: 10,
                                background: "transparent",
                                border: "1px solid rgba(34,211,238,0.2)",
                                color: "rgba(34,211,238,0.75)",
                                fontSize: 13, fontWeight: 600,
                                fontFamily: "var(--font-geist-sans)",
                                cursor: "pointer",
                                transition: "border-color 0.2s",
                            }}
                        >View all projects →</motion.button>
                    </Link>
                </motion.div>
            </div>

            {/* ── Cards ────────────────────────────────────────────────────────── */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(290px,1fr))",
                gap: 18,
                alignItems: "stretch",
            }}>
                {projects.map((p: any, i: number) => (
                    <motion.div
                        key={p.id ?? i}
                        initial={{ opacity: 0, y: 36 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.15 + i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                        style={{ display: "flex" }}
                    >
                        <ProjectCard p={p} i={i} />
                    </motion.div>
                ))}
            </div>

            {/* ── Bottom strip ─────────────────────────────────────────────────── */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.55, duration: 0.6 }}
                style={{
                    marginTop: 52, padding: "20px 28px",
                    borderRadius: 16,
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    display: "flex", alignItems: "center",
                    justifyContent: "space-between", flexWrap: "wrap", gap: 16,
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
                    {[
                        { icon: "⚡", text: "Delivered in 24–72h" },
                        { icon: "🔒", text: "100% original code" },
                        { icon: "📞", text: "Free setup support" },
                    ].map(({ icon, text }) => (
                        <span key={text} style={{
                            fontSize: 13, color: "rgba(255,255,255,0.4)",
                            fontFamily: "var(--font-geist-sans)",
                            display: "flex", alignItems: "center", gap: 7,
                        }}>
                            <span style={{ fontSize: 14 }}>{icon}</span>{text}
                        </span>
                    ))}
                </div>

                <Link href="/contact" style={{ textDecoration: "none" }}>
                    <motion.button
                        whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(16,185,129,0.4)" }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                            padding: "10px 22px", borderRadius: 10,
                            background: "linear-gradient(135deg,#10b981,#06b6d4)",
                            border: "none", color: "#000",
                            fontSize: 13, fontWeight: 700,
                            fontFamily: "var(--font-geist-sans)",
                            cursor: "pointer",
                        }}
                    >Get a custom quote →</motion.button>
                </Link>
            </motion.div>
        </section>
    );
}