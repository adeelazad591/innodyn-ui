import Image from "next/image";
import Button from "@/components/ui/Button";

interface ShowcaseCard {
  number: string;
  title: string;
  description?: string;
  glow: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
}

interface ShowcaseRow {
  cards: ShowcaseCard[];
}

interface FeatureShowcaseButton {
  label: string;
  href?: string;
}

interface FeatureShowcaseProps {
  headingStart: string;
  headingHighlight: string;
  description: string;
  rowOne: ShowcaseRow;
  rowTwo: ShowcaseRow;
  cta?: FeatureShowcaseButton;
  showShapeBg?: boolean;
}

function Card({
  number,
  title,
  description,
  image,
  imageWidth,
  imageHeight,
  glow,
}: {
  number: string;
  title: string;
  description?: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  glow: string;
}) {
  return (
    <div className="relative flex flex-col rounded-[1.75rem] bg-[#161618] border border-white/8 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${glow} 0%, transparent 70%)`,
        }}
      />
      <div className="p-8 pb-0 mb-12">
        <div className="rounded-[1.25rem] overflow-hidden bg-black">
          <Image
            src={image}
            alt={title}
            width={imageWidth}
            height={imageHeight}
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="flex items-start gap-4 px-4 py-4 mt-3 mx-3 mb-3 rounded-2xl bg-[linear-gradient(180deg,rgba(48,48,52,0.6)_0%,rgba(22,22,24,0.9)_100%)] border border-white/8">
        <span className="inline-flex items-center justify-center w-12 h-9 shrink-0 rounded-[70px] bg-[radial-gradient(ellipse_at_top,rgba(90,90,96,0.9)_0%,rgba(28,28,32,1)_100%)] border border-white/12 text-sm font-normal text-white/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
          {number}
        </span>
        <div className="flex flex-col gap-1">
          <span className="text-base sm:text-xl font-medium text-white leading-snug">
            {title}
          </span>
          {description && (
            <span className="text-sm font-normal text-zinc-400 leading-snug">
              {description}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function FeatureShowcase({
  headingStart,
  headingHighlight,
  description,
  rowOne,
  rowTwo,
  cta,
  showShapeBg = false,
}: FeatureShowcaseProps) {
  return (
    <section className="relative isolate py-20 lg:py-28 overflow-hidden bg-[linear-gradient(180deg,rgba(52,52,52,0.72)_0%,rgba(24,24,24,0.96)_42%,#111111_100%)]">
      {showShapeBg && (
        <Image
          src="/images/shape-bg.png"
          alt=""
          width={600}
          height={600}
          className="absolute -top-15 -right-20 w-140 lg:w-180 xl:w-180 h-auto opacity-100 -z-10 -rotate-10 pointer-events-none select-none"
          priority
        />
      )}
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        {/* Heading */}
        <div className="relative text-center mb-12 lg:mb-16">
          <Image
            src="/images/left-line.png"
            alt=""
            width={176}
            height={176}
            className="absolute left-25 top-25 w-44 h-44 hidden lg:block pointer-events-none select-none"
          />
          <Image
            src="/images/right-line.png"
            alt=""
            width={176}
            height={176}
            className="absolute right-25 top-25 w-44 h-44 hidden lg:block pointer-events-none select-none"
          />
          <h2 className="text-[1.75rem] sm:text-[2.5rem] lg:text-[3.25rem] xl:text-[60px] font-extrabold leading-tight tracking-tight mb-6">
            <span className="text-white">{headingStart} </span>
            <span className="font-serif italic text-silver-gradient">
              {headingHighlight}
            </span>
          </h2>
          <p className="text-base sm:text-xl font-normal text-zinc-400 leading-[1.8] max-w-4xl mx-auto px-2">
            {description}
          </p>
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {rowOne.cards.map((card) => (
            <Card
              key={card.number}
              number={card.number}
              title={card.title}
              description={card.description}
              image={card.imageSrc}
              imageWidth={card.imageWidth}
              imageHeight={card.imageHeight}
              glow={card.glow}
            />
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {rowTwo.cards.map((card) => (
            <Card
              key={card.number}
              number={card.number}
              title={card.title}
              description={card.description}
              image={card.imageSrc}
              imageWidth={card.imageWidth}
              imageHeight={card.imageHeight}
              glow={card.glow}
            />
          ))}
        </div>

        {/* CTA */}
        {cta && (
          <div className="flex justify-center mt-14">
            <Button label={cta.label} href={cta.href} />
          </div>
        )}
      </div>
    </section>
  );
}
