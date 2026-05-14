// "use client";

// import { useState } from "react";
// import { supabase } from "@/lib/supabase";

// export default function ContactPage() {
//     const [form, setForm] = useState({
//         name: "",
//         college: "",
//         branch: "",
//         budget: "",
//         message: "",
//     });
//     const [loading, setLoading] = useState(false);
//     const handleSubmit = async () => {
//         setLoading(true);
//         const { error } = await supabase.from("inquiries").insert([form]);
//         await supabase.from("inquiries").insert([form]);
//         setLoading(false);
//         alert("Submitted 🚀");

//         if (error) {
//             alert("Error submitting");
//         } else {
//             alert("Submitted successfully 🚀");
//         }
//     };


//     return (
//         <div className="p-10 max-w-xl mx-auto">
//             <h1 className="text-3xl font-bold mb-6">Get a Quote</h1>

//             <input placeholder="Name" className="input" onChange={(e) => setForm({ ...form, name: e.target.value })} />
//             <input placeholder="College" className="input" onChange={(e) => setForm({ ...form, college: e.target.value })} />
//             <input placeholder="Branch" className="input" onChange={(e) => setForm({ ...form, branch: e.target.value })} />
//             <input placeholder="Budget" className="input" onChange={(e) => setForm({ ...form, budget: e.target.value })} />

//             <textarea placeholder="Project details" className="input" onChange={(e) => setForm({ ...form, message: e.target.value })} />

//             <button onClick={handleSubmit} className="bg-orange-500 px-6 py-3 rounded-lg mt-4">
//                 Submit
//             </button>
//         </div>
//     );
// }





// "use client";

// import { useState } from "react";
// import { supabase } from "@/lib/supabase";

// export default function ContactPage() {
//     const [form, setForm] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         college: "",
//         branch: "",
//         budget: "",
//         message: "",
//     });

//     const [loading, setLoading] = useState(false);

//     const handleChange = (e: any) => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async () => {
//         // Basic validation
//         if (!form.name || !form.email || !form.phone) {
//             alert("Please fill required fields");
//             return;
//         }

//         setLoading(true);

//         const { error } = await supabase.from("inquiries").insert([form]);

//         setLoading(false);

//         if (error) {
//             console.log("ERROR:", error);
//             alert("Error submitting form");
//         } else {
//             alert("Submitted successfully 🚀");

//             // reset form
//             setForm({
//                 name: "",
//                 email: "",
//                 phone: "",
//                 college: "",
//                 branch: "",
//                 budget: "",
//                 message: "",
//             });
//         }
//     };

//     return (
//         <div className="p-10 max-w-xl mx-auto">
//             <h1 className="text-3xl font-bold mb-6">Get a Free Quote</h1>

//             {/* NAME */}
//             <input
//                 name="name"
//                 value={form.name}
//                 onChange={handleChange}
//                 placeholder="Your Name *"
//                 className="input"
//             />

//             {/* EMAIL */}
//             <input
//                 name="email"
//                 type="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 placeholder="Email *"
//                 className="input"
//             />

//             {/* PHONE */}
//             <input
//                 name="phone"
//                 type="tel"
//                 value={form.phone}
//                 onChange={handleChange}
//                 placeholder="Phone Number *"
//                 className="input"
//             />

//             {/* COLLEGE */}
//             <input
//                 name="college"
//                 value={form.college}
//                 onChange={handleChange}
//                 placeholder="College Name"
//                 className="input"
//             />

//             {/* BRANCH */}
//             <input
//                 name="branch"
//                 value={form.branch}
//                 onChange={handleChange}
//                 placeholder="Branch (CSE / ECE...)"
//                 className="input"
//             />

//             {/* BUDGET */}
//             <input
//                 name="budget"
//                 value={form.budget}
//                 onChange={handleChange}
//                 placeholder="Budget (₹)"
//                 className="input"
//             />

//             {/* MESSAGE */}
//             <textarea
//                 name="message"
//                 value={form.message}
//                 onChange={handleChange}
//                 placeholder="Describe your project..."
//                 className="input"
//             />

//             {/* BUTTON */}
//             <button
//                 onClick={handleSubmit}
//                 disabled={loading}
//                 className="bg-orange-500 px-6 py-3 rounded-lg mt-4 w-full"
//             >
//                 {loading ? "Submitting..." : "Submit Inquiry →"}
//             </button>
//         </div>
//     );
// }




// "use client";

// import { useState } from "react";
// import { supabase } from "@/lib/supabase";
// import { motion, AnimatePresence } from "framer-motion";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import ThreeBackground from "@/components/ThreeBackground";

// const fields = [
//     { name: "name", placeholder: "Your Name", type: "text", required: true, span: 1 },
//     { name: "email", placeholder: "Email Address", type: "email", required: true, span: 1 },
//     { name: "phone", placeholder: "Phone Number", type: "tel", required: true, span: 1 },
//     { name: "college", placeholder: "College Name", type: "text", required: false, span: 1 },
//     { name: "branch", placeholder: "Branch (CSE / ECE...)", type: "text", required: false, span: 1 },
//     { name: "budget", placeholder: "Budget (₹)", type: "text", required: false, span: 1 },
// ];

// function GlowInput({ field, value, onChange }: any) {
//     const [focused, setFocused] = useState(false);
//     return (
//         <div className="relative">
//             <input
//                 name={field.name}
//                 type={field.type}
//                 value={value}
//                 onChange={onChange}
//                 placeholder={`${field.placeholder}${field.required ? " *" : ""}`}
//                 onFocus={() => setFocused(true)}
//                 onBlur={() => setFocused(false)}
//                 className="w-full px-5 py-4 rounded-xl text-sm text-white placeholder-slate-500 outline-none transition-all duration-300"
//                 style={{
//                     background: focused ? "rgba(34,211,238,0.04)" : "rgba(255,255,255,0.02)",
//                     border: focused ? "1px solid rgba(34,211,238,0.35)" : "1px solid rgba(255,255,255,0.06)",
//                     boxShadow: focused ? "0 0 20px rgba(34,211,238,0.08), inset 0 1px 0 rgba(255,255,255,0.04)" : "none",
//                     backdropFilter: "blur(8px)",
//                 }}
//             />
//         </div>
//     );
// }

// export default function ContactPage() {
//     const [form, setForm] = useState({
//         name: "", email: "", phone: "", college: "", branch: "", budget: "", message: "",
//     });
//     const [loading, setLoading] = useState(false);
//     const [success, setSuccess] = useState(false);

//     const handleChange = (e: any) => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async () => {
//         if (!form.name || !form.email || !form.phone) {
//             alert("Please fill required fields");
//             return;
//         }
//         setLoading(true);
//         const { error } = await supabase.from("inquiries").insert([form]);
//         setLoading(false);
//         if (error) {
//             console.log("ERROR:", error);
//             alert("Error submitting form");
//         } else {
//             setSuccess(true);
//             setForm({ name: "", email: "", phone: "", college: "", branch: "", budget: "", message: "" });
//         }
//     };

//     return (
//         <>
//             <ThreeBackground />
//             <Navbar />
//             <main className="relative z-10 min-h-screen pt-32 pb-20 px-6">
//                 {/* Ambient blobs */}
//                 <div className="absolute top-20 left-1/4 w-96 h-96 pointer-events-none"
//                     style={{ background: "radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)", filter: "blur(60px)" }} />
//                 <div className="absolute bottom-20 right-1/4 w-72 h-72 pointer-events-none"
//                     style={{ background: "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)", filter: "blur(50px)" }} />

//                 <div className="max-w-2xl mx-auto">
//                     {/* Header */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//                         className="text-center mb-12"
//                     >
//                         <span
//                             className="inline-block text-xs font-semibold tracking-[0.25em] uppercase px-4 py-2 rounded-full mb-5"
//                             style={{ background: "rgba(34,211,238,0.08)", border: "1px solid rgba(34,211,238,0.15)", color: "#22d3ee" }}
//                         >
//                             Get in Touch
//                         </span>
//                         <h1 className="text-5xl font-black text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
//                             Get a{" "}
//                             <span style={{ background: "linear-gradient(135deg, #22d3ee, #10b981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
//                                 Free Quote
//                             </span>
//                         </h1>
//                         <p className="text-slate-400">Tell us about your project and we'll get back within 2 hours.</p>
//                     </motion.div>

//                     {/* Form card */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 40 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//                         className="rounded-3xl p-8"
//                         style={{
//                             background: "rgba(6,11,26,0.75)",
//                             border: "1px solid rgba(34,211,238,0.1)",
//                             backdropFilter: "blur(24px)",
//                             boxShadow: "0 0 80px rgba(34,211,238,0.05), inset 0 1px 0 rgba(255,255,255,0.04)",
//                         }}
//                     >
//                         <div className="grid grid-cols-2 gap-4 mb-4">
//                             {fields.map((f) => (
//                                 <div key={f.name} className={f.span === 2 ? "col-span-2" : "col-span-1"}>
//                                     <GlowInput field={f} value={(form as any)[f.name]} onChange={handleChange} />
//                                 </div>
//                             ))}
//                         </div>

//                         {/* Textarea */}
//                         <GlowTextarea
//                             value={form.message}
//                             onChange={(e: any) => setForm({ ...form, message: e.target.value })}
//                         />

//                         {/* Submit */}
//                         <motion.button
//                             onClick={handleSubmit}
//                             disabled={loading}
//                             whileHover={!loading ? { scale: 1.02 } : {}}
//                             whileTap={!loading ? { scale: 0.98 } : {}}
//                             className="w-full py-4 rounded-2xl font-bold text-black text-sm mt-4 relative overflow-hidden"
//                             style={{
//                                 background: loading
//                                     ? "rgba(34,211,238,0.4)"
//                                     : "linear-gradient(135deg, #22d3ee, #10b981)",
//                                 boxShadow: loading ? "none" : "0 0 30px rgba(34,211,238,0.35), 0 0 60px rgba(16,185,129,0.15)",
//                             }}
//                         >
//                             {loading ? (
//                                 <span className="flex items-center justify-center gap-2">
//                                     <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
//                                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
//                                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
//                                     </svg>
//                                     Submitting...
//                                 </span>
//                             ) : "Submit Inquiry →"}
//                         </motion.button>

//                         {/* Trust row */}
//                         <div className="flex justify-center gap-8 mt-6 text-xs text-slate-500">
//                             {["Reply in 2hrs", "No spam", "Free consultation"].map((t) => (
//                                 <span key={t} className="flex items-center gap-1">
//                                     <span className="text-emerald-400">✓</span> {t}
//                                 </span>
//                             ))}
//                         </div>
//                     </motion.div>
//                 </div>

//                 {/* Success modal */}
//                 <AnimatePresence>
//                     {success && (
//                         <motion.div
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                             className="fixed inset-0 z-50 flex items-center justify-center"
//                             style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }}
//                             onClick={() => setSuccess(false)}
//                         >
//                             <motion.div
//                                 initial={{ scale: 0.8, opacity: 0 }}
//                                 animate={{ scale: 1, opacity: 1 }}
//                                 exit={{ scale: 0.8, opacity: 0 }}
//                                 transition={{ type: "spring", damping: 20 }}
//                                 className="rounded-3xl p-10 text-center max-w-sm"
//                                 style={{
//                                     background: "rgba(6,11,26,0.95)",
//                                     border: "1px solid rgba(34,211,238,0.2)",
//                                     boxShadow: "0 0 60px rgba(34,211,238,0.15)",
//                                 }}
//                                 onClick={(e) => e.stopPropagation()}
//                             >
//                                 <div className="text-5xl mb-4">🚀</div>
//                                 <h3 className="text-2xl font-black text-white mb-2">Submitted!</h3>
//                                 <p className="text-slate-400 mb-6">We'll reach out within 2 hours.</p>
//                                 <button
//                                     onClick={() => setSuccess(false)}
//                                     className="px-6 py-3 rounded-xl font-semibold text-black text-sm"
//                                     style={{ background: "linear-gradient(135deg, #22d3ee, #10b981)" }}
//                                 >
//                                     Done ✓
//                                 </button>
//                             </motion.div>
//                         </motion.div>
//                     )}
//                 </AnimatePresence>
//             </main>
//             <Footer />
//         </>
//     );
// }

// function GlowTextarea({ value, onChange }: any) {
//     const [focused, setFocused] = useState(false);
//     return (
//         <textarea
//             name="message"
//             value={value}
//             onChange={onChange}
//             placeholder="Describe your project..."
//             rows={4}
//             onFocus={() => setFocused(true)}
//             onBlur={() => setFocused(false)}
//             className="w-full px-5 py-4 rounded-xl text-sm text-white placeholder-slate-500 outline-none transition-all duration-300 resize-none"
//             style={{
//                 background: focused ? "rgba(34,211,238,0.04)" : "rgba(255,255,255,0.02)",
//                 border: focused ? "1px solid rgba(34,211,238,0.35)" : "1px solid rgba(255,255,255,0.06)",
//                 boxShadow: focused ? "0 0 20px rgba(34,211,238,0.08)" : "none",
//                 backdropFilter: "blur(8px)",
//             }}
//         />
//     );
// }


"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";

// ─── Field config ─────────────────────────────────────────────────────────────
const FIELDS = [
    { name: "name", placeholder: "Your Name", type: "text", required: true },
    { name: "email", placeholder: "Email Address", type: "email", required: true },
    { name: "phone", placeholder: "Phone Number", type: "tel", required: true },
    { name: "college", placeholder: "College Name", type: "text", required: false },
    { name: "branch", placeholder: "Branch (CSE / ECE…)", type: "text", required: false },
    { name: "budget", placeholder: "Budget (₹)", type: "text", required: false },
];

// ─── Shared input styles ──────────────────────────────────────────────────────
function GlowInput({ field, value, onChange }: any) {
    const [focused, setFocused] = useState(false);
    return (
        <div style={{ position: "relative" }}>
            <input
                name={field.name}
                type={field.type}
                value={value}
                onChange={onChange}
                placeholder={`${field.placeholder}${field.required ? " *" : ""}`}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                style={{
                    width: "100%", boxSizing: "border-box",
                    padding: "13px 18px",
                    borderRadius: 12, fontSize: 13,
                    color: "#fff", outline: "none",
                    fontFamily: "var(--font-geist-sans)",
                    background: focused ? "rgba(34,211,238,0.04)" : "rgba(255,255,255,0.03)",
                    border: `1px solid ${focused ? "rgba(34,211,238,0.35)" : "rgba(255,255,255,0.07)"}`,
                    boxShadow: focused ? "0 0 0 3px rgba(34,211,238,0.07)" : "none",
                    transition: "background 0.2s, border-color 0.2s, box-shadow 0.2s",
                }}
            />
        </div>
    );
}

function GlowTextarea({ value, onChange }: any) {
    const [focused, setFocused] = useState(false);
    return (
        <textarea
            name="message"
            value={value}
            onChange={onChange}
            placeholder="Describe your project — what do you want to build? Any specific requirements?"
            rows={4}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            style={{
                width: "100%", boxSizing: "border-box",
                padding: "13px 18px",
                borderRadius: 12, fontSize: 13,
                color: "#fff", outline: "none",
                resize: "vertical", minHeight: 110,
                fontFamily: "var(--font-geist-sans)",
                background: focused ? "rgba(34,211,238,0.04)" : "rgba(255,255,255,0.03)",
                border: `1px solid ${focused ? "rgba(34,211,238,0.35)" : "rgba(255,255,255,0.07)"}`,
                boxShadow: focused ? "0 0 0 3px rgba(34,211,238,0.07)" : "none",
                transition: "background 0.2s, border-color 0.2s, box-shadow 0.2s",
            }}
        />
    );
}

// ─── Success modal ────────────────────────────────────────────────────────────
function SuccessModal({ onClose }: { onClose: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
                position: "fixed", inset: 0, zIndex: 2000,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "rgba(0,0,0,0.75)", backdropFilter: "blur(10px)",
            }}
        >
            <motion.div
                initial={{ scale: 0.82, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.88, opacity: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                onClick={e => e.stopPropagation()}
                style={{
                    borderRadius: 24, padding: "44px 40px",
                    textAlign: "center", maxWidth: 360, width: "90%",
                    background: "rgba(5,12,28,0.97)",
                    border: "1px solid rgba(34,211,238,0.18)",
                    boxShadow: "0 0 80px rgba(34,211,238,0.12)",
                }}
            >
                <div style={{ fontSize: 48, marginBottom: 20 }}>🚀</div>
                <h3 style={{
                    fontSize: 22, fontWeight: 900, color: "#fff",
                    fontFamily: "var(--font-geist-sans)", letterSpacing: "-0.4px",
                    marginBottom: 10,
                }}>Inquiry submitted!</h3>
                <p style={{
                    fontSize: 13, color: "rgba(255,255,255,0.38)",
                    fontFamily: "var(--font-geist-sans)", lineHeight: 1.65,
                    marginBottom: 28,
                }}>
                    We'll reach out within 2 hours.<br />Check your email or WhatsApp.
                </p>

                {/* Divider */}
                <div style={{
                    height: 1, marginBottom: 24,
                    background: "linear-gradient(90deg,transparent,rgba(34,211,238,0.2),transparent)",
                }} />

                <motion.button
                    whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(34,211,238,0.45)" }}
                    whileTap={{ scale: 0.97 }}
                    onClick={onClose}
                    style={{
                        width: "100%", padding: "12px 0",
                        borderRadius: 12, border: "none",
                        background: "linear-gradient(135deg,#06b6d4,#10b981)",
                        color: "#000", fontSize: 13, fontWeight: 700,
                        fontFamily: "var(--font-geist-sans)", cursor: "pointer",
                    }}
                >Done ✓</motion.button>
            </motion.div>
        </motion.div>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ContactPage() {
    const [form, setForm] = useState({
        name: "", email: "", phone: "",
        college: "", branch: "", budget: "", message: "",
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e: any) =>
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async () => {
        if (!form.name || !form.email || !form.phone) {
            alert("Please fill required fields (Name, Email, Phone)");
            return;
        }
        setLoading(true);
        const { error } = await supabase.from("inquiries").insert([form]);
        setLoading(false);
        if (error) {
            console.error("Supabase error:", error);
            alert("Something went wrong. Please try again.");
        } else {
            setSuccess(true);
            setForm({ name: "", email: "", phone: "", college: "", branch: "", budget: "", message: "" });
        }
    };

    return (
        <>
            <Navbar />

            <main style={{
                position: "relative", zIndex: 10,
                minHeight: "100vh",
                padding: "130px 5% 100px",
            }}>
                {/* Ambient blobs */}
                <div style={{
                    position: "absolute", top: "15%", left: "10%",
                    width: 400, height: 400, borderRadius: "50%",
                    background: "radial-gradient(circle,rgba(34,211,238,0.09) 0%,transparent 70%)",
                    filter: "blur(70px)", pointerEvents: "none",
                }} />
                <div style={{
                    position: "absolute", bottom: "15%", right: "8%",
                    width: 320, height: 320, borderRadius: "50%",
                    background: "radial-gradient(circle,rgba(16,185,129,0.08) 0%,transparent 70%)",
                    filter: "blur(60px)", pointerEvents: "none",
                }} />

                <div style={{ maxWidth: 1200, margin: "0 auto" }}>

                    {/* ── Two-col layout: info left + form right ──────────────────── */}
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1.4fr",
                        gap: "clamp(32px,6vw,96px)",
                        alignItems: "start",
                    }} className="contact-grid">

                        {/* ── LEFT — info panel ─────────────────────────────────────── */}
                        <motion.div
                            initial={{ opacity: 0, x: -24 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {/* Eyebrow */}
                            <p style={{
                                fontSize: 11, fontWeight: 600, letterSpacing: "2.5px",
                                textTransform: "uppercase", color: "#22d3ee",
                                fontFamily: "var(--font-geist-mono)", marginBottom: 16,
                            }}>Get in touch</p>

                            {/* Heading */}
                            <h1 style={{
                                fontSize: "clamp(36px,4.5vw,58px)",
                                fontWeight: 900, letterSpacing: "-2px", lineHeight: 1.05,
                                fontFamily: "var(--font-geist-sans)", color: "#fff",
                                marginBottom: 20,
                            }}>
                                Get a{" "}
                                <span style={{
                                    background: "linear-gradient(135deg,#22d3ee,#10b981)",
                                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                                }}>Free Quote</span>
                            </h1>

                            <p style={{
                                fontSize: 14, color: "rgba(255,255,255,0.38)",
                                lineHeight: 1.75, maxWidth: 320,
                                fontFamily: "var(--font-geist-sans)", marginBottom: 40,
                            }}>
                                Tell us about your project and we'll send a detailed quote within 2 hours — no spam, no obligation.
                            </p>

                            {/* Divider */}
                            <div style={{
                                height: 1, marginBottom: 32,
                                background: "linear-gradient(90deg,rgba(34,211,238,0.2),transparent)",
                            }} />

                            {/* What you get */}
                            <p style={{
                                fontSize: 11, fontWeight: 600, letterSpacing: "2px",
                                textTransform: "uppercase", color: "rgba(255,255,255,0.2)",
                                fontFamily: "var(--font-geist-mono)", marginBottom: 18,
                            }}>What's included</p>

                            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 40 }}>
                                {[
                                    { icon: "💻", text: "Complete source code" },
                                    { icon: "📊", text: "Project report + PPT" },
                                    { icon: "🛠", text: "Full setup walkthrough" },
                                    { icon: "💬", text: "WhatsApp support included" },
                                    { icon: "⚡", text: "Delivered in 24–72 hours" },
                                ].map(({ icon, text }) => (
                                    <div key={text} style={{
                                        display: "flex", alignItems: "center", gap: 12,
                                        fontSize: 13, color: "rgba(255,255,255,0.55)",
                                        fontFamily: "var(--font-geist-sans)",
                                    }}>
                                        <span style={{
                                            width: 32, height: 32, borderRadius: 9, flexShrink: 0,
                                            background: "rgba(34,211,238,0.07)",
                                            border: "1px solid rgba(34,211,238,0.12)",
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                            fontSize: 15,
                                        }}>{icon}</span>
                                        {text}
                                    </div>
                                ))}
                            </div>

                            {/* Contact details */}
                            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                                {[
                                    { icon: "📧", text: "tilakg8055@gmail.com" },
                                    { icon: "📱", text: "+91 9901096221" },
                                ].map(({ icon, text }) => (
                                    <div key={text} style={{
                                        display: "flex", alignItems: "center", gap: 10,
                                        padding: "10px 14px", borderRadius: 11,
                                        background: "rgba(255,255,255,0.03)",
                                        border: "1px solid rgba(255,255,255,0.07)",
                                        fontSize: 12, color: "rgba(255,255,255,0.4)",
                                        fontFamily: "var(--font-geist-sans)",
                                    }}>
                                        <span style={{ fontSize: 15, flexShrink: 0 }}>{icon}</span>
                                        {text}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* ── RIGHT — form card ─────────────────────────────────────── */}
                        <motion.div
                            initial={{ opacity: 0, y: 32 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                            style={{
                                borderRadius: 24, padding: "32px",
                                background: "rgba(5,12,28,0.78)",
                                border: "1px solid rgba(34,211,238,0.12)",
                                backdropFilter: "blur(24px)",
                                boxShadow: "0 0 80px rgba(34,211,238,0.06), inset 0 1px 0 rgba(255,255,255,0.04)",
                                position: "relative", overflow: "hidden",
                            }}
                        >
                            {/* Top shimmer sweep */}
                            <motion.div
                                animate={{ x: ["-100%", "200%"] }}
                                transition={{ duration: 3, repeat: Infinity, repeatDelay: 6, ease: "easeInOut" }}
                                style={{
                                    position: "absolute", top: 0, left: 0,
                                    width: "50%", height: 1,
                                    background: "linear-gradient(90deg,transparent,rgba(34,211,238,0.5),transparent)",
                                    pointerEvents: "none",
                                }}
                            />

                            {/* 2-col field grid */}
                            <div style={{
                                display: "grid", gridTemplateColumns: "1fr 1fr",
                                gap: 12, marginBottom: 12,
                            }} className="form-grid">
                                {FIELDS.map(f => (
                                    <GlowInput
                                        key={f.name}
                                        field={f}
                                        value={(form as any)[f.name]}
                                        onChange={handleChange}
                                    />
                                ))}
                            </div>

                            {/* Textarea */}
                            <div style={{ marginBottom: 16 }}>
                                <GlowTextarea
                                    value={form.message}
                                    onChange={(e: any) => setForm(prev => ({ ...prev, message: e.target.value }))}
                                />
                            </div>

                            {/* Submit button */}
                            <motion.button
                                onClick={handleSubmit}
                                disabled={loading}
                                whileHover={!loading ? { scale: 1.02, boxShadow: "0 0 36px rgba(34,211,238,0.5), 0 0 72px rgba(16,185,129,0.2)" } : {}}
                                whileTap={!loading ? { scale: 0.98 } : {}}
                                style={{
                                    width: "100%", padding: "14px 0",
                                    borderRadius: 13, border: "none",
                                    background: loading
                                        ? "rgba(34,211,238,0.35)"
                                        : "linear-gradient(135deg,#06b6d4,#10b981)",
                                    color: "#000", fontSize: 14, fontWeight: 700,
                                    fontFamily: "var(--font-geist-sans)",
                                    cursor: loading ? "wait" : "pointer",
                                    boxShadow: loading ? "none" : "0 0 28px rgba(34,211,238,0.35)",
                                    transition: "background 0.2s, box-shadow 0.2s",
                                }}
                            >
                                {loading ? (
                                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                                        <svg style={{ animation: "spin 0.8s linear infinite", width: 16, height: 16 }} viewBox="0 0 24 24" fill="none">
                                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.25" />
                                            <path fill="currentColor" d="M4 12a8 8 0 018-8v8z" opacity="0.75" />
                                        </svg>
                                        Submitting…
                                    </span>
                                ) : "Submit Inquiry →"}
                            </motion.button>

                            {/* Trust row */}
                            <div style={{
                                display: "flex", justifyContent: "center",
                                gap: "clamp(12px,3vw,32px)", marginTop: 18,
                                flexWrap: "wrap",
                            }}>
                                {["Reply in 2hrs", "No spam ever", "Free consultation"].map(t => (
                                    <span key={t} style={{
                                        fontSize: 11, color: "rgba(255,255,255,0.28)",
                                        fontFamily: "var(--font-geist-sans)",
                                        display: "flex", alignItems: "center", gap: 5,
                                    }}>
                                        <span style={{ color: "#34d399", fontSize: 10 }}>✓</span>{t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>

            {/* ── Success modal ─────────────────────────────────────────────────── */}
            <AnimatePresence>
                {success && <SuccessModal onClose={() => setSuccess(false)} />}
            </AnimatePresence>

            <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }

        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-grid    { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </>
    );
}