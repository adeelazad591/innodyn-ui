import Button from "@/components/ui/Button";

export default function StandardsHero() {
  return (
    <section className="relative flex items-center justify-center min-h-[65vh] overflow-hidden">
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

      {/* Dark overlay */}
      <div aria-hidden className="absolute inset-0 bg-black/60 pointer-events-none" />

      {/* Radial glow */}
      <div aria-hidden className="absolute inset-0 pointer-events-none hero-glow" />

      {/* Soft edge vignette */}
      <div aria-hidden className="absolute inset-0 pointer-events-none hero-vignette" />

      {/* Content — centered */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 pt-28 pb-16 flex flex-col items-center text-center gap-5 sm:gap-6">
        <h1 className="tracking-tight">
          <span className="font-extrabold text-white block text-[1.75rem] sm:text-[2.5rem] lg:text-[3.25rem] xl:text-[60px] leading-tight">
            Discover Our
          </span>
          <span className="font-extrabold italic font-serif text-silver-gradient block text-[1.75rem] sm:text-[2.5rem] lg:text-[3.25rem] xl:text-6xl leading-tight">
            Products.
          </span>
        </h1>

        <p className="text-base sm:text-lg lg:text-xl xl:text-2xl font-normal leading-relaxed text-zinc-400 max-w-xl lg:max-w-2xl">
          Peak performance isn&apos;t accidental. It&apos;s engineered.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button label="Explore Compounds" />
          <Button label="Contact Us" />
        </div>
      </div>
    </section>
  );
}
