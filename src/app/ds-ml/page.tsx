// export default function DSMLPage() {
//     return (
//         <div className="p-10">
//             <h1 className="text-4xl font-bold">DS / ML Projects</h1>
//             <p className="text-gray-400 mt-4">
//                 Chatbots, ML models, web apps and more.
//             </p>
//         </div>
//     );
// }

import { supabase } from "@/lib/supabase";
import BranchPageUI from "@/components/BranchPageUI";
import Navbar from "@/components/Navbar";
export default async function DSMLPage() {
    const { data: projects } = await supabase
        .from("projects")
        .select("*")
        .eq("branch", "ds-ml")
        .order("created_at", { ascending: false });

    return (
        <>
            <Navbar />
            <BranchPageUI
                branch="Data Science / ML"
                desc="Prediction models, dashboards, NLP pipelines, data visualisation and deep learning projects."
                icon="📊"
                accent="#22d3ee"
                glow="rgba(34,211,238,0.12)"
                projects={projects || []}
            />
        </>
    );
}


