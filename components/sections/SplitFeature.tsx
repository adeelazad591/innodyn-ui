import Image from "next/image";
import Button from "../ui/Button";
import type { FloatingCardPosition, FloatingCardShape, SplitFeatureProps } from "@/types/types";

const CARD_POSITIONS: Record<FloatingCardPosition, string> = {
  "top-left": "top-6 -left-6",
  "top-right": "top-6 -right-6",
  "bottom-left": "bottom-6 -left-6",
  "bottom-right": "bottom-6 -right-6",
};

const CARD_SHAPES: Record<FloatingCardShape, string> = {
  rounded: "rounded-2xl",
  pill: "rounded-[3rem]",
};

export default function SplitFeature({
  headingStart,
  headingHighlight,
  headingHighlightNewLine = false,
  paragraphs,
  cta,
  visual,
  visualLeft = false,
}: SplitFeatureProps) {
  const textCol = (
    <div className="flex flex-col gap-8 lg:gap-10">
      <h2 className="text-[1.75rem] sm:text-[2.5rem] lg:text-[3.25rem] xl:text-[54px] font-extrabold text-white leading-[1.1] tracking-tight">
        {headingHighlightNewLine ? (
          <>
            <span className="block">{headingStart}</span>
            <span className="block font-serif font-extrabold italic text-silver-gradient leading-tight">
              {headingHighlight}
            </span>
          </>
        ) : (
          <>
            {headingStart}
            <span className="font-serif ps-4 font-extrabold italic text-silver-gradient leading-tight">
              {headingHighlight}
            </span>
          </>
        )}
      </h2>

      <div className="flex flex-col gap-6">
        {paragraphs.map((text, i) => (
          <p
            key={i}
            className="text-lg font-normal text-[#A3A3A3] leading-[1.8]"
          >
            {text}
          </p>
        ))}
      </div>

      {cta && (
        <div>
          <Button label={cta.label} href={cta.href} variant="light"/>
        </div>
      )}
    </div>
  );

  const isSimpleImage = !visual.videoSrc && !visual.sideImages;

  const visualCol = (
    <div className="relative flex items-center justify-center lg:justify-end">
      {/* isolate creates a stacking context so negative z-index layers stay contained */}
      <div className="relative w-full isolate">
        {/* Background layers — rendered first, scaled out behind the main card */}
        {visual.backgroundLayers?.map((layer, i) => (
          <div
            key={i}
            aria-hidden
            className="absolute inset-0 rounded-3xl border border-white/8 bg-[#0e0e0e] pointer-events-none"
            style={{
              transform: `scale(${layer.scale ?? 1 + (i + 1) * 0.055})`,
              opacity: layer.opacity ?? 0.45 - i * 0.15,
              zIndex: -(i + 1),
              ...(layer.gradient ? { backgroundImage: layer.gradient } : {}),
            }}
          />
        ))}

        {isSimpleImage ? (
          // Plain image: padded container so top/left/right spacing is equal, flush at bottom
          <div
            className={`relative w-full overflow-hidden rounded-[36px] border-0 border-white/8 px-6 sm:px-8 lg:px-10 pt-6 sm:pt-8 lg:pt-10 flex justify-center ${visual.transparent ? "bg-transparent" : "bg-[#0e0e0e]"}`}
            style={
              visual.backgroundGradient
                ? { backgroundImage: visual.backgroundGradient }
                : undefined
            }
          >
            {visual.layerSrc && (
              <Image
                src={visual.layerSrc}
                alt=""
                aria-hidden
                fill
                className="object-cover opacity-60 pointer-events-none select-none"
              />
            )}
            <Image
              src={visual.imageSrc}
              alt={visual.imageAlt}
              width={visual.imageWidth ?? 320}
              height={visual.imageHeight ?? 420}
              className="relative w-full h-auto shadow-[0_4px_78px_0_rgba(94,88,88,0.21)]"
            />
          </div>
        ) : (
          // Video or sideImages: aspect-square with absolute positioning
          <div
            className={`relative w-full overflow-hidden rounded-3xl border border-white/8 aspect-square ${visual.transparent ? "bg-transparent" : "bg-[#0e0e0e]"}`}
            style={
              visual.backgroundGradient
                ? { backgroundImage: visual.backgroundGradient }
                : undefined
            }
          >
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
              className="absolute inset-0 pointer-events-none split-feature-glow"
            />
            {visual.sideImages ? (
              <>
                <Image
                  src={visual.sideImages[0].src}
                  alt={visual.sideImages[0].alt}
                  width={220}
                  height={320}
                  className="absolute top-1/2 left-[20%] -translate-x-1/2 -translate-y-1/2 h-[47%] w-auto object-contain drop-shadow-xl opacity-50"
                />
                <Image
                  src={visual.imageSrc}
                  alt={visual.imageAlt}
                  width={visual.imageWidth ?? 320}
                  height={visual.imageHeight ?? 420}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[65%] w-auto object-contain drop-shadow-2xl z-10"
                />
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
                width={visual.imageWidth ?? 320}
                height={visual.imageHeight ?? 420}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[78%] w-auto object-contain drop-shadow-2xl"
              />
            )}
          </div>
        )}

        {/* Floating overlay cards */}
        {visual.floatingCards?.map((card, i) => (
          <div
            key={i}
            className={`absolute z-20 flex flex-col items-center gap-2 px-4 py-4 w-44 backdrop-blur-md border border-white/10 shadow-2xl [background:var(--card-bg,rgba(20,20,24,0.85))] ${CARD_SHAPES[card.shape ?? "rounded"]} ${CARD_POSITIONS[card.position]}`}
            style={
              card.gradient
                ? ({ "--card-bg": card.gradient } as React.CSSProperties)
                : undefined
            }
          >
            <div className="w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center">
              <Image
                src={card.iconSrc}
                alt={card.iconAlt ?? card.title}
                width={22}
                height={22}
              />
            </div>
            <p className="text-sm font-semibold text-white text-center leading-tight">
              {card.title}
            </p>
            <p className="text-xs text-neutral-400 text-center">{card.subtitle}</p>
          </div>
        ))}
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
