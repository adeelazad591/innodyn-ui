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
import FeatureShowcase from "@/components/sections/FeatureShowcase";

const WHY_CHOOSE_CONTENT = {
  headingStart: "Why Customers Choose",
  headingHighlight: "Innodyn.",
  description:
    "Innodyn appeals to people who want a more disciplined brand environment. They are not looking for an overbuilt sales pitch. They are looking for a company that feels composed, intelligent, and serious about what it offers.",
  rowOne: {
    cards: [
      { number: "01", title: "Advanced Browsing", glow: "rgba(99,102,241,0.18)", imageSrc: "/images/frame-image-3.png", imageWidth: 673, imageHeight: 426 },
      { number: "02", title: "Stronger Brand Discipline", glow: "rgba(139,92,246,0.12)", imageSrc: "/images/frame-image-3.png", imageWidth: 673, imageHeight: 426 },
      { number: "03", title: "Better Product Organization", glow: "rgba(251,146,60,0.18)", imageSrc: "/images/frame-image-3.png", imageWidth: 673, imageHeight: 426 },
    ],
  },
  rowTwo: {
    cards: [
      { number: "04", title: "A Cleaner And More Sophisticated Platform", glow: "rgba(251,146,60,0.18)", imageSrc: "/images/frame-image-4.png", imageWidth: 827, imageHeight: 364 },
      { number: "05", title: "A More Credible Overall Experience", glow: "rgba(45,212,191,0.18)", imageSrc: "/images/frame-image-4.png", imageWidth: 827, imageHeight: 364 },
    ],
  },
  cta: { label: "View Our Standards", href: "/standards" },
  showShapeBg: true,
};

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
        <FeatureShowcase {...WHY_CHOOSE_CONTENT} />
        <NextGeneration />
        <Footer />
      </div>
    </main>
  );
}
