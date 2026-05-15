import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StandardsHero from "@/components/sections/StandardsHero";
import AllProducts from "@/components/sections/AllProducts";

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
} as const;

export default function StandardsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <StandardsHero {...HERO_CONTENT} />
      <section className="section-bg">
        <AllProducts />
      </section>
      <Footer />
    </main>
  );
}
