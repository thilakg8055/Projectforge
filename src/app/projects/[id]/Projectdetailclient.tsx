"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LEVEL_STYLE: Record<string, { bg: string; color: string; border: string }> = {
  beginner: { bg: "rgba(16,185,129,0.1)", color: "#34d399", border: "rgba(16,185,129,0.2)" },
  intermediate: { bg: "rgba(251,191,36,0.1)", color: "#fbbf24", border: "rgba(251,191,36,0.2)" },
  advanced: { bg: "rgba(239,68,68,0.1)", color: "#f87171", border: "rgba(239,68,68,0.2)" },
};

const BRANCH_LABELS: Record<string, { label: string; href: string; accent: string }> = {
  "cse": { label: "CSE / AI", href: "/cse", accent: "#22d3ee" },
  "ds-ml": { label: "Data Science / ML", href: "/ds-ml", accent: "#10b981" },
  "ece-iot": { label: "ECE / IoT", href: "/ece-iot", accent: "#3b82f6" },
  "robotics": { label: "Robotics", href: "/robotics", accent: "#a78bfa" },
};

const INCLUDES = [
  { icon: "💻", label: "Source Code", desc: "Complete, well-commented code" },
  { icon: "📊", label: "Project Report", desc: "Full documentation & report" },
  { icon: "🖼️", label: "PPT Slides", desc: "Presentation-ready slide deck" },
  { icon: "🛠", label: "Setup Guide", desc: "Step-by-step setup instructions" },
  { icon: "💬", label: "WhatsApp Support", desc: "Direct support during setup" },
];

function ImageGallery({ urls }: { urls: string[] }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  if (!urls?.length) return null;

  return (
    <>
      <motion.div
        key={active}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
        onClick={() => setLightbox(true)}
        style={{ borderRadius: 20, overflow: "hidden", marginBottom: 10, cursor: "zoom-in", height: 340 }}
      >
        <img src={urls[active]} alt="Project preview"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </motion.div>

      {urls.length > 1 && (
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {urls.map((url, i) => (
            <div key={i} onClick={() => setActive(i)} style={{
              width: 60, height: 60, borderRadius: 10, overflow: "hidden",
              cursor: "pointer", flexShrink: 0,
              border: `2px solid ${active === i ? "rgba(34,211,238,0.6)" : "rgba(255,255,255,0.08)"}`,
              opacity: active === i ? 1 : 0.5,
              transition: "border-color 0.2s, opacity 0.2s",
            }}>
              <img src={url} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          ))}
        </div>
      )}

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLightbox(false)}
            style={{
              position: "fixed", inset: 0, zIndex: 2000,
              background: "rgba(0,0,0,0.92)", backdropFilter: "blur(14px)",
              display: "flex", alignItems: "center", justifyContent: "center", padding: 20,
            }}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              onClick={e => e.stopPropagation()}
            >
              <img src={urls[active]} alt=""
                style={{ maxWidth: "90vw", maxHeight: "88vh", borderRadius: 16, objectFit: "contain", display: "block" }} />
            </motion.div>
            <button onClick={() => setLightbox(false)} style={{
              position: "absolute", top: 24, right: 24,
              width: 40, height: 40, borderRadius: "50%",
              background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)",
              color: "#fff", fontSize: 18, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>✕</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function ProjectDetailClient({ project: p }: { project: any }) {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const lvl = LEVEL_STYLE[p.level] ?? LEVEL_STYLE.beginner;
  const branch = BRANCH_LABELS[p.branch];
  const quoteUrl = `/contact?project=${encodeURIComponent(p.title)}`;

  const share = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ position: "relative", zIndex: 10, padding: "110px 5% 0", maxWidth: 1280, margin: "0 auto" }}>

      <div style={{
        position: "fixed", top: "15%", right: "5%", width: 380, height: 380,
        borderRadius: "50%", pointerEvents: "none", zIndex: 0,
        background: "radial-gradient(circle,rgba(34,211,238,0.07) 0%,transparent 70%)",
        filter: "blur(70px)",
      }} />

      {/* Breadcrumb */}
      <motion.div
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 36, flexWrap: "wrap" }}
      >
        <Link href="/projects" style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", textDecoration: "none", fontFamily: "var(--font-geist-sans)", transition: "color 0.2s" }}
          onMouseEnter={e => ((e.target as HTMLElement).style.color = "#22d3ee")}
          onMouseLeave={e => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.3)")}
        >All Projects</Link>
        {branch && (
          <>
            <span style={{ color: "rgba(255,255,255,0.15)", fontSize: 12 }}>›</span>
            <Link href={branch.href} style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", textDecoration: "none", fontFamily: "var(--font-geist-sans)", transition: "color 0.2s" }}
              onMouseEnter={e => ((e.target as HTMLElement).style.color = branch.accent)}
              onMouseLeave={e => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.3)")}
            >{branch.label}</Link>
          </>
        )}
        <span style={{ color: "rgba(255,255,255,0.15)", fontSize: 12 }}>›</span>
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-geist-sans)" }}>{p.title}</span>
      </motion.div>

      {/* Two-column */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(24px,5vw,72px)", alignItems: "start" }}
        className="detail-grid">

        {/* LEFT */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          {p.image_urls?.length > 0
            ? <ImageGallery urls={p.image_urls} />
            : <div style={{ height: 340, borderRadius: 20, background: "linear-gradient(135deg,rgba(34,211,238,0.05),rgba(16,185,129,0.04))", border: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 72 }}>💻</div>
          }

          {p.tech_stack?.length > 0 && (
            <div style={{ marginTop: 28 }}>
              <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", fontFamily: "var(--font-geist-mono)", marginBottom: 12 }}>Tech Stack</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {p.tech_stack.map((t: string, i: number) => (
                  <span key={i} style={{ fontSize: 12, padding: "6px 14px", borderRadius: 8, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-geist-mono)" }}>{t}</span>
                ))}
              </div>
            </div>
          )}

          {p.description && (
            <div style={{ marginTop: 28 }}>
              <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", fontFamily: "var(--font-geist-mono)", marginBottom: 12 }}>About this project</p>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.75, fontFamily: "var(--font-geist-sans)" }}>{p.description}</p>
            </div>
          )}
        </motion.div>

        {/* RIGHT */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>

          {/* Badges */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
            {branch && <span style={{ fontSize: 11, padding: "5px 12px", borderRadius: 8, background: `${branch.accent}18`, color: branch.accent, border: `1px solid ${branch.accent}28`, fontFamily: "var(--font-geist-mono)" }}>{branch.label}</span>}
            {p.level && <span style={{ fontSize: 11, padding: "5px 12px", borderRadius: 8, background: lvl.bg, color: lvl.color, border: `1px solid ${lvl.border}`, fontFamily: "var(--font-geist-sans)", fontWeight: 600, textTransform: "capitalize" }}>{p.level}</span>}
          </div>

          <h1 style={{ fontSize: "clamp(24px,3.5vw,40px)", fontWeight: 900, letterSpacing: "-1px", lineHeight: 1.1, color: "#fff", fontFamily: "var(--font-geist-sans)", marginBottom: 22 }}>{p.title}</h1>

          {/* Price */}
          <div style={{ padding: "20px 22px", borderRadius: 16, marginBottom: 22, background: "rgba(5,12,28,0.8)", border: "1px solid rgba(34,211,238,0.14)", backdropFilter: "blur(16px)" }}>
            <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", fontFamily: "var(--font-geist-mono)", marginBottom: 8 }}>Price</p>
            <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
              <span style={{ fontSize: 40, fontWeight: 900, lineHeight: 1, background: "linear-gradient(135deg,#22d3ee,#10b981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontFamily: "var(--font-geist-sans)" }}>{p.price}</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-geist-sans)" }}>one-time</span>
            </div>
          </div>

          {/* Includes */}
          <div style={{ marginBottom: 20 }}>
            <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", fontFamily: "var(--font-geist-mono)", marginBottom: 12 }}>What's included</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {INCLUDES.map(({ icon, label, desc }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 14px", borderRadius: 12, background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <span style={{ width: 32, height: 32, borderRadius: 9, flexShrink: 0, background: "rgba(34,211,238,0.08)", border: "1px solid rgba(34,211,238,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15 }}>{icon}</span>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-geist-sans)" }}>{label}</p>
                    <p style={{ fontSize: 11, color: "rgba(255,255,255,0.28)", fontFamily: "var(--font-geist-sans)" }}>{desc}</p>
                  </div>
                  <span style={{ color: "#34d399", fontSize: 14, flexShrink: 0 }}>✓</span>
                </div>
              ))}
            </div>
          </div>

          {/* Options */}
          {(p.component_option || p.ownership || p.report_option) && (
            <div style={{ marginBottom: 20 }}>
              <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", fontFamily: "var(--font-geist-mono)", marginBottom: 12 }}>Project Options</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {[
                  { label: "Components", val: p.component_option?.replace(/_/g, " ") },
                  { label: "Ownership", val: p.ownership },
                  { label: "Report", val: p.report_option?.replace(/_/g, " ") },
                ].filter(o => o.val && o.val !== "NIL").map(o => (
                  <div key={o.label} style={{ padding: "10px 14px", borderRadius: 10, background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <p style={{ fontSize: 10, color: "rgba(255,255,255,0.22)", fontFamily: "var(--font-geist-mono)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 3 }}>{o.label}</p>
                    <p style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-geist-sans)", fontWeight: 500, textTransform: "capitalize" }}>{o.val}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div style={{ height: 1, marginBottom: 18, background: "linear-gradient(90deg,rgba(34,211,238,0.2),transparent)" }} />

          {/* CTAs */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
            <motion.button
              onClick={() => router.push(quoteUrl)}
              whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(34,211,238,0.5)" }}
              whileTap={{ scale: 0.98 }}
              style={{ width: "100%", padding: "16px 0", borderRadius: 13, border: "none", background: "linear-gradient(135deg,#06b6d4,#10b981)", color: "#000", fontSize: 15, fontWeight: 800, fontFamily: "var(--font-geist-sans)", cursor: "pointer", boxShadow: "0 0 28px rgba(34,211,238,0.35)" }}
            >Get a Quote →</motion.button>

            <motion.button onClick={share} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
              style={{ width: "100%", padding: "13px 0", borderRadius: 13, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.09)", color: copied ? "#34d399" : "rgba(255,255,255,0.45)", fontSize: 13, fontWeight: 500, fontFamily: "var(--font-geist-sans)", cursor: "pointer", transition: "color 0.2s" }}
            >{copied ? "✓ Link copied!" : "Share this project"}</motion.button>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap" }}>
            {["Reply in 2hrs", "Free consultation", "No spam"].map(t => (
              <span key={t} style={{ fontSize: 11, color: "rgba(255,255,255,0.2)", fontFamily: "var(--font-geist-sans)", display: "flex", alignItems: "center", gap: 5 }}>
                <span style={{ color: "#34d399", fontSize: 10 }}>✓</span>{t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Full-width Quote CTA banner */}
      <motion.div
        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          marginTop: 72, padding: "44px 5%", borderRadius: 24,
          position: "relative", overflow: "hidden",
          background: "rgba(5,12,28,0.8)", border: "1px solid rgba(34,211,238,0.14)",
          backdropFilter: "blur(20px)",
          display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 28,
        }}
      >
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
          style={{ position: "absolute", top: 0, left: 0, width: "40%", height: 1, background: "linear-gradient(90deg,transparent,rgba(34,211,238,0.6),transparent)", pointerEvents: "none" }}
        />
        <div style={{ position: "absolute", right: -40, top: "50%", transform: "translateY(-50%)", width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle,rgba(34,211,238,0.08) 0%,transparent 70%)", filter: "blur(40px)", pointerEvents: "none" }} />

        <div style={{ position: "relative" }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", color: "#22d3ee", fontFamily: "var(--font-geist-mono)", marginBottom: 10 }}>Ready to get started?</p>
          <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 900, letterSpacing: "-0.8px", color: "#fff", fontFamily: "var(--font-geist-sans)", marginBottom: 8 }}>
            Get{" "}
            <span style={{ background: "linear-gradient(135deg,#22d3ee,#10b981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{p.title}</span>
          </h2>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-geist-sans)" }}>
            Delivered in 24–72 hours · Code · PPT · Report · Setup support
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "center", position: "relative" }}>
          <div style={{ textAlign: "center", marginBottom: 4 }}>
            <span style={{ fontSize: 36, fontWeight: 900, background: "linear-gradient(135deg,#22d3ee,#10b981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontFamily: "var(--font-geist-sans)" }}>{p.price}</span>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", marginLeft: 8, fontFamily: "var(--font-geist-sans)" }}>one-time</span>
          </div>
          <motion.button
            onClick={() => router.push(quoteUrl)}
            whileHover={{ scale: 1.05, boxShadow: "0 0 44px rgba(34,211,238,0.55), 0 0 88px rgba(16,185,129,0.25)" }}
            whileTap={{ scale: 0.97 }}
            style={{ padding: "16px 44px", borderRadius: 14, background: "linear-gradient(135deg,#06b6d4,#10b981)", border: "none", color: "#000", fontSize: 16, fontWeight: 800, fontFamily: "var(--font-geist-sans)", cursor: "pointer", boxShadow: "0 0 32px rgba(34,211,238,0.4)", whiteSpace: "nowrap" as const }}
          >Get a Free Quote →</motion.button>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.2)", fontFamily: "var(--font-geist-sans)" }}>We'll reply within 2 hours</p>
        </div>
      </motion.div>

      <div style={{ height: 100 }} />

      <style>{`
        @media (max-width: 768px) {
          .detail-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}