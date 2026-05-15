import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StandardsHero from "@/components/sections/StandardsHero";
import SplitFeature from "@/components/sections/SplitFeature";

export const metadata = {
  title: "About | Innodyn",
  description: "Explore our full catalog of precision compounds.",
};

const HERO_CONTENT = {
  titleStart: "A Company Built For People Who Expect",
  titleHighlight: "Scientific Discipline.",
  description:
    "Innodyn was founded to bring a higher level of scientific rigor, structure, and credibility to a category that too often lacks restraint and precision.",
  buttons: [
    { label: "Explore Compounds", href: "/compounds" },
    { label: "View Our Standards", href: "/standards" },
  ],
};

const PHILOSOPHY_CONTENT = {
  headingStart: "Why Innodyn",
  headingHighlight: "Exists.",
  paragraphs: [
    "From the beginning, Innodyn was built around the belief that informed customers deserve a better experience. They deserve a platform that feels measured rather than inflated, structured rather than chaotic, and credible rather than performative. Every aspect of our company reflects this belief.",
    "We are not interested in following trends or imitating mass-market approaches. Innodyn exists to serve a more discerning customer — individuals who value quality, consistency, and thoughtful presentation.",
    "At its core, Innodyn is about raising expectations. We believe companies in this space should be held to a higher standard, and we built Innodyn to embody that principle in every detail.",
  ],
  cta: { label: "Explore Compounds", href: "/compounds" },
  visual: {
    videoSrc: "/videos/portal.mp4",
    imageSrc: "/images/products/product-lg-1.png",
    imageAlt: "Innodyn 2X Blend product vial",
    sideImages: [
      { src: "/images/products/product-lg-1.png", alt: "Innodyn vial left" },
      { src: "/images/products/product-lg-1.png", alt: "Innodyn vial right" },
    ] as [{ src: string; alt: string }, { src: string; alt: string }],
  },
};

export default function StandardsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <StandardsHero {...HERO_CONTENT} />
      <section className="section-bg">
        <SplitFeature {...PHILOSOPHY_CONTENT} />
      </section>
      <Footer />
    </main>
  );
}
