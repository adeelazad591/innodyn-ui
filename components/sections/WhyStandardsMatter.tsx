import Image from "next/image";
import Button from "@/components/ui/Button";

export default function WhyStandardsMatter() {
  return (
    <section className="py-10 lg:py-0 px-2 md:px-10 lg:px-30">
      {/* Gradient border wrapper — fades to transparent at bottom */}
      <div className="rounded-[2.5rem] p-px bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.04)_55%,transparent_100%)]">
      {/* Outer luxury container — same card as ProductExperience */}
      <div className="relative rounded-[2.5rem] bg-[linear-gradient(180deg,rgba(52,52,52,0.72)_0%,rgba(24,24,24,0.96)_42%,#111111_100%)] overflow-hidden px-8 pt-14 pb-8 sm:px-12 sm:pt-16 sm:pb-10 lg:px-16 lg:pt-0 lg:pb-12 xl:pb-0">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2.5rem] card-perspective-grid"
        />

        {/* Circle shape background — right side decoration */}
        <div
          aria-hidden
          className="absolute top-0 -right-100 w-200 h-200 pointer-events-none select-none z-0"
        >
          <Image
            src="/images/circle-shape.png"
            alt=""
            fill
            sizes="480px"
            className="object-contain opacity-40"
          />
        </div>

        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Right — text content */}
            <div className="flex flex-col gap-7 order-1 lg:order-2">
              {/* Heading */}
              <h2 className="text-[1.75rem] sm:text-[2.5rem] lg:text-[3.25rem] xl:text-[60px] font-extrabold leading-[1.2] tracking-tight">
                <span className="text-white">Why Standards </span>
                <span className="font-serif italic text-silver-gradient">
                  Matter.
                </span>
              </h2>

              {/* Body */}
              <p className="text-base sm:text-lg font-normal text-neutral-400 leading-[1.8]">
                In a market saturated with overstatement and inconsistency,
                standards are what distinguish serious organizations from
                everyone else.
              </p>

              <p className="text-base sm:text-lg font-normal text-neutral-400 leading-[1.8] mb-5">
                Customers who choose Innodyn are often highly informed. They
                understand that quality is reflected not only in what a company
                offers, but in how it operates. They value disciplined
                presentation because it signals deeper competence.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <Button label="Contact Us" href="/contact" />
              </div>
            </div>

            {/* Left — image flush to the left edge of the outer card */}
            <div className="order-2 lg:order-1 -ml-8 sm:-ml-12 lg:-ml-16 self-center animate-float">
              <Image
                src="/images/new-shape-bg.png"
                alt="Innodyn My Treatments portal interface"
                width={1121}
                height={511}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
