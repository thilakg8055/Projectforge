// // "use client";

// // import { useState } from "react";
// // import { supabase } from "@/lib/supabase";

// // export default function AddProject() {
// //     const [form, setForm] = useState<any>({});

// //     const submit = async () => {
// //         await supabase.from("projects").insert([form]);
// //         alert("Project Added 🚀");
// //     };
// //     // const handleFileUpload = async (e: any) => {
// //     //     const files = e.target.files;

// //     //     let urls: string[] = [];

// //     //     for (let file of files) {
// //     //         const { data, error } = await supabase.storage
// //     //             .from("projects")
// //     //             .upload(`images/${Date.now()}-${file.name}`, file);

// //     //         if (data) {
// //     //             const publicUrl = supabase
// //     //                 .storage
// //     //                 .from("projects")
// //     //                 .getPublicUrl(data.path).data.publicUrl;

// //     //             urls.push(publicUrl);
// //     //         }
// //     //     }

// //     //     setForm({ ...form, image_urls: urls });
// //     // };

// // const handleFileUpload = async (e: any) => {
// //     const files = e.target.files;

// //     let urls: string[] = [];

// //     for (let file of files) {
// //         const fileName = `${Date.now()}-${file.name}`;

// //         const { data, error } = await supabase.storage
// //             .from("projects")
// //             .upload(`images/${fileName}`, file);

// //         if (error) {
// //             console.error("Upload error:", error);
// //             continue;
// //         }

// //         // ✅ Get public URL properly
// //         const { data: publicUrlData } = supabase
// //             .storage
// //             .from("projects")
// //             .getPublicUrl(data.path);

// //         urls.push(publicUrlData.publicUrl);
// //     }

// //     // ✅ IMPORTANT: merge properly
// //     setForm((prev: any) => ({
// //         ...prev,
// //         image_urls: urls,
// //     }));
// //     };
// //     return (
// //         <div className="p-10 max-w-xl">

// //             <h1 className="text-3xl mb-6">Add Project</h1>

// //             <input placeholder="Title" className="input"
// //                 onChange={(e) => setForm({ ...form, title: e.target.value })} />

// //             <input placeholder="Branch" className="input"
// //                 onChange={(e) => setForm({ ...form, branch: e.target.value })} />

// //             <input placeholder="Price" className="input"
// //                 onChange={(e) => setForm({ ...form, price: e.target.value })} />

// // {/* COMPONENT OPTION */}
// // <select className="input"
// //     onChange={(e) => setForm({ ...form, component_option: e.target.value })}>
// //     <option>with_components</option>
// //     <option>without_components</option>
// //     <option>NIL</option>
// // </select>

// // {/* OWNERSHIP */}
// // <select className="input"
// //     onChange={(e) => setForm({ ...form, ownership: e.target.value })}>
// //     <option>rented</option>
// //     <option>own</option>
// // </select>

// // {/* REPORT */}
// // <select className="input"
// //     onChange={(e) => setForm({ ...form, report_option: e.target.value })}>
// //     <option>with_report</option>
// //     <option>without_report</option>
// // </select>

// // <textarea placeholder="Description" className="input"
// //     onChange={(e) => setForm({ ...form, description: e.target.value })} />
// // <input type="file" multiple onChange={handleFileUpload} />
// // <img
// //     src={form.image_urls?.[0]}
// //     className="w-40 rounded mt-2"
// // />
// // <button onClick={submit}
// //     className="bg-orange-500 px-6 py-3 mt-4">
// //     Add Project
// // </button>
// //         </div>
// //     );
// // }





// "use client";

// import { useState } from "react";
// import { supabase } from "@/lib/supabase";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";

// function GlowInput({ label, name, value, onChange, type = "text", multiline = false, placeholder = "" }: any) {
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
//                     value={value}
//                     onChange={onChange}
//                     placeholder={placeholder}
//                     rows={4}
//                     onFocus={() => setFocused(true)}
//                     onBlur={() => setFocused(false)}
//                     style={{ ...baseStyle, resize: "none" }}
//                 />
//             ) : (
//                 <input
//                     name={name}
//                     type={type}
//                     value={value}
//                     onChange={onChange}
//                     placeholder={placeholder}
//                     onFocus={() => setFocused(true)}
//                     onBlur={() => setFocused(false)}
//                     style={baseStyle}
//                 />
//             )}
//         </div>
//     );
// }

// export default function AddProjectPage() {
//     const router = useRouter();
//     const [form, setForm] = useState({
//         title: "", branch: "", price: "", description: "", level: "beginner", tech_stack: "", image_urls: [] as string[],
//     });
//     const [loading, setLoading] = useState(false);

//     const handleChange = (e: any) => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async () => {
//         if (!form.title || !form.price) {
//             alert("Title and price are required");
//             return;
//         }
//         setLoading(true);

//         const payload = {
//             ...form,
//             tech_stack: form.tech_stack
//                 ? form.tech_stack.split(",").map((t) => t.trim()).filter(Boolean)
//                 : [],
//         };

//         const { error } = await supabase.from("projects").insert([payload]);
//         setLoading(false);

//         if (error) {
//             alert("Error adding project");
//         } else {
//             alert("Project added 🚀");
//             router.push("/admin/dashboard");
//         }


// };

// return (
//     <div className="min-h-screen" style={{ background: "radial-gradient(ellipse at 30% 20%, #0a1628 0%, #020812 60%)" }}>
//         <div className="fixed top-0 right-0 w-80 h-80 pointer-events-none"
//             style={{ background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)", filter: "blur(50px)" }} />

//         <div className="relative z-10 max-w-2xl mx-auto px-6 py-12">
//             {/* Header */}
//             <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
//                 <button
//                     onClick={() => router.push("/admin/dashboard")}
//                     className="text-xs font-medium mb-6 flex items-center gap-2 transition-colors"
//                     style={{ color: "#475569" }}
//                     onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#22d3ee")}
//                     onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#475569")}
//                 >
//                     ← Back to Dashboard
//                 </button>

//                 <span className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4"
//                     style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)", color: "#10b981" }}>
//                     New Project
//                 </span>
//                 <h1 className="text-4xl font-black text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
//                     Add{" "}
//                     <span style={{ background: "linear-gradient(135deg, #22d3ee, #10b981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
//                         Project
//                     </span>
//                 </h1>
//             </motion.div>

//             {/* Form */}
//             <motion.div
//                 initial={{ opacity: 0, y: 24 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.1 }}
//                 className="rounded-3xl p-8 space-y-5"
//                 style={{
//                     background: "rgba(6,11,26,0.75)",
//                     border: "1px solid rgba(34,211,238,0.1)",
//                     backdropFilter: "blur(24px)",
//                     boxShadow: "0 0 60px rgba(34,211,238,0.04), inset 0 1px 0 rgba(255,255,255,0.04)",
//                 }}
//             >
//                 <GlowInput label="Project Title *" name="title" value={form.title} onChange={handleChange} placeholder="e.g. AI Chatbot System" />

//                 <div className="grid grid-cols-2 gap-4">
//                     <GlowInput label="Branch" name="branch" value={form.branch} onChange={handleChange} placeholder="CSE / ECE / DS / others" />
//                     <GlowInput label="Price (₹) *" name="price" value={form.price} onChange={handleChange} placeholder="2500" />
//                 </div>

//                 <div>
//                     <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#475569" }}>
//                         Level
//                     </label>
//                     <select
//                         name="level"
//                         value={form.level}
//                         onChange={handleChange}
//                         className="text-sm px-4 py-3 rounded-xl outline-none w-full"
//                         style={{
//                             background: "rgba(6,11,26,0.9)",
//                             border: "1px solid rgba(34,211,238,0.12)",
//                             color: "#94a3b8",
//                         }}
//                     >
//                         <option value="beginner">Beginner</option>
//                         <option value="intermediate">Intermediate</option>
//                         <option value="advanced">Advanced</option>
//                     </select>
//                 </div>

//                 <GlowInput
//                     label="Tech Stack (comma separated)"
//                     name="tech_stack"
//                     value={form.tech_stack}
//                     onChange={handleChange}
//                     placeholder="Python, Flask, TensorFlow"
//                 />

//                 <GlowInput label="Description" name="description" value={form.description} onChange={handleChange} multiline placeholder="Describe the project..." />

//                 <motion.button
//                     onClick={handleSubmit}
//                     disabled={loading}
//                     whileHover={!loading ? { scale: 1.02 } : {}}
//                     whileTap={!loading ? { scale: 0.98 } : {}}
//                     className="w-full py-4 rounded-2xl font-bold text-black text-sm"
//                     style={{
//                         background: loading ? "rgba(34,211,238,0.4)" : "linear-gradient(135deg, #22d3ee, #10b981)",
//                         boxShadow: loading ? "none" : "0 0 30px rgba(34,211,238,0.3)",
//                     }}
//                 >
//                     {loading ? (
//                         <span className="flex items-center justify-center gap-2">
//                             <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
//                                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
//                                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
//                             </svg>
//                             Adding...
//                         </span>
//                     ) : "Add Project →"}
//                 </motion.button>
//                 COMPONENT OPTION
//                 <select className="input"
//                     onChange={(e) => setForm({ ...form, component_option: e.target.value })}>
//                     <option>with_components</option>
//                     <option>without_components</option>
//                     <option>NIL</option>
//                 </select>

//                 {/* OWNERSHIP */}
//                 <select className="input"
//                     onChange={(e) => setForm({ ...form, ownership: e.target.value })}>
//                     <option>rented</option>
//                     <option>own</option>
//                 </select>

//                 {/* REPORT */}
//                 <select className="input"
//                     onChange={(e) => setForm({ ...form, report_option: e.target.value })}>
//                     <option>with_report</option>
//                     <option>without_report</option>
//                 </select>

//                 <textarea placeholder="Description" className="input"
//                     onChange={(e) => setForm({ ...form, description: e.target.value })} />
//                 <input type="file" multiple onChange={handleFileUpload} />
//                 <img
//                     src={form.image_urls?.[0]}
//                     className="w-40 rounded mt-2"
//                 />
//             </motion.div>

//         </div>
//     </div>

// );
// }


// "use client";

// import { useState } from "react";
// import { supabase } from "@/lib/supabase";
// import { useRouter } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";

// // ── GLOW INPUT ──────────────────────────────────────────────────────────────
// function GlowInput({ label, name, value, onChange, type = "text", multiline = false, placeholder = "" }: any) {
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
//         fontFamily: "inherit",
//     };
//     return (
//         <div>
//             <label className="block text-xs font-semibold uppercase tracking-widest mb-2 transition-colors duration-200"
//                 style={{ color: focused ? "#22d3ee" : "#475569" }}>
//                 {label}
//             </label>
//             {multiline ? (
//                 <textarea name={name} value={value} onChange={onChange} placeholder={placeholder} rows={4}
//                     onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
//                     style={{ ...baseStyle, resize: "none" }} />
//             ) : (
//                 <input name={name} type={type} value={value} onChange={onChange} placeholder={placeholder}
//                     onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} style={baseStyle} />
//             )}
//         </div>
//     );
// }

// // ── GLOW SELECT ─────────────────────────────────────────────────────────────
// function GlowSelect({ label, name, value, onChange, options }: {
//     label: string; name: string; value: string; onChange: any;
//     options: { value: string; label: string }[];
// }) {
//     const [focused, setFocused] = useState(false);
//     return (
//         <div>
//             <label className="block text-xs font-semibold uppercase tracking-widest mb-2 transition-colors duration-200"
//                 style={{ color: focused ? "#22d3ee" : "#475569" }}>
//                 {label}
//             </label>
//             <select name={name} value={value} onChange={onChange}
//                 onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
//                 className="w-full text-sm px-4 py-3.5 rounded-xl outline-none transition-all duration-200"
//                 style={{
//                     background: focused ? "rgba(34,211,238,0.04)" : "rgba(255,255,255,0.02)",
//                     border: focused ? "1px solid rgba(34,211,238,0.35)" : "1px solid rgba(255,255,255,0.07)",
//                     boxShadow: focused ? "0 0 20px rgba(34,211,238,0.08)" : "none",
//                     color: "#94a3b8",
//                     backdropFilter: "blur(8px)",
//                     fontFamily: "inherit",
//                 }}
//             >
//                 {options.map((o) => (
//                     <option key={o.value} value={o.value} style={{ background: "#0a1628" }}>{o.label}</option>
//                 ))}
//             </select>
//         </div>
//     );
// }

// // ── SECTION DIVIDER ─────────────────────────────────────────────────────────
// function SectionLabel({ children }: { children: string }) {
//     return (
//         <div className="flex items-center gap-3 pt-2">
//             <div className="h-px flex-1" style={{ background: "rgba(34,211,238,0.08)" }} />
//             <span className="text-xs font-semibold uppercase tracking-widest px-3" style={{ color: "#22d3ee" }}>
//                 {children}
//             </span>
//             <div className="h-px flex-1" style={{ background: "rgba(34,211,238,0.08)" }} />
//         </div>
//     );
// }

// // ── MAIN ─────────────────────────────────────────────────────────────────────
// export default function AddProjectPage() {
//     const router = useRouter();

//     const [form, setForm] = useState<any>({
//         title: "",
//         branch: "",
//         price: "",
//         description: "",
//         level: "beginner",
//         tech_stack: "",
//         component_option: "with_components",
//         ownership: "own",
//         report_option: "with_report",
//         image_urls: [] as string[],
//     });

//     const [loading, setLoading] = useState(false);
//     const [uploadingImages, setUploadingImages] = useState(false);
//     const [previewUrls, setPreviewUrls] = useState<string[]>([]);

//     const handleChange = (e: any) => {
//         setForm((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
//     };

//     // ✅ IMAGE UPLOAD — original logic preserved exactly
//     const handleFileUpload = async (e: any) => {
//         const files = e.target.files;
//         if (!files?.length) return;

//         setUploadingImages(true);
//         const urls: string[] = [];
//         const localPreviews: string[] = [];

//         for (const file of files) {
//             localPreviews.push(URL.createObjectURL(file));

//             const fileName = `${Date.now()}-${file.name}`;
//             const { data, error } = await supabase.storage
//                 .from("projects")
//                 .upload(`images/${fileName}`, file);

//             if (error) {
//                 console.error("Upload error:", error);
//                 continue;
//             }

//             const { data: publicUrlData } = supabase.storage
//                 .from("projects")
//                 .getPublicUrl(data.path);

//             urls.push(publicUrlData.publicUrl);
//         }

//         setPreviewUrls(localPreviews);
//         setForm((prev: any) => ({ ...prev, image_urls: urls }));
//         setUploadingImages(false);
//     };

//     const removeImage = (index: number) => {
//         setPreviewUrls((prev) => prev.filter((_, i) => i !== index));
//         setForm((prev: any) => ({
//             ...prev,
//             image_urls: prev.image_urls.filter((_: any, i: number) => i !== index),
//         }));
//     };

//     // ✅ SUBMIT — original logic preserved exactly
//     const handleSubmit = async () => {
//         if (!form.title || !form.price) {
//             alert("Title and price are required");
//             return;
//         }
//         setLoading(true);

//         const payload = {
//             ...form,
//             tech_stack: form.tech_stack
//                 ? form.tech_stack.split(",").map((t: string) => t.trim()).filter(Boolean)
//                 : [],
//         };

//         const { error } = await supabase.from("projects").insert([payload]);
//         setLoading(false);

//         if (error) {
//             console.log("ERROR:", error);
//             alert("Error adding project");
//         } else {
//             alert("Project added 🚀");
//             router.push("/admin/dashboard");
//         }
//     };

//     return (
//         <div className="min-h-screen"
//             style={{ background: "radial-gradient(ellipse at 30% 20%, #0a1628 0%, #020812 60%)" }}>

//             {/* Ambient blobs */}
//             <div className="fixed top-0 right-0 w-96 h-96 pointer-events-none"
//                 style={{ background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)", filter: "blur(60px)" }} />
//             <div className="fixed bottom-0 left-0 w-80 h-80 pointer-events-none"
//                 style={{ background: "radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 70%)", filter: "blur(50px)" }} />

//             <div className="relative z-10 max-w-2xl mx-auto px-6 py-12">

//                 {/* ── HEADER ─────────────────────────────────────────── */}
//                 <motion.div
//                     initial={{ opacity: 0, y: -16 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//                     className="mb-10"
//                 >
//                     <button
//                         onClick={() => router.push("/admin/dashboard")}
//                         className="text-xs font-medium mb-6 flex items-center gap-2 transition-colors duration-200"
//                         style={{ color: "#475569" }}
//                         onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#22d3ee")}
//                         onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#475569")}
//                     >
//                         ← Back to Dashboard
//                     </button>

//                     <span className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4"
//                         style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)", color: "#10b981" }}>
//                         New Project
//                     </span>

//                     <h1 className="text-4xl font-black text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
//                         Add{" "}
//                         <span style={{ background: "linear-gradient(135deg, #22d3ee, #10b981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
//                             Project
//                         </span>
//                     </h1>
//                     <p className="text-slate-500 text-sm mt-2">Fill in the details below to publish a new project.</p>
//                 </motion.div>

//                 {/* ── FORM CARD ────────────────────────────────────────── */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 24 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//                     className="rounded-3xl p-8 space-y-6"
//                     style={{
//                         background: "rgba(6,11,26,0.75)",
//                         border: "1px solid rgba(34,211,238,0.1)",
//                         backdropFilter: "blur(24px)",
//                         boxShadow: "0 0 60px rgba(34,211,238,0.04), inset 0 1px 0 rgba(255,255,255,0.04)",
//                     }}
//                 >

//                     {/* ── SECTION: BASIC INFO ─────────────────────────── */}
//                     <SectionLabel>Basic Info</SectionLabel>

//                     <GlowInput label="Project Title *" name="title" value={form.title} onChange={handleChange}
//                         placeholder="e.g. AI Chatbot System" />

//                     <div className="grid grid-cols-2 gap-4">
//                         <GlowInput label="Branch" name="branch" value={form.branch} onChange={handleChange}
//                             placeholder="CSE / ECE / DS" />
//                         <GlowInput label="Price (₹) *" name="price" value={form.price} onChange={handleChange}
//                             placeholder="2500" />
//                     </div>

//                     <div className="grid grid-cols-2 gap-4">
//                         <GlowSelect
//                             label="Level"
//                             name="level"
//                             value={form.level}
//                             onChange={handleChange}
//                             options={[
//                                 { value: "beginner", label: "Beginner" },
//                                 { value: "intermediate", label: "Intermediate" },
//                                 { value: "advanced", label: "Advanced" },
//                             ]}
//                         />
//                         <GlowInput label="Tech Stack (comma separated)" name="tech_stack" value={form.tech_stack}
//                             onChange={handleChange} placeholder="Python, Flask, TensorFlow" />
//                     </div>

//                     <GlowInput label="Description" name="description" value={form.description}
//                         onChange={handleChange} multiline placeholder="Describe the project in detail..." />

//                     {/* ── SECTION: PROJECT OPTIONS ────────────────────── */}
//                     <SectionLabel>Project Options</SectionLabel>

//                     <div className="grid grid-cols-3 gap-4">
//                         <GlowSelect
//                             label="Component Option"
//                             name="component_option"
//                             value={form.component_option}
//                             onChange={handleChange}
//                             options={[
//                                 { value: "with_components", label: "With Components" },
//                                 { value: "without_components", label: "Without Components" },
//                                 { value: "NIL", label: "NIL" },
//                             ]}
//                         />
//                         <GlowSelect
//                             label="Ownership"
//                             name="ownership"
//                             value={form.ownership}
//                             onChange={handleChange}
//                             options={[
//                                 { value: "own", label: "Own" },
//                                 { value: "rented", label: "Rented" },
//                             ]}
//                         />
//                         <GlowSelect
//                             label="Report Option"
//                             name="report_option"
//                             value={form.report_option}
//                             onChange={handleChange}
//                             options={[
//                                 { value: "with_report", label: "With Report" },
//                                 { value: "without_report", label: "Without Report" },
//                             ]}
//                         />
//                     </div>

//                     {/* ── SECTION: IMAGES ─────────────────────────────── */}
//                     <SectionLabel>Project Images</SectionLabel>

//                     {/* Drop zone */}
//                     <label
//                         className="relative flex flex-col items-center justify-center w-full rounded-2xl cursor-pointer transition-all duration-300"
//                         style={{
//                             border: "2px dashed rgba(34,211,238,0.15)",
//                             background: "rgba(34,211,238,0.02)",
//                             padding: "36px 20px",
//                         }}
//                         onDragOver={(e) => {
//                             e.preventDefault();
//                             (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,211,238,0.45)";
//                             (e.currentTarget as HTMLElement).style.background = "rgba(34,211,238,0.05)";
//                         }}
//                         onDragLeave={(e) => {
//                             (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,211,238,0.15)";
//                             (e.currentTarget as HTMLElement).style.background = "rgba(34,211,238,0.02)";
//                         }}
//                     >
//                         <input
//                             type="file"
//                             multiple
//                             accept="image/*"
//                             onChange={handleFileUpload}
//                             className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
//                         />

//                         {uploadingImages ? (
//                             <div className="flex flex-col items-center gap-3 pointer-events-none">
//                                 <svg className="animate-spin w-7 h-7" viewBox="0 0 24 24" fill="none"
//                                     style={{ color: "#22d3ee" }}>
//                                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
//                                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
//                                 </svg>
//                                 <p className="text-sm font-medium" style={{ color: "#22d3ee" }}>Uploading to Supabase Storage...</p>
//                             </div>
//                         ) : (
//                             <div className="text-center pointer-events-none">
//                                 <div className="w-12 h-12 rounded-2xl mx-auto mb-3 flex items-center justify-center text-2xl"
//                                     style={{ background: "rgba(34,211,238,0.08)", border: "1px solid rgba(34,211,238,0.12)" }}>
//                                     🖼️
//                                 </div>
//                                 <p className="text-sm font-semibold" style={{ color: "#94a3b8" }}>
//                                     Click to upload or drag & drop
//                                 </p>
//                                 <p className="text-xs mt-1" style={{ color: "#475569" }}>
//                                     PNG, JPG, WebP · Multiple files supported
//                                 </p>
//                                 {form.image_urls.length > 0 && (
//                                     <p className="text-xs mt-2 font-medium" style={{ color: "#10b981" }}>
//                                         ✓ {form.image_urls.length} image{form.image_urls.length > 1 ? "s" : ""} uploaded
//                                     </p>
//                                 )}
//                             </div>
//                         )}
//                     </label>

//                     {/* Image previews grid */}
//                     <AnimatePresence>
//                         {previewUrls.length > 0 && (
//                             <motion.div
//                                 initial={{ opacity: 0, height: 0 }}
//                                 animate={{ opacity: 1, height: "auto" }}
//                                 exit={{ opacity: 0, height: 0 }}
//                                 className="grid grid-cols-4 gap-3"
//                             >
//                                 {previewUrls.map((url, i) => (
//                                     <motion.div
//                                         key={i}
//                                         initial={{ opacity: 0, scale: 0.8 }}
//                                         animate={{ opacity: 1, scale: 1 }}
//                                         exit={{ opacity: 0, scale: 0.8 }}
//                                         transition={{ delay: i * 0.05 }}
//                                         className="relative group rounded-xl overflow-hidden"
//                                         style={{
//                                             aspectRatio: "1",
//                                             border: i === 0
//                                                 ? "2px solid rgba(34,211,238,0.35)"
//                                                 : "1px solid rgba(255,255,255,0.08)",
//                                         }}
//                                     >
//                                         <img src={url} alt={`Preview ${i + 1}`}
//                                             className="w-full h-full object-cover" />

//                                         {/* Remove on hover */}
//                                         <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center"
//                                             style={{ background: "rgba(0,0,0,0.65)" }}>
//                                             <button
//                                                 onClick={(e) => { e.preventDefault(); removeImage(i); }}
//                                                 className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
//                                                 style={{ background: "rgba(239,68,68,0.85)" }}
//                                             >
//                                                 ✕
//                                             </button>
//                                         </div>

//                                         {/* Cover badge */}
//                                         {i === 0 && (
//                                             <div className="absolute bottom-1 left-1 text-xs px-1.5 py-0.5 rounded-md font-semibold"
//                                                 style={{ background: "rgba(34,211,238,0.9)", color: "#000", fontSize: "10px" }}>
//                                                 Cover
//                                             </div>
//                                         )}
//                                     </motion.div>
//                                 ))}
//                             </motion.div>
//                         )}
//                     </AnimatePresence>

//                     {/* ── SUBMIT ──────────────────────────────────────── */}
//                     <div className="pt-2 space-y-3">
//                         <motion.button
//                             onClick={handleSubmit}
//                             disabled={loading || uploadingImages}
//                             whileHover={!loading && !uploadingImages ? { scale: 1.02 } : {}}
//                             whileTap={!loading && !uploadingImages ? { scale: 0.98 } : {}}
//                             className="w-full py-4 rounded-2xl font-bold text-black text-sm"
//                             style={{
//                                 background: loading || uploadingImages
//                                     ? "rgba(34,211,238,0.35)"
//                                     : "linear-gradient(135deg, #22d3ee, #10b981)",
//                                 boxShadow: loading || uploadingImages
//                                     ? "none"
//                                     : "0 0 30px rgba(34,211,238,0.3), 0 0 60px rgba(16,185,129,0.15)",
//                             }}
//                         >
//                             {loading ? (
//                                 <span className="flex items-center justify-center gap-2">
//                                     <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
//                                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
//                                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
//                                     </svg>
//                                     Adding Project...
//                                 </span>
//                             ) : uploadingImages ? (
//                                 <span className="flex items-center justify-center gap-2">
//                                     <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
//                                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
//                                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
//                                     </svg>
//                                     Waiting for images...
//                                 </span>
//                             ) : "Add Project →"}
//                         </motion.button>

//                         {/* Trust row */}
//                         <div className="flex justify-center gap-6 text-xs" style={{ color: "#334155" }}>
//                             {["Saves to Supabase", "Images to Storage", "Instant publish"].map((t) => (
//                                 <span key={t} className="flex items-center gap-1">
//                                     <span style={{ color: "#10b981" }}>✓</span> {t}
//                                 </span>
//                             ))}
//                         </div>
//                     </div>

//                 </motion.div>
//             </div>
//         </div>
//     );
// }


"use client";
export const dynamic = "force-dynamic";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

// ─── Shared input ─────────────────────────────────────────────────────────────
function GlowInput({ label, name, value, onChange, type = "text", multiline = false, placeholder = "", required = false }: any) {
    const [focused, setFocused] = useState(false);

    const sharedStyle: React.CSSProperties = {
        width: "100%", boxSizing: "border-box",
        padding: "12px 16px",
        borderRadius: 12, fontSize: 13,
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
                letterSpacing: "1.8px", textTransform: "uppercase",
                marginBottom: 7,
                color: focused ? "#22d3ee" : "rgba(255,255,255,0.25)",
                fontFamily: "var(--font-geist-mono)",
                transition: "color 0.2s",
            }}>
                {label}{required && <span style={{ color: "#22d3ee", marginLeft: 3 }}>*</span>}
            </label>

            {multiline ? (
                <textarea
                    name={name} value={value} onChange={onChange}
                    placeholder={placeholder} rows={4}
                    onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
                    style={{ ...sharedStyle, resize: "vertical", minHeight: 100 }}
                />
            ) : (
                <input
                    name={name} type={type} value={value} onChange={onChange}
                    placeholder={placeholder}
                    onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
                    style={sharedStyle}
                />
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
                letterSpacing: "1.8px", textTransform: "uppercase",
                marginBottom: 7,
                color: focused ? "#22d3ee" : "rgba(255,255,255,0.25)",
                fontFamily: "var(--font-geist-mono)",
                transition: "color 0.2s",
            }}>{label}</label>
            <select
                name={name} value={value} onChange={onChange}
                onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
                style={{
                    width: "100%", boxSizing: "border-box",
                    padding: "12px 16px",
                    borderRadius: 12, fontSize: 13,
                    color: "#94a3b8", outline: "none",
                    fontFamily: "var(--font-geist-sans)",
                    backgroundColor: focused ? "rgba(34,211,238,0.04)" : "rgba(255,255,255,0.03)",
                    border: `1px solid ${focused ? "rgba(34,211,238,0.35)" : "rgba(255,255,255,0.07)"}`,
                    boxShadow: focused ? "0 0 0 3px rgba(34,211,238,0.07)" : "none",
                    transition: "background 0.2s, border-color 0.2s, box-shadow 0.2s",
                    cursor: "pointer",
                    appearance: "none" as const,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 14px center",
                    paddingRight: 36,
                }}
            >
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
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "6px 0" }}>
            <div style={{ height: 1, flex: 1, background: "rgba(34,211,238,0.1)" }} />
            <span style={{
                fontSize: 10, fontWeight: 700, letterSpacing: "2px",
                textTransform: "uppercase", color: "#22d3ee",
                fontFamily: "var(--font-geist-mono)",
                padding: "0 4px",
            }}>{children}</span>
            <div style={{ height: 1, flex: 1, background: "rgba(34,211,238,0.1)" }} />
        </div>
    );
}

// ─── Spinner ──────────────────────────────────────────────────────────────────
function Spinner() {
    return (
        <svg style={{ animation: "spin 0.8s linear infinite", width: 15, height: 15 }} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.25" />
            <path fill="currentColor" d="M4 12a8 8 0 018-8v8z" opacity="0.75" />
        </svg>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AddProjectPage() {
    const router = useRouter();

    const [form, setForm] = useState<any>({
        title: "", branch: "cse", price: "", description: "",
        level: "beginner", tech_stack: "",
        component_option: "with_components",
        ownership: "own",
        report_option: "with_report",
        image_urls: [] as string[],
    });

    const [loading, setLoading] = useState(false);
    const [uploadingImages, setUploadingImages] = useState(false);
    const [previewUrls, setPreviewUrls] = useState<string[]>([]);
    const [dragOver, setDragOver] = useState(false);

    const handleChange = (e: any) =>
        setForm((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));

    // ── Image upload (original logic preserved) ──────────────────────────────
    const handleFileUpload = async (e: any) => {
        const files = e.target.files;
        if (!files?.length) return;

        setUploadingImages(true);
        const urls: string[] = [];
        const localPreviews: string[] = [];

        for (const file of files) {
            localPreviews.push(URL.createObjectURL(file));

            const fileName = `${Date.now()}-${file.name}`;
            const { data, error } = await supabase.storage
                .from("projects")
                .upload(`images/${fileName}`, file);

            if (error) { console.error("Upload error:", error); continue; }

            const { data: publicUrlData } = supabase.storage
                .from("projects")
                .getPublicUrl(data.path);

            urls.push(publicUrlData.publicUrl);
        }

        setPreviewUrls(localPreviews);
        setForm((prev: any) => ({ ...prev, image_urls: urls }));
        setUploadingImages(false);
    };

    const removeImage = (index: number) => {
        setPreviewUrls(prev => prev.filter((_, i) => i !== index));
        setForm((prev: any) => ({
            ...prev,
            image_urls: prev.image_urls.filter((_: any, i: number) => i !== index),
        }));
    };

    // ── Submit (original logic preserved) ────────────────────────────────────
    const handleSubmit = async () => {
        if (!form.title || !form.price) {
            alert("Title and price are required");
            return;
        }
        setLoading(true);

        const payload = {
            ...form,
            tech_stack: form.tech_stack
                ? form.tech_stack.split(",").map((t: string) => t.trim()).filter(Boolean)
                : [],
        };

        const { error } = await supabase.from("projects").insert([payload]);
        setLoading(false);

        if (error) {
            console.error("ERROR:", error);
            alert("Error adding project");
        } else {
            router.push("/admin/dashboard");
        }
    };

    const busy = loading || uploadingImages;

    return (
        <div style={{ minHeight: "100vh", position: "relative", zIndex: 10, padding: "48px 5% 80px" }}>

            <div style={{ maxWidth: 760, margin: "0 auto" }}>

                {/* ── Header ───────────────────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    style={{ marginBottom: 36 }}
                >
                    <button
                        onClick={() => router.push("/admin/dashboard")}
                        style={{
                            display: "flex", alignItems: "center", gap: 6,
                            fontSize: 12, color: "rgba(255,255,255,0.3)",
                            background: "none", border: "none", cursor: "pointer",
                            fontFamily: "var(--font-geist-sans)",
                            marginBottom: 24, padding: 0,
                            transition: "color 0.2s",
                        }}
                        onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#22d3ee")}
                        onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)")}
                    >← Back to Dashboard</button>

                    <p style={{
                        fontSize: 11, fontWeight: 600, letterSpacing: "2.5px",
                        textTransform: "uppercase", color: "#10b981",
                        fontFamily: "var(--font-geist-mono)", marginBottom: 12,
                    }}>Admin · New Project</p>

                    <h1 style={{
                        fontSize: "clamp(30px,4vw,44px)",
                        fontWeight: 900, letterSpacing: "-1.5px", lineHeight: 1.05,
                        fontFamily: "var(--font-geist-sans)", color: "#fff",
                        marginBottom: 8,
                    }}>
                        Add{" "}
                        <span style={{
                            background: "linear-gradient(135deg,#22d3ee,#10b981)",
                            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                        }}>Project</span>
                    </h1>
                    <p style={{
                        fontSize: 13, color: "rgba(255,255,255,0.3)",
                        fontFamily: "var(--font-geist-sans)",
                    }}>Fill in the details below to publish a new project to the catalogue.</p>
                </motion.div>

                {/* ── Form card ────────────────────────────────────────────────── */}
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
                            position: "absolute", top: 0, left: 0,
                            width: "50%", height: 1,
                            background: "linear-gradient(90deg,transparent,rgba(34,211,238,0.5),transparent)",
                            pointerEvents: "none",
                        }}
                    />

                    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

                        {/* ── Basic info ─────────────────────────────────────────── */}
                        <SectionLabel>Basic Info</SectionLabel>

                        <GlowInput label="Project Title" name="title" value={form.title}
                            onChange={handleChange} placeholder="e.g. AI Chatbot System" required />

                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="two-col">
                            {/* <GlowInput label="Branch" name="branch" value={form.branch}
                                onChange={handleChange} placeholder="CSE / ECE / DS" /> */}
                            <GlowSelect
                                label="Branch"
                                name="branch"
                                value={form.branch}
                                onChange={handleChange}
                                options={[
                                    { value: "cse", label: "CSE / AI" },
                                    { value: "ds-ml", label: "Data Science / ML" },
                                    { value: "ece-iot", label: "ECE / IoT" },
                                    { value: "robotics", label: "Robotics" },
                                ]}
                            />
                            <GlowInput label="Price (₹)" name="price" value={form.price}
                                onChange={handleChange} placeholder="2500" required />
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="two-col">
                            <GlowSelect
                                label="Level" name="level" value={form.level} onChange={handleChange}
                                options={[
                                    { value: "beginner", label: "Beginner" },
                                    { value: "intermediate", label: "Intermediate" },
                                    { value: "advanced", label: "Advanced" },
                                ]}
                            />
                            <GlowInput label="Tech Stack (comma separated)" name="tech_stack" value={form.tech_stack}
                                onChange={handleChange} placeholder="Python, Flask, TensorFlow" />
                        </div>

                        <GlowInput label="Description" name="description" value={form.description}
                            onChange={handleChange} multiline placeholder="Describe the project in detail…" />

                        {/* ── Project options ────────────────────────────────────── */}
                        <SectionLabel>Project Options</SectionLabel>

                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }} className="three-col">
                            <GlowSelect
                                label="Component Option" name="component_option"
                                value={form.component_option} onChange={handleChange}
                                options={[
                                    { value: "with_components", label: "With Components" },
                                    { value: "without_components", label: "Without Components" },
                                    { value: "NIL", label: "NIL" },
                                ]}
                            />
                            <GlowSelect
                                label="Ownership" name="ownership"
                                value={form.ownership} onChange={handleChange}
                                options={[
                                    { value: "own", label: "Own" },
                                    { value: "rented", label: "Rented" },
                                ]}
                            />
                            <GlowSelect
                                label="Report Option" name="report_option"
                                value={form.report_option} onChange={handleChange}
                                options={[
                                    { value: "with_report", label: "With Report" },
                                    { value: "without_report", label: "Without Report" },
                                ]}
                            />
                        </div>

                        {/* ── Images ─────────────────────────────────────────────── */}
                        <SectionLabel>Project Images</SectionLabel>

                        {/* Drop zone */}
                        <label
                            onDragOver={e => { e.preventDefault(); setDragOver(true); }}
                            onDragLeave={() => setDragOver(false)}
                            onDrop={e => { e.preventDefault(); setDragOver(false); }}
                            style={{
                                position: "relative", display: "flex",
                                flexDirection: "column", alignItems: "center", justifyContent: "center",
                                padding: "36px 20px", borderRadius: 16, cursor: "pointer",
                                border: `2px dashed ${dragOver ? "rgba(34,211,238,0.5)" : "rgba(34,211,238,0.15)"}`,
                                background: dragOver ? "rgba(34,211,238,0.06)" : "rgba(34,211,238,0.02)",
                                transition: "border-color 0.2s, background 0.2s",
                            }}
                        >
                            <input
                                type="file" multiple accept="image/*"
                                onChange={handleFileUpload}
                                style={{
                                    position: "absolute", inset: 0,
                                    opacity: 0, cursor: "pointer", width: "100%", height: "100%",
                                }}
                            />

                            {uploadingImages ? (
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, pointerEvents: "none" }}>
                                    <svg style={{ animation: "spin 0.8s linear infinite", width: 28, height: 28, color: "#22d3ee" }} viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.25" />
                                        <path fill="currentColor" d="M4 12a8 8 0 018-8v8z" opacity="0.75" />
                                    </svg>
                                    <p style={{ fontSize: 13, color: "#22d3ee", fontFamily: "var(--font-geist-sans)" }}>
                                        Uploading to Supabase Storage…
                                    </p>
                                </div>
                            ) : (
                                <div style={{ textAlign: "center", pointerEvents: "none" }}>
                                    <div style={{
                                        width: 48, height: 48, borderRadius: 13, margin: "0 auto 12px",
                                        background: "rgba(34,211,238,0.08)",
                                        border: "1px solid rgba(34,211,238,0.14)",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        fontSize: 22,
                                    }}>🖼️</div>
                                    <p style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-geist-sans)", marginBottom: 4 }}>
                                        Click to upload or drag & drop
                                    </p>
                                    <p style={{ fontSize: 11, color: "rgba(255,255,255,0.2)", fontFamily: "var(--font-geist-sans)" }}>
                                        PNG · JPG · WebP · Multiple files
                                    </p>
                                    {form.image_urls.length > 0 && (
                                        <p style={{ fontSize: 11, color: "#10b981", marginTop: 8, fontFamily: "var(--font-geist-sans)" }}>
                                            ✓ {form.image_urls.length} image{form.image_urls.length !== 1 ? "s" : ""} uploaded
                                        </p>
                                    )}
                                </div>
                            )}
                        </label>

                        {/* Image preview grid */}
                        <AnimatePresence>
                            {previewUrls.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 10 }}
                                    className="preview-grid"
                                >
                                    {previewUrls.map((url, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            transition={{ delay: i * 0.04 }}
                                            style={{
                                                position: "relative", aspectRatio: "1",
                                                borderRadius: 12, overflow: "hidden",
                                                border: i === 0
                                                    ? "2px solid rgba(34,211,238,0.4)"
                                                    : "1px solid rgba(255,255,255,0.08)",
                                            }}
                                            className="img-preview-card"
                                        >
                                            <img src={url} alt={`Preview ${i + 1}`}
                                                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />

                                            {/* Overlay on hover */}
                                            <div className="img-overlay" style={{
                                                position: "absolute", inset: 0, opacity: 0,
                                                background: "rgba(0,0,0,0.65)",
                                                display: "flex", alignItems: "center", justifyContent: "center",
                                                transition: "opacity 0.2s",
                                            }}>
                                                <button
                                                    onClick={e => { e.preventDefault(); removeImage(i); }}
                                                    style={{
                                                        width: 28, height: 28, borderRadius: "50%",
                                                        background: "rgba(239,68,68,0.9)",
                                                        border: "none", color: "#fff",
                                                        fontSize: 11, fontWeight: 700,
                                                        cursor: "pointer", display: "flex",
                                                        alignItems: "center", justifyContent: "center",
                                                    }}
                                                >✕</button>
                                            </div>

                                            {i === 0 && (
                                                <div style={{
                                                    position: "absolute", bottom: 5, left: 5,
                                                    fontSize: 9, fontWeight: 700, padding: "2px 7px",
                                                    borderRadius: 6, letterSpacing: "0.5px",
                                                    background: "rgba(34,211,238,0.9)", color: "#000",
                                                    fontFamily: "var(--font-geist-mono)",
                                                }}>COVER</div>
                                            )}
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* ── Divider ───────────────────────────────────────────── */}
                        <div style={{
                            height: 1,
                            background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)",
                        }} />

                        {/* ── Submit ────────────────────────────────────────────── */}
                        <motion.button
                            onClick={handleSubmit}
                            disabled={busy}
                            whileHover={!busy ? { scale: 1.02, boxShadow: "0 0 36px rgba(34,211,238,0.5), 0 0 72px rgba(16,185,129,0.2)" } : {}}
                            whileTap={!busy ? { scale: 0.98 } : {}}
                            style={{
                                width: "100%", padding: "14px 0",
                                borderRadius: 13, border: "none",
                                background: busy
                                    ? "rgba(34,211,238,0.3)"
                                    : "linear-gradient(135deg,#06b6d4,#10b981)",
                                color: "#000", fontSize: 14, fontWeight: 700,
                                fontFamily: "var(--font-geist-sans)",
                                cursor: busy ? "wait" : "pointer",
                                boxShadow: busy ? "none" : "0 0 28px rgba(34,211,238,0.35)",
                                transition: "background 0.2s, box-shadow 0.2s",
                            }}
                        >
                            {loading ? (
                                <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                                    <Spinner />Adding Project…
                                </span>
                            ) : uploadingImages ? (
                                <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                                    <Spinner />Waiting for images…
                                </span>
                            ) : "Add Project →"}
                        </motion.button>

                        {/* Trust row */}
                        <div style={{ display: "flex", justifyContent: "center", gap: 28, flexWrap: "wrap" }}>
                            {["Saves to Supabase", "Images to Storage", "Instant publish"].map(t => (
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

        .img-preview-card:hover .img-overlay { opacity: 1 !important; }

        @media (max-width: 640px) {
          .two-col   { grid-template-columns: 1fr !important; }
          .three-col { grid-template-columns: 1fr 1fr !important; }
          .preview-grid { grid-template-columns: repeat(4,1fr) !important; }
        }
        @media (max-width: 400px) {
          .three-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </div>
    );
}