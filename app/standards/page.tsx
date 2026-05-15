import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StandardsHero from "@/components/sections/StandardsHero";
import SplitFeature from "@/components/sections/SplitFeature";
import WhyStandardsMatter from "@/components/sections/WhyStandardsMatter";

export const metadata = {
  title: "Standards | Innodyn",
  description: "Explore our full catalog of precision compounds.",
};

const HERO_CONTENT = {
  titleStart: "Standards Are Not A Alogan.",
  titleHighlight: "They Are The Foundation.",
  titleHighlightNewLine: true,
  description:
    "At Innodyn, standards are not decorative language. They are the operating principle behind every aspect of the company.",
  buttons: [
    { label: "Explore Compounds", href: "/compounds" },
    { label: "Contact Us", href: "#contact" },
  ],
};

const OUR_STANDARDS_CONTENT = {
  headingStart: "The Innodyn",
  headingHighlight: "Standard.",
  headingHighlightNewLine: true,
  paragraphs: [
    "The Innodyn standard is rooted in scientific discipline. We believe that credibility comes from rigor, and rigor requires consistency. Every layer of our company is designed to reflect an elevated level of thoughtfulness and control.",
    "This includes:Structured and refined catalog presentationPrecision-oriented product organizationClear and disciplined communication standardsConsistent platform-wide brand integrityHigher expectations for sourcing and quality review our standard is not reactive. It is built into the DNA of the company.",
  ],
  cta: { label: "Contact us", href: "/contactus" },
  visual: {
    imageSrc: "/images/mobile-image.png",
    imageAlt: "Innodyn app",
    backgroundGradient:
      "radial-gradient(ellipse at 60% 40%, rgba(221,214,254,0.22) 0%, transparent 70%), radial-gradient(ellipse at 10% 85%, rgba(187,247,208,0.20) 0%, transparent 60%)",
  },
};

export default function StandardsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <StandardsHero {...HERO_CONTENT} />
      <section className="section-bg">
        <div className="py-10 mb-10 sm:mb-15">
          <SplitFeature {...OUR_STANDARDS_CONTENT} />
        </div>
        <WhyStandardsMatter />
        <Footer />
      </section>
    </main>
  );
}
