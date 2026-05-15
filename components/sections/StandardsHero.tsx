import Button from "@/components/ui/Button";

interface HeroButton {
  label: string;
  href?: string;
}

interface StandardsHeroProps {
  titleStart: string;
  titleHighlight: string;
  description: string;
  buttons?: readonly HeroButton[];
}

export default function StandardsHero({
  titleStart,
  titleHighlight,
  description,
  buttons = [],
}: StandardsHeroProps) {
  return (
    <section className="relative flex items-center justify-center min-h-[65vh] overflow-hidden">
      {/* Background video */}
      <video
        aria-hidden
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      >
        <source src="/videos/tunnel.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div
        aria-hidden
        className="absolute inset-0 bg-black/60 pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none hero-glow"
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none hero-vignette"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-5 px-6 pt-28 pb-16 text-center sm:gap-6 sm:px-10">
        <h1 className="text-[1.75rem] font-extrabold leading-tight tracking-tight text-white sm:text-[2.5rem] lg:text-[3.25rem] xl:text-[60px]">
          {titleStart}{" "}
          <span className="text-silver-gradient font-serif italic">
            {titleHighlight}
          </span>
        </h1>

        <p className="max-w-xl text-base font-normal leading-relaxed text-zinc-400 sm:text-lg lg:max-w-2xl lg:text-xl xl:text-2xl">
          {description}
        </p>

        {buttons.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-3">
            {buttons.map((btn) => (
              <Button key={btn.label} label={btn.label} href={btn.href} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
