// "use client";

// import { useState } from "react";

// export default function ProjectsClient({ projects }: any) {
//     const [filter, setFilter] = useState("all");

//     const filtered =
//         filter === "all"
//             ? projects
//             : projects.filter((p: any) => p.level === filter);

//     return (
//         <div className="p-10">
//             <h1 className="text-3xl mb-6">Projects</h1>

//             {/* FILTER */}
//             <div className="flex gap-3 mb-6">
//                 {["all", "beginner", "intermediate", "advanced"].map((f) => (
//                     <button
//                         key={f}
//                         onClick={() => setFilter(f)}
//                         className={`px-4 py-2 rounded ${filter === f ? "bg-orange-500" : "bg-white/10"
//                             }`}
//                     >
//                         {f}
//                     </button>
//                 ))}
//             </div>

//             {/* CARDS */}
//             <div className="grid md:grid-cols-3 gap-6">
//                 {filtered.map((p: any) => (
//                     <div key={p.id} className="bg-white/5 p-6 rounded-xl">
//                         <h2>{p.title}</h2>
//                         <p className="text-orange-500">{p.price}</p>

//                         <p className="text-sm text-gray-400">{p.level}</p>

//                         <button className="mt-3 bg-orange-500 px-4 py-2 rounded">
//                             Customize →
//                         </button>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }



// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";

// const filters = ["all", "beginner", "intermediate", "advanced"];

// export default function ProjectsClient({ projects }: any) {
//     const [filter, setFilter] = useState("all");

//     const filtered =
//         filter === "all"
//             ? projects
//             : projects.filter((p: any) => p.level === filter);

//     return (
//         <div className="relative z-10 px-6 pt-32 pb-20 max-w-7xl mx-auto">
//             {/* Header */}
//             <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="mb-12"
//             >
//                 <span
//                     className="inline-block text-xs font-semibold tracking-[0.25em] uppercase px-4 py-2 rounded-full mb-4"
//                     style={{ background: "rgba(34,211,238,0.08)", border: "1px solid rgba(34,211,238,0.15)", color: "#22d3ee" }}
//                 >
//                     All Projects
//                 </span>
//                 <h1
//                     className="text-5xl font-black text-white mb-4"
//                     style={{ fontFamily: "'Syne', sans-serif" }}
//                 >
//                     Browse{" "}
//                     <span style={{ background: "linear-gradient(135deg, #22d3ee, #10b981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
//                         Projects
//                     </span>
//                 </h1>
//             </motion.div>

//             {/* Filters */}
//             <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.1 }}
//                 className="flex gap-3 mb-10 flex-wrap"
//             >
//                 {filters.map((f) => (
//                     <button
//                         key={f}
//                         onClick={() => setFilter(f)}
//                         className="relative px-5 py-2.5 rounded-xl text-sm font-medium capitalize transition-all duration-200"
//                         style={{
//                             background: filter === f ? "linear-gradient(135deg, #22d3ee, #10b981)" : "rgba(255,255,255,0.03)",
//                             border: filter === f ? "none" : "1px solid rgba(255,255,255,0.06)",
//                             color: filter === f ? "#000" : "#94a3b8",
//                             boxShadow: filter === f ? "0 0 20px rgba(34,211,238,0.25)" : "none",
//                         }}
//                     >
//                         {f}
//                     </button>
//                 ))}
//             </motion.div>

//             {/* Cards */}
//             <AnimatePresence mode="popLayout">
//                 <div className="grid md:grid-cols-3 gap-6">
//                     {filtered.map((p: any, i: number) => (
//                         <motion.div
//                             key={p.id}
//                             initial={{ opacity: 0, scale: 0.95 }}
//                             animate={{ opacity: 1, scale: 1 }}
//                             exit={{ opacity: 0, scale: 0.95 }}
//                             transition={{ delay: i * 0.05 }}
//                             whileHover={{ y: -6 }}
//                             className="group rounded-2xl overflow-hidden"
//                             style={{
//                                 background: "rgba(6,11,26,0.7)",
//                                 border: "1px solid rgba(34,211,238,0.07)",
//                                 backdropFilter: "blur(16px)",
//                             }}
//                         >
//                             <div className="p-6">
//                                 {/* Title */}
//                                 <h2 className="text-lg font-bold text-white mb-3">{p.title}</h2>

//                                 {/* Price + level */}
//                                 <div className="flex items-center justify-between mb-4">
//                                     <span
//                                         className="text-xl font-black"
//                                         style={{ background: "linear-gradient(135deg, #22d3ee, #10b981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
//                                     >
//                                         {p.price}
//                                     </span>
//                                     {p.level && (
//                                         <span
//                                             className="text-xs px-2.5 py-1 rounded-full capitalize"
//                                             style={{ background: "rgba(34,211,238,0.08)", color: "#22d3ee", border: "1px solid rgba(34,211,238,0.12)" }}
//                                         >
//                                             {p.level}
//                                         </span>
//                                     )}
//                                 </div>

//                                 {/* Includes */}
//                                 <div className="flex gap-3 mb-5 text-xs text-slate-500">
//                                     {["Code", "PPT", "Report"].map((inc) => (
//                                         <span key={inc} className="flex items-center gap-1">
//                                             <span className="text-emerald-400">✓</span> {inc}
//                                         </span>
//                                     ))}
//                                 </div>

//                                 <Link href={`/projects/${p.id}`}>
//                                     <motion.button
//                                         whileHover={{ scale: 1.02 }}
//                                         whileTap={{ scale: 0.98 }}
//                                         className="w-full py-3 rounded-xl text-black font-semibold text-sm"
//                                         style={{ background: "linear-gradient(135deg, #22d3ee, #10b981)", boxShadow: "0 0 16px rgba(34,211,238,0.15)" }}
//                                     >
//                                         Customize →
//                                     </motion.button>
//                                 </Link>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>
//             </AnimatePresence>
//         </div>
//     );
// }



"use client";
export const dynamic = "force-dynamic"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const FILTERS = ["all", "beginner", "intermediate", "advanced"];

const LEVEL_STYLE: Record<string, { bg: string; color: string; border: string }> = {
    beginner: { bg: "rgba(16,185,129,0.1)", color: "#34d399", border: "rgba(16,185,129,0.2)" },
    intermediate: { bg: "rgba(251,191,36,0.1)", color: "#fbbf24", border: "rgba(251,191,36,0.2)" },
    advanced: { bg: "rgba(239,68,68,0.1)", color: "#f87171", border: "rgba(239,68,68,0.2)" },
};

const BRANCH_LABELS: Record<string, string> = {
    "cse": "CSE / AI",
    "ds-ml": "DS / ML",
    "ece-iot": "ECE / IoT",
    "robotics": "Robotics",
};

const FALLBACK_ICONS = ["🧠", "📡", "💻", "🤖", "📊", "⚙️"];

const INCLUDES = ["Code", "PPT", "Setup"];

// ─── Single card ──────────────────────────────────────────────────────────────
function ProjectCard({ p, i }: { p: any; i: number }) {
    const [hov, setHov] = useState(false);
    const lvl = LEVEL_STYLE[p.level] ?? LEVEL_STYLE.beginner;
    const branchLabel = BRANCH_LABELS[p.branch] ?? p.branch;

    return (
        <>
            <Navbar />
            <motion.div
                layout
                onHoverStart={() => setHov(true)}
                onHoverEnd={() => setHov(false)}
                whileHover={{ y: -7 }}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    position: "relative", overflow: "hidden",
                    borderRadius: 22, display: "flex", flexDirection: "column",
                    background: hov ? "rgba(8,16,36,0.9)" : "rgba(6,11,26,0.7)",
                    border: `1px solid ${hov ? "rgba(34,211,238,0.22)" : "rgba(255,255,255,0.07)"}`,
                    backdropFilter: "blur(20px)",
                    boxShadow: hov
                        ? "0 24px 60px rgba(34,211,238,0.09), 0 0 0 1px rgba(34,211,238,0.12)"
                        : "0 4px 32px rgba(0,0,0,0.3)",
                    transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
                    minHeight: 520,
                    height: 520,
                    width: "100%",
                }}
            >
                {/* Top edge glow */}
                <motion.div
                    animate={{ opacity: hov ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
                        width: "80%", height: 1,
                        background: "linear-gradient(90deg,transparent,rgba(34,211,238,0.55),transparent)",
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
                        <div style={{
                            position: "absolute", inset: 0,
                            background: "linear-gradient(to bottom,transparent 35%,rgba(6,11,26,0.92) 100%)",
                        }} />
                        {/* Badges over image */}
                        <div style={{ position: "absolute", top: 12, left: 12, right: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            {branchLabel && (
                                <span style={{
                                    fontSize: 10, padding: "3px 9px", borderRadius: 7,
                                    background: "rgba(0,0,0,0.55)", backdropFilter: "blur(8px)",
                                    color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.1)",
                                    fontFamily: "var(--font-geist-mono)",
                                }}>{branchLabel}</span>
                            )}
                            {p.level && (
                                <span style={{
                                    fontSize: 10, padding: "3px 10px", borderRadius: 100,
                                    background: lvl.bg, color: lvl.color, border: `1px solid ${lvl.border}`,
                                    fontFamily: "var(--font-geist-sans)", fontWeight: 600, textTransform: "capitalize",
                                }}>{p.level}</span>
                            )}
                        </div>
                    </div>
                ) : (
                    <div style={{
                        height: 220, flexShrink: 0, position: "relative",
                        background: "linear-gradient(135deg,rgba(34,211,238,0.05),rgba(16,185,129,0.04))",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 42, borderBottom: "1px solid rgba(255,255,255,0.05)",
                    }}>
                        {FALLBACK_ICONS[i % FALLBACK_ICONS.length]}
                        <div style={{ position: "absolute", top: 12, left: 12, right: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            {branchLabel && (
                                <span style={{
                                    fontSize: 10, padding: "3px 9px", borderRadius: 7,
                                    background: "rgba(34,211,238,0.1)", color: "#22d3ee",
                                    border: "1px solid rgba(34,211,238,0.15)",
                                    fontFamily: "var(--font-geist-mono)",
                                }}>{branchLabel}</span>
                            )}
                            {p.level && (
                                <span style={{
                                    fontSize: 10, padding: "3px 10px", borderRadius: 100,
                                    background: lvl.bg, color: lvl.color, border: `1px solid ${lvl.border}`,
                                    fontFamily: "var(--font-geist-sans)", fontWeight: 600, textTransform: "capitalize",
                                }}>{p.level}</span>
                            )}
                        </div>
                    </div>
                )}

                {/* Body */}
                <div style={{ padding: "20px 22px 22px", display: "flex", flexDirection: "column", flex: 1 }}>
                    <h2 style={{
                        fontSize: 16, fontWeight: 800, letterSpacing: "-0.3px", lineHeight: 1.3,
                        color: hov ? "#fff" : "rgba(255,255,255,0.88)",
                        fontFamily: "var(--font-geist-sans)", marginBottom: 10,
                        transition: "color 0.2s",
                        minHeight: 42,
                        maxHeight: 42,
                        overflow: "hidden",
                    }}>{p.title}</h2>

                    {/* Tech stack */}
                    {p.tech_stack?.length > 0 && (
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 14 }}>
                            {p.tech_stack.slice(0, 3).map((t: string, j: number) => (
                                <span key={j} style={{
                                    fontSize: 10, padding: "3px 8px", borderRadius: 6,
                                    background: "rgba(255,255,255,0.05)",
                                    border: "1px solid rgba(255,255,255,0.07)",
                                    color: "rgba(255,255,255,0.35)",
                                    fontFamily: "var(--font-geist-mono)",
                                }}>{t}</span>
                            ))}
                        </div>
                    )}

                    {/* Includes */}
                    <div style={{
                        display: "flex", gap: 12, marginBottom: 16,
                        paddingBottom: 16, borderBottom: "1px solid rgba(255,255,255,0.05)",
                    }}>
                        {INCLUDES.map(inc => (
                            <span key={inc} style={{
                                fontSize: 11, color: "rgba(255,255,255,0.28)",
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
                                fontFamily: "var(--font-geist-sans)", display: "block",
                                filter: hov ? "drop-shadow(0 0 10px rgba(34,211,238,0.5))" : "none",
                                transition: "filter 0.3s",
                            }}>{p.price}</span>
                            <span style={{ fontSize: 10, color: "rgba(255,255,255,0.22)", fontFamily: "var(--font-geist-sans)" }}>
                                one-time
                            </span>
                        </div>

                        <Link href={`/contact`} style={{ textDecoration: "none", flexShrink: 0 }}>
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 0 24px rgba(34,211,238,0.45)" }}
                                whileTap={{ scale: 0.97 }}
                                style={{
                                    padding: "10px 20px", borderRadius: 11,
                                    background: hov
                                        ? "linear-gradient(135deg,#06b6d4,#10b981)"
                                        : "rgba(34,211,238,0.1)",
                                    border: `1px solid ${hov ? "transparent" : "rgba(34,211,238,0.2)"}`,
                                    color: hov ? "#000" : "#22d3ee",
                                    fontSize: 12, fontWeight: 700,
                                    fontFamily: "var(--font-geist-sans)", cursor: "pointer",
                                    transition: "background 0.25s, color 0.25s, border-color 0.25s",
                                    whiteSpace: "nowrap" as const,
                                }}
                            >Customize →</motion.button>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function ProjectsClient({ projects }: { projects: any[] }) {
    const [filter, setFilter] = useState("all");

    const filtered = filter === "all"
        ? projects
        : projects.filter((p: any) => p.level === filter);

    return (
        <div style={{
            position: "relative", zIndex: 10,
            padding: "120px 5% 100px",
            maxWidth: 1280, margin: "0 auto",
        }}>


            {/* ── Header ─────────────────────────────────────────────────────── */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                style={{ marginBottom: 48 }}
            >
                <p style={{
                    fontSize: 11, fontWeight: 600, letterSpacing: "2.5px",
                    textTransform: "uppercase", color: "#22d3ee",
                    fontFamily: "var(--font-geist-mono)", marginBottom: 14,
                }}>All Projects</p>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16 }}>
                    <h1 style={{
                        fontSize: "clamp(32px,4.5vw,56px)",
                        fontWeight: 900, letterSpacing: "-1.5px", lineHeight: 1.05,
                        fontFamily: "var(--font-geist-sans)", color: "#fff",
                    }}>
                        Browse{" "}
                        <span style={{
                            background: "linear-gradient(135deg,#22d3ee,#10b981)",
                            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                        }}>Projects</span>
                    </h1>

                    {/* Live count */}
                    <motion.div
                        animate={{ opacity: 1 }}
                        style={{
                            padding: "8px 18px", borderRadius: 10,
                            background: "rgba(34,211,238,0.07)",
                            border: "1px solid rgba(34,211,238,0.15)",
                        }}
                    >
                        <span style={{
                            fontSize: 13, fontWeight: 700, color: "#22d3ee",
                            fontFamily: "var(--font-geist-sans)",
                        }}>
                            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
                            {filter !== "all" && (
                                <span style={{ color: "rgba(255,255,255,0.3)", fontWeight: 400 }}>
                                    {" "}· {filter}
                                </span>
                            )}
                        </span>
                    </motion.div>
                </div>
            </motion.div>

            {/* ── Filter tabs ────────────────────────────────────────────────── */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                style={{
                    display: "flex", gap: 6, marginBottom: 44, flexWrap: "wrap",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 13, padding: 5, width: "fit-content",
                }}
            >
                {FILTERS.map(f => (
                    <motion.button
                        key={f}
                        onClick={() => setFilter(f)}
                        whileHover={{ scale: filter === f ? 1 : 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                            padding: "9px 20px", borderRadius: 9,
                            fontSize: 13, fontWeight: 600,
                            fontFamily: "var(--font-geist-sans)",
                            cursor: "pointer", border: "none",
                            background: filter === f
                                ? "linear-gradient(135deg,#06b6d4,#10b981)"
                                : "transparent",
                            color: filter === f ? "#000" : "rgba(255,255,255,0.4)",
                            boxShadow: filter === f ? "0 0 16px rgba(34,211,238,0.25)" : "none",
                            transition: "all 0.2s",
                            textTransform: "capitalize",
                        }}
                    >{f}</motion.button>
                ))}
            </motion.div>

            {/* ── Grid ───────────────────────────────────────────────────────── */}
            <AnimatePresence mode="popLayout">
                {filtered.length === 0 ? (
                    <motion.div
                        key="empty"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            textAlign: "center", padding: "80px 20px",
                            borderRadius: 20, border: "1px dashed rgba(34,211,238,0.12)",
                            background: "rgba(5,12,28,0.5)",
                        }}
                    >
                        <div style={{ fontSize: 40, marginBottom: 14 }}>🔍</div>
                        <p style={{ fontSize: 16, fontWeight: 700, color: "#fff", fontFamily: "var(--font-geist-sans)", marginBottom: 6 }}>
                            No {filter} projects yet
                        </p>
                        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-geist-sans)" }}>
                            Try a different filter or check back soon.
                        </p>
                    </motion.div>
                ) : (
                    <motion.div
                        key="grid"
                        layout
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill,minmax(290px,1fr))",
                            gap: 18, alignItems: "stretch",
                        }}
                    >
                        {filtered.map((p: any, i: number) => (
                            <div key={p.id} style={{ display: "flex" }}>
                                <ProjectCard p={p} i={i} />
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── Bottom strip ───────────────────────────────────────────────── */}
            {filtered.length > 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    style={{
                        marginTop: 52, padding: "20px 28px", borderRadius: 16,
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        display: "flex", alignItems: "center",
                        justifyContent: "space-between", flexWrap: "wrap", gap: 16,
                    }}
                >
                    <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-geist-sans)" }}>
                        Can't find what you're looking for?
                    </p>
                    <Link href="/contact" style={{ textDecoration: "none" }}>
                        <motion.button
                            whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(34,211,238,0.4)" }}
                            whileTap={{ scale: 0.97 }}
                            style={{
                                padding: "10px 22px", borderRadius: 10,
                                background: "linear-gradient(135deg,#06b6d4,#10b981)",
                                border: "none", color: "#000", fontSize: 13, fontWeight: 700,
                                fontFamily: "var(--font-geist-sans)", cursor: "pointer",
                            }}
                        >Request a Custom Project →</motion.button>
                    </Link>
                </motion.div>
            )}
        </div>
    );
}