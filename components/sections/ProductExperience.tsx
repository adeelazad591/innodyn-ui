"use client";

import Image from "next/image";
import { useState } from "react";

function PerspectiveGrid() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2.5rem]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
          linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px)
        `,
        backgroundSize: "52px 52px",
        maskImage:
          "radial-gradient(ellipse 70% 60% at 50% 0%, black 10%, transparent 75%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 70% 60% at 50% 0%, black 10%, transparent 75%)",
      }}
    />
  );
}

function CardGridOverlay() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 rounded-[1.25rem] pointer-events-none overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px),
          linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px)
        `,
        backgroundSize: "36px 36px",
        maskImage:
          "radial-gradient(ellipse 80% 100% at 80% 30%, black 10%, transparent 80%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 80% 100% at 80% 30%, black 10%, transparent 80%)",
      }}
    />
  );
}

/* Arrow icon reused from Button component */
function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M2.5 7h9M8.5 3.5 12 7l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const CARDS = [
  {
    id: "structured-discovery",
    title: "Structured Discovery",
    description:
      "The Innodyn Platform Is Designed To Make Discovery Feel Structured, Not Cluttered. Products Are Presented With Clarity And Precision, Allowing Users To Navigate The Catalog With Confidence And Intent.",
    image: "/images/prod-experience-image-1.png",
  },
  {
    id: "advanced-browsing",
    title: "Advanced Browsing",
    description:
      "We Focus On Delivering A More Advanced Browsing Experience For People Who Appreciate Thoughtful Presentation And Scientific Tone. That Means Less Noise, Better Organization, And A Stronger Emphasis On Consistency Across The Catalog",
    image: "/images/prod-experience-image-2.png",
  },
  {
    id: "technical-credibility",
    title: "Technical Credibility",
    description:
      "Whether Customers Are Returning For Familiar Compounds Or Exploring The Platform For The First Time, The Experience Is Grounded In Technical Accuracy And Scientific Discipline.",
    image: "/images/prod-experience-image-3.png",
  },
];

export default function ProductExperience() {
  const [activeCard, setActiveCard] = useState(1);

  return (
    <section className="py-12 lg:py-20 px-4 md:px-15 lg:px-30">
      {/* max-w-7xl mx-auto */}
      {/* Outer luxury container */}
      <div className="relative rounded-[2.5rem] bg-[linear-gradient(180deg,rgba(52,52,52,0.72)_0%,rgba(24,24,24,0.96)_42%,#111111_100%)] border border-white/[0.07] bg-[#111113] overflow-hidden px-8 pt-14 pb-12 sm:px-12 sm:pt-16 sm:pb-15 lg:px-16 lg:pt-20 lg:pb-20">
        <PerspectiveGrid />

        {/* Circle shape background — right side decoration */}
        <div
          aria-hidden
          className="absolute top-0 -right-100 w-200 h-200 pointer-events-none select-none z-0"
        >
          <Image
            src="/images/circle-shape.png"
            alt=""
            fill
            sizes="480px"
            className="object-contain opacity-40"
          />
        </div>

        <div className="relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <span className="shadow-[0_14px_44px_rgba(0,0,0,0.45)] backdrop-blur-md inline-flex items-center px-5 py-2 rounded-2xl bg-[#1e1e20] border-2 border-white/20 text-zinc-400 text-sm md:text-lg font-base tracking-wide bg-[radial-gradient(ellipse_at_top,rgba(90,90,96,0.9)_0%,rgba(28,28,32,1)_100%)]">
              Interface Architecture
            </span>
          </div>

          {/* Headline */}
          <div className="relative text-center mb-3 leading-tight max-w-5xl mx-auto px-4 lg:px-0">
            <Image
              src="/images/left-line.png"
              alt=""
              width={176}
              height={176}
              className="absolute left-25 top-10 w-38 h-32 hidden lg:block pointer-events-none select-none"
            />
            <Image
              src="/images/right-line.png"
              alt=""
              width={176}
              height={176}
              className="absolute right-25 top-10 w-38 h-32 hidden lg:block pointer-events-none select-none"
            />
            <span className="text-[1.75rem] sm:text-[2.5rem] lg:text-[3.25rem] xl:text-[60px] font-extrabold text-white leading-[1.1] tracking-tight">
              Product.{" "}
            </span>
            <span className="text-[1.75rem] sm:text-[2.5rem] lg:text-[3.25rem] xl:text-[60px] font-extrabold italic font-serif tracking-tight text-silver-gradient">
              Experience.
            </span>
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-xl font-normal text-zinc-400 leading-[1.8] max-w-5xl px-0 lg:px-6 mx-auto mb-10 text-center">
            A cleaner, more intelligent way to explore compounds.
          </p>

          {/* Cards panel */}
          <div className="bg-[#181819] rounded-4xl border border-white/5.5 p-4 sm:p-5 lg:p-6 max-w-350 mx-auto">
            {/* Flex layout — active card expands horizontally */}
            <div className="hidden lg:flex gap-4 h-80">
              {CARDS.map((card, index) => {
                const isActive = activeCard === index;
                return (
                  <div
                    key={card.id}
                    onMouseEnter={() => setActiveCard(index)}
                    className={[
                      isActive ? "flex-[2_1_0%]" : "flex-[1_1_0%]",
                      "relative min-w-0 overflow-hidden rounded-[1.25rem] p-7 lg:p-8 cursor-pointer select-none",
                      "transition-all duration-300",
                      isActive
                        ? "bg-[#1d1d1f] border border-zinc-600/45 shadow-[0_0_48px_rgba(255,255,255,0.035),inset_0_1px_0_rgba(255,255,255,0.055)]"
                        : "border border-white/[0.04] opacity-55",
                    ].join(" ")}
                  >
                    {isActive && <CardGridOverlay />}

                    {/* Card background shape */}
                    <div
                      aria-hidden
                      className={[
                        "absolute inset-0 z-0 pointer-events-none transition-opacity duration-500",
                        isActive ? "opacity-100" : "opacity-0",
                      ].join(" ")}
                    >
                      <Image
                        src="/images/card-bg-shape.png"
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain object-left"
                      />
                    </div>

                    {/* Arrow button */}
                    {isActive && (
                      <button
                        type="button"
                        aria-label={`Explore ${card.title}`}
                        className="absolute top-5 right-5 w-9 h-9 rounded-full bg-zinc-600/55 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-zinc-500/65 transition-colors duration-200"
                      >
                        <ArrowIcon className="-rotate-45" />
                      </button>
                    )}

                    {/* Icon image */}
                    <div className="mb-7 relative z-10">
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={64}
                        height={64}
                        className="w-16 h-16 object-contain"
                      />
                    </div>

                    {/* Title */}
                    <h3
                      className={[
                        "text-lg md:text-2xl font-semibold mb-4 leading-snug relative z-10 transition-colors duration-300",
                        isActive ? "text-white" : "text-zinc-400",
                      ].join(" ")}
                    >
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={[
                        "text-sm leading-[1.75] relative z-10 transition-colors duration-300",
                        isActive
                          ? "text-zinc-300"
                          : "text-zinc-500 line-clamp-3",
                      ].join(" ")}
                    >
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Mobile stacked layout */}
            <div className="flex flex-col gap-3 lg:hidden">
              {CARDS.map((card, index) => {
                const isActive = activeCard === index;
                return (
                  <div
                    key={card.id}
                    onClick={() => setActiveCard(index)}
                    className={[
                      "relative overflow-hidden rounded-[1.25rem] p-6 cursor-pointer select-none",
                      "transition-all duration-300",
                      isActive
                        ? "bg-[#1d1d1f] border border-zinc-600/45 shadow-[0_0_48px_rgba(255,255,255,0.035)]"
                        : "border border-white/4 opacity-55",
                    ].join(" ")}
                  >
                    {isActive && <CardGridOverlay />}

                    {/* Card background shape */}
                    <div
                      aria-hidden
                      className={[
                        "absolute inset-0 z-0 pointer-events-none transition-opacity duration-500",
                        isActive ? "opacity-100" : "opacity-0",
                      ].join(" ")}
                    >
                      {/* <Image
                          src="/images/card-bg-shape.png"
                          alt=""
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-contain object-left"
                        /> */}
                    </div>

                    {isActive && (
                      <button
                        type="button"
                        aria-label={`Explore ${card.title}`}
                        className="absolute top-5 right-5 w-9 h-9 rounded-full bg-zinc-600/55 border border-white/10 flex items-center justify-center text-white/60"
                      >
                        <ArrowIcon className="-rotate-45" />
                      </button>
                    )}

                    <div className="mb-5 relative z-10">
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={56}
                        height={56}
                        className="w-14 h-14 object-contain"
                      />
                    </div>

                    <h3
                      className={[
                        "text-lg font-semibold mb-3 relative z-10",
                        isActive ? "text-white" : "text-zinc-400",
                      ].join(" ")}
                    >
                      {card.title}
                    </h3>

                    <p
                      className={[
                        "text-sm leading-[1.75] relative z-10",
                        isActive
                          ? "text-zinc-300"
                          : "text-zinc-500 line-clamp-3",
                      ].join(" ")}
                    >
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
