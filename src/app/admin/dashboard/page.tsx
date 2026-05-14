// import { supabase } from "@/lib/supabase";

// export default async function Dashboard() {
//     const { data: projects } = await supabase
//         .from("projects")
//         .select("*");

//     const { data: inquiries } = await supabase
//         .from("inquiries")
//         .select("*");

//     return (
//         <div className="p-10 space-y-10">
//             <h1 className="text-4xl font-bold">Admin Dashboard 🚀</h1>
//             <a
//                 href="/admin/dashboard/add"
//                 className="bg-orange-500 px-4 py-2 rounded"
//             >
//                 + Add Project
//             </a>
//             {/* PROJECTS */}
//             <div>
//                 <h2 className="text-2xl mb-4">Projects</h2>

//                 {projects?.length === 0 && (
//                     <p className="text-gray-400">No projects found</p>
//                 )}

//                 {projects?.map((p: any) => (
//                     <div key={p.id} className="bg-white/5 p-4 mb-3 rounded">
//                         <p><b>{p.title}</b></p>
//                         <p>{p.branch}</p>
//                         <p className="text-orange-500">{p.price}</p>
//                     </div>
//                 ))}
//             </div>

//             {/* INQUIRIES */}
//             <div>
//                 <h2 className="text-2xl mb-4">Inquiries</h2>

//                 {inquiries?.length === 0 && (
//                     <p className="text-gray-400">No inquiries found</p>
//                 )}

//                 {inquiries?.map((i: any) => (
//                     <div key={i.id} className="bg-white/5 p-4 mb-3 rounded">
//                         <p><b>{i.name}</b></p>
//                         <p>{i.branch}</p>
//                         <p>{i.message}</p>
//                         <p className="text-orange-500">{i.budget}</p>
//                         <p>Status: {i.status}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }


// import { supabase } from "@/lib/supabase";
// import DashboardUI from "./DashboardUI";

// export default async function Dashboard() {
//     const { data: projects } = await supabase
//         .from("projects")
//         .select("*");

//     const { data: inquiries } = await supabase
//         .from("inquiries")
//         .select("*");

//     return (
//         <DashboardUI
//             projects={projects || []}
//             inquiries={inquiries || []}
//         />
//     );
// }

import { supabase } from "@/lib/supabase";
import DashboardUI from "./DashboardUI";

export default async function Dashboard() {
    const { data: projects } = await supabase.from("projects").select("*");
    const { data: inquiries } = await supabase.from("inquiries").select("*");

    return (
        <DashboardUI
            projects={projects || []}
            inquiries={inquiries || []}
        />
    );
}