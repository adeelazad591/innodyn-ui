import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StandardsHero from "@/components/sections/StandardsHero";
import FeatureShowcase from "@/components/sections/FeatureShowcase";

export const metadata = {
  title: "How it works | Innodyn",
  description: "Explore our full catalog of precision compounds.",
};

const HERO_CONTENT = {
  titleStart: "A Streamlined Experience Built",
  titleHighlight: "Around Clarity and Control.",
  titleHighlightNewLine: true,
  description:
    "Innodyn is designed to create a seamless, intelligent experience from first interaction through completion.",
  buttons: [
    { label: "Explore Compounds", href: "/compounds" },
    { label: "View Our Standards", href: "/standards" },
  ],
};

const HOW_IT_WORKS_CONTENT = {
  headingStart: "How It",
  headingHighlight: "Works.",
  description:
    "We believe that simplicity, when built correctly, reflects sophistication. Our process is intentionally streamlined so customers can move through the platform with clarity and confidence.",
  rowOne: {
    cards: [
      {
        number: "01",
        title: "Explore the Catalog",
        description:
          "Customers begin by browsing a catalog designed for clean navigation and structured discovery. ",
        glow: "rgba(99,102,241,0.18)",
        imageSrc: "/images/frame-image-3.png",
        imageWidth: 673,
        imageHeight: 426,
      },
      {
        number: "02",
        title: "Review Product Information",
        description:
          "Each product is positioned within a presentation framework built for clarity. ",
        glow: "rgba(251,146,60,0.18)",
        imageSrc: "/images/frame-image-3.png",
        imageWidth: 673,
        imageHeight: 426,
      },
    ],
  },
  rowTwo: {
    cards: [
      {
        number: "03",
        title: "Select and Proceed",
        description:
          "Once selections are made, customers move into a simplified process designed to reduce complexity.",
        glow: "rgba(251,146,60,0.18)",
        imageSrc: "/images/frame-image-4.png",
        imageWidth: 827,
        imageHeight: 364,
      },
      {
        number: "04",
        title: "Experience the Innodyn Standard",
        description:
          "From beginning to end, the customer journey is designed to reflect the Innodyn standard: precision & clarity.",
        glow: "rgba(45,212,191,0.18)",
        imageSrc: "/images/frame-image-4.png",
        imageWidth: 827,
        imageHeight: 364,
      },
    ],
  },
  cta: { label: "View Our Standards", href: "/standards" },
  showGradientBg: false,
};

export default function StandardsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <StandardsHero {...HERO_CONTENT} />
      <section className="section-bg">
        <FeatureShowcase {...HOW_IT_WORKS_CONTENT} />
        <Footer />
      </section>
    </main>
  );
}
