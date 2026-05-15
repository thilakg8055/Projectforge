// "use client";

// import { supabase } from "@/lib/supabase";

// export default function DeleteInquiry({ id }: any) {
//     const deleteInquiry = async () => {
//         await supabase.from("inquiries").delete().eq("id", id);
//         location.reload();
//     };

//     return (
//         <button onClick={deleteInquiry} className="text-red-500 mt-2">
//             Delete Inquiry
//         </button>
//     );
// }


// "use client";

// import { supabase } from "@/lib/supabase";
// import { motion } from "framer-motion";

// export default function DeleteInquiry({ id }: any) {
//     const deleteInquiry = async () => {
//         const confirmed = confirm("Delete this inquiry?");
//         if (!confirmed) return;
//         await supabase.from("inquiries").delete().eq("id", id);
//         location.reload();
//     };

//     return (
//         <motion.button
//             onClick={deleteInquiry}
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.97 }}
//             className="px-4 py-2 text-xs rounded-xl font-medium transition-all duration-200"
//             style={{
//                 background: "rgba(239,68,68,0.08)",
//                 color: "#f87171",
//                 border: "1px solid rgba(239,68,68,0.15)",
//             }}
//             onMouseEnter={(e) => {
//                 (e.currentTarget as HTMLElement).style.background = "rgba(239,68,68,0.9)";
//                 (e.currentTarget as HTMLElement).style.color = "#fff";
//             }}
//             onMouseLeave={(e) => {
//                 (e.currentTarget as HTMLElement).style.background = "rgba(239,68,68,0.08)";
//                 (e.currentTarget as HTMLElement).style.color = "#f87171";
//             }}
//         >
//             🗑 Delete Inquiry
//         </motion.button>
//     );
// }

"use client";
export const dynamic = "force-dynamic";
import { supabase } from "@/lib/supabase";
import { motion } from "framer-motion";
import { useState } from "react";

export default function DeleteInquiry({ id }: { id: string }) {
    const [hov, setHov] = useState(false);

    const deleteInquiry = async () => {
        if (!confirm("Delete this inquiry?")) return;
        await supabase.from("inquiries").delete().eq("id", id);
        location.reload();
    };

    return (
        <motion.button
            onClick={deleteInquiry}
            onHoverStart={() => setHov(true)}
            onHoverEnd={() => setHov(false)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            style={{
                padding: "9px 18px", borderRadius: 10,
                background: hov ? "rgba(239,68,68,0.88)" : "rgba(239,68,68,0.09)",
                border: "1px solid rgba(239,68,68,0.18)",
                color: hov ? "#fff" : "#f87171",
                fontSize: 12, fontWeight: 600, cursor: "pointer",
                fontFamily: "var(--font-geist-sans)",
                transition: "background 0.18s, color 0.18s",
            }}
        >🗑 Delete Inquiry</motion.button>
    );
}