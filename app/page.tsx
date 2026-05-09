import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import KeyProducts from "@/components/sections/KeyProducts";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <KeyProducts />
    </main>
  );
}
