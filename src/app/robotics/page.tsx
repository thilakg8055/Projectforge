import { supabase } from "@/lib/supabase";
import BranchPageUI from "@/components/BranchPageUI";
import Navbar from "@/components/Navbar";
export default async function RoboticsPage() {
    const { data: projects } = await supabase
        .from("projects")
        .select("*")
        .eq("branch", "robotics")
        .order("created_at", { ascending: false });

    return (
        <>
            <Navbar />
            <BranchPageUI
                branch="Robotics / Embedded"
                desc="Line followers, robotic arms, automation systems and embedded C projects with hardware."
                icon="🤖"
                accent="#a78bfa"
                glow="rgba(167,139,250,0.12)"
                projects={projects || []}
            />
        </>
    );
}