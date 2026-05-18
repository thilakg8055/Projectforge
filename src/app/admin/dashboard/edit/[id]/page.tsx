// "use client";
// export const dynamic = "force-dynamic";
// import { useEffect, useState } from "react";
// import { supabase } from "@/lib/supabase";
// import { useParams, useRouter } from "next/navigation";

// export default function EditProject() {
//     const { id } = useParams();
//     const router = useRouter();

//     const [project, setProject] = useState<any>(null);

//     useEffect(() => {
//         const fetchProject = async () => {
//             const { data } = await supabase
//                 .from("projects")
//                 .select("*")
//                 .eq("id", id)
//                 .single();

//             setProject(data);
//         };

//         fetchProject();
//     }, [id]);

//     const handleChange = (e: any) => {
//         setProject({ ...project, [e.target.name]: e.target.value });
//     };

//     const handleUpdate = async () => {
//         const { error } = await supabase
//             .from("projects")
//             .update(project)
//             .eq("id", id);

//         if (error) {
//             alert("Error updating");
//         } else {
//             alert("Updated successfully 🚀");
//             router.push("/admin/dashboard");
//         }
//     };

//     if (!project) return <p className="p-10">Loading...</p>;

//     return (
//         <div className="p-10 max-w-xl space-y-4">
//             <h1 className="text-3xl font-bold">Edit Project</h1>

//             <input
//                 name="title"
//                 value={project.title}
//                 onChange={handleChange}
//                 className="input"
//             />

//             <input
//                 name="branch"
//                 value={project.branch}
//                 onChange={handleChange}
//                 className="input"
//             />

//             <input
//                 name="price"
//                 value={project.price}
//                 onChange={handleChange}
//                 className="input"
//             />

//             <textarea
//                 name="description"
//                 value={project.description}
//                 onChange={handleChange}
//                 className="input"
//             />

//             <button
//                 onClick={handleUpdate}
//                 className="bg-green-500 px-6 py-2 rounded"
//             >
//                 Update Project
//             </button>
//         </div>
//     );
// }



// "use client";
// export const dynamic = "force-dynamic";

// import { useEffect, useState } from "react";
// import { supabase } from "@/lib/supabase";
// import { useParams, useRouter } from "next/navigation";
// import { motion } from "framer-motion";

// function GlowInput({ label, name, value, onChange, type = "text", multiline = false }: any) {
//     const [focused, setFocused] = useState(false);
//     const baseStyle: React.CSSProperties = {
//         background: focused ? "rgba(34,211,238,0.04)" : "rgba(255,255,255,0.02)",
//         border: focused ? "1px solid rgba(34,211,238,0.35)" : "1px solid rgba(255,255,255,0.07)",
//         boxShadow: focused ? "0 0 20px rgba(34,211,238,0.08)" : "none",
//         color: "#e2e8f0",
//         outline: "none",
//         width: "100%",
//         padding: "14px 18px",
//         borderRadius: "14px",
//         fontSize: "14px",
//         transition: "all 0.25s ease",
//         backdropFilter: "blur(8px)",
//     };

//     return (
//         <div>
//             <label className="block text-xs font-semibold uppercase tracking-widest mb-2"
//                 style={{ color: focused ? "#22d3ee" : "#475569" }}>
//                 {label}
//             </label>
//             {multiline ? (
//                 <textarea
//                     name={name}
//                     value={value || ""}
//                     onChange={onChange}
//                     rows={4}
//                     onFocus={() => setFocused(true)}
//                     onBlur={() => setFocused(false)}
//                     style={{ ...baseStyle, resize: "none" }}
//                 />
//             ) : (
//                 <input
//                     name={name}
//                     type={type}
//                     value={value || ""}
//                     onChange={onChange}
//                     onFocus={() => setFocused(true)}
//                     onBlur={() => setFocused(false)}
//                     style={baseStyle}
//                 />
//             )}
//         </div>
//     );
// }

// export default function EditProject() {
//     const { id } = useParams();
//     const router = useRouter();
//     const [project, setProject] = useState<any>(null);
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         const fetchProject = async () => {
//             const { data } = await supabase
//                 .from("projects")
//                 .select("*")
//                 .eq("id", id)
//                 .single();
//             setProject(data);
//         };
//         fetchProject();
//     }, [id]);

//     const handleChange = (e: any) => {
//         setProject({ ...project, [e.target.name]: e.target.value });
//     };

//     const handleUpdate = async () => {
//         setLoading(true);
//         const { error } = await supabase.from("projects").update(project).eq("id", id);
//         setLoading(false);
//         if (error) {
//             alert("Error updating");
//         } else {
//             alert("Updated successfully 🚀");
//             router.push("/admin/dashboard");
//         }
//     };

//     if (!project) return (
//         <div className="min-h-screen flex items-center justify-center"
//             style={{ background: "#020812" }}>
//             <div className="text-center">
//                 <div className="w-10 h-10 rounded-full border-2 border-t-cyan-400 border-r-transparent border-b-emerald-400 border-l-transparent animate-spin mx-auto mb-4" />
//                 <p className="text-slate-400 text-sm">Loading project...</p>
//             </div>
//         </div>
//     );

//     return (
//         <div className="min-h-screen" style={{ background: "radial-gradient(ellipse at 30% 20%, #0a1628 0%, #020812 60%)" }}>
//             {/* Ambient */}
//             <div className="fixed top-0 left-0 w-96 h-96 pointer-events-none"
//                 style={{ background: "radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)", filter: "blur(60px)" }} />

//             <div className="relative z-10 max-w-2xl mx-auto px-6 py-12">
//                 {/* Back + header */}
//                 <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
//                     <button
//                         onClick={() => router.push("/admin/dashboard")}
//                         className="text-xs font-medium mb-6 flex items-center gap-2 transition-colors"
//                         style={{ color: "#475569" }}
//                         onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#22d3ee")}
//                         onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#475569")}
//                     >
//                         ← Back to Dashboard
//                     </button>

//                     <span className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4"
//                         style={{ background: "rgba(34,211,238,0.08)", border: "1px solid rgba(34,211,238,0.15)", color: "#22d3ee" }}>
//                         Edit Project
//                     </span>
//                     <h1 className="text-4xl font-black text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
//                         Update{" "}
//                         <span style={{ background: "linear-gradient(135deg, #22d3ee, #10b981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
//                             Details
//                         </span>
//                     </h1>
//                 </motion.div>

//                 {/* Form card */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 24 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.1, duration: 0.6 }}
//                     className="rounded-3xl p-8 space-y-5"
//                     style={{
//                         background: "rgba(6,11,26,0.75)",
//                         border: "1px solid rgba(34,211,238,0.1)",
//                         backdropFilter: "blur(24px)",
//                         boxShadow: "0 0 60px rgba(34,211,238,0.04), inset 0 1px 0 rgba(255,255,255,0.04)",
//                     }}
//                 >
//                     <GlowInput label="Project Title" name="title" value={project.title} onChange={handleChange} />
//                     <div className="grid grid-cols-2 gap-4">
//                         <GlowInput label="Branch" name="branch" value={project.branch} onChange={handleChange} />
//                         <GlowInput label="Price (₹)" name="price" value={project.price} onChange={handleChange} type="text" />
//                     </div>
//                     <GlowInput label="Description" name="description" value={project.description} onChange={handleChange} multiline />

//                     <motion.button
//                         onClick={handleUpdate}
//                         disabled={loading}
//                         whileHover={!loading ? { scale: 1.02 } : {}}
//                         whileTap={!loading ? { scale: 0.98 } : {}}
//                         className="w-full py-4 rounded-2xl font-bold text-black text-sm"
//                         style={{
//                             background: loading ? "rgba(34,211,238,0.4)" : "linear-gradient(135deg, #22d3ee, #10b981)",
//                             boxShadow: loading ? "none" : "0 0 30px rgba(34,211,238,0.3)",
//                         }}
//                     >
//                         {loading ? (
//                             <span className="flex items-center justify-center gap-2">
//                                 <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
//                                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
//                                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
//                                 </svg>
//                                 Updating...
//                             </span>
//                         ) : "Update Project →"}
//                     </motion.button>
//                 </motion.div>
//             </div>
//         </div>
//     );
// }

"use client";
export const dynamic = "force-dynamic";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";

// ─── Shared input ─────────────────────────────────────────────────────────────
function GlowInput({ label, name, value, onChange, type = "text", multiline = false, placeholder = "" }: any) {
    const [focused, setFocused] = useState(false);

    const sharedStyle: React.CSSProperties = {
        width: "100%", boxSizing: "border-box",
        padding: "12px 16px", borderRadius: 12, fontSize: 13,
        color: "#fff", outline: "none",
        fontFamily: "var(--font-geist-sans)",
        background: focused ? "rgba(34,211,238,0.04)" : "rgba(255,255,255,0.03)",
        border: `1px solid ${focused ? "rgba(34,211,238,0.35)" : "rgba(255,255,255,0.07)"}`,
        boxShadow: focused ? "0 0 0 3px rgba(34,211,238,0.07)" : "none",
        transition: "background 0.2s, border-color 0.2s, box-shadow 0.2s",
    };

    return (
        <div>
            <label style={{
                display: "block", fontSize: 10, fontWeight: 600,
                letterSpacing: "1.8px", textTransform: "uppercase", marginBottom: 7,
                color: focused ? "#22d3ee" : "rgba(255,255,255,0.25)",
                fontFamily: "var(--font-geist-mono)", transition: "color 0.2s",
            }}>{label}</label>
            {multiline ? (
                <textarea name={name} value={value || ""} onChange={onChange}
                    placeholder={placeholder} rows={4}
                    onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
                    style={{ ...sharedStyle, resize: "vertical", minHeight: 100 }} />
            ) : (
                <input name={name} type={type} value={value || ""} onChange={onChange}
                    placeholder={placeholder}
                    onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
                    style={sharedStyle} />
            )}
        </div>
    );
}

// ─── Shared select ────────────────────────────────────────────────────────────
function GlowSelect({ label, name, value, onChange, options }: {
    label: string; name: string; value: string; onChange: any;
    options: { value: string; label: string }[];
}) {
    const [focused, setFocused] = useState(false);
    return (
        <div>
            <label style={{
                display: "block", fontSize: 10, fontWeight: 600,
                letterSpacing: "1.8px", textTransform: "uppercase", marginBottom: 7,
                color: focused ? "#22d3ee" : "rgba(255,255,255,0.25)",
                fontFamily: "var(--font-geist-mono)", transition: "color 0.2s",
            }}>{label}</label>
            <select name={name} value={value || ""} onChange={onChange}
                onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
                style={{
                    width: "100%", boxSizing: "border-box",
                    padding: "12px 16px", borderRadius: 12, fontSize: 13,
                    color: "#94a3b8", outline: "none",
                    fontFamily: "var(--font-geist-sans)",
                    backgroundColor: focused ? "rgba(34,211,238,0.04)" : "rgba(255,255,255,0.03)",
                    border: `1px solid ${focused ? "rgba(34,211,238,0.35)" : "rgba(255,255,255,0.07)"}`,
                    boxShadow: focused ? "0 0 0 3px rgba(34,211,238,0.07)" : "none",
                    transition: "background 0.2s, border-color 0.2s, box-shadow 0.2s",
                    cursor: "pointer", appearance: "none" as const,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center", paddingRight: 36,
                }}>
                {options.map(o => (
                    <option key={o.value} value={o.value} style={{ background: "#050d1c" }}>{o.label}</option>
                ))}
            </select>
        </div>
    );
}

// ─── Section divider ──────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: string }) {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "4px 0" }}>
            <div style={{ height: 1, flex: 1, background: "rgba(34,211,238,0.1)" }} />
            <span style={{
                fontSize: 10, fontWeight: 700, letterSpacing: "2px",
                textTransform: "uppercase", color: "#22d3ee",
                fontFamily: "var(--font-geist-mono)", padding: "0 4px",
            }}>{children}</span>
            <div style={{ height: 1, flex: 1, background: "rgba(34,211,238,0.1)" }} />
        </div>
    );
}

function Spinner() {
    return (
        <svg style={{ animation: "spin 0.8s linear infinite", width: 15, height: 15 }} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.25" />
            <path fill="currentColor" d="M4 12a8 8 0 018-8v8z" opacity="0.75" />
        </svg>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function EditProject() {
    const { id } = useParams();
    const router = useRouter();
    const [project, setProject] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    // ── original fetch logic preserved ──
    useEffect(() => {
        const fetchProject = async () => {
            const { data } = await supabase
                .from("projects")
                .select("*")
                .eq("id", id)
                .single();
            setProject(data);
        };
        fetchProject();
    }, [id]);

    const handleChange = (e: any) =>
        setProject({ ...project, [e.target.name]: e.target.value });

    // ── original update logic preserved ──
    const handleUpdate = async () => {
        setLoading(true);
        const { error } = await supabase.from("projects").update(project).eq("id", id);
        setLoading(false);
        if (error) {
            alert("Error updating");
        } else {
            router.push("/admin/dashboard");
        }
    };

    // ── Loading state ──────────────────────────────────────────────────────────
    if (!project) return (
        <div style={{
            minHeight: "100vh", position: "relative", zIndex: 10,
            display: "flex", alignItems: "center", justifyContent: "center",
        }}>
            <div style={{ textAlign: "center" }}>
                <div style={{
                    width: 40, height: 40, borderRadius: "50%",
                    border: "2px solid transparent",
                    borderTopColor: "#22d3ee", borderBottomColor: "#10b981",
                    animation: "spin 0.8s linear infinite",
                    margin: "0 auto 16px",
                }} />
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-geist-sans)" }}>
                    Loading project…
                </p>
            </div>
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
    );

    return (
        <div style={{ minHeight: "100vh", position: "relative", zIndex: 10, padding: "48px 5% 80px" }}>
            <div style={{ maxWidth: 760, margin: "0 auto" }}>

                {/* ── Header ─────────────────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    style={{ marginBottom: 36 }}
                >
                    <button
                        onClick={() => router.push("/admin/dashboard")}
                        style={{
                            display: "flex", alignItems: "center", gap: 6, fontSize: 12,
                            color: "rgba(255,255,255,0.3)", background: "none", border: "none",
                            cursor: "pointer", fontFamily: "var(--font-geist-sans)",
                            marginBottom: 24, padding: 0, transition: "color 0.2s",
                        }}
                        onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#22d3ee")}
                        onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)")}
                    >← Back to Dashboard</button>

                    <p style={{
                        fontSize: 11, fontWeight: 600, letterSpacing: "2.5px",
                        textTransform: "uppercase", color: "#22d3ee",
                        fontFamily: "var(--font-geist-mono)", marginBottom: 12,
                    }}>Admin · Edit Project</p>

                    <h1 style={{
                        fontSize: "clamp(30px,4vw,44px)", fontWeight: 900,
                        letterSpacing: "-1.5px", lineHeight: 1.05,
                        fontFamily: "var(--font-geist-sans)", color: "#fff", marginBottom: 8,
                    }}>
                        Update{" "}
                        <span style={{
                            background: "linear-gradient(135deg,#22d3ee,#10b981)",
                            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                        }}>Details</span>
                    </h1>

                    {/* Current project title hint */}
                    <div style={{
                        display: "inline-flex", alignItems: "center", gap: 8,
                        padding: "6px 14px", borderRadius: 8,
                        background: "rgba(34,211,238,0.07)",
                        border: "1px solid rgba(34,211,238,0.15)",
                    }}>
                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22d3ee", display: "block", flexShrink: 0 }} />
                        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-geist-sans)" }}>
                            Editing: <strong style={{ color: "#fff" }}>{project.title}</strong>
                        </span>
                    </div>
                </motion.div>

                {/* ── Form card ──────────────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        borderRadius: 24, padding: "32px",
                        background: "rgba(5,12,28,0.78)",
                        border: "1px solid rgba(34,211,238,0.12)",
                        backdropFilter: "blur(24px)",
                        boxShadow: "0 0 80px rgba(34,211,238,0.05), inset 0 1px 0 rgba(255,255,255,0.04)",
                        position: "relative", overflow: "hidden",
                    }}
                >
                    {/* Shimmer sweep */}
                    <motion.div
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ duration: 3, repeat: Infinity, repeatDelay: 7, ease: "easeInOut" }}
                        style={{
                            position: "absolute", top: 0, left: 0, width: "50%", height: 1,
                            background: "linear-gradient(90deg,transparent,rgba(34,211,238,0.5),transparent)",
                            pointerEvents: "none",
                        }}
                    />

                    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

                        {/* ── Basic Info ─────────────────────────────────────────── */}
                        <SectionLabel>Basic Info</SectionLabel>

                        <GlowInput label="Project Title" name="title" value={project.title}
                            onChange={handleChange} placeholder="e.g. AI Chatbot System" />

                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="two-col">
                            <GlowSelect label="Branch" name="branch" value={project.branch} onChange={handleChange}
                                options={[
                                    { value: "cse", label: "CSE / AI" },
                                    { value: "ds-ml", label: "Data Science / ML" },
                                    { value: "ece-iot", label: "ECE / IoT" },
                                    { value: "robotics", label: "Robotics" },
                                ]} />
                            <GlowInput label="Price (₹)" name="price" value={project.price}
                                onChange={handleChange} placeholder="2500" />
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="two-col">
                            <GlowSelect label="Level" name="level" value={project.level || "beginner"} onChange={handleChange}
                                options={[
                                    { value: "beginner", label: "Beginner" },
                                    { value: "intermediate", label: "Intermediate" },
                                    { value: "advanced", label: "Advanced" },
                                ]} />
                            <GlowInput label="Tech Stack (comma separated)" name="tech_stack"
                                value={Array.isArray(project.tech_stack) ? project.tech_stack.join(", ") : project.tech_stack || ""}
                                onChange={handleChange} placeholder="Python, Flask, TensorFlow" />
                        </div>

                        <GlowInput label="Description" name="description" value={project.description}
                            onChange={handleChange} multiline placeholder="Describe the project in detail…" />

                        {/* ── Project Options ────────────────────────────────────── */}
                        <SectionLabel>Project Options</SectionLabel>

                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }} className="three-col">
                            <GlowSelect label="Component Option" name="component_option"
                                value={project.component_option || "with_components"} onChange={handleChange}
                                options={[
                                    { value: "with_components", label: "With Components" },
                                    { value: "without_components", label: "Without Components" },
                                    { value: "NIL", label: "NIL" },
                                ]} />
                            <GlowSelect label="Ownership" name="ownership"
                                value={project.ownership || "own"} onChange={handleChange}
                                options={[
                                    { value: "own", label: "Own" },
                                    { value: "rented", label: "Rented" },
                                ]} />
                            <GlowSelect label="Report Option" name="report_option"
                                value={project.report_option || "with_report"} onChange={handleChange}
                                options={[
                                    { value: "with_report", label: "With Report" },
                                    { value: "without_report", label: "Without Report" },
                                ]} />
                        </div>

                        {/* Divider */}
                        <div style={{ height: 1, background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)" }} />

                        {/* ── Submit ────────────────────────────────────────────── */}
                        <motion.button
                            onClick={handleUpdate} disabled={loading}
                            whileHover={!loading ? { scale: 1.02, boxShadow: "0 0 36px rgba(34,211,238,0.5), 0 0 72px rgba(16,185,129,0.2)" } : {}}
                            whileTap={!loading ? { scale: 0.98 } : {}}
                            style={{
                                width: "100%", padding: "14px 0", borderRadius: 13, border: "none",
                                background: loading ? "rgba(34,211,238,0.3)" : "linear-gradient(135deg,#06b6d4,#10b981)",
                                color: "#000", fontSize: 14, fontWeight: 700,
                                fontFamily: "var(--font-geist-sans)",
                                cursor: loading ? "wait" : "pointer",
                                boxShadow: loading ? "none" : "0 0 28px rgba(34,211,238,0.35)",
                                transition: "background 0.2s, box-shadow 0.2s",
                            }}
                        >
                            {loading ? (
                                <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                                    <Spinner />Updating Project…
                                </span>
                            ) : "Update Project →"}
                        </motion.button>

                        {/* Trust row */}
                        <div style={{ display: "flex", justifyContent: "center", gap: 28, flexWrap: "wrap" }}>
                            {["Changes saved to Supabase", "Instant update", "No downtime"].map(t => (
                                <span key={t} style={{
                                    fontSize: 11, color: "rgba(255,255,255,0.2)",
                                    fontFamily: "var(--font-geist-sans)",
                                    display: "flex", alignItems: "center", gap: 5,
                                }}>
                                    <span style={{ color: "#10b981", fontSize: 10 }}>✓</span>{t}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 640px) {
          .two-col   { grid-template-columns: 1fr !important; }
          .three-col { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 400px) {
          .three-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </div>
    );
}