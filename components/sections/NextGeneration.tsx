import Image from "next/image";
import Button from "@/components/ui/Button";

export default function NextGeneration() {
  return (
    <section className="py-10 lg:py-0 px-2 md:px-20 lg:px-30">
      <div className="px-4 lg:px-0">
        {/* Outer luxury container — same card as ProductExperience */}
        <div className="relative rounded-[2.5rem] bg-[linear-gradient(180deg,rgba(52,52,52,0.72)_0%,rgba(24,24,24,0.96)_42%,#111111_100%)] border border-white/[0.07] overflow-hidden px-8 pt-14 pb-8 sm:px-12 sm:pt-16 sm:pb-10 lg:px-16 lg:pt-20 lg:pb-12 xl:pb-0">
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2.5rem] card-perspective-grid"
          />

          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left — text content */}
              <div className="flex flex-col gap-7 order-1">
                {/* Badge */}
                {/* <span className="inline-flex w-fit items-center px-4 py-1.5 rounded-full border border-white/15 bg-white/5 text-sm font-normal text-white/80 tracking-wide"></span> */}
                <span className="w-fit shadow-[0_14px_44px_rgba(0,0,0,0.45)] backdrop-blur-md inline-flex items-center px-5 py-2 rounded-2xl bg-[#1e1e20] border-2 border-white/20 text-zinc-400 text-sm md:text-lg font-base tracking-wide bg-[radial-gradient(ellipse_at_top,rgba(90,90,96,0.9)_0%,rgba(28,28,32,1)_100%)]">
                  Innodyn
                </span>

                {/* Heading */}
                <div>
                  <h2 className="text-[1.75rem] sm:text-[2.5rem] lg:text-[3.25rem] xl:text-[60px] font-extrabold text-white leading-[1.1] tracking-tight">
                    The Next Generation Of
                  </h2>
                  <h2 className="font-serif font-extrabold italic text-silver-gradient text-[1.75rem] sm:text-[2.5rem] lg:text-[3.25rem] xl:text-[60px] leading-tight">
                    scientific brand standards.
                  </h2>
                </div>

                {/* Body */}
                <p className="text-base sm:text-lg font-normal text-zinc-400 leading-[1.8]">
                  Innodyn represents a more modern expression of quality,
                  discipline, and scientific presentation. We are building a
                  platform for informed customers who want more than a
                  storefront. They want a brand that feels intelligent,
                  elevated, and exacting in its standards.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  <Button label="Shop Innodyn" />
                  <Button label="Learn About Our Approach" />
                </div>
              </div>

              {/* Right — image flush to the right edge of the outer card */}
              <div className="order-2 -mr-8 sm:-mr-12 lg:-mr-16 self-center">
                <Image
                  src="/images/frame-image-2.png"
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
