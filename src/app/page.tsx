export const dynamic = "force-dynamic";
import { supabase } from "@/lib/supabase";
import ReadyProjects from "@/components/ReadyProjects";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import DomainSection from "@/components/DomainSection";
import { Cpu, Brain, Wifi, Bot } from "lucide-react";
export default async function Home() {
  const { data } = await supabase.from("test").select("*");

  console.log(data);

  return (
    <>

      {/* icon:<Brain /> */}

      <Navbar />
      <Hero />
      <DomainSection />
      <ReadyProjects />
      {/* <main className="bg-black text-white min-h-screen flex items-center justify-center"> */}
      {/* <h1 className="text-4xl font-bold">Connected 🚀</h1> */}
      {/* </main> */}
    </>
  );
}