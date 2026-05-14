// export default function Login() {
//     return <div className="p-10">Admin Login</div>;
// }


// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";



// export default function AdminLogin() {
//     const [password, setPassword] = useState("");
//     const router = useRouter();

//     const handleLogin = () => {
//         if (password === "admin123") {
//             localStorage.setItem("admin", "true");
//             router.push("/admin/dashboard");
//         } else {
//             alert("Wrong password");
//         }
//     };

//     return (

//         <div className="min-h-screen flex items-center justify-center relative z-10">
//             <div className="bg-white/5 p-8 rounded-xl border border-white/10 w-80">
//                 <h1 className="text-2xl mb-4 text-center">Admin Login 🔐</h1>

//                 <input
//                     type="password"
//                     placeholder="Enter password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="w-full p-3 rounded bg-black border border-white/20 mb-4"
//                 />

//                 <button
//                     onClick={handleLogin}
//                     className="w-full bg-orange-500 py-2 rounded"
//                 >
//                     Login
//                 </button>
//             </div>
//         </div>
//     );
// }


"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function AdminLogin() {
    const [password, setPassword] = useState("");
    const [focused, setFocused] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async () => {
        if (!password) return;
        setLoading(true);
        setError(false);

        // Small delay for UX feedback
        await new Promise(r => setTimeout(r, 400));

        if (password === "admin123") {
            localStorage.setItem("admin", "true");
            router.push("/admin/dashboard");
        } else {
            setError(true);
            setLoading(false);
            setPassword("");
        }
    };

    const onKey = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") handleLogin();
    };

    return (
        <div style={{
            minHeight: "100vh", position: "relative", zIndex: 10,
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "20px",
        }}>

            {/* Ambient blobs */}
            <div style={{
                position: "absolute", top: "20%", left: "30%",
                width: 360, height: 360, borderRadius: "50%",
                background: "radial-gradient(circle,rgba(34,211,238,0.08) 0%,transparent 70%)",
                filter: "blur(70px)", pointerEvents: "none",
            }} />
            <div style={{
                position: "absolute", bottom: "20%", right: "25%",
                width: 280, height: 280, borderRadius: "50%",
                background: "radial-gradient(circle,rgba(16,185,129,0.07) 0%,transparent 70%)",
                filter: "blur(60px)", pointerEvents: "none",
            }} />

            <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                style={{ width: "100%", maxWidth: 400 }}
            >
                {/* Logo */}
                <div style={{ textAlign: "center", marginBottom: 36 }}>
                    <div style={{
                        width: 52, height: 52, borderRadius: 15, margin: "0 auto 16px",
                        background: "linear-gradient(135deg,#06b6d4,#10b981)",
                        boxShadow: "0 0 28px rgba(6,182,212,0.5)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 24,
                    }}>⚙</div>

                    <p style={{
                        fontSize: 11, fontWeight: 600, letterSpacing: "2.5px",
                        textTransform: "uppercase", color: "#22d3ee",
                        fontFamily: "var(--font-geist-mono)", marginBottom: 8,
                    }}>ProjectForge · Admin</p>

                    <h1 style={{
                        fontSize: 28, fontWeight: 900, letterSpacing: "-0.8px",
                        color: "#fff", fontFamily: "var(--font-geist-sans)",
                    }}>Sign in</h1>
                    <p style={{
                        fontSize: 13, color: "rgba(255,255,255,0.35)",
                        fontFamily: "var(--font-geist-sans)", marginTop: 6,
                    }}>Enter your admin password to continue</p>
                </div>

                {/* Card */}
                <div style={{
                    borderRadius: 22, padding: "32px",
                    background: "rgba(5,12,28,0.8)",
                    border: `1px solid ${error ? "rgba(239,68,68,0.3)" : "rgba(34,211,238,0.12)"}`,
                    backdropFilter: "blur(24px)",
                    boxShadow: error
                        ? "0 0 60px rgba(239,68,68,0.06)"
                        : "0 0 60px rgba(34,211,238,0.05)",
                    position: "relative", overflow: "hidden",
                    transition: "border-color 0.3s, box-shadow 0.3s",
                }}>

                    {/* Shimmer */}
                    <motion.div
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
                        style={{
                            position: "absolute", top: 0, left: 0,
                            width: "50%", height: 1,
                            background: "linear-gradient(90deg,transparent,rgba(34,211,238,0.5),transparent)",
                            pointerEvents: "none",
                        }}
                    />

                    {/* Password field */}
                    <div style={{ marginBottom: 16 }}>
                        <label style={{
                            display: "block", fontSize: 10, fontWeight: 600,
                            letterSpacing: "1.8px", textTransform: "uppercase",
                            marginBottom: 8,
                            color: error ? "#f87171" : focused ? "#22d3ee" : "rgba(255,255,255,0.25)",
                            fontFamily: "var(--font-geist-mono)",
                            transition: "color 0.2s",
                        }}>
                            {error ? "Incorrect password — try again" : "Password"}
                        </label>

                        <div style={{ position: "relative" }}>
                            <input
                                type="password"
                                value={password}
                                onChange={e => { setPassword(e.target.value); setError(false); }}
                                onFocus={() => setFocused(true)}
                                onBlur={() => setFocused(false)}
                                onKeyDown={onKey}
                                placeholder="Enter admin password"
                                autoFocus
                                style={{
                                    width: "100%", boxSizing: "border-box",
                                    padding: "13px 18px",
                                    borderRadius: 12, fontSize: 14,
                                    color: "#fff", outline: "none",
                                    fontFamily: "var(--font-geist-sans)",
                                    background: error
                                        ? "rgba(239,68,68,0.05)"
                                        : focused ? "rgba(34,211,238,0.04)" : "rgba(255,255,255,0.03)",
                                    border: `1px solid ${error
                                        ? "rgba(239,68,68,0.35)"
                                        : focused ? "rgba(34,211,238,0.35)" : "rgba(255,255,255,0.07)"}`,
                                    boxShadow: focused && !error ? "0 0 0 3px rgba(34,211,238,0.07)" : "none",
                                    transition: "background 0.2s, border-color 0.2s, box-shadow 0.2s",
                                    letterSpacing: password ? "3px" : "normal",
                                }}
                            />

                            {/* Shake animation on error */}
                            <motion.div
                                animate={error ? { x: [0, -8, 8, -6, 6, -3, 3, 0] } : {}}
                                transition={{ duration: 0.4 }}
                                style={{ position: "absolute", inset: 0, borderRadius: 12, pointerEvents: "none" }}
                            />
                        </div>
                    </div>

                    {/* Submit */}
                    <motion.button
                        onClick={handleLogin}
                        disabled={loading || !password}
                        whileHover={!loading && password ? { scale: 1.02, boxShadow: "0 0 36px rgba(34,211,238,0.5)" } : {}}
                        whileTap={!loading && password ? { scale: 0.98 } : {}}
                        style={{
                            width: "100%", padding: "14px 0",
                            borderRadius: 12, border: "none",
                            background: !password || loading
                                ? "rgba(34,211,238,0.25)"
                                : "linear-gradient(135deg,#06b6d4,#10b981)",
                            color: "#000", fontSize: 14, fontWeight: 700,
                            fontFamily: "var(--font-geist-sans)",
                            cursor: !password || loading ? "not-allowed" : "pointer",
                            boxShadow: password && !loading ? "0 0 24px rgba(34,211,238,0.3)" : "none",
                            transition: "background 0.2s, box-shadow 0.2s",
                        }}
                    >
                        {loading ? (
                            <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                                <svg style={{ animation: "spin 0.8s linear infinite", width: 15, height: 15 }} viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.25" />
                                    <path fill="currentColor" d="M4 12a8 8 0 018-8v8z" opacity="0.75" />
                                </svg>
                                Signing in…
                            </span>
                        ) : "Sign in →"}
                    </motion.button>
                </div>

                {/* Back link */}
                <p style={{
                    textAlign: "center", marginTop: 20,
                    fontSize: 12, color: "rgba(255,255,255,0.2)",
                    fontFamily: "var(--font-geist-sans)",
                }}>
                    <a href="/" style={{
                        color: "rgba(255,255,255,0.25)", textDecoration: "none",
                        transition: "color 0.2s",
                    }}
                        onMouseEnter={e => ((e.target as HTMLElement).style.color = "#22d3ee")}
                        onMouseLeave={e => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.25)")}
                    >← Back to site</a>
                </p>
            </motion.div>

            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
    );
}