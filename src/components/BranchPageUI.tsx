"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
const INCLUDES = ["Code", "PPT", "Setup"];

const LEVEL_STYLE: Record<string, { bg: string; color: string; border: string }> = {
    beginner: { bg: "rgba(16,185,129,0.1)", color: "#34d399", border: "rgba(16,185,129,0.2)" },
    intermediate: { bg: "rgba(251,191,36,0.1)", color: "#fbbf24", border: "rgba(251,191,36,0.2)" },
    advanced: { bg: "rgba(239,68,68,0.1)", color: "#f87171", border: "rgba(239,68,68,0.2)" },
};

const FALLBACK_ICONS = ["🧠", "📡", "💻", "🤖", "📊", "⚙️"];

interface BranchPageUIProps {
    branch: string;       // display name e.g. "CSE / AI / Web"
    desc: string;         // subtitle
    icon: string;         // emoji
    accent: string;       // hex colour e.g. "#22d3ee"
    glow: string;         // rgba string e.g. "rgba(34,211,238,0.12)"
    projects: any[];
}

// ─── Single project card ──────────────────────────────────────────────────────
function ProjectCard({ p, i, accent, glow }: { p: any; i: number; accent: string; glow: string }) {
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
                border: `1px solid ${hov ? accent + "35" : "rgba(255,255,255,0.07)"}`,
                backdropFilter: "blur(20px)",
                boxShadow: hov
                    ? `0 24px 60px ${glow}, 0 0 0 1px ${accent}18`
                    : "0 4px 32px rgba(0,0,0,0.35)",
                transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
                display: "flex", flexDirection: "column",
                // height: "100%",
                height: 360,
                width: 320,
            }}
        >

            {/* Top glow line */}
            <motion.div
                animate={{ opacity: hov ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{
                    position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
                    width: "80%", height: 1,
                    background: `linear-gradient(90deg,transparent,${accent}80,transparent)`,
                    pointerEvents: "none",
                }}
            />

            {/* Image / placeholder */}
            {p.image_urls?.length > 0 ? (
                <div style={{ height: 160, overflow: "hidden", position: "relative", flexShrink: 0 }}>
                    <motion.img
                        animate={{ scale: hov ? 1.06 : 1 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        src={p.image_urls[0]}
                        alt={p.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                    <div style={{
                        position: "absolute", inset: 0,
                        background: "linear-gradient(to bottom, transparent 35%, rgba(6,11,26,0.92) 100%)",
                    }} />
                    {p.level && (
                        <span style={{
                            position: "absolute", top: 12, right: 12,
                            fontSize: 10, padding: "4px 10px", borderRadius: 100,
                            background: lvl.bg, color: lvl.color, border: `1px solid ${lvl.border}`,
                            fontFamily: "var(--font-geist-sans)", fontWeight: 600,
                            textTransform: "capitalize",
                        }}>{p.level}</span>
                    )}
                </div>
            ) : (
                <div style={{
                    height: 160, flexShrink: 0,
                    background: `linear-gradient(135deg,${glow},rgba(16,185,129,0.04))`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 44, position: "relative",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}>
                    {FALLBACK_ICONS[i % FALLBACK_ICONS.length]}
                    {p.level && (
                        <span style={{
                            position: "absolute", top: 12, right: 12,
                            fontSize: 10, padding: "4px 10px", borderRadius: 100,
                            background: lvl.bg, color: lvl.color, border: `1px solid ${lvl.border}`,
                            fontFamily: "var(--font-geist-sans)", fontWeight: 600,
                            textTransform: "capitalize",
                        }}>{p.level}</span>
                    )}
                </div>
            )}

            {/* Body */}

            {/* <div style={{ padding: "20px 22px 22px", display: "flex", flexDirection: "column", flex: 1 }}> */}
            <div
                style={{
                    padding: "12px",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    justifyContent: "space-between",
                    gap: 4,
                }}
            >
                <h3 style={{
                    minHeight: 20, fontSize: 15, fontWeight: 800, letterSpacing: "-0.3px", lineHeight: 1.3,
                    color: hov ? "#fff" : "rgba(255,255,255,0.88)",
                    fontFamily: "var(--font-geist-sans)", marginBottom: 6,
                    transition: "color 0.2s",
                }}>{p.title}</h3>

                {p.description && (
                    <p style={{
                        minHeight: 30, fontSize: 12, color: "rgba(255,255,255,0.35)", lineHeight: 1.35,
                        fontFamily: "var(--font-geist-sans)", marginBottom: 0,
                        display: "-webkit-box", WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical" as const, overflow: "hidden",
                    }}>{p.description}</p>
                )}

                {/* Tech stack */}
                {p.tech_stack?.length > 0 && (
                    // <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 6,
                            marginBottom: 0,
                            minHeight: 32,
                            alignContent: "flex-start",
                        }}
                    >
                        {p.tech_stack.slice(0, 4).map((t: string, j: number) => (
                            <span key={j} style={{
                                fontSize: 10, padding: "3px 9px", borderRadius: 7,
                                background: "rgba(255,255,255,0.05)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                color: "rgba(255,255,255,0.38)",
                                fontFamily: "var(--font-geist-mono)",
                            }}>{t}</span>
                        ))}
                    </div>
                )}

                {/* Includes */}
                <div style={{
                    display: "flex", gap: 8, marginBottom: 10,
                    paddingBottom: 10, borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}>
                    {INCLUDES.map(inc => (
                        <span key={inc} style={{
                            fontSize: 11, color: "rgba(255,255,255,0.3)",
                            fontFamily: "var(--font-geist-sans)",
                            display: "flex", alignItems: "center", gap: 1,
                        }}>
                            <span style={{ color: "#34d399", fontSize: 10 }}>✓</span>{inc}
                        </span>
                    ))}
                </div>

                {/* Price + CTA */}
                <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                    <div>
                        <span style={{
                            fontSize: 18, fontWeight: 900, lineHeight: 1,
                            background: `linear-gradient(135deg,${accent},#10b981)`,
                            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                            fontFamily: "var(--font-geist-sans)", display: "block",
                            filter: hov ? `drop-shadow(0 0 10px ${accent}80)` : "none",
                            transition: "filter 0.3s",
                        }}>{p.price}</span>
                        <span style={{ fontSize: 10, color: "rgba(255,255,255,0.25)", fontFamily: "var(--font-geist-sans)" }}>
                            one-time
                        </span>
                    </div>

                    <Link href={`/contact`} style={{ textDecoration: "none", flexShrink: 0 }}>
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: `0 0 24px ${accent}60` }}
                            whileTap={{ scale: 0.97 }}
                            style={{
                                padding: "8px 14px", borderRadius: 11,
                                background: hov
                                    ? `linear-gradient(135deg,${accent},#10b981)`
                                    : `${accent}18`,
                                border: `1px solid ${hov ? "transparent" : accent + "28"}`,
                                color: hov ? "#000" : accent,
                                fontSize: 12, fontWeight: 700,
                                fontFamily: "var(--font-geist-sans)",
                                cursor: "pointer",
                                transition: "background 0.25s, color 0.25s, border-color 0.25s",
                            }}
                        >Customize →</motion.button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function BranchPageUI({ branch, desc, icon, accent, glow, projects }: BranchPageUIProps) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <section
            ref={ref}
            style={{
                position: "relative", zIndex: 10,
                padding: "120px 5% 100px",
                maxWidth: 1280, margin: "0 auto",
            }}
        >
            {/* Ambient blob */}
            <div style={{
                position: "absolute", top: "10%", left: "-5%",
                width: 400, height: 400, borderRadius: "50%",
                background: `radial-gradient(circle,${glow} 0%,transparent 70%)`,
                filter: "blur(70px)", pointerEvents: "none",
            }} />

            {/* ── Divider ──────────────────────────────────────────────────────── */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    height: 1, marginBottom: 64,
                    background: `linear-gradient(90deg,transparent,${accent}40,rgba(16,185,129,0.2),transparent)`,
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
                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}
                    >
                        <div style={{
                            width: 40, height: 40, borderRadius: 11, flexShrink: 0,
                            background: glow, border: `1px solid ${accent}30`,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontSize: 20,
                        }}>{icon}</div>
                        <p style={{
                            fontSize: 11, fontWeight: 600, letterSpacing: "2.5px",
                            textTransform: "uppercase", color: accent,
                            fontFamily: "var(--font-geist-mono)",
                        }}>Branch · {branch}</p>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 18 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.65, delay: 0.08 }}
                        style={{
                            fontSize: "clamp(32px,4.5vw,56px)",
                            fontWeight: 900, letterSpacing: "-1.5px", lineHeight: 1.05,
                            fontFamily: "var(--font-geist-sans)", color: "#fff",
                            marginBottom: 12,
                        }}
                    >
                        <span style={{
                            background: `linear-gradient(135deg,${accent},#10b981)`,
                            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                        }}>{branch}</span>
                        {" "}Projects
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.2 }}
                        style={{
                            fontSize: 14, color: "rgba(255,255,255,0.35)",
                            fontFamily: "var(--font-geist-sans)", lineHeight: 1.65,
                            maxWidth: 400,
                        }}
                    >{desc}</motion.p>
                </div>

                {/* Count badge + CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.3 }}
                    style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12 }}
                >
                    <div style={{
                        padding: "10px 20px", borderRadius: 12,
                        background: `${glow}`,
                        border: `1px solid ${accent}25`,
                    }}>
                        <span style={{
                            fontSize: 28, fontWeight: 900,
                            background: `linear-gradient(135deg,${accent},#10b981)`,
                            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                            fontFamily: "var(--font-geist-sans)",
                        }}>{projects.length}</span>
                        <span style={{
                            fontSize: 12, color: "rgba(255,255,255,0.35)",
                            fontFamily: "var(--font-geist-sans)", marginLeft: 8,
                        }}>projects ready</span>
                    </div>

                    <Link href="/contact" style={{ textDecoration: "none" }}>
                        <motion.button
                            whileHover={{ scale: 1.04, boxShadow: `0 0 28px ${accent}60` }}
                            whileTap={{ scale: 0.97 }}
                            style={{
                                padding: "10px 22px", borderRadius: 10,
                                background: `linear-gradient(135deg,${accent},#10b981)`,
                                border: "none", color: "#000",
                                fontSize: 13, fontWeight: 700,
                                fontFamily: "var(--font-geist-sans)", cursor: "pointer",
                            }}
                        >Custom Order →</motion.button>
                    </Link>
                </motion.div>
            </div>

            {/* ── Cards / empty state ───────────────────────────────────────────── */}
            {projects.length === 0 ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.3 }}
                    style={{
                        textAlign: "center", padding: "80px 20px",
                        borderRadius: 20, border: `1px dashed ${accent}20`,
                        background: "rgba(5,12,28,0.5)",
                    }}
                >
                    <div style={{ fontSize: 48, marginBottom: 16 }}>{icon}</div>
                    <p style={{ fontSize: 17, fontWeight: 700, color: "#fff", fontFamily: "var(--font-geist-sans)", marginBottom: 8 }}>
                        No projects yet
                    </p>
                    <p style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-geist-sans)", marginBottom: 28 }}>
                        Projects added under <strong style={{ color: accent }}>{branch}</strong> will appear here.
                    </p>
                    <Link href="/contact" style={{ textDecoration: "none" }}>
                        <motion.button
                            whileHover={{ scale: 1.04 }}
                            style={{
                                padding: "12px 28px", borderRadius: 12,
                                background: `linear-gradient(135deg,${accent},#10b981)`,
                                border: "none", color: "#000", fontSize: 13, fontWeight: 700,
                                fontFamily: "var(--font-geist-sans)", cursor: "pointer",
                            }}
                        >Request a Custom Project →</motion.button>
                    </Link>
                </motion.div>
            ) : (
                <div style={{
                    display: "grid",
                    // gridTemplateColumns: "repeat(auto-fill, minmax(290px,1fr))",
                    // gridTemplateColumns: "repeat(auto-fill, minmax(320px,1fr))",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 320px))",
                    justifyContent: "center",
                    gap: 20, alignItems: "stretch",
                }}>
                    {projects.map((p: any, i: number) => (
                        <motion.div
                            key={p.id ?? i}
                            initial={{ opacity: 0, y: 36 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.15 + i * 0.09, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                            style={{ display: "flex", height: "100%" }}
                        >
                            <ProjectCard p={p} i={i} accent={accent} glow={glow} />
                        </motion.div>
                    ))}
                </div>
            )}

            {/* ── Bottom strip ─────────────────────────────────────────────────── */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                style={{
                    marginTop: 52, padding: "20px 28px", borderRadius: 16,
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    display: "flex", alignItems: "center",
                    justifyContent: "space-between", flexWrap: "wrap", gap: 16,
                }}
            >
                <p style={{
                    fontSize: 13, color: "rgba(255,255,255,0.35)",
                    fontFamily: "var(--font-geist-sans)",
                }}>
                    Need something specific? We build custom projects too.
                </p>
                <Link href="/contact" style={{ textDecoration: "none" }}>
                    <motion.button
                        whileHover={{ scale: 1.04, boxShadow: `0 0 28px ${accent}50` }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                            padding: "10px 22px", borderRadius: 10,
                            background: `linear-gradient(135deg,${accent},#10b981)`,
                            border: "none", color: "#000", fontSize: 13, fontWeight: 700,
                            fontFamily: "var(--font-geist-sans)", cursor: "pointer",
                        }}
                    >Get a Quote →</motion.button>
                </Link>
            </motion.div>
        </section>
    );
}