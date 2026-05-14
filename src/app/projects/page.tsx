import { supabase } from "@/lib/supabase";
import ProjectsClient from "./ProjectsClient";

export default async function ProjectsPage() {
    const { data: projects } = await supabase
        .from("projects")
        .select("*");

    return <ProjectsClient projects={projects || []} />;
}