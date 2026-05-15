"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

interface FoundationItem {
  id: string;
  title: string;
  description: string;
  iconSrc: string;
}

const ITEMS: FoundationItem[] = [
  {
    id: "discipline",
    title: "Discipline Over Marketing",
    description:
      "Our philosophy begins with discipline, not hype. We prioritize standards, restraint, and intelligent execution over surface-level promotion.",
    iconSrc: "/images/prod-experience-image-1.png",
  },
  {
    id: "decisions",
    title: "Intentional Decisions",
    description:
      "Every choice we make is deliberate. From product curation to platform design, we act with clarity of intent rather than reactive impulse.",
    iconSrc: "/images/prod-experience-image-2.png",
  },
  {
    id: "clarity",
    title: "Clarity in Execution",
    description:
      "We remove ambiguity from every interaction. Clean systems, clear language, and structured presentation define how we operate at every level.",
    iconSrc: "/images/prod-experience-image-3.png",
  },
  {
    id: "scientific",
    title: "Scientific Mindset",
    description:
      "We approach every decision through a scientific lens — evidence-based, rigorously evaluated, and grounded in verifiable standards rather than trend-driven assumptions.",
    iconSrc: "/images/prod-experience-image-1.png",
  },
];

interface OurFoundationProps {
  cta?: { label: string; href?: string };
}

export default function OurFoundation({
  cta = { label: "Explore Compounds", href: "/compounds" },
}: OurFoundationProps) {
  const [openId, setOpenId] = useState<string>("discipline");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
    <section className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        {/* ── Top: Heading + Button ── */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 sm:gap-4 mb-6">
          <h2 className="text-[1.75rem] sm:text-[2.5rem] lg:text-[3.25rem] xl:text-[60px] font-extrabold text-white leading-[1.1] tracking-tight">
            Our{" "}
            <span className="font-serif italic text-silver-gradient">
              Foundation
            </span>
          </h2>
          <div className="shrink-0 sm:pt-2">
            <Button label={cta.label} href={cta.href} />
          </div>
        </div>

        {/* ── Paragraph ── */}
        <p className="text-base sm:text-lg font-normal text-zinc-400 leading-[1.8] max-w-4xl mb-12 lg:mb-16">
          From the beginning, Innodyn was built around the belief that informed
          customers deserve a better experience. They deserve a platform that
          feels measured rather than inflated, structured rather than chaotic,
          and credible rather than performative.
        </p>

        {/* ── Accordion ── */}
        <div className="flex flex-col">
          {ITEMS.map((item, index) => {
            const isOpen = openId === item.id;
            const isLast = index === ITEMS.length - 1;

            return (
              <div key={item.id} className="flex gap-5">
                {/* Icon column with connector line */}
                <div className="flex flex-col items-center">
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    aria-label={item.title}
                    title={item.title}
                    className="bg-[radial-gradient(ellipse_at_top,rgba(90,90,96,0.9)_0%,rgba(28,28,32,1)_100%)] cursor-pointer shrink-0 w-20 h-20 p-2 flex items-center justify-center rounded-2xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] overflow-hidden transition-all duration-300 hover:border-white/20"
                  >
                    <Image
                      src={item.iconSrc}
                      alt={item.title}
                      width={60}
                      height={60}
                      className="w-12 h-12 object-cover"
                    />
                  </button>
                  {/* Vertical connector — hidden after last item */}
                  {!isLast && (
                    <div className="w-px flex-1 min-h-6 bg-linear-to-b from-white/10 to-white/5 my-1" />
                  )}
                </div>

                {/* Content column */}
                <div className="rounded-2xl bg-[radial-gradient(ellipse_at_top,rgba(90,90,96,0.9)_0%,rgba(28,28,32,1)_100%)] border border-white/20 flex-1 mb-4 overflow-hidden self-start relative">
                  {/* Top-right grid overlay */}
                  <div className="foundation-card-grid absolute inset-0 pointer-events-none" />
                  {/* Title row — fixed height matches icon box (h-20 = 80px) */}
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    aria-expanded={isOpen ? "true" : "false"}
                    className="cursor-pointer w-full h-20 px-10 flex items-center text-left group"
                  >
                    <span
                      className={`text-lg sm:text-[28px] font-semibold transition-colors duration-200 ${
                        isOpen ? "text-white" : "text-white/70"
                      } group-hover:text-white`}
                    >
                      {item.title}
                    </span>
                  </button>

                  {/* Animated description */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-base sm:text-[22px] font-normal text-zinc-400 leading-[1.8] px-10 pb-5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
