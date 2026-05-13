import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StandardsHero from "@/components/sections/StandardsHero";
import AllProducts from "@/components/sections/AllProducts";

export const metadata = {
  title: "Standards | Innodyn",
  description: "Explore our full catalog of precision compounds.",
};

export default function StandardsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <StandardsHero />
      <div className="section-bg">
        <AllProducts />
        <Footer />
      </div>
    </main>
  );
}
