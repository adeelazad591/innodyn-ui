import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StandardsHero from "@/components/sections/StandardsHero";
import SplitFeature from "@/components/sections/SplitFeature";

export const metadata = {
  title: "Compounds | Innodyn",
  description: "Explore our full catalog of precision compounds.",
};

const HERO_CONTENT = {
  titleStart: "Advanced compounds. Presented",
  titleHighlight: "With Clarity.",
  titleHighlightNewLine: true,
  description:
    "Innodyn’s catalog is designed for individuals who value structured presentation, scientific tone, and a more disciplined browsing experience.",
  buttons: [
    { label: "View Our Standards", href: "/standards" },
    { label: "Contact Us", href: "/contact" },
  ],
};

const OUR_VISION_CONTENT = {
  headingStart: "Built for Informed",
  headingHighlight: "Customers.",
  headingHighlightNewLine: true,
  paragraphs: [
    "The Innodyn customer is not driven by hype. They are typically knowledgeable, detail-oriented, and selective in where they place their trust.",
    "Our compounds page is built with that audience in mind. Every element of presentation is designed to respect their intelligence and support a more informed experience. ",
  ],
  cta: { label: "Contact Us", href: "/contact" },
  visual: {
    imageSrc: "/images/frame-image-6.png",
    imageAlt: "Innodyn platform scheduling interface",
    imageWidth: 800,
    imageHeight: 600,
  },
  visualLeft: true,
};

const MORE_STRUCTURED = {
  headingStart: "A more structured",
  headingHighlight: "catalog experience..",
  headingHighlightNewLine: true,
  paragraphs: [
    "Our catalog architecture is intentionally designed to create a smoother and more refined customer journey. Products are organized logically, presented consistently, and displayed in a way that supports efficient navigation.",
    "This structure allows customers to:Browse with greater confidenceCompare options more efficientlyNavigate without distractionAccess product information in a cleaner format",
    "The result is a catalog experience that feels elevated, efficient, and aligned with the expectations of a serious buyer.",
  ],
  cta: { label: "Contact Us", href: "/contact" },
  visual: {
    videoSrc: "/videos/arc.mp4",
    imageSrc: "/images/products/product-2.png",
    imageAlt: "Innodyn 2X Blend product vial",
  },
};

export default function StandardsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <StandardsHero {...HERO_CONTENT} />
      <section className="section-bg">
        <SplitFeature {...MORE_STRUCTURED} />
        <SplitFeature {...OUR_VISION_CONTENT} />
        <Footer />
      </section>
    </main>
  );
}
