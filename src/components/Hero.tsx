// // "use client";

// // import { motion } from "framer-motion";
// // import { Cpu, Brain, Wifi, Bot } from "lucide-react";
// // export default function Hero() {
// //     return (
// //         <section className="px-8 py-20 flex flex-col lg:flex-row items-center justify-between">

// //             {/* LEFT SIDE */}
// //             <div className="max-w-xl">
// //                 <motion.p
// //                     initial={{ opacity: 0 }}
// //                     animate={{ opacity: 1 }}
// //                     className="text-orange-500 mb-4"
// //                 >
// //                     🔥 Used by 50+ engineering students
// //                 </motion.p>

// //                 <motion.h1
// //                     initial={{ y: 40, opacity: 0 }}
// //                     animate={{ y: 0, opacity: 1 }}
// //                     className="text-5xl font-bold leading-tight"
// //                 >
// //                     Get <span className="text-orange-500">Ready-Made</span> &
// //                     <br /> Custom Engineering Projects
// //                 </motion.h1>

// //                 <p className="text-gray-400 mt-6">
// //                     CSE, ECE, AI, IoT — complete projects with code, report, PPT and setup guide.
// //                 </p>

// //                 <div className="flex gap-4 mt-8">
// //                     <button className="bg-orange-500 px-6 py-3 rounded-lg">
// //                         Browse Projects
// //                     </button>
// //                     <button className="border border-white/20 px-6 py-3 rounded-lg">
// //                         Custom Order
// //                     </button>
// //                 </div>

// //                 {/* STATS */}
// //                 <div className="flex gap-10 mt-10 text-sm text-gray-400">
// //                     <div>
// //                         <p className="text-white font-bold">50+</p>
// //                         <p>Students served</p>
// //                     </div>
// //                     <div>
// //                         <p className="text-white font-bold">30+</p>
// //                         <p>Projects ready</p>
// //                     </div>
// //                     <div>
// //                         <p className="text-white font-bold">2</p>
// //                         <p>Expert founders</p>
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* RIGHT SIDE (PROJECT CARD PREVIEW) */}
// //             <motion.div
// //                 initial={{ opacity: 0, scale: 0.9 }}
// //                 animate={{ opacity: 1, scale: 1 }}
// //                 className="mt-12 lg:mt-0 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 w-full max-w-md"
// //             >
// //                 <h3 className="text-sm text-gray-400 mb-4">Featured Projects</h3>

// //                 <div className="space-y-4">
// //                     <ProjectItem title="AI Chatbot System" price="₹2,500" />
// //                     <ProjectItem title="Smart Home IoT" price="₹4,200" />
// //                     <ProjectItem title="Resume Verifier" price="₹1,800" />
// //                     <ProjectItem title="Line Following Robot" price="₹6,500" />
// //                 </div>
// //             </motion.div>
// //         </section>
// //     );
// // }

// // function ProjectItem({ title, price }: any) {
// //     return (
// //         <div className="flex justify-between bg-white/5 p-3 rounded-lg">
// //             <span>{title}</span>
// //             <span className="text-orange-500">{price}</span>
// //         </div>
// //     );
// // }



// "use client";

// import { motion, useMotionValue, useTransform, useSpring, Variants } from "framer-motion";
// import { useRef } from "react";
// import Link from "next/link";

// const projects = [
//     { title: "AI Chatbot System", price: "₹2,500", tag: "AI / ML" },
//     { title: "Smart Home IoT", price: "₹4,200", tag: "ECE" },
//     { title: "Resume Verifier", price: "₹1,800", tag: "Web" },
//     { title: "Line Following Robot", price: "₹6,500", tag: "Robotics" },
// ];

// const stats = [
//     { val: "50+", label: "Students Served" },
//     { val: "30+", label: "Projects Ready" },
//     { val: "2", label: "Expert Founders" },
//     { val: "100%", label: "Delivery Rate" },
// ];

// function FloatingCard({ title, price, tag, delay }: any) {
//     return (
//         <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//             whileHover={{ scale: 1.03, y: -2 }}
//             className="flex items-center justify-between p-4 rounded-xl mb-3"
//             style={{
//                 background: "rgba(6,182,212,0.04)",
//                 border: "1px solid rgba(34,211,238,0.1)",
//                 backdropFilter: "blur(10px)",
//                 boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
//             }}
//         >
//             <div>
//                 <p className="text-white text-sm font-medium">{title}</p>
//                 <span
//                     className="text-xs px-2 py-0.5 rounded-full mt-1 inline-block"
//                     style={{
//                         background: "rgba(16,185,129,0.15)",
//                         color: "#34d399",
//                         border: "1px solid rgba(16,185,129,0.2)",
//                     }}
//                 >
//                     {tag}
//                 </span>
//             </div>
//             <span
//                 className="font-bold text-sm"
//                 style={{
//                     background: "linear-gradient(90deg, #22d3ee, #10b981)",
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                 }}
//             >
//                 {price}
//             </span>
//         </motion.div>
//     );
// }

// export default function Hero() {
//     const cardRef = useRef<HTMLDivElement>(null);
//     const mx = useMotionValue(0);
//     const my = useMotionValue(0);
//     const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 150, damping: 20 });
//     const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 150, damping: 20 });

//     const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
//         const rect = cardRef.current?.getBoundingClientRect();
//         if (!rect) return;
//         mx.set((e.clientX - rect.left) / rect.width - 0.5);
//         my.set((e.clientY - rect.top) / rect.height - 0.5);
//     };

//     const container: Variants = {
//         hidden: {},
//         show: { transition: { staggerChildren: 0.1 } },
//     };
//     const item: Variants = {
//         hidden: { y: 40, opacity: 0 },
//         show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
//     };

//     return (
//         <section className="relative z-10 min-h-screen flex items-center px-6 pt-24 pb-16 max-w-7xl mx-auto">
//             {/* Ambient light blob */}
//             <div
//                 className="absolute top-1/4 left-0 w-96 h-96 rounded-full pointer-events-none"
//                 style={{
//                     background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
//                     filter: "blur(60px)",
//                 }}
//             />
//             <div
//                 className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full pointer-events-none"
//                 style={{
//                     background: "radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)",
//                     filter: "blur(50px)",
//                 }}
//             />

//             <div className="flex flex-col lg:flex-row items-center justify-between gap-16 w-full">
//                 {/* LEFT */}
//                 <motion.div
//                     variants={container}
//                     initial="hidden"
//                     animate="show"
//                     className="max-w-2xl"
//                 >
//                     <motion.div variants={item}>
//                         <span
//                             className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full mb-6"
//                             style={{
//                                 background: "rgba(34,211,238,0.08)",
//                                 border: "1px solid rgba(34,211,238,0.2)",
//                                 color: "#22d3ee",
//                             }}
//                         >
//                             <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
//                             🔥 Used by 50+ engineering students
//                         </span>
//                     </motion.div>

//                     <motion.h1
//                         variants={item}
//                         className="text-5xl lg:text-7xl font-black leading-none tracking-tight mb-6"
//                         style={{ fontFamily: "'italic'" }}
//                     >
//                         <span className="text-white">Get </span>
//                         <span
//                             style={{
//                                 background: "linear-gradient(135deg, #22d3ee 0%, #10b981 50%, #3b82f6 100%)",
//                                 WebkitBackgroundClip: "text",
//                                 WebkitTextFillColor: "transparent",
//                                 filter: "drop-shadow(0 0 30px rgba(34,211,238,0.4))",
//                             }}
//                         >
//                             Ready-Made
//                         </span>
//                         <br />
//                         <span className="text-white">Engineering </span>
//                         <span
//                             style={{
//                                 background: "linear-gradient(135deg, #10b981, #22d3ee)",
//                                 WebkitBackgroundClip: "text",
//                                 WebkitTextFillColor: "transparent",
//                             }}
//                         >
//                             Projects
//                         </span>
//                     </motion.h1>

//                     <motion.p
//                         variants={item}
//                         className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed"
//                     >
//                         CSE, ECE, AI, IoT — complete projects with code, report, PPT and setup guide.
//                         Delivered in 24–72 hours.
//                     </motion.p>

//                     <motion.div variants={item} className="flex gap-4 flex-wrap">
//                         <Link href="/projects">
//                             <motion.button
//                                 whileHover={{ scale: 1.04 }}
//                                 whileTap={{ scale: 0.97 }}
//                                 className="px-8 py-4 rounded-2xl font-semibold text-black text-sm"
//                                 style={{
//                                     background: "linear-gradient(135deg, #22d3ee, #10b981)",
//                                     boxShadow: "0 0 30px rgba(34,211,238,0.4), 0 0 60px rgba(16,185,129,0.2)",
//                                 }}
//                             >
//                                 Browse Projects →
//                             </motion.button>
//                         </Link>
//                         <Link href="/contact">
//                             <motion.button
//                                 whileHover={{ scale: 1.04, borderColor: "rgba(34,211,238,0.4)" }}
//                                 whileTap={{ scale: 0.97 }}
//                                 className="px-8 py-4 rounded-2xl font-semibold text-sm text-slate-300"
//                                 style={{
//                                     background: "rgba(255,255,255,0.03)",
//                                     border: "1px solid rgba(255,255,255,0.1)",
//                                     backdropFilter: "blur(10px)",
//                                 }}
//                             >
//                                 Custom Order
//                             </motion.button>
//                         </Link>
//                     </motion.div>

//                     {/* Stats */}
//                     <motion.div variants={item} className="flex gap-8 mt-12">
//                         {stats.map((s, i) => (
//                             <div key={i}>
//                                 <p
//                                     className="text-2xl font-black"
//                                     style={{
//                                         background: "linear-gradient(135deg, #22d3ee, #10b981)",
//                                         WebkitBackgroundClip: "text",
//                                         WebkitTextFillColor: "transparent",
//                                     }}
//                                 >
//                                     {s.val}
//                                 </p>
//                                 <p className="text-xs text-slate-500 mt-0.5">{s.label}</p>
//                             </div>
//                         ))}
//                     </motion.div>
//                 </motion.div>

//                 {/* RIGHT — 3D tilt card */}
//                 <motion.div
//                     ref={cardRef}
//                     onMouseMove={handleMouse}
//                     onMouseLeave={() => { mx.set(0); my.set(0); }}
//                     style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//                     className="w-full max-w-md flex-shrink-0"
//                 >
//                     <div
//                         className="rounded-3xl p-6"
//                         style={{
//                             background: "rgba(6, 11, 26, 0.7)",
//                             border: "1px solid rgba(34,211,238,0.15)",
//                             backdropFilter: "blur(24px)",
//                             boxShadow: "0 0 60px rgba(34,211,238,0.08), 0 0 120px rgba(16,185,129,0.06), inset 0 1px 0 rgba(255,255,255,0.06)",
//                         }}
//                     >
//                         {/* Header */}
//                         <div className="flex items-center gap-3 mb-6">
//                             <div className="flex gap-1.5">
//                                 <div className="w-3 h-3 rounded-full bg-red-500/60" />
//                                 <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
//                                 <div className="w-3 h-3 rounded-full bg-green-500/60" />
//                             </div>
//                             <span className="text-xs text-slate-500 ml-2">featured_projects.tsx</span>
//                         </div>

//                         <p className="text-xs text-slate-500 mb-4 font-mono">// Featured Projects</p>

//                         {projects.map((p, i) => (
//                             <FloatingCard key={i} {...p} delay={0.4 + i * 0.1} />
//                         ))}

//                         {/* Bottom badge */}
//                         <div
//                             className="mt-4 p-3 rounded-xl text-xs text-center"
//                             style={{
//                                 background: "rgba(16,185,129,0.06)",
//                                 border: "1px solid rgba(16,185,129,0.12)",
//                                 color: "#34d399",
//                             }}
//                         >
//                             ✓ All projects include Code + PPT + Report + Setup Guide
//                         </div>
//                     </div>
//                 </motion.div>
//             </div>
//         </section>
//     );
// }

"use client";

import { motion, useMotionValue, useTransform, useSpring, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";

// ─── Animated counter ────────────────────────────────────────────────────────
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
    const [val, setVal] = useState(0);
    useEffect(() => {
        const controls = animate(0, to, {
            duration: 1.8,
            ease: "easeOut",
            delay: 0.8,
            onUpdate: (v) => setVal(Math.round(v)),
        });
        return controls.stop;
    }, [to]);
    return <>{val}{suffix}</>;
}

// ─── Marquee ticker ──────────────────────────────────────────────────────────
const TAGS = ["CSE", "AI / ML", "IoT", "ECE", "Robotics", "Web Dev", "Arduino", "NodeMCU", "Python", "React", "NLP", "Embedded"];
function Ticker() {
    return (
        <div style={{ overflow: "hidden", maskImage: "linear-gradient(90deg,transparent,black 12%,black 88%,transparent)" }}>
            <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                style={{ display: "flex", gap: 12, width: "max-content" }}
            >
                {[...TAGS, ...TAGS].map((t, i) => (
                    <span key={i} style={{
                        fontSize: 11, padding: "5px 14px", borderRadius: 100,
                        background: "rgba(34,211,238,0.07)",
                        border: "1px solid rgba(34,211,238,0.15)",
                        color: "rgba(34,211,238,0.7)",
                        whiteSpace: "nowrap", letterSpacing: "0.5px",
                        fontFamily: "var(--font-geist-mono)",
                    }}>{t}</span>
                ))}
            </motion.div>
        </div>
    );
}

// ─── Project card list item ───────────────────────────────────────────────────
const PROJECTS = [
    { title: "AI Chatbot System", price: "₹2,500", tag: "AI", dot: "#22d3ee" },
    { title: "Smart Home IoT", price: "₹4,200", tag: "ECE", dot: "#10b981" },
    { title: "Resume Verifier", price: "₹1,800", tag: "Web", dot: "#818cf8" },
    { title: "Line Following Robot", price: "₹6,500", tag: "Robotics", dot: "#f59e0b" },
];

function ProjectRow({ title, price, tag, dot, index }: any) {
    const [hov, setHov] = useState(false);
    return (
        <motion.div
            onHoverStart={() => setHov(true)}
            onHoverEnd={() => setHov(false)}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55 + index * 0.09, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "13px 16px", borderRadius: 14, marginBottom: 8,
                background: hov ? "rgba(34,211,238,0.06)" : "rgba(255,255,255,0.025)",
                border: `1px solid ${hov ? "rgba(34,211,238,0.22)" : "rgba(255,255,255,0.07)"}`,
                transition: "background 0.2s, border-color 0.2s",
                cursor: "default",
            }}
        >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: dot, boxShadow: `0 0 8px ${dot}`, flexShrink: 0 }} />
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-geist-sans)" }}>{title}</span>
                <span style={{
                    fontSize: 10, padding: "2px 8px", borderRadius: 6,
                    background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.35)",
                    fontFamily: "var(--font-geist-mono)",
                }}>{tag}</span>
            </div>
            <span style={{
                fontSize: 13, fontWeight: 700,
                background: "linear-gradient(90deg,#22d3ee,#10b981)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                fontFamily: "var(--font-geist-sans)",
            }}>{price}</span>
        </motion.div>
    );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
export default function Hero() {
    const cardRef = useRef<HTMLDivElement>(null);
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const rotX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 18 });
    const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 18 });
    const glowX = useTransform(mx, [-0.5, 0.5], ["20%", "80%"]);
    const glowY = useTransform(my, [-0.5, 0.5], ["20%", "80%"]);

    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const r = cardRef.current?.getBoundingClientRect();
        if (!r) return;
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
    };
    const onMouseLeave = () => { mx.set(0); my.set(0); };

    return (
        <section style={{
            position: "relative", zIndex: 10,
            minHeight: "100vh", display: "flex", flexDirection: "column",
            justifyContent: "center", padding: "120px 5% 80px",
            overflow: "hidden",
        }}>

            {/* ── Ambient blobs ─────────────────────────────────────────────────── */}
            <div style={{
                position: "absolute", top: "15%", left: "-8%",
                width: 480, height: 480, borderRadius: "50%", pointerEvents: "none",
                background: "radial-gradient(circle,rgba(6,182,212,0.13) 0%,transparent 70%)",
                filter: "blur(70px)",
            }} />
            <div style={{
                position: "absolute", bottom: "10%", right: "0%",
                width: 360, height: 360, borderRadius: "50%", pointerEvents: "none",
                background: "radial-gradient(circle,rgba(16,185,129,0.11) 0%,transparent 70%)",
                filter: "blur(60px)",
            }} />

            {/* ── Main two-column layout ─────────────────────────────────────────── */}
            <div style={{
                display: "flex", alignItems: "center",
                gap: "clamp(40px,6vw,100px)",
                flexWrap: "wrap",
            }}>

                {/* ───────── LEFT ───────── */}
                <div style={{ flex: "1 1 440px", maxWidth: 620 }}>

                    {/* Eyebrow pill */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ marginBottom: 28 }}
                    >
                        <span style={{
                            display: "inline-flex", alignItems: "center", gap: 8,
                            fontSize: 12, padding: "7px 18px", borderRadius: 100,
                            background: "rgba(34,211,238,0.07)",
                            border: "1px solid rgba(34,211,238,0.2)",
                            color: "#22d3ee",
                            fontFamily: "var(--font-geist-sans)", fontWeight: 500,
                        }}>
                            <motion.span
                                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                                transition={{ duration: 1.6, repeat: Infinity }}
                                style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981", display: "inline-block" }}
                            />
                            Trusted by 50+ engineering students
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <div style={{ overflow: "hidden", marginBottom: 8 }}>
                        <motion.p
                            initial={{ y: "110%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                            style={{
                                fontSize: "clamp(14px,1.4vw,17px)",
                                color: "rgba(255,255,255,0.35)",
                                letterSpacing: "3px", textTransform: "uppercase",
                                fontFamily: "var(--font-geist-mono)",
                                marginBottom: 4,
                            }}
                        >Engineering Projects Studio</motion.p>
                    </div>

                    <div style={{ overflow: "hidden", marginBottom: 6 }}>
                        <motion.h1
                            initial={{ y: "105%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                            style={{
                                fontSize: "clamp(44px,6.5vw,82px)",
                                fontWeight: 900, lineHeight: 0.95, letterSpacing: "-3px",
                                fontFamily: "var(--font-geist-sans)",
                                color: "#fff",
                            }}
                        >
                            Get{" "}
                            <span style={{
                                background: "linear-gradient(120deg,#22d3ee 0%,#10b981 55%,#6366f1 100%)",
                                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                                filter: "drop-shadow(0 0 28px rgba(34,211,238,0.35))",
                            }}>Ready-Made</span>
                        </motion.h1>
                    </div>

                    <div style={{ overflow: "hidden", marginBottom: 32 }}>
                        <motion.h1
                            initial={{ y: "105%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
                            style={{
                                fontSize: "clamp(44px,6.5vw,82px)",
                                fontWeight: 900, lineHeight: 0.95, letterSpacing: "-3px",
                                fontFamily: "var(--font-geist-sans)",
                                color: "rgba(255,255,255,0.18)",
                            }}
                        >
                            Engineering Projects
                        </motion.h1>
                    </div>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.42 }}
                        style={{
                            fontSize: "clamp(14px,1.1vw,16px)",
                            color: "rgba(255,255,255,0.4)",
                            lineHeight: 1.75, marginBottom: 40, maxWidth: 430,
                            fontFamily: "var(--font-geist-sans)",
                        }}
                    >
                        CSE · ECE · AI · IoT — complete with source code, report, PPT and
                        setup guide. Delivered in <span style={{ color: "#22d3ee" }}>24–72 hours</span>.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.52 }}
                        style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 52 }}
                    >
                        <Link href="/projects" style={{ textDecoration: "none" }}>
                            <motion.button
                                whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(34,211,238,0.5), 0 0 80px rgba(16,185,129,0.25)" }}
                                whileTap={{ scale: 0.97 }}
                                style={{
                                    padding: "15px 32px", borderRadius: 14,
                                    background: "linear-gradient(135deg,#06b6d4,#10b981)",
                                    border: "none", color: "#000",
                                    fontSize: 14, fontWeight: 700,
                                    fontFamily: "var(--font-geist-sans)",
                                    boxShadow: "0 0 24px rgba(34,211,238,0.35)",
                                    cursor: "pointer",
                                }}
                            >Browse Projects →</motion.button>
                        </Link>
                        <Link href="/contact" style={{ textDecoration: "none" }}>
                            <motion.button
                                whileHover={{ scale: 1.03, borderColor: "rgba(34,211,238,0.35)" }}
                                whileTap={{ scale: 0.97 }}
                                style={{
                                    padding: "15px 32px", borderRadius: 14,
                                    background: "rgba(255,255,255,0.03)",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    color: "rgba(255,255,255,0.75)",
                                    fontSize: 14, fontWeight: 500,
                                    fontFamily: "var(--font-geist-sans)",
                                    backdropFilter: "blur(10px)",
                                    cursor: "pointer",
                                    transition: "border-color 0.2s",
                                }}
                            >Custom Order</motion.button>
                        </Link>
                    </motion.div>

                    {/* Stats row */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.72 }}
                        style={{
                            display: "flex", gap: 0,
                            borderTop: "1px solid rgba(255,255,255,0.06)",
                            paddingTop: 28,
                        }}
                    >
                        {[
                            { to: 50, suffix: "+", label: "Students" },
                            { to: 30, suffix: "+", label: "Projects" },
                            { to: 2, suffix: "", label: "Founders" },
                            { to: 100, suffix: "%", label: "Delivered" },
                        ].map((s, i) => (
                            <div key={i} style={{
                                flex: 1, textAlign: "center",
                                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
                                padding: "0 8px",
                            }}>
                                <p style={{
                                    fontSize: "clamp(20px,2.2vw,28px)", fontWeight: 800,
                                    background: "linear-gradient(135deg,#22d3ee,#10b981)",
                                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                                    fontFamily: "var(--font-geist-sans)", lineHeight: 1,
                                    marginBottom: 5,
                                }}>
                                    <Counter to={s.to} suffix={s.suffix} />
                                </p>
                                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-geist-sans)", letterSpacing: "0.5px" }}>
                                    {s.label}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* ───────── RIGHT — 3D tilt card ───────── */}
                <motion.div
                    ref={cardRef}
                    onMouseMove={onMouseMove}
                    onMouseLeave={onMouseLeave}
                    style={{
                        flex: "1 1 520px", maxWidth: 620,
                        rotateX: rotX, rotateY: rotY,
                        transformStyle: "preserve-3d",
                        perspective: 1200,
                    }}
                    initial={{ opacity: 0, scale: 0.88, y: 24 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* Card shell */}
                    <div style={{
                        borderRadius: 24, padding: "20px",
                        background: "rgba(5,12,28,0.75)",
                        border: "1px solid rgba(34,211,238,0.14)",
                        backdropFilter: "blur(28px)",
                        boxShadow: "0 0 80px rgba(34,211,238,0.07), 0 0 140px rgba(16,185,129,0.05), inset 0 1px 0 rgba(255,255,255,0.05)",
                        position: "relative", overflow: "hidden",
                    }}>

                        {/* Moving inner glow that follows mouse */}
                        <motion.div style={{
                            position: "absolute", width: 200, height: 200, borderRadius: "50%",
                            background: "radial-gradient(circle,rgba(34,211,238,0.12),transparent 70%)",
                            pointerEvents: "none", left: glowX, top: glowY,
                            transform: "translate(-50%,-50%)", filter: "blur(20px)",
                        }} />

                        {/* Faux window chrome */}
                        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                            <div style={{ display: "flex", gap: 6 }}>
                                {["#ff5f57", "#febc2e", "#28c840"].map(c => (
                                    <div key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c, opacity: 0.7 }} />
                                ))}
                            </div>
                            <span style={{
                                fontSize: 11, color: "rgba(255,255,255,0.25)",
                                fontFamily: "var(--font-geist-mono)", marginLeft: 4,
                            }}>featured_projects.tsx</span>
                            <div style={{ marginLeft: "auto", display: "flex", gap: 4 }}>
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(255,255,255,0.2)" }} />
                                ))}
                            </div>
                        </div>

                        {/* Code comment */}
                        <p style={{
                            fontSize: 11, marginBottom: 14,
                            fontFamily: "var(--font-geist-mono)",
                            color: "rgba(255,255,255,0.2)",
                        }}>// 30+ projects ready to ship</p>

                        {/* Project rows */}
                        {PROJECTS.map((p, i) => <ProjectRow key={i} {...p} index={i} />)}

                        {/* Bottom CTA strip */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.0 }}
                            style={{
                                marginTop: 16, padding: "12px 16px",
                                borderRadius: 12, textAlign: "center",
                                background: "rgba(16,185,129,0.06)",
                                border: "1px solid rgba(16,185,129,0.14)",
                            }}
                        >
                            <p style={{
                                fontSize: 11, color: "#34d399",
                                fontFamily: "var(--font-geist-sans)",
                                letterSpacing: "0.3px",
                            }}>✓ Code &nbsp;·&nbsp; PPT &nbsp;·&nbsp; Report &nbsp;·&nbsp; Setup Guide</p>
                        </motion.div>

                        {/* Shimmer line at top edge */}
                        <motion.div
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
                            style={{
                                position: "absolute", top: 0, left: 0,
                                width: "50%", height: 1,
                                background: "linear-gradient(90deg,transparent,rgba(34,211,238,0.6),transparent)",
                            }}
                        />
                    </div>
                </motion.div>
            </div>

            {/* ── Ticker at bottom ───────────────────────────────────────────────── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                style={{ marginTop: 64 }}
            >
                <Ticker />
            </motion.div>
        </section>
    );
}