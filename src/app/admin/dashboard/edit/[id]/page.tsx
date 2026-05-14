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



"use client";
// export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";

function GlowInput({ label, name, value, onChange, type = "text", multiline = false }: any) {
    const [focused, setFocused] = useState(false);
    const baseStyle: React.CSSProperties = {
        background: focused ? "rgba(34,211,238,0.04)" : "rgba(255,255,255,0.02)",
        border: focused ? "1px solid rgba(34,211,238,0.35)" : "1px solid rgba(255,255,255,0.07)",
        boxShadow: focused ? "0 0 20px rgba(34,211,238,0.08)" : "none",
        color: "#e2e8f0",
        outline: "none",
        width: "100%",
        padding: "14px 18px",
        borderRadius: "14px",
        fontSize: "14px",
        transition: "all 0.25s ease",
        backdropFilter: "blur(8px)",
    };

    return (
        <div>
            <label className="block text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: focused ? "#22d3ee" : "#475569" }}>
                {label}
            </label>
            {multiline ? (
                <textarea
                    name={name}
                    value={value || ""}
                    onChange={onChange}
                    rows={4}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    style={{ ...baseStyle, resize: "none" }}
                />
            ) : (
                <input
                    name={name}
                    type={type}
                    value={value || ""}
                    onChange={onChange}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    style={baseStyle}
                />
            )}
        </div>
    );
}

export default function EditProject() {
    const { id } = useParams();
    const router = useRouter();
    const [project, setProject] = useState<any>(null);
    const [loading, setLoading] = useState(false);

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

    const handleChange = (e: any) => {
        setProject({ ...project, [e.target.name]: e.target.value });
    };

    const handleUpdate = async () => {
        setLoading(true);
        const { error } = await supabase.from("projects").update(project).eq("id", id);
        setLoading(false);
        if (error) {
            alert("Error updating");
        } else {
            alert("Updated successfully 🚀");
            router.push("/admin/dashboard");
        }
    };

    if (!project) return (
        <div className="min-h-screen flex items-center justify-center"
            style={{ background: "#020812" }}>
            <div className="text-center">
                <div className="w-10 h-10 rounded-full border-2 border-t-cyan-400 border-r-transparent border-b-emerald-400 border-l-transparent animate-spin mx-auto mb-4" />
                <p className="text-slate-400 text-sm">Loading project...</p>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen" style={{ background: "radial-gradient(ellipse at 30% 20%, #0a1628 0%, #020812 60%)" }}>
            {/* Ambient */}
            <div className="fixed top-0 left-0 w-96 h-96 pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)", filter: "blur(60px)" }} />

            <div className="relative z-10 max-w-2xl mx-auto px-6 py-12">
                {/* Back + header */}
                <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
                    <button
                        onClick={() => router.push("/admin/dashboard")}
                        className="text-xs font-medium mb-6 flex items-center gap-2 transition-colors"
                        style={{ color: "#475569" }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#22d3ee")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#475569")}
                    >
                        ← Back to Dashboard
                    </button>

                    <span className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4"
                        style={{ background: "rgba(34,211,238,0.08)", border: "1px solid rgba(34,211,238,0.15)", color: "#22d3ee" }}>
                        Edit Project
                    </span>
                    <h1 className="text-4xl font-black text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                        Update{" "}
                        <span style={{ background: "linear-gradient(135deg, #22d3ee, #10b981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                            Details
                        </span>
                    </h1>
                </motion.div>

                {/* Form card */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="rounded-3xl p-8 space-y-5"
                    style={{
                        background: "rgba(6,11,26,0.75)",
                        border: "1px solid rgba(34,211,238,0.1)",
                        backdropFilter: "blur(24px)",
                        boxShadow: "0 0 60px rgba(34,211,238,0.04), inset 0 1px 0 rgba(255,255,255,0.04)",
                    }}
                >
                    <GlowInput label="Project Title" name="title" value={project.title} onChange={handleChange} />
                    <div className="grid grid-cols-2 gap-4">
                        <GlowInput label="Branch" name="branch" value={project.branch} onChange={handleChange} />
                        <GlowInput label="Price (₹)" name="price" value={project.price} onChange={handleChange} type="text" />
                    </div>
                    <GlowInput label="Description" name="description" value={project.description} onChange={handleChange} multiline />

                    <motion.button
                        onClick={handleUpdate}
                        disabled={loading}
                        whileHover={!loading ? { scale: 1.02 } : {}}
                        whileTap={!loading ? { scale: 0.98 } : {}}
                        className="w-full py-4 rounded-2xl font-bold text-black text-sm"
                        style={{
                            background: loading ? "rgba(34,211,238,0.4)" : "linear-gradient(135deg, #22d3ee, #10b981)",
                            boxShadow: loading ? "none" : "0 0 30px rgba(34,211,238,0.3)",
                        }}
                    >
                        {loading ? (
                            <span className="flex items-center justify-center gap-2">
                                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                </svg>
                                Updating...
                            </span>
                        ) : "Update Project →"}
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
}