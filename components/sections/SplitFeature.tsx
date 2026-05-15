import Image from "next/image";
import Button from "../ui/Button";

interface SplitFeatureButton {
  label: string;
  href?: string;
}

interface SplitFeatureVisual {
  /** Center image */
  imageSrc: string;
  imageAlt: string;
  /** Optional background video. Falls back to a plain dark card if omitted. */
  videoSrc?: string;
  /** Optional left + right flanking images rendered at a smaller scale */
  sideImages?: [{ src: string; alt: string }, { src: string; alt: string }];
}

interface SplitFeatureProps {
  /** Plain heading prefix rendered in the bold sans style */
  headingStart: string;
  /** Italic serif suffix rendered in the silver-gradient style */
  headingHighlight: string;
  paragraphs: string[];
  cta?: SplitFeatureButton;
  visual: SplitFeatureVisual;
  /** When true, the visual column appears on the left and text on the right */
  visualLeft?: boolean;
}

export default function SplitFeature({
  headingStart,
  headingHighlight,
  paragraphs,
  cta,
  visual,
  visualLeft = false,
}: SplitFeatureProps) {
  const textCol = (
    <div className="flex flex-col gap-8 lg:gap-10">
      <h2 className="text-[1.75rem] sm:text-[2.5rem] lg:text-[3.25rem] xl:text-[60px] font-extrabold text-white leading-[1.1] tracking-tight">
        {headingStart}
        <span className="font-serif ps-4 font-extrabold italic text-silver-gradient text-[1.75rem] sm:text-[2.5rem] lg:text-[3.25rem] xl:text-[60px] leading-tight">
          {headingHighlight}
        </span>
      </h2>

      <div className="flex flex-col gap-6">
        {paragraphs.map((text, i) => (
          <p
            key={i}
            className="text-lg font-normal text-zinc-400 leading-[1.8]"
          >
            {text}
          </p>
        ))}
      </div>

      {cta && (
        <div>
          <Button label={cta.label} href={cta.href} />
        </div>
      )}
    </div>
  );

  const visualCol = (
    <div className="relative flex items-center justify-center lg:justify-end">
      <div className="relative w-full overflow-hidden rounded-3xl border border-white/8 bg-[#0e0e0e] aspect-square">
        {visual.videoSrc && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={visual.videoSrc} type="video/mp4" />
          </video>
        )}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none bg-black/30"
        />
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 85%, rgba(220,220,220,0.14) 0%, rgba(160,160,160,0.04) 50%, transparent 70%)",
          }}
        />
        {visual.sideImages ? (
          <>
            {/* Left bottle — vertically centered, smaller, faded */}
            <Image
              src={visual.sideImages[0].src}
              alt={visual.sideImages[0].alt}
              width={220}
              height={320}
              className="absolute top-1/2 left-[20%] -translate-x-1/2 -translate-y-1/2 h-[47%] w-auto object-contain drop-shadow-xl opacity-50"
            />
            {/* Center bottle — fully centered, largest, in front */}
            <Image
              src={visual.imageSrc}
              alt={visual.imageAlt}
              width={320}
              height={420}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[65%] w-auto object-contain drop-shadow-2xl z-10"
            />
            {/* Right bottle — vertically centered, smaller, faded */}
            <Image
              src={visual.sideImages[1].src}
              alt={visual.sideImages[1].alt}
              width={220}
              height={320}
              className="absolute top-1/2 left-[80%] -translate-x-1/2 -translate-y-1/2 h-[47%] w-auto object-contain drop-shadow-xl opacity-50"
            />
          </>
        ) : (
          <Image
            src={visual.imageSrc}
            alt={visual.imageAlt}
            width={320}
            height={420}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[78%] w-auto drop-shadow-2xl object-contain"
          />
        )}
      </div>
    </div>
  );

  return (
    <section className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {visualLeft ? (
            <>
              {visualCol}
              {textCol}
            </>
          ) : (
            <>
              {textCol}
              {visualCol}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
