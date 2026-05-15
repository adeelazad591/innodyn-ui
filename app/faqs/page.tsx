import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StandardsHero from "@/components/sections/StandardsHero";

export const metadata = {
  title: "FAQ's | Innodyn",
  description: "Explore our full catalog of precision compounds.",
};

const HERO_CONTENT = {
  titleStart: "Questions We Hear Most",
  titleHighlight: "Hear Most.",
  description:
    "Everything you need to better understand the Innodyn philosophy, platform experience, and higher scientific standard.",
  buttons: [{ label: "Contact Us", href: "/contact" }],
};

export default function StandardsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <StandardsHero {...HERO_CONTENT} />
      <section className="section-bg">
        <Footer />
      </section>
    </main>
  );
}
