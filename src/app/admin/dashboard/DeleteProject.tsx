// "use client";

// import { supabase } from "@/lib/supabase";
// import { useRouter } from "next/navigation";

// export default function DeleteProject({ id }: any) {
//     const router = useRouter();
//     const deleteProject = async () => {
//         await supabase.from("projects").delete().eq("id", id);
//         router.refresh();
//     };

//     return (
//         <button onClick={deleteProject} className="text-red-500 mt-2">
//             Delete Project
//         </button>
//     );
// }


// "use client";

// import { supabase } from "@/lib/supabase";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";

// export default function DeleteProject({ id }: any) {
//     const router = useRouter();

//     const deleteProject = async () => {
//         const confirmed = confirm("Delete this project?");
//         if (!confirmed) return;
//         await supabase.from("projects").delete().eq("id", id);
//         router.refresh();
//     };

//     return (
//         <motion.button
//             onClick={deleteProject}
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
//             🗑 Delete Project
//         </motion.button>
//     );
// }

"use client";
export const dynamic = "force-dynamic";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

export default function DeleteProject({ id }: { id: string }) {
    const router = useRouter();
    const [hov, setHov] = useState(false);

    const deleteProject = async () => {
        if (!confirm("Delete this project?")) return;
        const { error } = await supabase.from("projects").delete().eq("id", id);
        if (!error) router.refresh();
    };

    return (
        <motion.button
            onClick={deleteProject}
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
        >🗑 Delete Project</motion.button>
    );
}