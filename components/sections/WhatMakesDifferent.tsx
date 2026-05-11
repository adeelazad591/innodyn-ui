"use client";
import { useEffect, useState } from "react";

function FlaskIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M10 2h4M10 2v7.5L5 19a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9.5V2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10.5" cy="17" r="0.75" fill="currentColor" />
      <circle cx="13.5" cy="14.5" r="1" fill="currentColor" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2 3 6v6c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V6l-9-4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m9 12 2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M3 3v18h18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m7 16 4-5 4 3 4-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M13 2 4.09 12.96H12L11 22l8.91-10.96H13L14 2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface CardData {
  id: number;
  text: string;
  icon: React.ReactNode;
  gradient: string;
  iconColor: string;
}

const CARDS: CardData[] = [
  {
    id: 0,
    text: "Science-First Brand Philosophy",
    icon: <FlaskIcon />,
    gradient: "from-[#a855f7] to-[#4c1d95]",
    iconColor: "text-purple-200",
  },
  {
    id: 1,
    text: "Rigorous Sourcing & Quality Standards",
    icon: <ShieldIcon />,
    gradient: "from-[#3b82f6] to-[#1e3a8a]",
    iconColor: "text-blue-200",
  },
  {
    id: 2,
    text: "Operational Consistency at Scale",
    icon: <ChartIcon />,
    gradient: "from-[#10b981] to-[#065f46]",
    iconColor: "text-emerald-200",
  },
  {
    id: 3,
    text: "Transparent Customer Experience",
    icon: <StarIcon />,
    gradient: "from-[#f59e0b] to-[#78350f]",
    iconColor: "text-amber-200",
  },
  {
    id: 4,
    text: "Innovation-Driven Product Selection",
    icon: <BoltIcon />,
    gradient: "from-[#ef4444] to-[#7f1d1d]",
    iconColor: "text-red-200",
  },
];

const TRANSITION_MS = 500;
const PAUSE_MS = 2400;

type SlotName = "exiting" | "front" | "peek1" | "peek2" | "peek3" | "incoming";

function StackedCards() {
  const [head, setHead] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const n = CARDS.length;

  useEffect(() => {
    let tid: ReturnType<typeof setTimeout>;
    const iid = setInterval(() => {
      setTransitioning(true);
      tid = setTimeout(() => {
        setHead((h) => (h + 1) % n);
        setTransitioning(false);
      }, TRANSITION_MS);
    }, PAUSE_MS + TRANSITION_MS);
    return () => {
      clearInterval(iid);
      clearTimeout(tid);
    };
  }, [n]);

  // 5 cards rendered at all times: front + 3 peek edges + 1 hidden incoming
  // During idle:       incoming, peek3, peek2, peek1, front  (head = front)
  // During transition: peek3, peek2, peek1, front, exiting   (head = exiting)
  const slots: { cardIdx: number; slot: SlotName }[] = transitioning
    ? [
        { cardIdx: (head + 4) % n, slot: "peek3" },
        { cardIdx: (head + 3) % n, slot: "peek2" },
        { cardIdx: (head + 2) % n, slot: "peek1" },
        { cardIdx: (head + 1) % n, slot: "front" },
        { cardIdx: head, slot: "exiting" },
      ]
    : [
        { cardIdx: (head + 4) % n, slot: "incoming" },
        { cardIdx: (head + 3) % n, slot: "peek3" },
        { cardIdx: (head + 2) % n, slot: "peek2" },
        { cardIdx: (head + 1) % n, slot: "peek1" },
        { cardIdx: head, slot: "front" },
      ];

  return (
    <div className="relative h-36">
      {slots.map(({ cardIdx, slot }) => {
        const c = CARDS[cardIdx];
        return (
          <div
            key={c.id}
            className={`absolute inset-x-0 top-0 origin-top card-slot card-slot-${slot}`}
          >
            <div className="flex items-center gap-4 sm:gap-5 bg-[#161618] border border-white/8 rounded-[20px] px-4 py-3.5">
              <div
                className={`w-[54px] h-[54px] shrink-0 rounded-[14px] bg-gradient-to-b ${c.gradient} flex items-center justify-center ${c.iconColor}`}
              >
                {c.icon}
              </div>
              <span className="flex-1 text-lg sm:text-2xl font-medium text-white leading-snug">
                {c.text}
              </span>
              <button
                type="button"
                aria-label={`Learn more about ${c.text}`}
                className="cursor-pointer bg-[radial-gradient(ellipse_at_top,rgba(90,90,96,0.9)_0%,rgba(28,28,32,1)_100%)] flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-zinc-700/50 border border-white/8 text-white hover:bg-zinc-600/60 transition-colors"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M2.5 7h9M8.5 3.5 12 7l-3.5 3.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function WhatMakesDifferent() {
  return (
    <section className="relative py-12 lg:py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-0">
        {/* Centered heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[1.75rem] sm:text-[2.5rem] lg:text-[3.25rem] xl:text-[60px] font-extrabold leading-tight tracking-tight mb-6">
            <span className="text-white">What Makes </span>
            <span className="font-serif italic text-silver-gradient">
              Innodyn{" "}
            </span>
            <span className="font-serif italic text-silver-gradient">
              Different.
            </span>
          </h2>
          <p className="text-base sm:text-xl font-normal text-zinc-400 leading-[1.8] max-w-5xl px-0 lg:px-6 mx-auto">
            At Innodyn, the foundation is not aesthetics alone. It is process.
            We believe trust is earned through rigor, not noise. That is why we
            focus on the variables that actually matter: sourcing discipline,
            product quality, operational consistency, and a customer experience
            built around clarity.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <StackedCards />
        </div>
      </div>
    </section>
  );
}
