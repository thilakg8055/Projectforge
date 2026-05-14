// "use client";

// import { supabase } from "@/lib/supabase";
// import { useState } from "react";

// export default function DashboardUI({ projects, inquiries }: any) {
//     const [data, setData] = useState(inquiries);

//     // 🔄 UPDATE STATUS
//     const updateStatus = async (id: string, status: string) => {
//         await supabase
//             .from("inquiries")
//             .update({ status })
//             .eq("id", id);

//         setData((prev: any[]) =>
//             prev.map((i) =>
//                 i.id === id ? { ...i, status } : i
//             )
//         );
//     };

//     // ❌ DELETE
//     const deleteInquiry = async (id: string) => {
//         const confirmDelete = confirm("Delete this inquiry?");
//         if (!confirmDelete) return;

//         await supabase
//             .from("inquiries")
//             .delete()
//             .eq("id", id);

//         setData((prev: any[]) =>
//             prev.filter((i) => i.id !== id)
//         );
//     };

//     return (
//         <div className="p-10 space-y-10">
//             <h1 className="text-4xl font-bold">Admin Dashboard 🚀</h1>

// <a
//     href="/admin/dashboard/add"
//     className="bg-orange-500 px-4 py-2 rounded"
// >
//     + Add Project
// </a>

//             {/* PROJECTS */}
//             <div>
//                 <h2 className="text-2xl mb-4">Projects</h2>

//                 {/* {projects.map((p: any) => (
//                     <div key={p.id} className="bg-white/5 p-4 mb-3 rounded">
//                         <p><b>{p.title}</b></p>
//                         <p>{p.branch}</p>
//                         <p className="text-orange-500">{p.price}</p>
//                     </div>
//                 ))} */}
//                 {projects?.map((p: any) => (
//                     <div key={p.id} className="bg-white/5 p-4 mb-3 rounded flex justify-between items-center">

//                         <div>
//                             <p><b>{p.title}</b></p>
//                             <p>{p.branch}</p>
//                             <p className="text-orange-500">{p.price}</p>
//                         </div>

//                         <div className="flex gap-2">
//                             {/* EDIT */}
//                             <a
//                                 href={`/admin/dashboard/edit/${p.id}`}
//                                 className="bg-blue-500 px-3 py-1 rounded"
//                             >
//                                 Edit
//                             </a>

//                             {/* DELETE */}
//                             <button
//                                 onClick={async () => {
//                                     const confirmDelete = confirm("Delete this project?");
//                                     if (!confirmDelete) return;

//                                     // await fetch(`/api/delete-project?id=${p.id}`);
//                                     await fetch("/api/delete-project", {
//                                         method: "POST",
//                                         body: JSON.stringify({ id: p.id }),
//                                     });
//                                     location.reload();
//                                 }}
//                                 className="bg-red-500 px-3 py-1 rounded"
//                             >
//                                 Delete
//                             </button>
//                         </div>

//                     </div>
//                 ))}
//             </div>

//             {/* INQUIRIES */}
//             <div>
//                 <h2 className="text-2xl mb-4">Inquiries</h2>

//                 {data.map((i: any) => (
//                     <div key={i.id} className="bg-white/5 p-4 mb-4 rounded">
//                         <p><b>{i.name}</b></p>
//                         <p>{i.branch}</p>
//                         <p>{i.message}</p>
//                         <p className="text-orange-500">{i.budget}</p>

//                         {/* 🔥 STATUS DROPDOWN */}
//                         <div className="flex gap-4 mt-4 items-center">
//                             <select
//                                 value={i.status || "pending"}
//                                 onChange={(e) =>
//                                     updateStatus(i.id, e.target.value)
//                                 }
//                                 className="bg-black border px-3 py-2 rounded"
//                             >
//                                 <option value="pending">Pending</option>
//                                 <option value="contacted">Contacted</option>
//                                 <option value="completed">Completed</option>
//                             </select>

//                             {/* 🔥 DELETE BUTTON */}
//                             <button
//                                 onClick={() => deleteInquiry(i.id)}
//                                 className="bg-red-500 px-4 py-2 rounded"
//                             >
//                                 Delete
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }


// "use client";

// import { supabase } from "@/lib/supabase";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";


// export default function DashboardUI({ projects, inquiries }: any) {
//     const router = useRouter();
//     //const router = useRouter();

//     useEffect(() => {
//         const isAdmin = localStorage.getItem("admin");

//         if (!isAdmin) {
//             router.push("/admin/login");
//         }
//     }, []);
//     // ✅ DELETE PROJECT
//     const deleteProject = async (id: string) => {
//         const confirmDelete = confirm("Delete project?");
//         if (!confirmDelete) return;

//         const { error } = await supabase
//             .from("projects")
//             .delete()
//             .eq("id", id);

//         if (!error) {
//             router.refresh(); // 🔥 THIS IS KEY
//         }
//     };

//     // ✅ UPDATE INQUIRY STATUS
//     const updateStatus = async (id: string, status: string) => {
//         await supabase
//             .from("inquiries")
//             .update({ status })
//             .eq("id", id);

//         router.refresh(); // 🔥 refresh data
//     };

//     // ✅ DELETE INQUIRY
//     const deleteInquiry = async (id: string) => {
//         await supabase
//             .from("inquiries")
//             .delete()
//             .eq("id", id);

//         router.refresh();
//     };

//     return (
//         <div className="p-10 space-y-10">

//             {/* HEADER */}
//             <div className="flex items-center justify-between">

//                 {/* LEFT */}
//                 <h1 className="text-4xl font-bold">Admin Dashboard 🚀</h1>

//                 {/* RIGHT */}
//                 <div className="flex gap-3">
//                     <a
//                         href="/admin/dashboard/add"
//                         className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-lg text-sm font-medium"
//                     >
//                         + Add Project
//                     </a>

//                     <button
//                         onClick={() => {
//                             localStorage.removeItem("admin");
//                             router.push("/admin/login");
//                         }}
//                         className="bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500 hover:text-white px-5 py-2 rounded-lg text-sm font-medium transition"
//                     >
//                         Logout
//                     </button>
//                 </div>

//             </div>

//             {/* PROJECTS */}
//             <div>
//                 <h2 className="text-2xl mb-4">Projects</h2>

//                 {projects.map((p: any) => (
//                     // <div
//                     //     key={p.id}
//                     //     className="bg-white/5 p-4 mb-3 rounded flex justify-between"
//                     // >
//                     //     <div>
//                     //         <p><b>{p.title}</b></p>
//                     //         <p>{p.branch}</p>
//                     //         <p className="text-orange-500">{p.price}</p>
//                     //     </div>

//                     //     <div className="flex gap-2">
//                     //         <a
//                     //             href={`/admin/dashboard/edit/${p.id}`}
//                     //             className="bg-blue-500 px-3 py-1 rounded"
//                     //         >
//                     //             Edit
//                     //         </a>

//                     //         <button
//                     //             onClick={() => deleteProject(p.id)}
//                     //             className="bg-red-500 px-3 py-1 rounded"
//                     //         >
//                     //             Delete
//                     //         </button>
//                     //     </div>
//                     // </div>
//                     <div
//                         key={p.id}
//                         className="bg-white/5 p-5 mb-4 rounded-xl flex justify-between items-center border border-white/10 hover:border-orange-500/40 transition"
//                     >
//                         {/* LEFT */}
//                         <div>
//                             <p className="text-lg font-semibold">{p.title}</p>
//                             <p className="text-gray-400 text-sm">{p.branch}</p>
//                             <p className="text-orange-500 font-medium mt-1">₹{p.price}</p>
//                         </div>

//                         {/* RIGHT ACTIONS */}
//                         <div className="flex gap-3">
//                             <a
//                                 href={`/admin/dashboard/edit/${p.id}`}
//                                 className="px-4 py-2 text-sm rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/30 hover:bg-blue-500 hover:text-white transition"
//                             >
//                                 ✏️ Edit
//                             </a>

//                             <button
//                                 onClick={() => deleteProject(p.id)}
//                                 className="px-4 py-2 text-sm rounded-lg bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500 hover:text-white transition"
//                             >
//                                 🗑 Delete
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             {/*inquiries*/}

//             <h2 className="text-2xl mb-4">Inquiries</h2>
//             {inquiries.map((i: any) => (
//                 <div
//                     key={i.id}
//                     className="bg-white/5 p-5 mb-4 rounded-xl border border-white/10 hover:border-orange-500/30 transition"
//                 >
//                     <p className="text-lg font-semibold">{i.name}</p>
//                     <p className="text-gray-400 text-sm">{i.branch}</p>
//                     <p className="text-gray-300 mt-1">{i.message}</p>
//                     <p className="text-orange-500 font-medium mt-1">₹{i.budget}</p>

//                     {/* ACTIONS */}
//                     <div className="flex items-center gap-3 mt-4">
//                         <select
//                             value={i.status}
//                             onChange={(e) => updateStatus(i.id, e.target.value)}
//                             className="bg-black border border-white/20 px-3 py-2 rounded-lg text-sm focus:outline-none"
//                         >
//                             <option value="pending">Pending</option>
//                             <option value="contacted">Contacted</option>
//                             <option value="completed">Completed</option>
//                         </select>

//                         <button
//                             onClick={() => deleteInquiry(i.id)}
//                             className="px-4 py-2 text-sm rounded-lg bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500 hover:text-white transition"
//                         >
//                             🗑 Delete
//                         </button>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }

// "use client";

// import { supabase } from "@/lib/supabase";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const statusColors: Record<string, { bg: string; text: string; border: string }> = {
//     pending: { bg: "rgba(234,179,8,0.1)", text: "#fbbf24", border: "rgba(234,179,8,0.2)" },
//     contacted: { bg: "rgba(59,130,246,0.1)", text: "#60a5fa", border: "rgba(59,130,246,0.2)" },
//     completed: { bg: "rgba(16,185,129,0.1)", text: "#34d399", border: "rgba(16,185,129,0.2)" },
// };

// export default function DashboardUI({ projects, inquiries }: any) {
//     const router = useRouter();
//     const [activeTab, setActiveTab] = useState<"projects" | "inquiries">("projects");

//     useEffect(() => {
//         const isAdmin = localStorage.getItem("admin");
//         if (!isAdmin) router.push("/admin/login");
//     }, []);

//     // ✅ DELETE PROJECT
//     const deleteProject = async (id: string) => {
//         const confirmDelete = confirm("Delete project?");
//         if (!confirmDelete) return;
//         const { error } = await supabase.from("projects").delete().eq("id", id);
//         if (!error) router.refresh();
//     };

//     // ✅ UPDATE INQUIRY STATUS
//     const updateStatus = async (id: string, status: string) => {
//         await supabase.from("inquiries").update({ status }).eq("id", id);
//         router.refresh();
//     };

//     // ✅ DELETE INQUIRY
//     const deleteInquiry = async (id: string) => {
//         await supabase.from("inquiries").delete().eq("id", id);
//         router.refresh();
//     };

//     const pendingCount = inquiries.filter((i: any) => i.status === "pending").length;
//     const contactedCount = inquiries.filter((i: any) => i.status === "contacted").length;
//     const completedCount = inquiries.filter((i: any) => i.status === "completed").length;

//     return (
//         <div
//             className="min-h-screen"
//             style={{ background: "radial-gradient(ellipse at 20% 20%, #0a1628 0%, #020812 60%)" }}
//         >
//             {/* Ambient blobs */}
//             <div className="fixed top-0 left-0 w-96 h-96 pointer-events-none"
//                 style={{ background: "radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)", filter: "blur(60px)" }} />
//             <div className="fixed bottom-0 right-0 w-80 h-80 pointer-events-none"
//                 style={{ background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)", filter: "blur(50px)" }} />

//             <div className="relative z-10 max-w-6xl mx-auto px-6 py-10">

//                 {/* ── HEADER ─────────────────────────────────────── */}
//                 <motion.div
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//                     className="flex items-center justify-between mb-10"
//                 >
//                     <div>
//                         <div className="flex items-center gap-3 mb-1">
//                             <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black"
//                                 style={{ background: "linear-gradient(135deg, #06b6d4, #10b981)", boxShadow: "0 0 16px rgba(6,182,212,0.4)" }}>
//                                 ⚙
//                             </div>
//                             <span className="text-xs font-semibold tracking-widest uppercase"
//                                 style={{ color: "#22d3ee" }}>ProjectForge</span>
//                         </div>
//                         <h1 className="text-4xl font-black text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
//                             Admin{" "}
//                             <span style={{ background: "linear-gradient(135deg, #22d3ee, #10b981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
//                                 Dashboard
//                             </span>
//                         </h1>
//                     </div>

//                     <div className="flex gap-3">
//                         <motion.a
//                             href="/admin/dashboard/add"
//                             whileHover={{ scale: 1.03 }}
//                             whileTap={{ scale: 0.97 }}
//                             className="px-5 py-2.5 rounded-xl text-sm font-semibold text-black"
//                             style={{ background: "linear-gradient(135deg, #22d3ee, #10b981)", boxShadow: "0 0 20px rgba(34,211,238,0.3)" }}
//                         >
//                             + Add Project
//                         </motion.a>

//                         <motion.button
//                             whileHover={{ scale: 1.03 }}
//                             whileTap={{ scale: 0.97 }}
//                             onClick={() => { localStorage.removeItem("admin"); router.push("/admin/login"); }}
//                             className="px-5 py-2.5 rounded-xl text-sm font-semibold transition"
//                             style={{ background: "rgba(239,68,68,0.08)", color: "#f87171", border: "1px solid rgba(239,68,68,0.2)" }}
//                         >
//                             Logout →
//                         </motion.button>
//                     </div>
//                 </motion.div>

//                 {/* ── STATS ROW ───────────────────────────────────── */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.1, duration: 0.6 }}
//                     className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
//                 >
//                     {[
//                         { label: "Total Projects", val: projects.length, color: "#22d3ee", glow: "rgba(34,211,238,0.15)" },
//                         { label: "Inquiries", val: inquiries.length, color: "#a78bfa", glow: "rgba(167,139,250,0.15)" },
//                         { label: "Pending", val: pendingCount, color: "#fbbf24", glow: "rgba(234,179,8,0.15)" },
//                         { label: "Completed", val: completedCount, color: "#34d399", glow: "rgba(16,185,129,0.15)" },
//                     ].map((s) => (
//                         <div key={s.label} className="rounded-2xl p-5"
//                             style={{ background: "rgba(6,11,26,0.7)", border: `1px solid ${s.glow}`, backdropFilter: "blur(16px)" }}>
//                             <p className="text-xs text-slate-500 mb-1">{s.label}</p>
//                             <p className="text-3xl font-black" style={{ color: s.color }}>{s.val}</p>
//                         </div>
//                     ))}
//                 </motion.div>

//                 {/* ── TABS ────────────────────────────────────────── */}
//                 <div className="flex gap-2 mb-8">
//                     {(["projects", "inquiries"] as const).map((tab) => (
//                         <button
//                             key={tab}
//                             onClick={() => setActiveTab(tab)}
//                             className="px-6 py-2.5 rounded-xl text-sm font-semibold capitalize transition-all duration-200"
//                             style={{
//                                 background: activeTab === tab ? "linear-gradient(135deg, #22d3ee, #10b981)" : "rgba(255,255,255,0.03)",
//                                 color: activeTab === tab ? "#000" : "#94a3b8",
//                                 border: activeTab === tab ? "none" : "1px solid rgba(255,255,255,0.06)",
//                                 boxShadow: activeTab === tab ? "0 0 20px rgba(34,211,238,0.25)" : "none",
//                             }}
//                         >
//                             {tab} ({tab === "projects" ? projects.length : inquiries.length})
//                         </button>
//                     ))}
//                 </div>

//                 {/* ── PROJECTS TAB ─────────────────────────────────── */}
//                 <AnimatePresence mode="wait">
//                     {activeTab === "projects" && (
//                         <motion.div
//                             key="projects"
//                             initial={{ opacity: 0, y: 10 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: -10 }}
//                             transition={{ duration: 0.3 }}
//                         >
//                             {projects.length === 0 && (
//                                 <EmptyState label="No projects yet" hint="Click + Add Project to get started" />
//                             )}
//                             {projects.map((p: any, i: number) => (
//                                 <motion.div
//                                     key={p.id}
//                                     initial={{ opacity: 0, y: 16 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     transition={{ delay: i * 0.05 }}
//                                     className="group flex justify-between items-center p-5 mb-4 rounded-2xl transition-all duration-300"
//                                     style={{
//                                         background: "rgba(6,11,26,0.7)",
//                                         border: "1px solid rgba(34,211,238,0.07)",
//                                         backdropFilter: "blur(16px)",
//                                         boxShadow: "0 2px 20px rgba(0,0,0,0.3)",
//                                     }}
//                                     onMouseEnter={(e) => (e.currentTarget.style.border = "1px solid rgba(34,211,238,0.2)")}
//                                     onMouseLeave={(e) => (e.currentTarget.style.border = "1px solid rgba(34,211,238,0.07)")}
//                                 >
//                                     {/* Left */}
//                                     <div className="flex items-center gap-4">
//                                         <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
//                                             style={{ background: "rgba(34,211,238,0.08)", border: "1px solid rgba(34,211,238,0.12)" }}>
//                                             🧠
//                                         </div>
//                                         <div>
//                                             <p className="text-white font-semibold">{p.title}</p>
//                                             <p className="text-slate-500 text-xs mt-0.5">{p.branch}</p>
//                                         </div>
//                                     </div>

//                                     {/* Right */}
//                                     <div className="flex items-center gap-4">
//                                         <span className="font-black text-sm"
//                                             style={{ background: "linear-gradient(135deg, #22d3ee, #10b981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
//                                             ₹{p.price}
//                                         </span>

//                                         <a
//                                             href={`/admin/dashboard/edit/${p.id}`}
//                                             className="px-4 py-2 text-xs rounded-xl font-medium transition-all duration-200 hover:text-white"
//                                             style={{ background: "rgba(59,130,246,0.08)", color: "#60a5fa", border: "1px solid rgba(59,130,246,0.15)" }}
//                                             onMouseEnter={(e) => {
//                                                 (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.9)";
//                                                 (e.currentTarget as HTMLElement).style.color = "#fff";
//                                             }}
//                                             onMouseLeave={(e) => {
//                                                 (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.08)";
//                                                 (e.currentTarget as HTMLElement).style.color = "#60a5fa";
//                                             }}
//                                         >
//                                             ✏️ Edit
//                                         </a>

//                                         <button
//                                             onClick={() => deleteProject(p.id)}
//                                             className="px-4 py-2 text-xs rounded-xl font-medium transition-all duration-200"
//                                             style={{ background: "rgba(239,68,68,0.08)", color: "#f87171", border: "1px solid rgba(239,68,68,0.15)" }}
//                                             onMouseEnter={(e) => {
//                                                 (e.currentTarget as HTMLElement).style.background = "rgba(239,68,68,0.9)";
//                                                 (e.currentTarget as HTMLElement).style.color = "#fff";
//                                             }}
//                                             onMouseLeave={(e) => {
//                                                 (e.currentTarget as HTMLElement).style.background = "rgba(239,68,68,0.08)";
//                                                 (e.currentTarget as HTMLElement).style.color = "#f87171";
//                                             }}
//                                         >
//                                             🗑 Delete
//                                         </button>
//                                     </div>
//                                 </motion.div>
//                             ))}
//                         </motion.div>
//                     )}

//                     {/* ── INQUIRIES TAB ──────────────────────────────── */}
//                     {activeTab === "inquiries" && (
//                         <motion.div
//                             key="inquiries"
//                             initial={{ opacity: 0, y: 10 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: -10 }}
//                             transition={{ duration: 0.3 }}
//                         >
//                             {inquiries.length === 0 && (
//                                 <EmptyState label="No inquiries yet" hint="They'll show up once users submit the contact form" />
//                             )}
//                             {inquiries.map((inq: any, i: number) => {
//                                 const sc = statusColors[inq.status] || statusColors.pending;
//                                 return (
//                                     <motion.div
//                                         key={inq.id}
//                                         initial={{ opacity: 0, y: 16 }}
//                                         animate={{ opacity: 1, y: 0 }}
//                                         transition={{ delay: i * 0.05 }}
//                                         className="p-6 mb-4 rounded-2xl transition-all duration-300"
//                                         style={{
//                                             background: "rgba(6,11,26,0.7)",
//                                             border: "1px solid rgba(34,211,238,0.07)",
//                                             backdropFilter: "blur(16px)",
//                                         }}
//                                         onMouseEnter={(e) => (e.currentTarget.style.border = "1px solid rgba(34,211,238,0.18)")}
//                                         onMouseLeave={(e) => (e.currentTarget.style.border = "1px solid rgba(34,211,238,0.07)")}
//                                     >
//                                         {/* Top row */}
//                                         <div className="flex items-start justify-between mb-3">
//                                             <div className="flex items-center gap-3">
//                                                 <div className="w-10 h-10 rounded-full flex items-center justify-center text-base font-bold text-black"
//                                                     style={{ background: "linear-gradient(135deg, #22d3ee, #10b981)" }}>
//                                                     {inq.name?.[0]?.toUpperCase() || "?"}
//                                                 </div>
//                                                 <div>
//                                                     <p className="text-white font-semibold">{inq.name}</p>
//                                                     <p className="text-slate-500 text-xs">{inq.email} · {inq.phone}</p>
//                                                 </div>
//                                             </div>

//                                             {/* Status badge */}
//                                             <span className="text-xs px-3 py-1 rounded-full font-semibold capitalize"
//                                                 style={{ background: sc.bg, color: sc.text, border: `1px solid ${sc.border}` }}>
//                                                 {inq.status || "pending"}
//                                             </span>
//                                         </div>

//                                         {/* Details */}
//                                         <div className="grid grid-cols-3 gap-3 mb-4">
//                                             {[
//                                                 { label: "College", val: inq.college || "—" },
//                                                 { label: "Branch", val: inq.branch || "—" },
//                                                 { label: "Budget", val: inq.budget ? `₹${inq.budget}` : "—" },
//                                             ].map((d) => (
//                                                 <div key={d.label} className="px-3 py-2.5 rounded-xl"
//                                                     style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
//                                                     <p className="text-xs text-slate-500 mb-0.5">{d.label}</p>
//                                                     <p className="text-sm text-slate-300 font-medium">{d.val}</p>
//                                                 </div>
//                                             ))}
//                                         </div>

//                                         {inq.message && (
//                                             <p className="text-slate-400 text-sm mb-4 px-3 py-2.5 rounded-xl"
//                                                 style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}>
//                                                 {inq.message}
//                                             </p>
//                                         )}

//                                         {/* Actions */}
//                                         <div className="flex items-center gap-3">
//                                             <select
//                                                 value={inq.status || "pending"}
//                                                 onChange={(e) => updateStatus(inq.id, e.target.value)}
//                                                 className="text-sm px-4 py-2.5 rounded-xl outline-none transition-all"
//                                                 style={{
//                                                     background: "rgba(6,11,26,0.9)",
//                                                     border: "1px solid rgba(34,211,238,0.15)",
//                                                     color: "#94a3b8",
//                                                 }}
//                                             >
//                                                 <option value="pending">Pending</option>
//                                                 <option value="contacted">Contacted</option>
//                                                 <option value="completed">Completed</option>
//                                             </select>

//                                             <button
//                                                 onClick={() => deleteInquiry(inq.id)}
//                                                 className="px-4 py-2.5 text-xs rounded-xl font-medium transition-all duration-200"
//                                                 style={{ background: "rgba(239,68,68,0.08)", color: "#f87171", border: "1px solid rgba(239,68,68,0.15)" }}
//                                                 onMouseEnter={(e) => {
//                                                     (e.currentTarget as HTMLElement).style.background = "rgba(239,68,68,0.9)";
//                                                     (e.currentTarget as HTMLElement).style.color = "#fff";
//                                                 }}
//                                                 onMouseLeave={(e) => {
//                                                     (e.currentTarget as HTMLElement).style.background = "rgba(239,68,68,0.08)";
//                                                     (e.currentTarget as HTMLElement).style.color = "#f87171";
//                                                 }}
//                                             >
//                                                 🗑 Delete
//                                             </button>
//                                         </div>
//                                     </motion.div>
//                                 );
//                             })}
//                         </motion.div>
//                     )}
//                 </AnimatePresence>
//             </div>
//         </div>
//     );
// }

// function EmptyState({ label, hint }: { label: string; hint: string }) {
//     return (
//         <div className="text-center py-20 rounded-2xl"
//             style={{ background: "rgba(6,11,26,0.5)", border: "1px dashed rgba(34,211,238,0.1)" }}>
//             <p className="text-2xl mb-2">📭</p>
//             <p className="text-white font-semibold">{label}</p>
//             <p className="text-slate-500 text-sm mt-1">{hint}</p>
//         </div>
//     );
// }

"use client";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Status config ────────────────────────────────────────────────────────────
const STATUS: Record<string, { bg: string; color: string; border: string }> = {
    pending: { bg: "rgba(234,179,8,0.1)", color: "#fbbf24", border: "rgba(234,179,8,0.2)" },
    contacted: { bg: "rgba(59,130,246,0.1)", color: "#60a5fa", border: "rgba(59,130,246,0.2)" },
    completed: { bg: "rgba(16,185,129,0.1)", color: "#34d399", border: "rgba(16,185,129,0.2)" },
    done: { bg: "rgba(16,185,129,0.1)", color: "#34d399", border: "rgba(16,185,129,0.2)" },
};

// ─── Shared action button ─────────────────────────────────────────────────────
function ActionBtn({
    children, onClick, variant = "blue", small = false,
}: {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: "blue" | "red" | "green";
    small?: boolean;
}) {
    const C = {
        blue: { idle: "rgba(59,130,246,0.09)", hov: "rgba(59,130,246,0.88)", color: "#60a5fa", border: "rgba(59,130,246,0.18)" },
        red: { idle: "rgba(239,68,68,0.09)", hov: "rgba(239,68,68,0.88)", color: "#f87171", border: "rgba(239,68,68,0.18)" },
        green: { idle: "rgba(16,185,129,0.09)", hov: "rgba(16,185,129,0.88)", color: "#34d399", border: "rgba(16,185,129,0.18)" },
    }[variant];

    const [hov, setHov] = useState(false);

    return (
        <motion.button
            onClick={onClick}
            onHoverStart={() => setHov(true)}
            onHoverEnd={() => setHov(false)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            style={{
                padding: small ? "7px 14px" : "9px 18px",
                borderRadius: 10, border: `1px solid ${C.border}`,
                background: hov ? C.hov : C.idle,
                color: hov ? "#fff" : C.color,
                fontSize: 12, fontWeight: 600, cursor: "pointer",
                fontFamily: "var(--font-geist-sans)",
                transition: "background 0.18s, color 0.18s",
                whiteSpace: "nowrap" as const,
            }}
        >{children}</motion.button>
    );
}

// ─── Empty state ──────────────────────────────────────────────────────────────
function EmptyState({ label, hint }: { label: string; hint: string }) {
    return (
        <div style={{
            textAlign: "center", padding: "64px 20px",
            borderRadius: 18,
            background: "rgba(5,12,28,0.5)",
            border: "1px dashed rgba(34,211,238,0.1)",
        }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>📭</div>
            <p style={{ fontSize: 15, fontWeight: 700, color: "#fff", fontFamily: "var(--font-geist-sans)", marginBottom: 6 }}>{label}</p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-geist-sans)" }}>{hint}</p>
        </div>
    );
}

// ─── Stat card ────────────────────────────────────────────────────────────────
function StatCard({ label, val, color, border }: { label: string; val: number; color: string; border: string }) {
    return (
        <div style={{
            borderRadius: 16, padding: "20px 22px",
            background: "rgba(5,12,28,0.75)",
            border: `1px solid ${border}`,
            backdropFilter: "blur(16px)",
        }}>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-geist-mono)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 8 }}>{label}</p>
            <p style={{ fontSize: 32, fontWeight: 900, color, fontFamily: "var(--font-geist-sans)", lineHeight: 1 }}>{val}</p>
        </div>
    );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function DashboardUI({ projects, inquiries }: any) {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<"projects" | "inquiries">("projects");

    useEffect(() => {
        if (!localStorage.getItem("admin")) router.push("/admin/login");
    }, []);

    // ── original logic preserved ──
    const deleteProject = async (id: string) => {
        if (!confirm("Delete project?")) return;
        const { error } = await supabase.from("projects").delete().eq("id", id);
        if (!error) router.refresh();
    };

    const updateStatus = async (id: string, status: string) => {
        await supabase.from("inquiries").update({ status }).eq("id", id);
        router.refresh();
    };

    const deleteInquiry = async (id: string) => {
        if (!confirm("Delete this inquiry?")) return;
        await supabase.from("inquiries").delete().eq("id", id);
        router.refresh();
    };

    const pendingCount = inquiries.filter((i: any) => i.status === "pending").length;
    const completedCount = inquiries.filter((i: any) => ["completed", "done"].includes(i.status)).length;

    return (
        <div style={{ minHeight: "100vh", position: "relative", zIndex: 10, padding: "44px 5% 80px" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>

                {/* ── Header ─────────────────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 40, flexWrap: "wrap", gap: 20 }}
                >
                    <div>
                        <p style={{
                            fontSize: 11, fontWeight: 600, letterSpacing: "2.5px",
                            textTransform: "uppercase", color: "#22d3ee",
                            fontFamily: "var(--font-geist-mono)", marginBottom: 10,
                        }}>ProjectForge · Admin</p>
                        <h1 style={{
                            fontSize: "clamp(28px,4vw,42px)", fontWeight: 900,
                            letterSpacing: "-1.5px", lineHeight: 1.05,
                            fontFamily: "var(--font-geist-sans)", color: "#fff",
                        }}>
                            Admin{" "}
                            <span style={{
                                background: "linear-gradient(135deg,#22d3ee,#10b981)",
                                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                            }}>Dashboard</span>
                        </h1>
                    </div>

                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                        <motion.a
                            href="/admin/dashboard/add"
                            whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(34,211,238,0.4)" }}
                            whileTap={{ scale: 0.97 }}
                            style={{
                                padding: "10px 22px", borderRadius: 11,
                                background: "linear-gradient(135deg,#06b6d4,#10b981)",
                                color: "#000", fontSize: 13, fontWeight: 700,
                                fontFamily: "var(--font-geist-sans)",
                                textDecoration: "none", display: "inline-block",
                                boxShadow: "0 0 20px rgba(34,211,238,0.28)",
                            }}
                        >+ Add Project</motion.a>

                        <ActionBtn
                            variant="red"
                            onClick={() => { localStorage.removeItem("admin"); router.push("/admin/login"); }}
                        >Logout →</ActionBtn>
                    </div>
                </motion.div>

                {/* ── Stats row ──────────────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14, marginBottom: 36 }}
                    className="stats-grid"
                >
                    <StatCard label="Total Projects" val={projects.length} color="#22d3ee" border="rgba(34,211,238,0.15)" />
                    <StatCard label="Inquiries" val={inquiries.length} color="#a78bfa" border="rgba(167,139,250,0.15)" />
                    <StatCard label="Pending" val={pendingCount} color="#fbbf24" border="rgba(234,179,8,0.15)" />
                    <StatCard label="Completed" val={completedCount} color="#34d399" border="rgba(16,185,129,0.15)" />
                </motion.div>

                {/* ── Tabs ───────────────────────────────────────────────────── */}
                <div style={{
                    display: "flex", gap: 6, marginBottom: 28,
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 13, padding: 5, width: "fit-content",
                }}>
                    {(["projects", "inquiries"] as const).map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            style={{
                                padding: "9px 22px", borderRadius: 9,
                                fontSize: 13, fontWeight: 600,
                                fontFamily: "var(--font-geist-sans)",
                                cursor: "pointer", border: "none",
                                background: activeTab === tab
                                    ? "linear-gradient(135deg,#06b6d4,#10b981)"
                                    : "transparent",
                                color: activeTab === tab ? "#000" : "rgba(255,255,255,0.4)",
                                boxShadow: activeTab === tab ? "0 0 16px rgba(34,211,238,0.25)" : "none",
                                transition: "all 0.2s",
                                textTransform: "capitalize",
                            }}
                        >
                            {tab} ({tab === "projects" ? projects.length : inquiries.length})
                        </button>
                    ))}
                </div>

                {/* ── Tab content ────────────────────────────────────────────── */}
                <AnimatePresence mode="wait">

                    {/* PROJECTS */}
                    {activeTab === "projects" && (
                        <motion.div
                            key="projects"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.25 }}
                        >
                            {projects.length === 0
                                ? <EmptyState label="No projects yet" hint="Click + Add Project to get started" />
                                : projects.map((p: any, i: number) => (
                                    <ProjectRow key={p.id} p={p} i={i} onDelete={deleteProject} />
                                ))
                            }
                        </motion.div>
                    )}

                    {/* INQUIRIES */}
                    {activeTab === "inquiries" && (
                        <motion.div
                            key="inquiries"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.25 }}
                        >
                            {inquiries.length === 0
                                ? <EmptyState label="No inquiries yet" hint="They'll appear once users submit the contact form" />
                                : inquiries.map((inq: any, i: number) => (
                                    <InquiryCard key={inq.id} inq={inq} i={i} onUpdate={updateStatus} onDelete={deleteInquiry} />
                                ))
                            }
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <style>{`
        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
        </div>
    );
}

// ─── Project row ──────────────────────────────────────────────────────────────
function ProjectRow({ p, i, onDelete }: { p: any; i: number; onDelete: (id: string) => void }) {
    const [hov, setHov] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            onHoverStart={() => setHov(true)}
            onHoverEnd={() => setHov(false)}
            style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "16px 20px", marginBottom: 10, borderRadius: 16,
                background: hov ? "rgba(8,16,36,0.85)" : "rgba(5,12,28,0.7)",
                border: `1px solid ${hov ? "rgba(34,211,238,0.2)" : "rgba(255,255,255,0.07)"}`,
                backdropFilter: "blur(16px)",
                transition: "background 0.2s, border-color 0.2s",
                flexWrap: "wrap", gap: 14,
            }}
        >
            {/* Left */}
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{
                    width: 40, height: 40, borderRadius: 11, flexShrink: 0,
                    background: "rgba(34,211,238,0.08)",
                    border: "1px solid rgba(34,211,238,0.14)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 18,
                }}>
                    {p.image_urls?.[0]
                        ? <img src={p.image_urls[0]} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 11 }} />
                        : "🧠"}
                </div>
                <div>
                    <p style={{ fontSize: 14, fontWeight: 700, color: "#fff", fontFamily: "var(--font-geist-sans)", marginBottom: 3 }}>{p.title}</p>
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                        {p.branch && (
                            <span style={{
                                fontSize: 10, padding: "2px 8px", borderRadius: 6,
                                background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.3)",
                                fontFamily: "var(--font-geist-mono)",
                            }}>{p.branch}</span>
                        )}
                        {p.level && (
                            <span style={{
                                fontSize: 10, padding: "2px 8px", borderRadius: 6,
                                background: "rgba(34,211,238,0.08)", color: "#22d3ee",
                                fontFamily: "var(--font-geist-mono)", textTransform: "capitalize",
                            }}>{p.level}</span>
                        )}
                    </div>
                </div>
            </div>

            {/* Right */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{
                    fontSize: 16, fontWeight: 900,
                    background: "linear-gradient(135deg,#22d3ee,#10b981)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                    fontFamily: "var(--font-geist-sans)",
                }}>₹{p.price}</span>

                <a href={`/admin/dashboard/edit/${p.id}`} style={{ textDecoration: "none" }}>
                    <ActionBtn variant="blue" small>✏️ Edit</ActionBtn>
                </a>

                <ActionBtn variant="red" small onClick={() => onDelete(p.id)}>🗑 Delete</ActionBtn>
            </div>
        </motion.div>
    );
}

// ─── Inquiry card ─────────────────────────────────────────────────────────────
function InquiryCard({ inq, i, onUpdate, onDelete }: {
    inq: any; i: number;
    onUpdate: (id: string, status: string) => void;
    onDelete: (id: string) => void;
}) {
    const [hov, setHov] = useState(false);
    const sc = STATUS[inq.status] ?? STATUS.pending;

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            onHoverStart={() => setHov(true)}
            onHoverEnd={() => setHov(false)}
            style={{
                padding: "22px 24px", marginBottom: 12, borderRadius: 18,
                background: hov ? "rgba(8,16,36,0.88)" : "rgba(5,12,28,0.7)",
                border: `1px solid ${hov ? "rgba(34,211,238,0.18)" : "rgba(255,255,255,0.07)"}`,
                backdropFilter: "blur(16px)",
                transition: "background 0.2s, border-color 0.2s",
            }}
        >
            {/* Top row */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18, flexWrap: "wrap", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    {/* Avatar */}
                    <div style={{
                        width: 40, height: 40, borderRadius: "50%", flexShrink: 0,
                        background: "linear-gradient(135deg,#06b6d4,#10b981)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 15, fontWeight: 800, color: "#000",
                        fontFamily: "var(--font-geist-sans)",
                    }}>
                        {inq.name?.[0]?.toUpperCase() || "?"}
                    </div>
                    <div>
                        <p style={{ fontSize: 14, fontWeight: 700, color: "#fff", fontFamily: "var(--font-geist-sans)", marginBottom: 3 }}>{inq.name}</p>
                        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-geist-sans)" }}>
                            {inq.email}{inq.phone ? ` · ${inq.phone}` : ""}
                        </p>
                    </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    {/* Status badge */}
                    <span style={{
                        fontSize: 11, padding: "5px 12px", borderRadius: 100,
                        fontWeight: 600, textTransform: "capitalize",
                        background: sc.bg, color: sc.color, border: `1px solid ${sc.border}`,
                        fontFamily: "var(--font-geist-sans)",
                    }}>{inq.status || "pending"}</span>

                    <ActionBtn variant="red" small onClick={() => onDelete(inq.id)}>🗑</ActionBtn>
                </div>
            </div>

            {/* Detail pills */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 16 }} className="detail-grid">
                {[
                    { label: "College", val: inq.college || "—" },
                    { label: "Branch", val: inq.branch || "—" },
                    { label: "Budget", val: inq.budget ? `₹${inq.budget}` : "—" },
                ].map(d => (
                    <div key={d.label} style={{
                        padding: "10px 14px", borderRadius: 11,
                        background: "rgba(255,255,255,0.025)",
                        border: "1px solid rgba(255,255,255,0.06)",
                    }}>
                        <p style={{ fontSize: 10, color: "rgba(255,255,255,0.25)", fontFamily: "var(--font-geist-mono)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 4 }}>{d.label}</p>
                        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-geist-sans)", fontWeight: 500 }}>{d.val}</p>
                    </div>
                ))}
            </div>

            {/* Message */}
            {inq.message && (
                <div style={{
                    padding: "12px 14px", borderRadius: 11, marginBottom: 16,
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.05)",
                }}>
                    <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-geist-sans)", lineHeight: 1.6 }}>
                        {inq.message}
                    </p>
                </div>
            )}

            {/* Status selector */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", fontFamily: "var(--font-geist-mono)", letterSpacing: "1px" }}>UPDATE STATUS</p>
                <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                    {[
                        { val: "pending", label: "Pending", color: "#fbbf24", bg: "rgba(234,179,8,0.1)", border: "rgba(234,179,8,0.2)" },
                        { val: "contacted", label: "Contacted", color: "#60a5fa", bg: "rgba(59,130,246,0.1)", border: "rgba(59,130,246,0.2)" },
                        { val: "completed", label: "Completed", color: "#34d399", bg: "rgba(16,185,129,0.1)", border: "rgba(16,185,129,0.2)" },
                    ].map(opt => {
                        const active = (inq.status || "pending") === opt.val;
                        return (
                            <button
                                key={opt.val}
                                onClick={() => onUpdate(inq.id, opt.val)}
                                style={{
                                    padding: "7px 14px", borderRadius: 9, border: `1px solid ${active ? opt.border : "rgba(255,255,255,0.07)"}`,
                                    background: active ? opt.bg : "rgba(255,255,255,0.03)",
                                    color: active ? opt.color : "rgba(255,255,255,0.3)",
                                    fontSize: 11, fontWeight: 600, cursor: "pointer",
                                    fontFamily: "var(--font-geist-sans)",
                                    transition: "all 0.18s",
                                }}
                                onMouseEnter={e => {
                                    if (!active) {
                                        (e.currentTarget as HTMLElement).style.background = opt.bg;
                                        (e.currentTarget as HTMLElement).style.color = opt.color;
                                        (e.currentTarget as HTMLElement).style.borderColor = opt.border;
                                    }
                                }}
                                onMouseLeave={e => {
                                    if (!active) {
                                        (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                                        (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)";
                                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                                    }
                                }}
                            >
                                {active && "✓ "}{opt.label}
                            </button>
                        );
                    })}
                </div>
            </div>

            <style>{`
        @media (max-width: 500px) {
          .detail-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
        </motion.div>
    );
}