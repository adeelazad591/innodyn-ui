import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import KeyProducts from "@/components/sections/KeyProducts";
import ScientificStandard from "@/components/sections/ScientificStandard";
import WhatMakesDifferent from "@/components/sections/WhatMakesDifferent";
import SplitFeature from "@/components/sections/SplitFeature";
import ProductExperience from "@/components/sections/ProductExperience";
import HigherStandards from "@/components/sections/HigherStandards";
import NextGeneration from "@/components/sections/NextGeneration";
import WhyChoose from "@/components/sections/WhyChoose";

const PHILOSOPHY_CONTENT = {
  headingStart: "Our",
  headingHighlight: "Philosophy.",
  paragraphs: [
    "Precision is not a feature. It is the baseline. Innodyn is built on the belief that products in this category should be presented with more care, more sophistication, and more scientific discipline. Too many platforms feel rushed, inflated, or imprecise. We set out to build something different.",
    "We believe the future belongs to brands that take quality seriously, communicate clearly, and operate with consistency. A brand should not have to choose between being modern and being credible. Innodyn was built to be both.",
    "The result is a platform that feels intelligent, measured, and highly intentional at every level.",
  ],
  cta: { label: "Explore Compounds", href: "/compounds" },
  visual: {
    videoSrc: "/videos/portal.mp4",
    imageSrc: "/images/products/product-lg-1.png",
    imageAlt: "Innodyn 2X Blend product vial",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <div className="section-bg">
        <KeyProducts />
        <ScientificStandard />
        <WhatMakesDifferent />
        <SplitFeature {...PHILOSOPHY_CONTENT} />
        <ProductExperience />
        <HigherStandards />
        <WhyChoose />
        <NextGeneration />
        <Footer />
      </div>
    </main>
  );
}
