import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StandardsHero from "@/components/sections/StandardsHero";
import SplitFeature from "@/components/sections/SplitFeature";
import FeatureShowcase from "@/components/sections/FeatureShowcase";

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

const WHAT_WE_STAND_FOR_CONTENT = {
  headingStart: "What We",
  headingHighlight: "Stand For.",
  description:
    "Our standards extend beyond product selection. They influence how our systems are built, how our catalog is structured, how our brand communicates, and how our customers experience the platform from beginning to end.",
  rowOne: {
    cards: [
      {
        number: "01",
        title: "Advanced Browsing",
        description:
          "We Believe Informed Customers Should Engage With A Brand That Feels Intelligent.",
        glow: "rgba(99,102,241,0.18)",
        imageSrc: "/images/frame-image-3.png",
        imageWidth: 673,
        imageHeight: 426,
      },
      {
        number: "02",
        title: "Precision Over Exaggeration",
        description: "We Prioritize Measured Presentation, Exact Thinking.",
        glow: "rgba(139,92,246,0.12)",
        imageSrc: "/images/frame-image-3.png",
        imageWidth: 673,
        imageHeight: 426,
      },
      {
        number: "03",
        title: "Structured Clarity Over Clutter",
        description:
          "Every Touchpoint Is Designed To Feel Organized and Clean.",
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
        number: "04",
        title: "Consistency Over Improvisation",
        description:
          "Trust Is Built When A Company Behaves With Repeatable Standards, Dependable Systems.",
        glow: "rgba(251,146,60,0.18)",
        imageSrc: "/images/frame-image-4.png",
        imageWidth: 827,
        imageHeight: 364,
      },
      {
        number: "05",
        title: "Credibility Over Spectacle",
        description:
          "Innodyn Is Designed To Earn Respect Through Seriousness, Technical Sophistication, And A More Disciplined Brand Environment.",
        glow: "rgba(45,212,191,0.18)",
        imageSrc: "/images/frame-image-4.png",
        imageWidth: 827,
        imageHeight: 364,
      },
    ],
  },
  cta: { label: "View Our Standards", href: "/standards" },
};

const OUR_VISION_CONTENT = {
  headingStart: "Our",
  headingHighlight: "Vision.",
  paragraphs: [
    "Our long-term vision is to redefine what customers expect from companies in this space. We believe the future belongs to brands that are more disciplined, more scientifically grounded, and more intentional in how they build trust.",
    "Innodyn is not designed to be loud. It is designed to be respected. We are creating a company that reflects where this category should be headed: toward higher standards, stronger scientific identity, and a better-calibrated customer experience.",
    "As we grow, our commitment remains unchanged: build a brand that earns confidence through precision, discipline, and consistency.",
  ],
  visual: {
    imageSrc: "/images/our-vision-frame.png",
    imageAlt: "Innodyn platform scheduling interface",
    imageWidth: 800,
    imageHeight: 600,
  },
  visualLeft: true,
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
        <FeatureShowcase {...WHAT_WE_STAND_FOR_CONTENT} />
        <SplitFeature {...OUR_VISION_CONTENT} />
        <Footer />
      </section>
    </main>
  );
}
