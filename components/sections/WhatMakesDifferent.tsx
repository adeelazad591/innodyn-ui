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

export default function WhatMakesDifferent() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-0">
        {/* Centered heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[1.75rem] sm:text-[2.5rem] lg:text-[3.25rem] xl:text-[60px] font-extrabold leading-tight tracking-tight mb-6">
            <span className="text-white">What Makes </span>
            <span className="font-serif italic text-silver-gradient">Innodyn </span>
            <span className="font-serif italic text-silver-gradient">Different.</span>
          </h2>
          <p className="text-base sm:text-xl font-normal text-zinc-400 leading-[1.8] max-w-5xl px-0 lg:px-6 mx-auto">
            At Innodyn, the foundation is not aesthetics alone. It is process.
            We believe trust is earned through rigor, not noise. That is why we
            focus on the variables that actually matter: sourcing discipline,
            product quality, operational consistency, and a customer experience
            built around clarity.
          </p>
        </div>

        {/* Card list */}
        <div className="max-w-4xl mx-auto flex flex-col gap-3">
          {/* Card — Science-First Brand Philosophy */}
          <div className="flex items-center gap-4 sm:gap-5 bg-[#161618] border border-white/8 rounded-[20px] px-4 py-3.5">
            <div className="w-[54px] h-[54px] shrink-0 rounded-[14px] bg-gradient-to-b from-[#a855f7] to-[#4c1d95] flex items-center justify-center text-purple-200">
              <FlaskIcon />
            </div>
            <span className="flex-1 text-lg sm:text-2xl font-medium text-white leading-snug">
              Science-First Brand Philosophy
            </span>
            <button
              type="button"
              aria-label="Learn more about Science-First Brand Philosophy"
              className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-zinc-700/50 border border-white/8 text-white hover:bg-zinc-600/60 transition-colors"
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
      </div>
    </section>
  );
}
