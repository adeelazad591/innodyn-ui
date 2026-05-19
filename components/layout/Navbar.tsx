"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";

const navLinks: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Standards", href: "/standards" },
  { label: "Compounds", href: "/compounds" },
  { label: "How It Works", href: "/how-it-works" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50  px-6 lg:px-8 py-3 ">
      {/* Main bar */}
      <div className="  flex  items-center justify-between">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.png"
            alt="Innodyn"
            width={200}
            height={45}
            className="h-8 lg:h-11.25 w-auto"
            style={{ width: "auto" }}
            priority
          />
        </Link>

        {/* Desktop — centered nav links */}
        <ul className="hidden min-[1400px]:flex  items-center gap-1.75 backdrop-blur-[20px]  bg-white/4 p-2 rounded-full ">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className={`relative isolate inline-flex items-center justify-center overflow-hidden px-4 py-3 rounded-full text-lg font-medium transition-colors ${
                  pathname === href
                    ? "text-white border border-white/6 bg-white/1 before:absolute backdrop-blur-[10px] before:inset-x-0 before:top-0 before:h-[80%] before:-z-10 before:rounded-full before:bg-radial-[50%_100%_at_50%_0%] before:from-white/[0.22] before:to-transparent before:content-['']"
                    : "text-white hover:text-white"
                }`}
              >
                <span className="relative z-10 whitespace-nowrap">{label}</span>
              </Link>
              {/* <Link
                href={href}
                className={`px-4 py-3 rounded-full text-lg font-medium transition-colors ${
                  pathname === href
                    ? "bg-[radial-gradient(ellipse_at_top,rgba(90,90,96,0.9)_0%,rgba(28,28,32,1)_100%)] text-white border border-white/6 shadow-inner"
                    : "text-white hover:text-white"
                }`}
              >
                {label}
              </Link> */}
            </li>
          ))}
        </ul>

        {/* Desktop — CTA */}
        <div className="hidden min-[1400px]:flex justify-end min-w-40">
          <Button label="View Our Standards" href="/standards" isHeader />
        </div>

        {/* Mobile / tablet — burger */}
        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen ? "true" : "false"}
          className="min-[1400px]:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/6 border border-white/8 text-white transition-colors hover:bg-white/10"
        >
          {isOpen ? (
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              aria-hidden
            >
              <path
                d="M1.5 1.5l12 12M13.5 1.5l-12 12"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              aria-hidden
            >
              <path
                d="M0 1h16M0 6h16M0 11h16"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile / tablet — dropdown menu */}
      {isOpen && (
        <div className="min-[1400px]:hidden border-t border-white/6 bg-[#0a0a0a]/95 backdrop-blur-md">
          <ul className="max-w-420 mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center px-4 py-3 rounded-xl text-[15px] font-medium transition-colors ${
                    pathname === href
                      ? "bg-white/8 text-white"
                      : "text-zinc-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
