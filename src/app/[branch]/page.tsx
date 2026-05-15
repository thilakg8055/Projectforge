// const branchData: any = {
//     cse: "CSE / AI Projects",
//     "ds-ml": "Data Science / ML Projects",
//     "ece-iot": "ECE / IoT Projects",
//     robotics: "Robotics / Embedded Projects",
// };

// export default function BranchPage({ params }: any) {
//     return (
//         <div className="p-10">
//             <h1 className="text-4xl font-bold">
//                 {branchData[params.branch]}
//             </h1>
//         </div>
//     );
// }
export const dynamic = "force-dynamic"
import { supabase } from "@/lib/supabase";

export default async function BranchPage({ params }: any) {
    const { data: projects } = await supabase
        .from("projects")
        .select("*")
        .eq("branch", params.branch);

    return (
        <div className="p-10">
            <h1 className="text-3xl mb-6">{params.branch}</h1>

            {projects?.map((p: any) => (
                <div key={p.id} className="bg-white/5 p-4 mb-4 rounded">
                    <h2>{p.title}</h2>
                    <p>{p.price}</p>
                </div>
            ))}
        </div>
    );
}