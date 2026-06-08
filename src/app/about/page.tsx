"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
// ─── Team data ────────────────────────────────────────────────────────────────
const TEAM = [
    {
        num: "01",
        name: "Lohith L",
        role: "Web Developer",
        photo: "/team/lohith.jpg",      // place photo at public/team/lohith.jpg
        accent: "#22d3ee",
        glow: "rgba(34,211,238,0.15)",
        bg: "rgba(34,211,238,0.07)",
        degree: "B.Tech CSE",
        tags: ["React", "JavaScript", "HTML/CSS", "IEEE Papers"],
        skills: [
            { icon: "⚛️", label: "React Expert" },
            { icon: "🌐", label: "JS Projects" },
            { icon: "📄", label: "IEEE Paper & Report Mgmt" },
            { icon: "🎓", label: "B.Tech CSE" },
        ],
        desc: "Frontend-focused web developer with deep React expertise. Handles all JS-heavy projects and manages IEEE paper preparation and documentation.",
    },
    {
        num: "02",
        name: "Thilak G",
        role: "Full-Stack & AI Developer",
        photo: "/team/thilak.jpg",      // place photo at public/team/thilak.jpg
        accent: "#10b981",
        glow: "rgba(16,185,129,0.15)",
        bg: "rgba(16,185,129,0.07)",
        degree: "B.Tech CSE",
        tags: ["Next.js", "Python", "AI/ML", "Blockchain"],
        skills: [
            { icon: "🤖", label: "AI / ML / NLP / LLMs" },
            { icon: "🔗", label: "Blockchain Expert" },
            { icon: "⚡", label: "Next.js & Full-Stack" },
            { icon: "🧠", label: "OpenCV · YOLO · Framer" },
        ],
        desc: "End-to-end developer and founder of Projixio. Expert in Next.js, Python AI/ML pipelines, blockchain, and cinematic UI with Framer Motion & GSAP.",
        highlight: true,
    },
    {
        num: "03",
        name: "JP HariKrishna Raj",
        role: "ECE & IoT Engineer",
        photo: "/team/hari.jpg",        // place photo at public/team/hari.jpg
        accent: "#a78bfa",
        glow: "rgba(167,139,250,0.15)",
        bg: "rgba(167,139,250,0.07)",
        degree: "B.Tech ECE",
        tags: ["Arduino", "NodeMCU", "IoT", "Embedded C"],
        skills: [
            { icon: "📡", label: "ECE & IoT Projects" },
            { icon: "🔌", label: "Arduino · NodeMCU" },
            { icon: "⚙️", label: "Embedded Systems" },
            { icon: "🎓", label: "B.Tech ECE" },
        ],
        desc: "Hands-on hardware and IoT engineer with extensive experience delivering real embedded projects — from smart devices to robotics and automation.",
    },
];

// ─── Skill pill ───────────────────────────────────────────────────────────────
function SkillPill({ icon, label, accent }: { icon: string; label: string; accent: string }) {
    return (

        <div style={{
            display: "flex", alignItems: "center", gap: 8,
            padding: "8px 14px", borderRadius: 10,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
        }}>
            <span style={{ fontSize: 14 }}>{icon}</span>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-geist-sans)" }}>
                {label}
            </span>
        </div>
    );
}

// ─── Member card ──────────────────────────────────────────────────────────────
function MemberCard({ member, i }: { member: typeof TEAM[0]; i: number }) {
    const [hov, setHov] = useState(false);
    const isCenter = member.highlight;

    return (
        <motion.div
            onHoverStart={() => setHov(true)}
            onHoverEnd={() => setHov(false)}
            whileHover={{ y: isCenter ? -12 : -8 }}
            transition={{ type: "spring", stiffness: 240, damping: 22 }}
            style={{
                position: "relative",
                borderRadius: 24, overflow: "hidden",
                background: hov ? "rgba(8,16,36,0.92)" : "rgba(5,12,28,0.75)",
                border: `1px solid ${hov ? member.accent + "40" : "rgba(255,255,255,0.08)"}`,
                backdropFilter: "blur(24px)",
                boxShadow: hov
                    ? `0 32px 80px ${member.glow}, 0 0 0 1px ${member.accent}22`
                    : isCenter
                        ? `0 12px 48px ${member.glow}`
                        : "0 4px 32px rgba(0,0,0,0.3)",
                transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
                // Center card is taller
                marginTop: isCenter ? 0 : 32,
            }}
        >
            {/* ── Number badge ──────────────────────────────────────────── */}
            <div style={{
                position: "absolute", top: 18, left: 18, zIndex: 2,
                fontSize: 11, fontWeight: 700, letterSpacing: "2px",
                color: member.accent, fontFamily: "var(--font-geist-mono)",
                background: member.bg,
                border: `1px solid ${member.accent}30`,
                padding: "4px 10px", borderRadius: 7,
            }}>{member.num}</div>

            {/* ── Photo area ────────────────────────────────────────────── */}
            {/* <div style={{
                height: isCenter ? 320 : 280,
                background: `linear-gradient(160deg, ${member.bg} 0%, rgba(5,12,28,0.6) 100%)`,
                position: "relative", overflow: "hidden",
                display: "flex", alignItems: "flex-end", justifyContent: "center",
            }}> */}
            {/* Glow blob behind photo */}
            {/* <motion.div
                    animate={{ opacity: hov ? 0.8 : 0.4, scale: hov ? 1.1 : 1 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        position: "absolute", bottom: -20, left: "50%",
                        transform: "translateX(-50%)",
                        width: 220, height: 220, borderRadius: "50%",
                        background: `radial-gradient(circle, ${member.glow} 0%, transparent 70%)`,
                        filter: "blur(24px)", pointerEvents: "none",
                    }}
                /> */}

            {/* Photo */}
            {/* <div style={{
                    width: isCenter ? 200 : 170, height: isCenter ? 280 : 240,
                    position: "relative", zIndex: 1,
                    display: "flex", alignItems: "flex-end", justifyContent: "center",
                }}>
                    <img
                        src={member.photo}
                        alt={member.name}
                        onError={e => {
                            // Fallback avatar if photo not found
                            (e.target as HTMLImageElement).style.display = "none";
                            const parent = (e.target as HTMLImageElement).parentElement!;
                            parent.innerHTML = `<div style="width:${isCenter ? 140 : 120}px;height:${isCenter ? 140 : 120}px;border-radius:50%;background:linear-gradient(135deg,${member.accent}40,${member.accent}15);border:2px solid ${member.accent}40;display:flex;align-items:center;justify-content:center;font-size:52px;margin-bottom:16px;">${member.name[0]}</div>`;
                        }}
                        style={{
                            width: "100%", height: "100%",
                            objectFit: "cover", objectPosition: "top",
                            display: "block",
                            filter: hov ? "brightness(1)" : "brightness(0.9)",
                            transition: "filter 0.3s",
                        }}
                    />
                </div> */}

            {/* Name badge floating over image bottom */}
            {/* <div style={{
                    position: "absolute", bottom: 14, right: 14, zIndex: 3,
                    display: "flex", alignItems: "center", gap: 7,
                    padding: "6px 12px", borderRadius: 100,
                    background: "rgba(3,8,20,0.85)", backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                }}>
                    <span style={{
                        width: 7, height: 7, borderRadius: "50%",
                        background: member.accent,
                        boxShadow: `0 0 8px ${member.accent}`,
                        display: "block", flexShrink: 0,
                    }} />
                    <span style={{ fontSize: 12, color: "#fff", fontFamily: "var(--font-geist-sans)", fontWeight: 500 }}>
                        {member.name}
                    </span>
                </div> */}

            {/* Gradient fade at bottom */}
            {/* <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0, height: 80,
                    background: "linear-gradient(to top, rgba(5,12,28,0.9), transparent)",
                    pointerEvents: "none",
                }} />
            </div> */}

            {/* ── Photo area ────────────────────────────────────────────── */}
            <div
                style={{
                    height: isCenter ? 320 : 280,
                    overflow: "hidden",
                    position: "relative",
                    flexShrink: 0,
                    background: `linear-gradient(160deg, ${member.bg} 0%, rgba(5,12,28,0.6) 100%)`,
                }}
            >
                <motion.img
                    animate={{ scale: hov ? 1.06 : 1 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    src={member.photo}
                    alt={member.name}
                    onError={e => {
                        (e.target as HTMLImageElement).style.display = "none";
                    }}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "top center",
                        display: "block",
                        filter: hov ? "brightness(1)" : "brightness(0.9)",
                        transition: "filter 0.3s",
                    }}
                />

                {/* Gradient overlay */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(to bottom, transparent 35%, rgba(6,11,26,0.92) 100%)",
                    }}
                />

                {/* Glow blob */}
                <motion.div
                    animate={{ opacity: hov ? 0.8 : 0.45, scale: hov ? 1.1 : 1 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        position: "absolute",
                        bottom: -20,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 220,
                        height: 220,
                        borderRadius: "50%",
                        background: `radial-gradient(circle, ${member.glow} 0%, transparent 70%)`,
                        filter: "blur(24px)",
                        pointerEvents: "none",
                    }}
                />

                {/* Name badge */}
                <div
                    style={{
                        position: "absolute",
                        bottom: 14,
                        right: 14,
                        zIndex: 3,
                        display: "flex",
                        alignItems: "center",
                        gap: 7,
                        padding: "6px 12px",
                        borderRadius: 100,
                        background: "rgba(3,8,20,0.85)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid rgba(255,255,255,0.1)",
                    }}
                >
                    <span
                        style={{
                            width: 7,
                            height: 7,
                            borderRadius: "50%",
                            background: member.accent,
                            boxShadow: `0 0 8px ${member.accent}`,
                            display: "block",
                            flexShrink: 0,
                        }}
                    />
                    <span
                        style={{
                            fontSize: 12,
                            color: "#fff",
                            fontFamily: "var(--font-geist-sans)",
                            fontWeight: 500,
                        }}
                    >
                        {member.name}
                    </span>
                </div>

                {/* Number badge */}
                <div
                    style={{
                        position: "absolute",
                        top: 18,
                        left: 18,
                        zIndex: 3,
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: "2px",
                        color: member.accent,
                        fontFamily: "var(--font-geist-mono)",
                        background: member.bg,
                        border: `1px solid ${member.accent}30`,
                        padding: "4px 10px",
                        borderRadius: 7,
                    }}
                >
                    {member.num}
                </div>
            </div>

            {/* ── Content ───────────────────────────────────────────────── */}
            <div style={{ padding: "22px 24px 26px" }}>

                {/* Role */}
                <p style={{
                    fontSize: 12, fontWeight: 600, letterSpacing: "0.5px",
                    color: member.accent, fontFamily: "var(--font-geist-sans)",
                    marginBottom: 6,
                }}>{member.role}</p>

                {/* Name */}
                <h3 style={{
                    fontSize: 22, fontWeight: 900, letterSpacing: "-0.5px",
                    color: "#fff", fontFamily: "var(--font-geist-sans)",
                    marginBottom: 12, lineHeight: 1.2,
                }}>{member.name}</h3>

                {/* Desc */}
                <p style={{
                    fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.65,
                    fontFamily: "var(--font-geist-sans)", marginBottom: 18,
                }}>{member.desc}</p>

                {/* Tech tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
                    {member.tags.map(tag => (
                        <span key={tag} style={{
                            fontSize: 10, padding: "4px 10px", borderRadius: 7,
                            background: member.bg, color: member.accent,
                            border: `1px solid ${member.accent}28`,
                            fontFamily: "var(--font-geist-mono)",
                        }}>{tag}</span>
                    ))}
                </div>

                {/* Skill list */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {member.skills.map(s => (
                        <SkillPill key={s.label} icon={s.icon} label={s.label} accent={member.accent} />
                    ))}
                </div>

                {/* Degree badge */}
                <div style={{
                    marginTop: 18, padding: "8px 14px", borderRadius: 10,
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    display: "flex", alignItems: "center", gap: 8,
                }}>
                    <span style={{ fontSize: 14 }}>🎓</span>
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-geist-sans)" }}>
                        {member.degree}
                    </span>
                </div>

                {/* Bottom glow line on hover */}
                <motion.div
                    animate={{ scaleX: hov ? 1 : 0, opacity: hov ? 1 : 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        height: 1, marginTop: 20,
                        background: `linear-gradient(90deg,transparent,${member.accent},transparent)`,
                        transformOrigin: "center",
                    }}
                />
            </div>
        </motion.div>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <>
            <Navbar />
            <div style={{ position: "relative", zIndex: 10, padding: "120px 5% 100px", maxWidth: 1280, margin: "0 auto" }}>

                {/* Ambient blobs */}
                <div style={{
                    position: "absolute", top: "5%", left: "-5%",
                    width: 400, height: 400, borderRadius: "50%",
                    background: "radial-gradient(circle,rgba(34,211,238,0.08) 0%,transparent 70%)",
                    filter: "blur(70px)", pointerEvents: "none",
                }} />
                <div style={{
                    position: "absolute", top: "30%", right: "-5%",
                    width: 360, height: 360, borderRadius: "50%",
                    background: "radial-gradient(circle,rgba(16,185,129,0.07) 0%,transparent 70%)",
                    filter: "blur(60px)", pointerEvents: "none",
                }} />

                {/* ── Section header ─────────────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    style={{ textAlign: "center", marginBottom: 80 }}
                >
                    {/* Eyebrow */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{
                            fontSize: 11, fontWeight: 600, letterSpacing: "3px",
                            textTransform: "uppercase", color: "#22d3ee",
                            fontFamily: "var(--font-geist-mono)", marginBottom: 20,
                        }}
                    >About Us</motion.p>

                    {/* Big heading */}
                    <div style={{ overflow: "hidden", marginBottom: 8 }}>
                        <motion.h1
                            initial={{ y: "105%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                            style={{
                                fontSize: "clamp(40px,6vw,72px)",
                                fontWeight: 900, letterSpacing: "-2.5px", lineHeight: 1.0,
                                fontFamily: "var(--font-geist-sans)", color: "#fff",
                            }}
                        >
                            The team behind
                        </motion.h1>
                    </div>
                    <div style={{ overflow: "hidden", marginBottom: 24 }}>
                        <motion.h1
                            initial={{ y: "105%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                            style={{
                                fontSize: "clamp(40px,6vw,72px)",
                                fontWeight: 900, letterSpacing: "-2.5px", lineHeight: 1.0,
                                fontFamily: "var(--font-geist-sans)",
                            }}
                        >
                            <span style={{
                                background: "linear-gradient(120deg,#22d3ee 0%,#10b981 50%,#a78bfa 100%)",
                                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                                filter: "drop-shadow(0 0 28px rgba(34,211,238,0.3))",
                            }}>ProjectForge</span>
                        </motion.h1>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        style={{
                            fontSize: "clamp(14px,1.2vw,17px)",
                            color: "rgba(255,255,255,0.38)", lineHeight: 1.7,
                            fontFamily: "var(--font-geist-sans)", maxWidth: 500, margin: "0 auto 40px",
                        }}
                    >
                        Three engineers. Three domains. One goal — delivering complete, ready-to-submit engineering projects that actually work.
                    </motion.p>

                    {/* Stats strip */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        style={{
                            display: "inline-flex", gap: 0,
                            background: "rgba(255,255,255,0.03)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: 16, overflow: "hidden",
                        }}
                    >
                        {[
                            { val: "50+", label: "Students Helped" },
                            { val: "30+", label: "Projects Built" },
                            { val: "3", label: "Domains Covered" },
                        ].map((s, i) => (
                            <div key={s.label} style={{
                                padding: "16px 32px", textAlign: "center",
                                borderRight: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
                            }}>
                                <p style={{
                                    fontSize: 24, fontWeight: 900, lineHeight: 1,
                                    background: "linear-gradient(135deg,#22d3ee,#10b981)",
                                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                                    fontFamily: "var(--font-geist-sans)", marginBottom: 4,
                                }}>{s.val}</p>
                                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-geist-sans)" }}>
                                    {s.label}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* ── Divider ────────────────────────────────────────────────────── */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        height: 1, marginBottom: 72,
                        background: "linear-gradient(90deg,transparent,rgba(34,211,238,0.25),rgba(16,185,129,0.2),rgba(167,139,250,0.15),transparent)",
                        transformOrigin: "left",
                    }}
                />

                {/* ── Team cards ─────────────────────────────────────────────────── */}
                <div
                    ref={ref}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3,1fr)",
                        gap: 20,
                        alignItems: "start",
                    }}
                    className="team-grid"
                >
                    {TEAM.map((member, i) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.1 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <MemberCard member={member} i={i} />
                        </motion.div>
                    ))}
                </div>

                {/* ── Bottom CTA ─────────────────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    style={{
                        marginTop: 72, padding: "28px 36px",
                        borderRadius: 20,
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        display: "flex", alignItems: "center",
                        justifyContent: "space-between", flexWrap: "wrap", gap: 20,
                    }}
                >
                    <div>
                        <p style={{
                            fontSize: 18, fontWeight: 700, color: "#fff",
                            fontFamily: "var(--font-geist-sans)", marginBottom: 6, letterSpacing: "-0.3px",
                        }}>Want to work with us?</p>
                        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-geist-sans)" }}>
                            Tell us your project — we'll get back within 2 hours.
                        </p>
                    </div>
                    <Link href="/contact" style={{ textDecoration: "none" }}>
                        <motion.button
                            whileHover={{ scale: 1.04, boxShadow: "0 0 32px rgba(34,211,238,0.45)" }}
                            whileTap={{ scale: 0.97 }}
                            style={{
                                padding: "13px 28px", borderRadius: 12,
                                background: "linear-gradient(135deg,#06b6d4,#10b981)",
                                border: "none", color: "#000", fontSize: 14, fontWeight: 700,
                                fontFamily: "var(--font-geist-sans)", cursor: "pointer",
                                boxShadow: "0 0 24px rgba(34,211,238,0.3)",
                            }}
                        >Get a Free Quote →</motion.button>
                    </Link>
                </motion.div>

                {/* Photo placeholder notice */}
                <p style={{
                    textAlign: "center", marginTop: 32,
                    fontSize: 11, color: "rgba(255,255,255,0.15)",
                    fontFamily: "var(--font-geist-mono)",
                }}>
                    📸 Add team photos at <code style={{ color: "rgba(34,211,238,0.4)" }}>public/team/lohith.jpg</code>, <code style={{ color: "rgba(34,211,238,0.4)" }}>thilak.jpg</code>, <code style={{ color: "rgba(34,211,238,0.4)" }}>hari.jpg</code>
                </p>

                <style>{`
        @media (max-width: 900px) {
          .team-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 580px) {
          .team-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
            </div>
        </>
    );
}