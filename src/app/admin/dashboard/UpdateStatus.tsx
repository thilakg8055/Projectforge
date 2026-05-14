// "use client";

// import { supabase } from "@/lib/supabase";

// export default function UpdateStatus({ id }: any) {
//     const update = async (status: string) => {
//         await supabase
//             .from("inquiries")
//             .update({ status })
//             .eq("id", id);

//         location.reload();
//     };

//     return (
//         <div className="flex gap-2 mt-2">
//             <button onClick={() => update("pending")}>Pending</button>
//             <button onClick={() => update("contacted")}>Contacted</button>
//             <button onClick={() => update("done")}>Done</button>
//         </div>
//     );
// }


// "use client";

// import { supabase } from "@/lib/supabase";
// import { useState } from "react";

// const options = [
//     { value: "pending", label: "Pending", color: "#fbbf24", bg: "rgba(234,179,8,0.1)", border: "rgba(234,179,8,0.2)" },
//     { value: "contacted", label: "Contacted", color: "#60a5fa", bg: "rgba(59,130,246,0.1)", border: "rgba(59,130,246,0.2)" },
//     { value: "done", label: "Done", color: "#34d399", bg: "rgba(16,185,129,0.1)", border: "rgba(16,185,129,0.2)" },
// ];

// export default function UpdateStatus({ id }: any) {
//     const [active, setActive] = useState<string | null>(null);

//     const update = async (status: string) => {
//         setActive(status);
//         await supabase.from("inquiries").update({ status }).eq("id", id);
//         location.reload();
//     };

//     return (
//         <div className="flex gap-2 mt-3">
//             {options.map((opt) => (
//                 <button
//                     key={opt.value}
//                     onClick={() => update(opt.value)}
//                     disabled={active === opt.value}
//                     className="px-4 py-2 text-xs rounded-xl font-semibold transition-all duration-200"
//                     style={{
//                         background: active === opt.value ? opt.bg : "rgba(255,255,255,0.03)",
//                         color: active === opt.value ? opt.color : "#64748b",
//                         border: active === opt.value ? `1px solid ${opt.border}` : "1px solid rgba(255,255,255,0.06)",
//                     }}
//                 >
//                     {active === opt.value && "✓ "}{opt.label}
//                 </button>
//             ))}
//         </div>
//     );
// }

"use client";

import { supabase } from "@/lib/supabase";
import { useState } from "react";

const OPTIONS = [
    { value: "pending", label: "Pending", color: "#fbbf24", bg: "rgba(234,179,8,0.1)", border: "rgba(234,179,8,0.2)" },
    { value: "contacted", label: "Contacted", color: "#60a5fa", bg: "rgba(59,130,246,0.1)", border: "rgba(59,130,246,0.2)" },
    { value: "done", label: "Done", color: "#34d399", bg: "rgba(16,185,129,0.1)", border: "rgba(16,185,129,0.2)" },
];

export default function UpdateStatus({ id }: { id: string }) {
    const [active, setActive] = useState<string | null>(null);

    const update = async (status: string) => {
        setActive(status);
        await supabase.from("inquiries").update({ status }).eq("id", id);
        location.reload();
    };

    return (
        <div style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}>
            {OPTIONS.map(opt => {
                const isActive = active === opt.value;
                return (
                    <button
                        key={opt.value}
                        onClick={() => update(opt.value)}
                        disabled={isActive}
                        style={{
                            padding: "8px 16px", borderRadius: 10,
                            border: `1px solid ${isActive ? opt.border : "rgba(255,255,255,0.07)"}`,
                            background: isActive ? opt.bg : "rgba(255,255,255,0.03)",
                            color: isActive ? opt.color : "rgba(255,255,255,0.3)",
                            fontSize: 12, fontWeight: 600,
                            cursor: isActive ? "default" : "pointer",
                            fontFamily: "var(--font-geist-sans)",
                            transition: "all 0.18s",
                        }}
                        onMouseEnter={e => {
                            if (!isActive) {
                                const el = e.currentTarget as HTMLElement;
                                el.style.background = opt.bg;
                                el.style.color = opt.color;
                                el.style.borderColor = opt.border;
                            }
                        }}
                        onMouseLeave={e => {
                            if (!isActive) {
                                const el = e.currentTarget as HTMLElement;
                                el.style.background = "rgba(255,255,255,0.03)";
                                el.style.color = "rgba(255,255,255,0.3)";
                                el.style.borderColor = "rgba(255,255,255,0.07)";
                            }
                        }}
                    >
                        {isActive && "✓ "}{opt.label}
                    </button>
                );
            })}
        </div>
    );
}