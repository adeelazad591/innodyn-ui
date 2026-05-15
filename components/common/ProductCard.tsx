import Image from "next/image";
import type { Product } from "@/types/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col bg-[linear-gradient(180deg,rgba(52,52,52,0.72)_0%,rgba(24,24,24,0.96)_42%,#111111_100%)] border-2 border-zinc-700 rounded-[20px] overflow-hidden">
      {/* Upper zone — image on card background */}
      <div className="px-6 pt-6 pb-6">
        <div className="flex items-center gap-2.5 mb-7">
          <span
            className={`w-3 h-3 shrink-0 rounded-full ${
              product.inStock ? "bg-green-500" : "bg-red-500"
            }`}
          />
          <span className="text-base font-semibold text-white">
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        <div className="flex items-center justify-center h-57.5">
          <Image
            src={product.image}
            alt={product.name}
            width={170}
            height={230}
            className="h-57.5 w-auto drop-shadow-2xl transition-transform duration-700 ease-in-out scale-100 group-hover:scale-90"
          />
        </div>
      </div>

      {/* Lower zone — darker inset content card */}
      <div className="rounded-[20px] mx-3 mb-3 px-5 py-5 flex flex-col gap-4 bg-[linear-gradient(180deg,rgba(52,52,52,0.72)_0%,rgba(24,24,24,0.96)_42%,#111111_100%)]">
        {/* Product name */}
        <h3 className="text-2xl font-medium text-white leading-tight">
          {product.name}
        </h3>

        {/* Tags — gradient pill badges */}
        <div className="flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="px-3.5 py-1.25 rounded-full text-[14px] leading-5 font-medium font-poppins text-#A3A3A3 bg-radial from-zinc-600/20 to-zinc-900/60 border border-white/10 bg-[radial-gradient(ellipse_at_top,rgba(90,90,96,0.9)_0%,rgba(28,28,32,1)_100%)]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Add to Cart + Price */}
        <div className="flex items-center gap-5 mt-1">
          <button
            type="button"
            className="group cursor-pointer flex flex-1 items-center justify-center gap-2.5 py-3.5 rounded-full text-lg font-medium text-white bg-radial from-[#5a5a5a]/75 via-[#282828]/90 to-[#0c0c0e] hover:bg-black hover:bg-none border border-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)] transition-all duration-300"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden
              className="transition-transform duration-300 group-hover:rotate-90"
            >
              <path
                d="M7 1v12M1 7h12"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
            Add to Cart
          </button>
          <span className="text-[28px] font-bold text-white leading-none shrink-0">
            {product.price}
          </span>
        </div>
      </div>
    </div>
  );
}
