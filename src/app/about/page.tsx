// "use client";
// import { useEffect, useRef, useState } from "react";
// import Navbar from "@/components/Navbar";

// /* ── Team data ──────────────────────────────────────────────── */
// const team = [
//     {
//         name: "Thilak G",
//         role: "Founder & Full-Stack AI Developer",
//         badge: "Founder",
//         avatar: "/team/thilak.jpg", // replace with actual image path
//         color: "#3b82f6",
//         glow: "rgba(59,130,246,0.4)",
//         bio: "End-to-end developer and founder of Projixio. Builds complete AI-powered products from database to deployment.",
//         tags: [
//             "Next.js", "React", "TypeScript", "Python", "Node.js",
//             "NLP", "LLMs", "OpenCV", "YOLO", "Transformers",
//             "MySQL", "MongoDB", "Supabase", "Blockchain",
//             "Framer Motion", "GSAP", "Figma",
//         ],
//         highlights: [
//             { label: "Speciality", value: "End-to-End AI Products" },
//             { label: "Degree", value: "B.Tech CSE" },
//             { label: "Tools", value: "Git · Postman · PgAdmin" },
//         ],
//     },
//     {
//         name: "Lohith L",
//         role: "Web Developer & Project Lead",
//         badge: "Co-Founder",
//         avatar: "/team/lohith.jpg",
//         color: "#06b6d4",
//         glow: "rgba(6,182,212,0.4)",
//         bio: "React expert who architects seamless frontends. Leads project management and drives IEEE research publications.",
//         tags: [
//             "React", "JavaScript", "HTML", "CSS",
//             "IEEE Paper Writing", "Report Preparation",
//             "Project Management",
//         ],
//         highlights: [
//             { label: "Speciality", value: "React & JS Projects" },
//             { label: "Degree", value: "B.Tech CSE" },
//             { label: "Research", value: "IEEE Paper & Reports" },
//         ],
//     },
//     {
//         name: "Hari",
//         role: "EC & IoT Systems Developer",
//         badge: "Co-Founder",
//         avatar: "/team/hari.jpg",
//         color: "#8b5cf6",
//         glow: "rgba(139,92,246,0.4)",
//         bio: "Hardware-to-cloud specialist. Designs and builds end-to-end IoT systems and embedded electronics projects.",
//         tags: [
//             "IoT", "Embedded Systems", "Electronics",
//             "Microcontrollers", "Sensors", "Circuit Design",
//             "EC Projects",
//         ],
//         highlights: [
//             { label: "Speciality", value: "IoT & EC Projects" },
//             { label: "Degree", value: "B.Tech ECE" },
//             { label: "Focus", value: "Hardware + Cloud" },
//         ],
//     },
// ];

// /* ── Animated number counter ────────────────────────────────── */
// function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
//     const [val, setVal] = useState(0);
//     const ref = useRef<HTMLSpanElement>(null);
//     useEffect(() => {
//         const obs = new IntersectionObserver(([e]) => {
//             if (!e.isIntersecting) return;
//             obs.disconnect();
//             let start = 0;
//             const step = () => {
//                 start += Math.ceil(to / 40);
//                 if (start >= to) { setVal(to); return; }
//                 setVal(start);
//                 requestAnimationFrame(step);
//             };
//             requestAnimationFrame(step);
//         });
//         if (ref.current) obs.observe(ref.current);
//         return () => obs.disconnect();
//     }, [to]);
//     return <span ref={ref}>{val}{suffix}</span>;
// }

// /* ── Card ───────────────────────────────────────────────────── */
// function MemberCard({ m, index }: { m: typeof team[0]; index: number }) {
//     const [hovered, setHovered] = useState(false);

//     return (
//         <div
//             className="member-card"
//             style={{ "--card-color": m.color, "--card-glow": m.glow, animationDelay: `${index * 0.15}s` } as React.CSSProperties}
//             onMouseEnter={() => setHovered(true)}
//             onMouseLeave={() => setHovered(false)}
//         >
//             {/* Top accent line */}
//             <div className="card-line" />

//             {/* Avatar */}
//             <div className="avatar-wrap">
//                 <div className="avatar-ring" />
//                 <img
//                     src={m.avatar}
//                     alt={m.name}
//                     className="avatar-img"
//                     onError={(e) => {
//                         // Fallback initials avatar
//                         const t = e.currentTarget as HTMLImageElement;
//                         t.style.display = "none";
//                         const next = t.nextElementSibling as HTMLElement;
//                         if (next) next.style.display = "flex";
//                     }}
//                 />
//                 {/* Fallback initials */}
//                 <div className="avatar-fallback" style={{ display: "none" }}>
//                     {m.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
//                 </div>
//                 <span className="badge">{m.badge}</span>
//             </div>

//             {/* Info */}
//             <div className="card-body">
//                 <h3 className="member-name">{m.name}</h3>
//                 <p className="member-role">{m.role}</p>
//                 <p className="member-bio">{m.bio}</p>

//                 {/* Highlights */}
//                 <div className="highlights">
//                     {m.highlights.map(h => (
//                         <div key={h.label} className="highlight-item">
//                             <span className="hl-label">{h.label}</span>
//                             <span className="hl-value">{h.value}</span>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Tags */}
//                 <div className="tags-wrap">
//                     {m.tags.map(t => (
//                         <span key={t} className="tag">{t}</span>
//                     ))}
//                 </div>
//             </div>

//             {/* Hover glow overlay */}
//             <div className="card-glow-overlay" style={{ opacity: hovered ? 1 : 0 }} />
//         </div>
//     );
// }

// /* ── Page ───────────────────────────────────────────────────── */
// export default function AboutPage() {
//     return (
//         <>
//             <Navbar />

//             <main className="about-page">

//                 {/* ── Hero section ── */}
//                 <section className="about-hero">
//                     <div className="hero-label">WHO WE ARE</div>
//                     <h1 className="hero-title">
//                         Built by Engineers,<br />
//                         <span className="hero-accent">For Engineers</span>
//                     </h1>
//                     <p className="hero-sub">
//                         Projixio was born from one simple frustration — great engineering students
//                         deserve better projects. We&apos;re three builders who decided to fix that.
//                     </p>

//                     {/* Stats */}
//                     <div className="stats-row">
//                         {[
//                             { label: "Projects Delivered", to: 50, suffix: "+" },
//                             { label: "Happy Students", to: 200, suffix: "+" },
//                             { label: "Domains Covered", to: 8, suffix: "" },
//                             { label: "Years Building", to: 3, suffix: "+" },
//                         ].map(s => (
//                             <div key={s.label} className="stat-item">
//                                 <span className="stat-num"><Counter to={s.to} suffix={s.suffix} /></span>
//                                 <span className="stat-label">{s.label}</span>
//                             </div>
//                         ))}
//                     </div>
//                 </section>

//                 {/* ── Team section ── */}
//                 <section className="team-section">
//                     <div className="section-label">THE TEAM</div>
//                     <h2 className="section-title">Three Builders. One Mission.</h2>
//                     <p className="section-sub">
//                         Each of us owns a corner of the stack — together we cover everything from silicon to server to screen.
//                     </p>

//                     <div className="cards-grid">
//                         {team.map((m, i) => <MemberCard key={m.name} m={m} index={i} />)}
//                     </div>
//                 </section>

//                 {/* ── Mission strip ── */}
//                 <section className="mission-strip">
//                     <div className="mission-inner">
//                         <div className="mission-icon">⚡</div>
//                         <div>
//                             <h3 className="mission-title">Our Mission</h3>
//                             <p className="mission-text">
//                                 Give every engineering student access to production-quality projects — complete with documentation, code, and support — so they can focus on learning, not searching.
//                             </p>
//                         </div>
//                     </div>
//                 </section>

//             </main>

//             <style>{`
//         /* ── Page shell ───────────────────────────────── */
//         .about-page {
//           min-height: 100vh;
//           padding-top: 80px;
//           position: relative;
//           z-index: 10;
//         }

//         /* ── Hero ─────────────────────────────────────── */
//         .about-hero {
//           max-width: 860px;
//           margin: 0 auto;
//           padding: 80px 24px 64px;
//           text-align: center;
//         }
//         .hero-label {
//           display: inline-block;
//           font-size: 11px;
//           font-weight: 700;
//           letter-spacing: 0.2em;
//           color: #3b82f6;
//           background: rgba(59,130,246,0.1);
//           border: 1px solid rgba(59,130,246,0.2);
//           padding: 5px 14px;
//           border-radius: 999px;
//           margin-bottom: 24px;
//         }
//         .hero-title {
//           font-size: clamp(2.4rem, 5vw, 4rem);
//           font-weight: 800;
//           line-height: 1.1;
//           letter-spacing: -0.04em;
//           color: #f1f5f9;
//           margin-bottom: 20px;
//         }
//         .hero-accent {
//           background: linear-gradient(135deg, #3b82f6, #06b6d4);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }
//         .hero-sub {
//           font-size: 1.05rem;
//           color: rgba(255,255,255,0.5);
//           max-width: 580px;
//           margin: 0 auto 48px;
//           line-height: 1.7;
//         }

//         /* Stats */
//         .stats-row {
//           display: flex;
//           gap: 0;
//           justify-content: center;
//           border: 1px solid rgba(255,255,255,0.07);
//           border-radius: 16px;
//           overflow: hidden;
//           background: rgba(255,255,255,0.02);
//         }
//         .stat-item {
//           flex: 1;
//           padding: 24px 16px;
//           display: flex;
//           flex-direction: column;
//           gap: 4px;
//           border-right: 1px solid rgba(255,255,255,0.07);
//         }
//         .stat-item:last-child { border-right: none; }
//         .stat-num {
//           font-size: 1.8rem;
//           font-weight: 800;
//           color: #3b82f6;
//           letter-spacing: -0.03em;
//         }
//         .stat-label {
//           font-size: 0.72rem;
//           color: rgba(255,255,255,0.4);
//           letter-spacing: 0.05em;
//           text-transform: uppercase;
//         }

//         /* ── Team section ─────────────────────────────── */
//         .team-section {
//           max-width: 1160px;
//           margin: 0 auto;
//           padding: 40px 24px 80px;
//         }
//         .section-label {
//           font-size: 11px;
//           font-weight: 700;
//           letter-spacing: 0.2em;
//           color: #3b82f6;
//           margin-bottom: 12px;
//           text-transform: uppercase;
//         }
//         .section-title {
//           font-size: clamp(1.8rem, 3.5vw, 2.6rem);
//           font-weight: 800;
//           color: #f1f5f9;
//           letter-spacing: -0.03em;
//           margin-bottom: 12px;
//         }
//         .section-sub {
//           font-size: 0.95rem;
//           color: rgba(255,255,255,0.45);
//           max-width: 500px;
//           line-height: 1.7;
//           margin-bottom: 48px;
//         }

//         /* Cards grid */
//         .cards-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//           gap: 20px;
//         }

//         /* ── Member card ──────────────────────────────── */
//         .member-card {
//           position: relative;
//           background: rgba(5,12,28,0.7);
//           border: 1px solid rgba(255,255,255,0.07);
//           border-radius: 20px;
//           padding: 28px 24px 24px;
//           overflow: hidden;
//           transition: border-color 0.3s, transform 0.3s;
//           animation: cardReveal 0.6s ease both;
//           cursor: default;
//         }
//         .member-card:hover {
//           border-color: var(--card-color);
//           transform: translateY(-4px);
//         }

//         @keyframes cardReveal {
//           from { opacity: 0; transform: translateY(28px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         /* Top accent line */
//         .card-line {
//           position: absolute;
//           top: 0; left: 0; right: 0;
//           height: 2px;
//           background: linear-gradient(90deg, transparent, var(--card-color), transparent);
//           opacity: 0.8;
//         }

//         /* Avatar */
//         .avatar-wrap {
//           position: relative;
//           width: 80px;
//           height: 80px;
//           margin-bottom: 20px;
//         }
//         .avatar-ring {
//           position: absolute;
//           inset: -3px;
//           border-radius: 50%;
//           border: 2px solid var(--card-color);
//           opacity: 0.5;
//         }
//         .avatar-img {
//           width: 80px;
//           height: 80px;
//           border-radius: 50%;
//           object-fit: cover;
//           background: rgba(255,255,255,0.04);
//         }
//         .avatar-fallback {
//           width: 80px;
//           height: 80px;
//           border-radius: 50%;
//           background: rgba(255,255,255,0.05);
//           align-items: center;
//           justify-content: center;
//           font-size: 1.6rem;
//           font-weight: 800;
//           color: var(--card-color);
//           letter-spacing: -0.02em;
//         }
//         .badge {
//           position: absolute;
//           bottom: -4px;
//           right: -4px;
//           font-size: 9px;
//           font-weight: 700;
//           letter-spacing: 0.08em;
//           text-transform: uppercase;
//           background: var(--card-color);
//           color: #000;
//           padding: 2px 7px;
//           border-radius: 999px;
//         }

//         /* Card body */
//         .card-body { display: flex; flex-direction: column; gap: 10px; }
//         .member-name {
//           font-size: 1.25rem;
//           font-weight: 800;
//           color: #f1f5f9;
//           letter-spacing: -0.02em;
//         }
//         .member-role {
//           font-size: 0.8rem;
//           font-weight: 600;
//           color: var(--card-color);
//           letter-spacing: 0.03em;
//           text-transform: uppercase;
//         }
//         .member-bio {
//           font-size: 0.88rem;
//           color: rgba(255,255,255,0.5);
//           line-height: 1.65;
//         }

//         /* Highlights */
//         .highlights {
//           display: flex;
//           flex-direction: column;
//           gap: 6px;
//           background: rgba(255,255,255,0.03);
//           border: 1px solid rgba(255,255,255,0.06);
//           border-radius: 10px;
//           padding: 12px;
//           margin-top: 4px;
//         }
//         .highlight-item {
//           display: flex;
//           justify-content: space-between;
//           gap: 12px;
//         }
//         .hl-label {
//           font-size: 0.72rem;
//           color: rgba(255,255,255,0.35);
//           text-transform: uppercase;
//           letter-spacing: 0.07em;
//           flex-shrink: 0;
//         }
//         .hl-value {
//           font-size: 0.78rem;
//           color: rgba(255,255,255,0.75);
//           font-weight: 600;
//           text-align: right;
//         }

//         /* Tags */
//         .tags-wrap {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 6px;
//           margin-top: 4px;
//         }
//         .tag {
//           font-size: 0.7rem;
//           font-weight: 500;
//           color: var(--card-color);
//           background: color-mix(in srgb, var(--card-color) 10%, transparent);
//           border: 1px solid color-mix(in srgb, var(--card-color) 25%, transparent);
//           padding: 3px 9px;
//           border-radius: 999px;
//         }

//         /* Hover glow */
//         .card-glow-overlay {
//           position: absolute;
//           inset: 0;
//           background: radial-gradient(ellipse at 50% 0%, var(--card-glow) 0%, transparent 65%);
//           pointer-events: none;
//           transition: opacity 0.4s;
//         }

//         /* ── Mission strip ────────────────────────────── */
//         .mission-strip {
//           max-width: 1160px;
//           margin: 0 auto 80px;
//           padding: 0 24px;
//         }
//         .mission-inner {
//           display: flex;
//           align-items: flex-start;
//           gap: 24px;
//           background: rgba(59,130,246,0.05);
//           border: 1px solid rgba(59,130,246,0.18);
//           border-radius: 20px;
//           padding: 32px 36px;
//         }
//         .mission-icon {
//           font-size: 2rem;
//           flex-shrink: 0;
//           margin-top: 2px;
//         }
//         .mission-title {
//           font-size: 1.1rem;
//           font-weight: 700;
//           color: #f1f5f9;
//           margin-bottom: 8px;
//           letter-spacing: -0.02em;
//         }
//         .mission-text {
//           font-size: 0.92rem;
//           color: rgba(255,255,255,0.5);
//           line-height: 1.75;
//           max-width: 680px;
//         }

//         /* ── Responsive ───────────────────────────────── */
//         @media (max-width: 600px) {
//           .stats-row { flex-wrap: wrap; }
//           .stat-item { min-width: 40%; border-bottom: 1px solid rgba(255,255,255,0.07); }
//           .mission-inner { flex-direction: column; padding: 24px; }
//           .cards-grid { grid-template-columns: 1fr; }
//         }
//       `}</style>
//         </>
//     );
// }


"use client";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";

const team = [
    {
        name: "Thilak G",
        role: "Founder & Full-Stack AI Developer",
        badge: "Founder",
        avatar: "/team/thilak.jpg",
        color: "#3b82f6",
        glow: "rgba(59,130,246,0.35)",
        checks: ["AI/ML Projects", "Full-Stack Dev", "UI/UX Design"],
        tags: ["Next.js", "Python", "LLMs", "OpenCV", "YOLO", "Blockchain", "GSAP"],
        bio: "End-to-end developer and founder of Projixio. Builds complete AI-powered products from database to deployment.",
    },
    {
        name: "Lohith L",
        role: "Web Developer & Project Lead",
        badge: "Co-Founder",
        avatar: "/team/lohith.jpg",
        color: "#06b6d4",
        glow: "rgba(6,182,212,0.35)",
        checks: ["React Expert", "IEEE Papers", "Management"],
        tags: ["React", "JavaScript", "HTML/CSS", "Project Mgmt"],
        bio: "React expert who architects seamless frontends and leads IEEE research publications.",
    },
    {
        name: "Hari",
        role: "EC & IoT Systems Developer",
        badge: "Co-Founder",
        avatar: "/team/hari.jpg",
        color: "#8b5cf6",
        glow: "rgba(139,92,246,0.35)",
        checks: ["IoT Projects", "Embedded Dev", "Circuit Design"],
        tags: ["IoT", "Embedded C", "Sensors", "Microcontrollers"],
        bio: "Hardware-to-cloud specialist building end-to-end IoT and electronics projects.",
    },
];

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
    const [val, setVal] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => {
            if (!e.isIntersecting) return;
            obs.disconnect();
            let n = 0;
            const tick = () => {
                n += Math.ceil(to / 40);
                if (n >= to) { setVal(to); return; }
                setVal(n); requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
        });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [to]);
    return <span ref={ref}>{val}{suffix}</span>;
}

function MemberCard({ m, index }: { m: typeof team[0]; index: number }) {
    return (
        <div
            className="mc"
            style={{ "--cc": m.color, "--cg": m.glow, animationDelay: `${index * 0.14}s` } as React.CSSProperties}
        >
            {/* ── Photo half ── */}
            <div className="mc-photo">
                <img
                    src={m.avatar}
                    alt={m.name}
                    className="mc-photo-img"
                    onError={e => {
                        const img = e.currentTarget as HTMLImageElement;
                        img.style.display = "none";
                        const fb = img.nextElementSibling as HTMLElement;
                        if (fb) fb.style.display = "flex";
                    }}
                />
                {/* Fallback gradient with initials */}
                <div className="mc-photo-fb" style={{ display: "none" }}>
                    <span className="mc-initials">
                        {m.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                    </span>
                </div>

                {/* Gradient fade into bottom */}
                <div className="mc-photo-fade" />

                {/* Badge top-right */}
                <span className="mc-badge">{m.badge}</span>
            </div>

            {/* ── Info half ── */}
            <div className="mc-body">
                <h3 className="mc-name">{m.name}</h3>

                {/* Skill tags row */}
                <div className="mc-tags">
                    {m.tags.map(t => (
                        <span key={t} className="mc-tag">{t}</span>
                    ))}
                </div>

                {/* Divider */}
                <div className="mc-divider" />

                {/* Checkmarks */}
                <div className="mc-checks">
                    {m.checks.map(c => (
                        <span key={c} className="mc-check">
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                                <path d="M2 6.5L5.2 9.5L11 3.5" stroke="var(--cc)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {c}
                        </span>
                    ))}
                </div>

                {/* Bottom: role + button */}
                <div className="mc-footer">
                    <div>
                        <p className="mc-role">{m.role}</p>
                        <p className="mc-bio">{m.bio}</p>
                    </div>
                    <a href="#" className="mc-btn">
                        Profile <span>→</span>
                    </a>
                </div>
            </div>

            {/* Hover glow top */}
            <div className="mc-glow" />
        </div>
    );
}

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main className="ap">

                {/* Hero */}
                <section className="ap-hero">
                    <div className="ap-pill">WHO WE ARE</div>
                    <h1 className="ap-h1">
                        Built by Engineers,<br />
                        <span className="ap-accent">For Engineers</span>
                    </h1>
                    <p className="ap-sub">
                        Projixio was born from one simple frustration — great engineering students
                        deserve better projects. We&apos;re three builders who decided to fix that.
                    </p>
                    <div className="ap-stats">
                        {[
                            { label: "Projects Delivered", to: 50, suffix: "+" },
                            { label: "Happy Students", to: 200, suffix: "+" },
                            { label: "Domains Covered", to: 8, suffix: "" },
                            { label: "Years Building", to: 3, suffix: "+" },
                        ].map(s => (
                            <div key={s.label} className="ap-stat">
                                <span className="ap-stat-n"><Counter to={s.to} suffix={s.suffix} /></span>
                                <span className="ap-stat-l">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Team */}
                <section className="ap-team">
                    <div className="ap-label">THE TEAM</div>
                    <h2 className="ap-h2">Three Builders. One Mission.</h2>
                    <p className="ap-tsub">Each of us owns a corner of the stack — together we cover everything from silicon to server to screen.</p>
                    <div className="ap-grid">
                        {team.map((m, i) => <MemberCard key={m.name} m={m} index={i} />)}
                    </div>
                </section>

                {/* Mission */}
                <section className="ap-mission">
                    <div className="ap-mission-inner">
                        <div className="ap-mission-icon">⚡</div>
                        <div>
                            <h3 className="ap-mission-title">Our Mission</h3>
                            <p className="ap-mission-text">
                                Give every engineering student access to production-quality projects — complete with documentation, code, and support — so they can focus on learning, not searching.
                            </p>
                        </div>
                    </div>
                </section>

            </main>

            <style>{`
        .ap {
          min-height: 100vh;
          padding-top: 80px;
          position: relative;
          z-index: 10;
        }

        /* Hero */
        .ap-hero {
          max-width: 800px;
          margin: 0 auto;
          padding: 72px 24px 56px;
          text-align: center;
        }
        .ap-pill {
          display: inline-block;
          font-size: 11px; font-weight: 700; letter-spacing: 0.2em;
          color: #3b82f6;
          background: rgba(59,130,246,0.1);
          border: 1px solid rgba(59,130,246,0.2);
          padding: 5px 14px; border-radius: 999px;
          margin-bottom: 22px;
        }
        .ap-h1 {
          font-size: clamp(2.2rem,5vw,3.8rem);
          font-weight: 800; line-height: 1.1; letter-spacing: -0.04em;
          color: #f1f5f9; margin-bottom: 18px;
        }
        .ap-accent {
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .ap-sub {
          font-size: 1rem; color: rgba(255,255,255,0.48);
          max-width: 540px; margin: 0 auto 44px; line-height: 1.7;
        }
        .ap-stats {
          display: flex; border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px; overflow: hidden; background: rgba(255,255,255,0.02);
        }
        .ap-stat {
          flex: 1; padding: 22px 12px; display: flex; flex-direction: column; gap: 4px;
          border-right: 1px solid rgba(255,255,255,0.07);
        }
        .ap-stat:last-child { border-right: none; }
        .ap-stat-n { font-size: 1.7rem; font-weight: 800; color: #3b82f6; letter-spacing: -0.03em; }
        .ap-stat-l { font-size: 0.68rem; color: rgba(255,255,255,0.38); letter-spacing: 0.06em; text-transform: uppercase; }

        /* Team section */
        .ap-team { max-width: 1160px; margin: 0 auto; padding: 32px 24px 72px; }
        .ap-label { font-size: 11px; font-weight: 700; letter-spacing: 0.2em; color: #3b82f6; margin-bottom: 10px; text-transform: uppercase; }
        .ap-h2 { font-size: clamp(1.7rem,3.5vw,2.5rem); font-weight: 800; color: #f1f5f9; letter-spacing: -0.03em; margin-bottom: 10px; }
        .ap-tsub { font-size: 0.93rem; color: rgba(255,255,255,0.43); max-width: 480px; line-height: 1.7; margin-bottom: 44px; }
        .ap-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 22px; }

        /* ── Card ── */
        .mc {
          position: relative;
          background: rgb(7,14,30);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 22px;
          overflow: hidden;
          animation: mcIn 0.55s ease both;
          transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
        }
        .mc:hover {
          border-color: var(--cc);
          transform: translateY(-5px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px var(--cc);
        }
        @keyframes mcIn {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Photo half */
        .mc-photo {
          position: relative;
          height: 220px;
          overflow: hidden;
          background: rgba(255,255,255,0.03);
        }
        .mc-photo-img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: top center;
          display: block;
        }
        .mc-photo-fb {
          width: 100%; height: 100%;
          background: linear-gradient(135deg, color-mix(in srgb, var(--cc) 20%, #050c1e), #050c1e);
          align-items: center; justify-content: center;
        }
        .mc-initials {
          font-size: 4rem; font-weight: 900; letter-spacing: -0.04em;
          color: var(--cc); opacity: 0.7;
        }
        /* bottom fade */
        .mc-photo-fade {
          position: absolute; bottom: 0; left: 0; right: 0; height: 90px;
          background: linear-gradient(to top, rgb(7,14,30) 0%, transparent 100%);
        }
        /* badge top-right */
        .mc-badge {
          position: absolute; top: 14px; right: 14px;
          font-size: 10px; font-weight: 700; letter-spacing: 0.06em;
          color: var(--cc);
          background: rgba(0,0,0,0.55);
          border: 1px solid var(--cc);
          padding: 4px 10px; border-radius: 999px;
          backdrop-filter: blur(8px);
        }

        /* Info half */
        .mc-body { padding: 4px 22px 22px; display: flex; flex-direction: column; gap: 12px; }
        .mc-name { font-size: 1.3rem; font-weight: 800; color: #f1f5f9; letter-spacing: -0.03em; }

        /* Tags */
        .mc-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .mc-tag {
          font-size: 0.69rem; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase;
          color: rgba(255,255,255,0.65);
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 4px 10px; border-radius: 7px;
        }

        /* Divider */
        .mc-divider { height: 1px; background: rgba(255,255,255,0.07); margin: 2px 0; }

        /* Checkmarks */
        .mc-checks { display: flex; gap: 14px; flex-wrap: wrap; }
        .mc-check {
          display: flex; align-items: center; gap: 5px;
          font-size: 0.8rem; font-weight: 500; color: rgba(255,255,255,0.7);
        }

        /* Footer */
        .mc-footer {
          display: flex; align-items: flex-end;
          justify-content: space-between; gap: 12px;
          margin-top: 4px;
        }
        .mc-role {
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase;
          color: var(--cc); margin-bottom: 4px;
        }
        .mc-bio { font-size: 0.78rem; color: rgba(255,255,255,0.38); line-height: 1.5; max-width: 220px; }

        /* Button */
        .mc-btn {
          display: inline-flex; align-items: center; gap: 6px; white-space: nowrap;
          font-size: 0.82rem; font-weight: 700;
          color: var(--cc);
          background: color-mix(in srgb, var(--cc) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--cc) 35%, transparent);
          padding: 9px 18px; border-radius: 10px;
          text-decoration: none;
          transition: background 0.2s, box-shadow 0.2s;
          flex-shrink: 0;
        }
        .mc-btn:hover {
          background: color-mix(in srgb, var(--cc) 20%, transparent);
          box-shadow: 0 0 16px var(--cg);
        }

        /* Top glow on hover */
        .mc-glow {
          position: absolute; top: 0; left: 0; right: 0; height: 160px;
          background: radial-gradient(ellipse at 50% -20%, var(--cg) 0%, transparent 70%);
          pointer-events: none; opacity: 0; transition: opacity 0.4s;
        }
        .mc:hover .mc-glow { opacity: 1; }

        /* Mission */
        .ap-mission { max-width: 1160px; margin: 0 auto 80px; padding: 0 24px; }
        .ap-mission-inner {
          display: flex; align-items: flex-start; gap: 22px;
          background: rgba(59,130,246,0.04);
          border: 1px solid rgba(59,130,246,0.16);
          border-radius: 18px; padding: 30px 32px;
        }
        .ap-mission-icon { font-size: 2rem; flex-shrink: 0; margin-top: 2px; }
        .ap-mission-title { font-size: 1.05rem; font-weight: 700; color: #f1f5f9; margin-bottom: 7px; letter-spacing: -0.02em; }
        .ap-mission-text { font-size: 0.9rem; color: rgba(255,255,255,0.47); line-height: 1.75; max-width: 660px; }

        @media (max-width: 600px) {
          .ap-stats { flex-wrap: wrap; }
          .ap-stat { min-width: 42%; border-bottom: 1px solid rgba(255,255,255,0.07); }
          .ap-mission-inner { flex-direction: column; padding: 22px; }
          .ap-grid { grid-template-columns: 1fr; }
          .mc-footer { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
        </>
    );
}