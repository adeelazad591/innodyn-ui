"use client";

import Image from "next/image";
import { useState } from "react";

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

const FAQS = [
  {
    id: "what-is-innodyn",
    question: "What is Innodyn?",
    answer:
      "Innodyn is a science-forward company built around higher standards of precision, presentation, and credibility. We focus on creating a more refined and disciplined platform experience for informed customers.",
  },
  {
    id: "what-makes-innodyn-different",
    question: "What makes Innodyn different?",
    answer:
      "Unlike conventional platforms that prioritize volume over quality, Innodyn is built on a foundation of scientific discipline. Every product, description, and interaction is designed to meet a higher standard — one that respects the intelligence of the customer and the complexity of the compounds offered.",
  },
  {
    id: "who-is-innodyn-built-for",
    question: "Who is Innodyn built for?",
    answer:
      "Innodyn is built for researchers, professionals, and informed customers who expect accuracy, clarity, and consistency from the platforms they trust. If you value scientific credibility over marketing noise, Innodyn was designed with you in mind.",
  },
  {
    id: "why-scientific-tone",
    question: "Why does Innodyn emphasize scientific tone?",
    answer:
      "Scientific tone is not aesthetic — it is a commitment to accuracy. By maintaining a rigorous standard across all content and presentation, Innodyn ensures that the information customers receive is trustworthy, unambiguous, and grounded in measurable fact rather than inflated claims.",
  },
  {
    id: "innodyn-standard",
    question: "What defines the Innodyn standard?",
    answer:
      "The Innodyn standard is defined by precision in presentation, integrity in content, and consistency in experience. Every element of the platform — from product listings to interface design — is held to a level of discipline that sets a new benchmark in the industry.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-12 lg:py-20 px-4 md:px-15 lg:px-30">
      {/* Heading */}
      <div className="text-center mb-10 max-w-350 mx-auto">
        <h2 className="text-[1.75rem] sm:text-[2.5rem] lg:text-[3.25rem] xl:text-[60px] font-extrabold leading-tight tracking-tight text-white mb-4">
          Frequent Asked{" "}
          <span className="text-silver-gradient font-serif italic">
            Questions.
          </span>
        </h2>
        <p className="text-base sm:text-xl font-normal text-neutral-400 leading-[1.8] max-w-2xl mx-auto">
          Clear answers to help you better understand Innodyn, our standards,
          and the philosophy behind the platform.
        </p>
      </div>

      <div className="p-4 sm:p-5 lg:p-6 max-w-350 mx-auto">
        <div className="flex flex-col gap-3">
          {FAQS.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={faq.id}
                onClick={() => setActiveIndex(index)}
                className={[
  "relative isolate overflow-hidden rounded-4xl px-10 py-10 cursor-pointer select-none border bg-white/[0.01] backdrop-blur-[10px] before:absolute before:inset-x-0 before:top-0 before:h-[80%] before:-z-10 before:rounded-4xl before:bg-radial-[50%_100%_at_50%_0%] before:from-white/[0.22] before:to-transparent before:content-['']",
  "transition-all duration-200",
  isActive ? "border-white/6 opacity-100" : "border-white/4 opacity-55",
].join(" ")}
                // className={[
                //   "relative overflow-hidden rounded-4xl px-10 py-10 cursor-pointer select-none bg-[radial-gradient(ellipse_at_top,rgba(90,90,96,0.9)_0%,rgba(28,28,32,1)_100%)]",
                //   "transition-all duration-200",
                //   isActive
                //     ? "bg-[#1d1d1f] border border-zinc-600/45"
                //     : "border border-white/4 opacity-55",
                // ].join(" ")}
              >
                <CardGridOverlay />

                {/* Card background shape — visible on active card only */}
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
                    sizes="100vw"
                    className="object-contain object-left scale-[1.5] origin-left"
                  />
                </div>

                <div className="relative z-10 flex items-start justify-between gap-6">
                  <div className="flex-1 min-w-0">
                    <h3
                      className={[
                        "text-lg sm:text-[28px] font-medium transition-colors duration-200 text-white group-hover:text-white",
                        isActive ? "text-white" : "text-white",
                      ].join(" ")}
                    >
                      {faq.question}
                    </h3>

                    <div
                      className={[
                        "overflow-hidden transition-all duration-300",
                        isActive
                          ? "max-h-60 opacity-100 mt-4"
                          : "max-h-0 opacity-0 mt-0",
                      ].join(" ")}
                    >
                      <p className="text-base sm:text-[22px] font-normal text-zinc-300 leading-[1.8]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    aria-label={isActive ? "Collapse answer" : "Expand answer"}
                    className="bg-[radial-gradient(ellipse_at_top,rgba(90,90,96,0.9)_0%,rgba(28,28,32,1)_100%)] shrink-0 w-12 h-12 rounded-full bg-zinc-600/55 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-zinc-500/65 transition-colors duration-200"
                  >
                    <ArrowIcon
                      className={isActive ? "-rotate-45" : "rotate-45"}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
