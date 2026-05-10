import Image from "next/image";
import Button from "../ui/Button";

export default function ScientificStandard() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        {/* Section header — heading + intro, mirrors KeyProducts layout */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12 mb-12 lg:mb-16">
          <div className="shrink-0">
            <h2 className="text-[1.75rem] sm:text-[2.5rem] lg:text-[3.25rem] xl:text-[60px] font-extrabold text-white leading-[1.1] tracking-tight">
              A More Scientific
            </h2>
            <h2 className="font-serif font-extrabold italic text-silver-gradient text-[1.75rem] sm:text-[2.5rem] lg:text-[3.25rem] xl:text-[60px] leading-tight">
              Standard.
            </h2>
          </div>

          <p className="text-xl font-normal text-zinc-400 leading-[1.8] lg:max-w-152 lg:pt-2">
            Innodyn was created for a more discerning customer. Not for impulse
            buyers. Not for trend chasers. For individuals who want a platform
            that feels methodical, credible, and engineered with care.
          </p>
        </div>

        {/* Content — body text left, device image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="flex flex-col gap-6">
            <p className="text-lg font-normal text-zinc-400 leading-[1.8]">
              Every part of the Innodyn experience is designed to reflect a
              disciplined philosophy: cleaner systems, stronger standards,
              tighter sourcing expectations, and a sharper focus on scientific
              integrity. From product selection to platform design, our goal is
              simple: create an environment that feels elevated, precise, and
              grounded in substance.
            </p>
            <p className="text-lg font-normal text-zinc-400 leading-[1.8]">
              This is not lifestyle branding dressed up as science. This is a
              science-forward brand built for people who expect more.
            </p>
            <div>
              <Button label="Explore Compounds" />
            </div>
          </div>

          <div className="relative flex items-center justify-end">
            <Image
              src="/images/devices-image.png"
              alt="Innodyn portal dashboard on desktop and mobile"
              width={720}
              height={520}
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
