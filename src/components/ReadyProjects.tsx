import { supabase } from "@/lib/supabase";
import ReadyProjectsUI from "./ReadyProjectsUI";

export default async function ReadyProjects() {
    const { data: projects } = await supabase
        .from("projects")
        .select("*")
        .limit(3);

    return <ReadyProjectsUI projects={projects || []} />;
}