"use client";

import dynamic from 'next/dynamic';
import { navItems } from "@/data";

const FloatingNav = dynamic(() => import("@/components/ui/FloatingNav").then(mod => ({ default: mod.FloatingNav })));
const Hero = dynamic(() => import("@/components/Hero"));
const Grid = dynamic(() => import("@/components/Grid"));
const RecentProjects = dynamic(() => import("@/components/RecentProjects"));
const Approach = dynamic(() => import("@/components/Approach"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full ">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        {/* <Clients /> */}
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
