import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative flex flex-1 min-h-screen items-center overflow-hidden">
      {/* Background video */}
      <video
        aria-hidden
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      >
        <source src="/videos/tunnel.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay to tone down the video */}
      <div
        aria-hidden
        className="absolute inset-0 bg-black/60 pointer-events-none"
      />

      {/* Radial glow behind object */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none hero-glow"
      />

      {/* Soft edge vignette */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none hero-vignette"
      />

      {/* Text content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 min-[1400px]:px-0 pt-24 sm:pt-28 min-[1400px]:pt-20">
        <div className="flex flex-col gap-5 sm:gap-6 min-[1400px]:gap-8 max-w-none min-[1400px]:max-w-190">
          <h1 className="tracking-tight">
            <span className="font-extrabold text-white block text-[1.75rem] sm:text-[2.5rem] lg:text-[3.25rem] xl:text-[60px] leading-tight">
              Precision Compounds.
            </span>
            <span className="font-extrabold italic font-serif text-silver-gradient block text-[1.75rem] sm:text-[2.5rem] lg:text-[3.25rem] xl:text-6xl leading-tight">
              Advanced Standards.
            </span>
            <span className="font-extrabold text-white block text-[1.75rem] sm:text-[2.5rem] lg:text-[3.25rem] xl:text-6xl leading-tight">
              Scientific Confidence.
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl font-normal leading-relaxed min-[1400px]:leading-[1.75] text-zinc-400 max-w-xl lg:max-w-2xl min-[1400px]:max-w-none">
            Built for people who demand more than marketing. Innodyn is a
            science-first platform focused on advanced compounds, rigorous
            sourcing standards, and a research-minded customer experience
            designed for informed individuals who value precision, transparency,
            and quality.
          </p>

          <div className="flex flex-wrap items-center gap-3 min-[1400px]:gap-4">
            <Button label="Explore Compounds" href="/compounds" />
            <Button label="View Our Standards" href="/standards" />
          </div>
        </div>
      </div>

      {/* Hero image — wide desktop only */}
      <div className="animate-float  hidden min-[1400px]:flex absolute right-0 top-0 bottom-0 items-center z-10 pointer-events-none">
        <Image
          src="/images/hero-object.png"
          alt="Abstract chrome 3D object"
          width={654}
          height={534}
          priority
          className="w-163.5 drop-shadow-2xl translate-x-4"
        />
      </div>
    </section>
  );
}
