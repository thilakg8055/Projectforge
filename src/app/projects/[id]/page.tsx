// export default function ProjectDetails({ params }: any) {
//     return (
//         <div className="p-10 max-w-2xl">
//             <h1 className="text-4xl font-bold">
//                 Project #{params.id}
//             </h1>

//             <p className="text-gray-400 mt-4">
//                 Detailed explanation of project.
//             </p>

//             {/* INCLUDED */}
//             <div className="mt-6 bg-white/5 p-6 rounded">
//                 <h3 className="mb-3">Includes:</h3>
//                 <ul className="space-y-2">
//                     <li>✔ Code</li>
//                     <li>✔ PPT</li>
//                     <li>✔ Report</li>
//                 </ul>
//             </div>

//             {/* OPTIONS */}
//             <div className="mt-6 space-y-2">
//                 <p>✔ With components</p>
//                 <p>✔ Without components</p>
//                 <p>✔ Return after use</p>
//             </div>

//             <button className="mt-6 bg-orange-500 px-6 py-3 rounded">
//                 Get Quote →
//             </button>
//         </div>
//     );
// }

import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./Projectdetailclient";
import ProjectsClient from "../ProjectsClient";
export default async function ProjectDetailPage({ params }: { params: { id: string } }) {
    const { data: project } = await supabase
        .from("projects")
        .select("*")
        .eq("id", params.id)
        .single();

    if (!project) notFound();

    // return <ProjectDetailClient project={project} />;
    return <ProjectsClient projects={[project]} />
}

