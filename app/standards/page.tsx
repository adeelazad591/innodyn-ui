import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StandardsHero from "@/components/sections/StandardsHero";
import AllProducts from "@/components/sections/AllProducts";

export const metadata = {
  title: "Standards | Innodyn",
  description: "Explore our full catalog of precision compounds.",
};

const HERO_CONTENT = {
  titleStart: "Discover Our",
  titleHighlight: "Products.",
  description: "Peak performance isn't accidental. It's engineered.",
  buttons: [
    { label: "Explore Compounds", href: "/compounds" },
    { label: "Contact Us", href: "#contact" },
  ],
};

export default function StandardsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <StandardsHero {...HERO_CONTENT} />
      <section className="section-bg">
        <AllProducts />
        <Footer />
      </section>
    </main>
  );
}
