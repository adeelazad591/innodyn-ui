import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

const navLinks = ["Home", "About", "Standards", "Compounds", "How It Works"];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 min-w-[1160px] flex items-center justify-between px-8 py-4">
      {/* Logo */}
      <div className="flex items-center gap-2.5 min-w-[160px]">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Innodyn"
            width={200}
            height={45}
            className="shrink-0"
          />
        </Link>
      </div>

      {/* Centered nav links */}
      <ul className="flex items-center gap-1 bg-[#1a1a1a] py-4 px-4 rounded-full border border-white/5">
        {navLinks.map((link) => (
          <li key={link}>
            <a
              href="#"
              className={`px-6 py-3 rounded-full text-lg font-medium transition-colors ${
                link === "Home"
                  ? "bg-gradient-to-b from-[#3a3a3a] to-[#252525] text-white border border-white/10 shadow-inner"
                  : "text-zinc-300 hover:text-white"
              }`}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="flex justify-end min-w-[160px]">
        <Button label="View Our Standards" />
      </div>
    </nav>
  );
}
