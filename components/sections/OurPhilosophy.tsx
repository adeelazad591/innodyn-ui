import Image from "next/image";
import Button from "../ui/Button";

export default function OurPhilosophy() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — text content */}
          <div className="flex flex-col gap-8 lg:gap-10">
            <div>
              <h2 className="text-[1.75rem] sm:text-[2.5rem] lg:text-[3.25rem] xl:text-[60px] font-extrabold text-white leading-[1.1] tracking-tight">
                Our
                <span className="font-serif ps-4 font-extrabold italic text-zinc-500 text-[1.75rem] sm:text-[2.5rem] lg:text-[3.25rem] xl:text-[60px] leading-tight">
                  Philosophy.
                </span>
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              <p className="text-lg font-normal text-zinc-400 leading-[1.8]">
                Precision is not a feature. It is the baseline. Innodyn is built
                on the belief that products in this category should be presented
                with more care, more sophistication, and more scientific
                discipline. Too many platforms feel rushed, inflated, or
                imprecise. We set out to build something different.
              </p>
              <p className="text-lg font-normal text-zinc-400 leading-[1.8]">
                We believe the future belongs to brands that take quality
                seriously, communicate clearly, and operate with consistency. A
                brand should not have to choose between being modern and being
                credible. Innodyn was built to be both.
              </p>
              <p className="text-lg font-normal text-zinc-400 leading-[1.8]">
                The result is a platform that feels intelligent, measured, and
                highly intentional at every level.
              </p>
            </div>

            <div>
              <Button label="Explore Compounds" />
            </div>
          </div>

          {/* Right — video with bottle overlay */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full overflow-hidden rounded-3xl border border-white/8 bg-[#0e0e0e] aspect-[4/3]">
              {/* Background video */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/videos/portal.mp4" type="video/mp4" />
              </video>
              {/* Dark overlay to help bottle pop */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none bg-black/30"
              />
              {/* Spotlight glow beneath bottle */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 50% at 50% 85%, rgba(220,220,220,0.14) 0%, rgba(160,160,160,0.04) 50%, transparent 70%)",
                }}
              />
              {/* Bottle image on top */}
              <Image
                src="/images/products/product-lg-1.png"
                alt="Innodyn 2X Blend product vial"
                width={320}
                height={420}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[88%] w-auto drop-shadow-2xl object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
