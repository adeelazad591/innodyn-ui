import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StandardsHero from "@/components/sections/StandardsHero";
import ContactSection from "@/components/sections/ContactSection";

export const metadata = {
  title: "Contact Us | Innodyn",
  description: "Explore our full catalog of precision compounds.",
};

const HERO_CONTENT = {
  titleStart: "Connect With",
  titleHighlight: "Innodyn.",
  description:
    "We believe serious companies should communicate with clarity and professionalism. Whether you are reaching out with a general inquiry.",
  buttons: [{ label: "View Our Standards", href: "/standards" }],
};

export default function StandardsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <StandardsHero {...HERO_CONTENT} />
      <section className="section-bg">
        <ContactSection />
        <Footer />
      </section>
    </main>
  );
}
