import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import KeyProducts from "@/components/sections/KeyProducts";
import ScientificStandard from "@/components/sections/ScientificStandard";
import WhatMakesDifferent from "@/components/sections/WhatMakesDifferent";
import OurPhilosophy from "@/components/sections/OurPhilosophy";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <KeyProducts />
      <ScientificStandard />
      <WhatMakesDifferent />
      <OurPhilosophy />
    </main>
  );
}
