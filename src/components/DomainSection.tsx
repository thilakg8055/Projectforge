// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";

// const domains = [
//     {
//         title: "CSE / AI / Web",
//         desc: "Chatbots, ML models, web apps, resume tools and more.",
//         link: "/cse",
//         projects: "12+ projects ready",
//     },
//     {
//         title: "Data Science / ML",
//         desc: "Prediction models, dashboards, NLP pipelines.",
//         link: "/ds-ml",
//         projects: "8+ projects ready",
//     },
//     {
//         title: "ECE / IoT",
//         desc: "Arduino, NodeMCU, smart devices with components.",
//         link: "/ece-iot",
//         projects: "10+ projects ready",
//     },
//     {
//         title: "Robotics / Embedded",
//         desc: "Line followers, robotic arms, automation systems.",
//         link: "/robotics",
//         projects: "7+ projects ready",
//     },
// ];

// export default function DomainSection() {
//     return (
//         <section className="px-8 py-20">

//             <p className="text-orange-500 text-sm mb-2">BROWSE BY BRANCH</p>

//             <h2 className="text-4xl font-bold mb-4">
//                 Pick your domain
//             </h2>

//             <p className="text-gray-400 mb-10">
//                 Two specialist founders — one from CSE/AI, one from ECE/IoT.
//             </p>

//             <div className="grid md:grid-cols-2 gap-6">
//                 {domains.map((d, i) => (
//                     <motion.div
//                         key={i}
//                         whileHover={{ scale: 1.03 }}
//                         className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-orange-500 transition cursor-pointer"
//                     >
//                         <Link href={d.link}>
//                             <h3 className="text-xl font-semibold mb-2">{d.title}</h3>

//                             <p className="text-gray-400 text-sm mb-4">{d.desc}</p>

//                             <p className="text-orange-500 text-sm">
//                                 {d.projects} →
//                             </p>
//                         </Link>
//                     </motion.div>
//                 ))}
//             </div>
//         </section>
//     );
// }


// "use client";

// import { motion, useInView } from "framer-motion";
// import Link from "next/link";
// import { useRef } from "react";

// const domains = [
//     {
//         title: "CSE / AI / Web",
//         desc: "Chatbots, ML models, web apps, resume tools and more.",
//         link: "/cse",
//         projects: "12+ projects ready",
//         icon: "🧠",
//         color: "#22d3ee",
//         glow: "rgba(34,211,238,0.15)",
//     },
//     {
//         title: "Data Science / ML",
//         desc: "Prediction models, dashboards, NLP pipelines.",
//         link: "/ds-ml",
//         projects: "8+ projects ready",
//         icon: "📊",
//         color: "#10b981",
//         glow: "rgba(16,185,129,0.15)",
//     },
//     {
//         title: "ECE / IoT",
//         desc: "Arduino, NodeMCU, smart devices with components.",
//         link: "/ece-iot",
//         projects: "10+ projects ready",
//         icon: "📡",
//         color: "#3b82f6",
//         glow: "rgba(59,130,246,0.15)",
//     },
//     {
//         title: "Robotics / Embedded",
//         desc: "Line followers, robotic arms, automation systems.",
//         link: "/robotics",
//         projects: "7+ projects ready",
//         icon: "🤖",
//         color: "#a78bfa",
//         glow: "rgba(167,139,250,0.15)",
//     },
// ];

// export default function DomainSection() {
//     const ref = useRef(null);
//     const inView = useInView(ref, { once: true, margin: "-100px" });

//     return (
//         <section ref={ref} className="relative z-10 px-6 py-32 max-w-7xl mx-auto">
//             {/* Section label */}
//             <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.5 }}
//                 className="text-center mb-16"
//             >
//                 <span
//                     className="inline-block text-xs font-semibold tracking-[0.25em] uppercase px-4 py-2 rounded-full mb-4"
//                     style={{
//                         background: "rgba(34,211,238,0.08)",
//                         border: "1px solid rgba(34,211,238,0.15)",
//                         color: "#22d3ee",
//                     }}
//                 >
//                     Browse by Branch
//                 </span>

//                 <h2
//                     className="text-5xl font-black mt-4 mb-4"
//                     style={{ fontFamily: "'italic'" }}
//                 >
//                     <span className="text-white">Pick your </span>
//                     <span
//                         style={{
//                             background: "linear-gradient(135deg, #22d3ee, #10b981)",
//                             WebkitBackgroundClip: "text",
//                             WebkitTextFillColor: "transparent",
//                         }}
//                     >
//                         domain
//                     </span>
//                 </h2>
//                 <p className="text-slate-400 max-w-md mx-auto">
//                     Two specialist founders — one from CSE/AI, one from ECE/IoT.
//                 </p>
//             </motion.div>

//             <div className="grid md:grid-cols-2 gap-5">
//                 {domains.map((d, i) => (
//                     <motion.div
//                         key={i}
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={inView ? { opacity: 1, y: 0 } : {}}
//                         transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//                     >
//                         <Link href={d.link}>
//                             <motion.div
//                                 whileHover={{ scale: 1.02, y: -4 }}
//                                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                                 className="relative overflow-hidden rounded-2xl p-6 h-full group cursor-pointer"
//                                 style={{
//                                     background: "rgba(6, 11, 26, 0.6)",
//                                     border: `1px solid rgba(255,255,255,0.07)`,
//                                     backdropFilter: "blur(16px)",
//                                 }}
//                             >
//                                 {/* Hover glow */}
//                                 <div
//                                     className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
//                                     style={{
//                                         background: `radial-gradient(circle at 30% 50%, ${d.glow} 0%, transparent 60%)`,
//                                     }}
//                                 />
//                                 {/* Border glow on hover */}
//                                 <div
//                                     className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
//                                     style={{
//                                         boxShadow: `inset 0 0 0 1px ${d.color}30, 0 0 30px ${d.color}10`,
//                                     }}
//                                 />

//                                 <div className="relative z-10 flex items-start gap-4">
//                                     <div
//                                         className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
//                                         style={{
//                                             background: `${d.glow}`,
//                                             border: `1px solid ${d.color}25`,
//                                         }}
//                                     >
//                                         {d.icon}
//                                     </div>

//                                     <div className="flex-1">
//                                         <h3 className="text-xl font-bold text-white mb-2">{d.title}</h3>
//                                         <p className="text-slate-400 text-sm mb-4 leading-relaxed">{d.desc}</p>
//                                         <span
//                                             className="text-sm font-semibold group-hover:gap-2 transition-all inline-flex items-center gap-1"
//                                             style={{ color: d.color }}
//                                         >
//                                             {d.projects}
//                                             <motion.span
//                                                 animate={{ x: [0, 4, 0] }}
//                                                 transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
//                                             >
//                                                 →
//                                             </motion.span>
//                                         </span>
//                                     </div>
//                                 </div>

//                                 {/* Corner decoration */}
//                                 <div
//                                     className="absolute top-4 right-4 w-16 h-16 rounded-full opacity-10"
//                                     style={{
//                                         background: `radial-gradient(circle, ${d.color}, transparent)`,
//                                     }}
//                                 />
//                             </motion.div>
//                         </Link>
//                     </motion.div>
//                 ))}
//             </div>
//         </section>
//     );
// }


"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

const domains = [
    {
        title: "CSE / AI / Web",
        desc: "Chatbots, ML models, web apps, resume tools and more.",
        link: "/cse",
        count: "12+",
        label: "projects ready",
        icon: "🧠",
        accent: "#22d3ee",
        glow: "rgba(34,211,238,0.12)",
        num: "01",
    },
    {
        title: "Data Science / ML",
        desc: "Prediction models, dashboards, NLP pipelines.",
        link: "/ds-ml",
        count: "8+",
        label: "projects ready",
        icon: "📊",
        accent: "#10b981",
        glow: "rgba(16,185,129,0.12)",
        num: "02",
    },
    {
        title: "ECE / IoT",
        desc: "Arduino, NodeMCU, smart devices with components.",
        link: "/ece-iot",
        count: "10+",
        label: "projects ready",
        icon: "📡",
        accent: "#3b82f6",
        glow: "rgba(59,130,246,0.12)",
        num: "03",
    },
    {
        title: "Robotics / Embedded",
        desc: "Line followers, robotic arms, automation systems.",
        link: "/robotics",
        count: "7+",
        label: "projects ready",
        icon: "🤖",
        accent: "#a78bfa",
        glow: "rgba(167,139,250,0.12)",
        num: "04",
    },
];

function DomainCard({ d, i }: { d: typeof domains[0]; i: number }) {
    const [hov, setHov] = useState(false);

    return (
        <Link href={d.link} style={{ textDecoration: "none", display: "block" }}>
            <motion.div
                onHoverStart={() => setHov(true)}
                onHoverEnd={() => setHov(false)}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                style={{
                    position: "relative", overflow: "hidden",
                    borderRadius: 20, padding: "28px 28px",
                    background: hov
                        ? `rgba(8,16,36,0.85)`
                        : "rgba(6,11,26,0.6)",
                    border: `1px solid ${hov ? d.accent + "35" : "rgba(255,255,255,0.07)"}`,
                    backdropFilter: "blur(20px)",
                    boxShadow: hov
                        ? `0 20px 60px ${d.glow}, 0 0 0 1px ${d.accent}20`
                        : "none",
                    transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
                    cursor: "pointer",
                    height: "100%",
                }}
            >
                {/* Background glow blob */}
                <motion.div
                    animate={{ opacity: hov ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                    style={{
                        position: "absolute", top: -40, right: -40,
                        width: 180, height: 180, borderRadius: "50%",
                        background: `radial-gradient(circle, ${d.glow} 0%, transparent 70%)`,
                        filter: "blur(20px)", pointerEvents: "none",
                    }}
                />

                {/* Row: num + icon */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                    <span style={{
                        fontSize: 11, fontWeight: 700, letterSpacing: "2px",
                        color: "rgba(255,255,255,0.15)",
                        fontFamily: "var(--font-geist-mono)",
                    }}>{d.num}</span>

                    <motion.div
                        animate={{ scale: hov ? 1.1 : 1, rotate: hov ? 5 : 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 18 }}
                        style={{
                            width: 46, height: 46, borderRadius: 13,
                            background: d.glow,
                            border: `1px solid ${d.accent}30`,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontSize: 22,
                        }}
                    >{d.icon}</motion.div>
                </div>

                {/* Title */}
                <h3 style={{
                    fontSize: 20, fontWeight: 800, letterSpacing: "-0.4px",
                    color: hov ? "#fff" : "rgba(255,255,255,0.88)",
                    fontFamily: "var(--font-geist-sans)",
                    marginBottom: 10, lineHeight: 1.2,
                    transition: "color 0.2s",
                }}>{d.title}</h3>

                {/* Desc */}
                <p style={{
                    fontSize: 13, lineHeight: 1.65,
                    color: hov ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.35)",
                    fontFamily: "var(--font-geist-sans)",
                    marginBottom: 24,
                    transition: "color 0.2s",
                }}>{d.desc}</p>

                {/* Bottom row */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                        <span style={{
                            fontSize: 22, fontWeight: 900, lineHeight: 1,
                            color: d.accent,
                            fontFamily: "var(--font-geist-sans)",
                            display: "block",
                            filter: hov ? `drop-shadow(0 0 10px ${d.accent}80)` : "none",
                            transition: "filter 0.3s",
                        }}>{d.count}</span>
                        <span style={{
                            fontSize: 11, color: "rgba(255,255,255,0.3)",
                            fontFamily: "var(--font-geist-sans)",
                            letterSpacing: "0.3px",
                        }}>{d.label}</span>
                    </div>

                    <motion.div
                        animate={{ x: hov ? 4 : 0, opacity: hov ? 1 : 0.4 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            width: 34, height: 34, borderRadius: 10,
                            background: hov ? d.accent + "22" : "rgba(255,255,255,0.05)",
                            border: `1px solid ${hov ? d.accent + "40" : "rgba(255,255,255,0.08)"}`,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontSize: 14, color: hov ? d.accent : "rgba(255,255,255,0.4)",
                            transition: "background 0.2s, border-color 0.2s, color 0.2s",
                        }}
                    >→</motion.div>
                </div>

                {/* Bottom edge glow line */}
                <motion.div
                    animate={{ scaleX: hov ? 1 : 0, opacity: hov ? 1 : 0 }}
                    initial={{ scaleX: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        position: "absolute", bottom: 0, left: "10%", right: "10%",
                        height: 1,
                        background: `linear-gradient(90deg, transparent, ${d.accent}, transparent)`,
                        transformOrigin: "center",
                    }}
                />
            </motion.div>
        </Link>
    );
}

export default function DomainSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section
            ref={ref}
            style={{
                position: "relative", zIndex: 10,
                padding: "100px 5% 100px",
                maxWidth: 1280, margin: "0 auto",
            }}
        >
            {/* ── Divider line ─────────────────────────────────────────────────── */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    height: 1, marginBottom: 72,
                    background: "linear-gradient(90deg,transparent,rgba(34,211,238,0.25),rgba(16,185,129,0.2),transparent)",
                    transformOrigin: "left",
                }}
            />

            {/* ── Header ───────────────────────────────────────────────────────── */}
            <div style={{
                display: "flex", justifyContent: "space-between",
                alignItems: "flex-end", flexWrap: "wrap", gap: 24,
                marginBottom: 52,
            }}>
                <div>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        style={{
                            fontSize: 11, fontWeight: 600, letterSpacing: "2.5px",
                            textTransform: "uppercase", color: "#22d3ee",
                            marginBottom: 14,
                            fontFamily: "var(--font-geist-mono)",
                        }}
                    >Browse by Branch</motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 18 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.65, delay: 0.08 }}
                        style={{
                            fontSize: "clamp(32px,4vw,52px)",
                            fontWeight: 900, letterSpacing: "-1.5px", lineHeight: 1.05,
                            fontFamily: "var(--font-geist-sans)",
                            color: "#fff",
                        }}
                    >
                        Pick your{" "}
                        <span style={{
                            background: "linear-gradient(135deg,#22d3ee,#10b981)",
                            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                        }}>domain</span>
                    </motion.h2>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        fontSize: 14, color: "rgba(255,255,255,0.35)",
                        lineHeight: 1.65, maxWidth: 320,
                        fontFamily: "var(--font-geist-sans)",
                    }}
                >
                    Two specialist founders — one from CSE/AI, one from ECE/IoT — ensuring expert delivery across every domain.
                </motion.p>
            </div>

            {/* ── Cards grid ───────────────────────────────────────────────────── */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px,1fr))",
                gap: 16,
            }}>
                {domains.map((d, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 32 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.15 + i * 0.09, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <DomainCard d={d} i={i} />
                    </motion.div>
                ))}
            </div>

            {/* ── Bottom CTA strip ─────────────────────────────────────────────── */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                style={{
                    marginTop: 52, padding: "20px 28px",
                    borderRadius: 16,
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    display: "flex", alignItems: "center",
                    justifyContent: "space-between", flexWrap: "wrap", gap: 16,
                }}
            >
                <p style={{
                    fontSize: 14, color: "rgba(255,255,255,0.4)",
                    fontFamily: "var(--font-geist-sans)",
                }}>
                    Not sure which domain fits your project?
                </p>
                <Link href="/contact" style={{ textDecoration: "none" }}>
                    <motion.button
                        whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(34,211,238,0.4)" }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                            padding: "10px 22px", borderRadius: 10,
                            background: "linear-gradient(135deg,#06b6d4,#10b981)",
                            border: "none", color: "#000",
                            fontSize: 13, fontWeight: 700,
                            fontFamily: "var(--font-geist-sans)",
                            cursor: "pointer",
                        }}
                    >Talk to us →</motion.button>
                </Link>
            </motion.div>
        </section>
    );
}