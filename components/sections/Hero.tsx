import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      className="relative flex flex-1 min-h-screen items-center overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }}
    >
      {/* Radial glow behind object */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 72% 50%, rgba(160,120,255,0.07) 0%, rgba(80,60,180,0.04) 40%, transparent 70%)",
        }}
      />

      {/* Soft edge vignette */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[1700px] mx-auto px-12 lg:px-20 flex items-center gap-16 pt-20">
        {/* Left: Text content */}
        <div className="flex flex-col gap-8 flex-1 max-w-[920px]">
          <h1 className="text-[3.25rem] lg:text-[4rem] xl:text-[4.5rem] leading-[1.08] tracking-tight">
            <span className="font-extrabold text-white block text-6xl leading-tight">
              Precision Compounds.
            </span>
            <span
              className="font-extrabold italic text-zinc-500 block text-6xl leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Advanced Standards.
            </span>
            <span className="font-extrabold text-white block text-6xl leading-tight">
              Scientific Confidence.
            </span>
          </h1>

          <p className="text-2xl font-normal leading-[1.75] text-zinc-400 max-w-[700px]">
            Built for people who demand more than marketing. Innodyn is a
            science-first platform focused on advanced compounds, rigorous
            sourcing standards, and a research-minded customer experience
            designed for informed individuals who value precision, transparency,
            and quality.
          </p>

          <div className="flex items-center gap-4">
            <Button label="Explore Compounds" />
            <Button label="View Our Standards" />
          </div>
        </div>

        {/* Right: 3D chrome object */}
        <div className="flex-1 flex items-center justify-end">
          <Image
            src="/images/hero-object.png"
            alt="Abstract chrome 3D object"
            width={820}
            height={760}
            priority
            className="
                  w-full
                  max-w-[760px]
                  xl:max-w-[860px]
                  object-contain
                  drop-shadow-2xl
                  translate-x-16
                  xl:translate-x-24
                "
          />
        </div>
      </div>
    </section>
  );
}
