import Image from "next/image";
import Button from "@/components/ui/Button";

const rowOneCards = [
  { number: "01", title: "Advanced Browsing" },
  { number: "02", title: "Stronger Brand Discipline" },
  { number: "03", title: "Better Product Organization" },
];

const rowTwoCards = [
  { number: "04", title: "A Cleaner And More Sophisticated Platform" },
  { number: "05", title: "A More Credible Overall Experience" },
];

function Card({
  number,
  title,
  image,
  imageWidth,
  imageHeight,
}: {
  number: string;
  title: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
}) {
  return (
    <div className="flex flex-col rounded-[1.75rem] bg-[#161618] border border-white/8 overflow-hidden">
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
      <div className="flex items-center gap-4 px-4 py-4 mt-3 mx-3 mb-3 rounded-2xl bg-[linear-gradient(180deg,rgba(48,48,52,0.6)_0%,rgba(22,22,24,0.9)_100%)] border border-white/8">
        <span className="inline-flex items-center justify-center w-12 h-9 shrink-0 rounded-[70px] bg-[radial-gradient(ellipse_at_top,rgba(90,90,96,0.9)_0%,rgba(28,28,32,1)_100%)] border border-white/12 text-sm font-normal text-white/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
          {number}
        </span>
        <span className="text-base sm:text-xl font-medium text-white leading-snug">
          {title}
        </span>
      </div>
    </div>
  );
}

export default function WhyChoose() {
  return (
    <section className="py-20 lg:py-28">
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
            className="absolute right-25 top-25  w-44 h-44 hidden lg:block pointer-events-none select-none"
          />
          <h2 className="text-[1.75rem] sm:text-[2.5rem] lg:text-[3.25rem] xl:text-[60px] font-extrabold leading-tight tracking-tight mb-6">
            <span className="text-white">Why Customers Choose </span>
            <span className="font-serif italic text-silver-gradient">
              Innodyn.
            </span>
          </h2>
          <p className="text-base sm:text-xl font-normal text-zinc-400 leading-[1.8] max-w-4xl mx-auto px-2">
            Innodyn appeals to people who want a more disciplined brand
            environment. They are not looking for an overbuilt sales pitch. They
            are looking for a company that feels composed, intelligent, and
            serious about what it offers.
          </p>
        </div>

        {/* Row 1 — 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {rowOneCards.map((card) => (
            <Card
              key={card.number}
              number={card.number}
              title={card.title}
              image="/images/frame-image-3.png"
              imageWidth={673}
              imageHeight={426}
            />
          ))}
        </div>

        {/* Row 2 — 2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {rowTwoCards.map((card) => (
            <Card
              key={card.number}
              number={card.number}
              title={card.title}
              image="/images/frame-image-4.png"
              imageWidth={827}
              imageHeight={364}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-14">
          <Button label="View Our Standards" />
        </div>
      </div>
    </section>
  );
}
