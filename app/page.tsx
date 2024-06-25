import Grid from "@/components/Grid";
import Herosec from "@/components/Herosec";
import Desc from "@/components/Desc";
import { Navbar } from "@/components/ui/Navbar";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { Heart, HeartHandshake, PencilRuler, Rabbit } from "lucide-react";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/info";
import ClientFeedbacks from "@/components/ClientFeedbacks";
import Experience from "@/components/Experience";
import Process from "@/components/Process";
import Footer from "@/components/Footer";
import Techno from "@/components/Techno";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Navbar
        navItems={navItems}
        />
        <Herosec/>
        <Grid />
        <Techno/>
        <RecentProjects/>
        {/* <Desc/> */}
        <ClientFeedbacks/>
        <Experience/>
        <Process/>
        <Footer/>
      </div>
    </main>
  );
}