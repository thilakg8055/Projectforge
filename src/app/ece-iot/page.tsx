// export default function ECEIoTPage() {
//     return (
//         <div className="p-10">
//             <h1 className="text-4xl font-bold">ECE / IoT Projects</h1>
//             <p className="text-gray-400 mt-4">
//                 Chatbots, ML models, web apps and more.
//             </p>
//         </div>
//     );
// }

export const dynamic = "force-dynamic"
import { supabase } from "@/lib/supabase";
import BranchPageUI from "@/components/BranchPageUI";
import Navbar from "@/components/Navbar";
export default async function ECEIoTPage() {
    const { data: projects } = await supabase
        .from("projects")
        .select("*")
        .eq("branch", "ece-iot")
        .order("created_at", { ascending: false });

    return (
        <><Navbar />
            <BranchPageUI
                branch="ECE / IoT"
                desc="Arduino, NodeMCU, Raspberry Pi, smart devices with components and full wiring diagrams."
                icon="📡"
                accent="#3b82f6"
                glow="rgba(59,130,246,0.12)"
                projects={projects || []}
            />
        </>
    );
}