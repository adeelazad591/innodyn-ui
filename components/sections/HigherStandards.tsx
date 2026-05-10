import Image from "next/image";
import Button from "../ui/Button";

export default function HigherStandards() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — frame image inside black box (shown second on mobile) */}
          <div className="order-2 lg:order-1 rounded-[1.75rem] bg-[#000000] p-5 pb-0">
            <Image
              src="/images/frame-image.png"
              alt="Innodyn portal interface"
              width={550}
              height={581}
              className="w-137.5 h-auto"
            />
          </div>

          {/* Right — text content (shown first on mobile) */}
          <div className="flex flex-col gap-8 order-1 lg:order-2 lg:pt-2">
            <div>
              <h2 className="text-[1.75rem] sm:text-[2.5rem] lg:text-[3.25rem] xl:text-[60px] font-extrabold text-white leading-[1.1] tracking-tight">
                Higher Standards
              </h2>
              <h2 className="font-serif font-extrabold italic text-silver-gradient text-[1.75rem] sm:text-[2.5rem] lg:text-[3.25rem] xl:text-[60px] leading-tight">
                Across the Board.
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              <p className="text-lg font-normal text-zinc-400 leading-[1.8]">
                Innodyn is built around a simple idea: standards should be
                visible. Customers should feel the difference in how a company
                presents itself, structures its platform, and approaches
                quality.
              </p>
              <p className="text-lg font-normal text-zinc-400 leading-[1.8]">
                We believe scientific credibility is not communicated through
                claims alone. It is communicated through restraint, clarity,
                consistency, and a refusal to cut corners. That philosophy
                informs how we think about sourcing, quality expectations,
                product selection, and the overall customer experience.
              </p>
              <p className="text-lg font-normal text-zinc-400 leading-[1.8]">
                When a brand is built correctly, you can feel it in every
                interaction. That is the standard we aim to uphold at every
                level of the Innodyn platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
