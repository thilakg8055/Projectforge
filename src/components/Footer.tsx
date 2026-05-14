// export default function Footer() {
//     return (
//         <footer className="bg-black border-t border-white/10 mt-20">
//             <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-sm">

//                 {/* BRAND */}
//                 <div>
//                     <h2 className="text-lg font-bold text-white mb-2">
//                         ⚙️ ProjectForge
//                     </h2>
//                     <p className="text-gray-400">
//                         Ready-made and custom engineering projects for students.
//                     </p>
//                 </div>

//                 {/* LINKS */}
//                 <div>
//                     <h3 className="text-white font-semibold mb-2">Quick Links</h3>
//                     <ul className="space-y-1 text-gray-400">
//                         <li><a href="/projects">Projects</a></li>
//                         <li><a href="/cse">CSE / AI</a></li>
//                         <li><a href="/ece-iot">ECE / IoT</a></li>
//                         <li><a href="/contact">Contact</a></li>
//                     </ul>
//                 </div>

//                 {/* CONTACT */}
//                 <div>
//                     <h3 className="text-white font-semibold mb-2">Contact</h3>
//                     <p className="text-gray-400">Email: your@email.com</p>
//                     <p className="text-gray-400">Phone: +91 XXXXXXXX</p>
//                 </div>

//             </div>

//             {/* BOTTOM */}
//             <div className="text-center text-gray-500 text-xs pb-6">
//                 © {new Date().getFullYear()} ProjectForge. All rights reserved.
//             </div>
//         </footer>
//     );
// }



// import Link from "next/link";

// export default function Footer() {
//     return (
//         <footer
//             className="relative z-10 mt-20 border-t"
//             style={{ borderColor: "rgba(34,211,238,0.08)", background: "rgba(2,8,18,0.8)", backdropFilter: "blur(16px)" }}
//         >
//             <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10 text-sm">
//                 {/* Brand */}
//                 <div className="md:col-span-2">
//                     <div className="flex items-center gap-2 mb-4">
//                         <div
//                             className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black"
//                             style={{ background: "linear-gradient(135deg, #06b6d4, #10b981)", boxShadow: "0 0 16px rgba(6,182,212,0.4)" }}
//                         >
//                             ⚙
//                         </div>
//                         <span
//                             className="text-lg font-bold"
//                             style={{ background: "linear-gradient(90deg, #22d3ee, #10b981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
//                         >
//                             ProjectForge
//                         </span>
//                     </div>
//                     <p className="text-slate-500 leading-relaxed max-w-xs">
//                         Ready-made and custom engineering projects for students. Code + PPT + Report + Setup.
//                     </p>
//                     <div className="flex gap-3 mt-5">
//                         {["WhatsApp", "Instagram", "LinkedIn"].map((s) => (
//                             <div
//                                 key={s}
//                                 className="px-3 py-1.5 rounded-lg text-xs cursor-pointer transition-colors hover:text-cyan-400"
//                                 style={{
//                                     background: "rgba(255,255,255,0.04)",
//                                     border: "1px solid rgba(255,255,255,0.06)",
//                                     color: "#64748b",
//                                 }}
//                             >
//                                 {s}
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Links */}
//                 <div>
//                     <h3 className="text-white font-semibold mb-4">Projects</h3>
//                     <ul className="space-y-2.5 text-slate-500">
//                         {[
//                             { href: "/cse", label: "CSE / AI" },
//                             { href: "/ece-iot", label: "ECE / IoT" },
//                             { href: "/ds-ml", label: "Data Science" },
//                             { href: "/robotics", label: "Robotics" },
//                             { href: "/projects", label: "All Projects" },
//                         ].map((l) => (
//                             <li key={l.href}>
//                                 <Link
//                                     href={l.href}
//                                     className="hover:text-cyan-400 transition-colors"
//                                 >
//                                     {l.label}
//                                 </Link>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* Contact */}
//                 <div>
//                     <h3 className="text-white font-semibold mb-4">Contact</h3>
//                     <div className="space-y-3">
//                         <div
//                             className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs"
//                             style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
//                         >
//                             <span>📧</span>
//                             <span className="text-slate-400">tilakg8055@gmail.com</span>
//                         </div>
//                         <div
//                             className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs"
//                             style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
//                         >
//                             <span>📱</span>
//                             <span className="text-slate-400">+91 9901096221</span>
//                         </div>
//                         <Link href="/contact">
//                             <div
//                                 className="mt-3 text-center py-2.5 rounded-xl text-xs font-semibold cursor-pointer"
//                                 style={{ background: "linear-gradient(135deg, rgba(34,211,238,0.1), rgba(16,185,129,0.1))", border: "1px solid rgba(34,211,238,0.15)", color: "#22d3ee" }}
//                             >
//                                 Get Free Quote →
//                             </div>
//                         </Link>
//                     </div>
//                 </div>
//             </div>

//             {/* Bottom */}
//             <div
//                 className="border-t text-center py-5 text-xs text-slate-600"
//                 style={{ borderColor: "rgba(255,255,255,0.04)" }}
//             >
//                 © {new Date().getFullYear()} ProjectForge. Built with ❤️ for engineering students.
//             </div>
//         </footer>
//     );
// }

"use client";


import Link from "next/link";

const NAV_LINKS = [
    { href: "/cse", label: "CSE / AI" },
    { href: "/ece-iot", label: "ECE / IoT" },
    { href: "/ds-ml", label: "Data Science" },
    { href: "/robotics", label: "Robotics" },
    { href: "/projects", label: "All Projects" },
];

const SOCIALS = [
    { label: "WhatsApp", icon: "💬", href: "https://wa.me/919901096221?text=Hi%20I%20want%20to%20know%20about%20your%20projects" },
    // { label: "Instagram", icon: "📸", href: "#" },
    { label: "LinkedIn", icon: "💼", href: "linkedin.com/in/thilak-g-8a1235322" },
];

const TRUST = [
    { icon: "⚡", text: "Delivered in 24–72h" },
    { icon: "🔒", text: "100% original code" },
    { icon: "📞", text: "Free setup support" },
    { icon: "🎓", text: "50+ students served" },
];

export default function Footer() {
    return (
        <footer
            style={{
                position: "relative", zIndex: 10,
                background: "rgba(2,6,16,0.9)",
                backdropFilter: "blur(20px)",
                borderTop: "1px solid rgba(34,211,238,0.08)",
            }}
        >
            {/* ── Trust bar ──────────────────────────────────────────────────────── */}
            <div style={{
                borderBottom: "1px solid rgba(255,255,255,0.04)",
                padding: "18px 5%",
            }}>
                <div style={{
                    maxWidth: 1280, margin: "0 auto",
                    display: "flex", flexWrap: "wrap",
                    justifyContent: "center", gap: "12px 40px",
                }}>
                    {TRUST.map(({ icon, text }) => (
                        <span key={text} style={{
                            display: "flex", alignItems: "center", gap: 8,
                            fontSize: 12, color: "rgba(255,255,255,0.3)",
                            fontFamily: "var(--font-geist-sans)",
                        }}>
                            <span style={{ fontSize: 13 }}>{icon}</span>
                            {text}
                        </span>
                    ))}
                </div>
            </div>

            {/* ── Main grid ──────────────────────────────────────────────────────── */}
            <div style={{
                maxWidth: 1280, margin: "0 auto",
                padding: "60px 5% 48px",
                display: "grid",
                gridTemplateColumns: "2fr 1fr 1fr",
                gap: "40px 60px",
            }}
                className="footer-grid"
            >
                {/* Brand col */}
                <div>
                    {/* Logo */}
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                        <div style={{
                            width: 32, height: 32, borderRadius: 10, flexShrink: 0,
                            background: "linear-gradient(135deg,#06b6d4,#10b981)",
                            boxShadow: "0 0 18px rgba(6,182,212,0.45)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontSize: 15,
                        }}>⚙</div>
                        <span style={{
                            fontSize: 16, fontWeight: 800, letterSpacing: "-0.4px",
                            background: "linear-gradient(90deg,#22d3ee,#10b981)",
                            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                            fontFamily: "var(--font-geist-sans)",
                        }}>ProjectForge</span>
                    </div>

                    <p style={{
                        fontSize: 13, lineHeight: 1.75,
                        color: "rgba(255,255,255,0.3)",
                        fontFamily: "var(--font-geist-sans)",
                        maxWidth: 280, marginBottom: 24,
                    }}>
                        Ready-made and custom engineering projects for students across CSE, ECE, AI and IoT. Code · PPT · Report · Setup.
                    </p>

                    {/* Socials */}
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                        {SOCIALS.map(({ label, icon, href }) => (
                            <a
                                key={label}
                                href={href}
                                style={{ textDecoration: "none" }}
                            >
                                <div
                                    style={{
                                        display: "flex", alignItems: "center", gap: 6,
                                        padding: "7px 13px", borderRadius: 10,
                                        background: "rgba(255,255,255,0.03)",
                                        border: "1px solid rgba(255,255,255,0.07)",
                                        fontSize: 12, color: "rgba(255,255,255,0.38)",
                                        fontFamily: "var(--font-geist-sans)",
                                        cursor: "pointer",
                                        transition: "border-color 0.2s, color 0.2s, background 0.2s",
                                    }}
                                    onMouseEnter={e => {
                                        const el = e.currentTarget as HTMLElement;
                                        el.style.borderColor = "rgba(34,211,238,0.25)";
                                        el.style.color = "#22d3ee";
                                        el.style.background = "rgba(34,211,238,0.06)";
                                    }}
                                    onMouseLeave={e => {
                                        const el = e.currentTarget as HTMLElement;
                                        el.style.borderColor = "rgba(255,255,255,0.07)";
                                        el.style.color = "rgba(255,255,255,0.38)";
                                        el.style.background = "rgba(255,255,255,0.03)";
                                    }}
                                >
                                    <span style={{ fontSize: 13 }}>{icon}</span>
                                    {label}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick links col */}
                <div>
                    <p style={{
                        fontSize: 11, fontWeight: 600, letterSpacing: "2px",
                        textTransform: "uppercase", color: "rgba(255,255,255,0.2)",
                        fontFamily: "var(--font-geist-mono)",
                        marginBottom: 20,
                    }}>Domains</p>

                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                        {NAV_LINKS.map((l) => (
                            <li key={l.href}>
                                <Link
                                    href={l.href}
                                    style={{
                                        fontSize: 13, color: "rgba(255,255,255,0.38)",
                                        textDecoration: "none",
                                        fontFamily: "var(--font-geist-sans)",
                                        transition: "color 0.18s",
                                        display: "inline-flex", alignItems: "center", gap: 6,
                                    }}
                                    onMouseEnter={e => ((e.target as HTMLElement).style.color = "#22d3ee")}
                                    onMouseLeave={e => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.38)")}
                                >
                                    <span style={{
                                        width: 4, height: 4, borderRadius: "50%",
                                        background: "rgba(34,211,238,0.4)", flexShrink: 0,
                                        display: "inline-block",
                                    }} />
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact col */}
                <div>
                    <p style={{
                        fontSize: 11, fontWeight: 600, letterSpacing: "2px",
                        textTransform: "uppercase", color: "rgba(255,255,255,0.2)",
                        fontFamily: "var(--font-geist-mono)",
                        marginBottom: 20,
                    }}>Contact</p>

                    <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
                        {[
                            { icon: "📧", text: "tilakg8055@gmail.com" },
                            { icon: "📱", text: "+91 9901096221" },
                        ].map(({ icon, text }) => (
                            <div key={text} style={{
                                display: "flex", alignItems: "center", gap: 10,
                                padding: "10px 14px", borderRadius: 11,
                                background: "rgba(255,255,255,0.03)",
                                border: "1px solid rgba(255,255,255,0.06)",
                                fontSize: 12, color: "rgba(255,255,255,0.4)",
                                fontFamily: "var(--font-geist-sans)",
                            }}>
                                <span style={{ fontSize: 14, flexShrink: 0 }}>{icon}</span>
                                <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{text}</span>
                            </div>
                        ))}
                    </div>

                    <Link href="/contact" style={{ textDecoration: "none", display: "block" }}>
                        <div
                            style={{
                                textAlign: "center", padding: "11px 0",
                                borderRadius: 11, fontSize: 12, fontWeight: 700,
                                background: "linear-gradient(135deg,#06b6d4,#10b981)",
                                color: "#000",
                                fontFamily: "var(--font-geist-sans)",
                                cursor: "pointer",
                                boxShadow: "0 0 20px rgba(34,211,238,0.2)",
                                transition: "box-shadow 0.2s",
                            }}
                            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.boxShadow = "0 0 32px rgba(34,211,238,0.45)")}
                            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(34,211,238,0.2)")}
                        >
                            Get Free Quote →
                        </div>
                    </Link>
                </div>
            </div>

            {/* ── Bottom bar ─────────────────────────────────────────────────────── */}
            <div style={{
                borderTop: "1px solid rgba(255,255,255,0.04)",
                padding: "18px 5%",
            }}>
                <div style={{
                    maxWidth: 1280, margin: "0 auto",
                    display: "flex", justifyContent: "space-between",
                    alignItems: "center", flexWrap: "wrap", gap: 12,
                }}>
                    <p style={{
                        fontSize: 11, color: "rgba(255,255,255,0.18)",
                        fontFamily: "var(--font-geist-sans)",
                    }}>
                        © {new Date().getFullYear()} ProjectForge. Built with ❤️ for engineering students.
                    </p>

                    {/* Tiny top-link */}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        style={{
                            display: "flex", alignItems: "center", gap: 6,
                            fontSize: 11, color: "rgba(255,255,255,0.22)",
                            background: "none", border: "none", cursor: "pointer",
                            fontFamily: "var(--font-geist-sans)",
                            transition: "color 0.2s",
                        }}
                        onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#22d3ee")}
                        onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.22)")}
                    >
                        Back to top ↑
                    </button>
                </div>
            </div>

            {/* Responsive grid collapse */}
            <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </footer>
    );
}