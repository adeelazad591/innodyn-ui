import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import KeyProducts from "@/components/sections/KeyProducts";
import ScientificStandard from "@/components/sections/ScientificStandard";
import WhatMakesDifferent from "@/components/sections/WhatMakesDifferent";
import OurPhilosophy from "@/components/sections/OurPhilosophy";
import ProductExperience from "@/components/sections/ProductExperience";
import HigherStandards from "@/components/sections/HigherStandards";
import NextGeneration from "@/components/sections/NextGeneration";
import WhyChoose from "@/components/sections/WhyChoose";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <div className="section-bg">
        <KeyProducts />
        <ScientificStandard />
        <WhatMakesDifferent />
        <OurPhilosophy />
        <ProductExperience />
        <HigherStandards />
        <WhyChoose />
        <NextGeneration />
      </div>
      <Footer />
    </main>
  );
}
