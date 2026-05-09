import Image from "next/image";
import Button from "../ui/Button";

interface Product {
  id: string;
  name: string;
  inStock: boolean;
  tags: string[];
  details: string[];
  price: string;
  image: string;
}

const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "5-AMINO-1-MQ",
    inStock: true,
    tags: ["50MG", "TROCHE", "ORAL", "Morning"],
    details: ["50 mg PO once daily"],
    price: "$39.99",
    image: "/images/products/product-1.png",
  },
  {
    id: "2",
    name: "7-KETO DHEA",
    inStock: false,
    tags: ["50MG", "TABLET/CAPSULE", "ORAL"],
    details: ["Morning with food", "50 mg PO once daily"],
    price: "$39.99",
    image: "/images/products/product-1.png",
  },
  {
    id: "3",
    name: "5-AMINO1MQ/SLU-PP-332",
    inStock: true,
    tags: ["50MG", "TROCHE", "ORAL", "Morning"],
    details: ["50 mg PO once daily"],
    price: "$39.99",
    image: "/images/products/product-1.png",
  },
  {
    id: "4",
    name: "5-AMINO-1-MQ",
    inStock: true,
    tags: ["50MG", "TROCHE", "ORAL", "Morning"],
    details: ["50 mg PO once daily"],
    price: "$39.99",
    image: "/images/products/product-1.png",
  },
  {
    id: "5",
    name: "7-KETO DHEA",
    inStock: false,
    tags: ["50MG", "TABLET/CAPSULE", "ORAL"],
    details: ["Morning with food", "50 mg PO once daily"],
    price: "$39.99",
    image: "/images/products/product-1.png",
  },
  {
    id: "6",
    name: "5-AMINO1MQ/SLU-PP-332",
    inStock: true,
    tags: ["50MG", "TROCHE", "ORAL", "Morning"],
    details: ["50 mg PO once daily"],
    price: "$39.99",
    image: "/images/products/product-1.png",
  },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col bg-[linear-gradient(180deg,rgba(52,52,52,0.72)_0%,rgba(24,24,24,0.96)_42%,#111111_100%)] border-2 border-zinc-700 rounded-[20px] overflow-hidden">
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

        <div className="flex items-center justify-center h-[230px]">
          <Image
            src={product.image}
            alt={product.name}
            width={170}
            height={230}
            className="h-[230px] w-auto drop-shadow-2xl"
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
              className="px-3.5 py-[5px] rounded-full text-[14px] leading-5 font-medium font-poppins text-#A3A3A3 bg-radial from-zinc-600/20 to-zinc-900/60 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Detail lines — same pill style */}
        <div className="flex flex-wrap gap-2">
          {product.details.map((detail, i) => (
            <span
              key={i}
              className="px-3.5 py-[5px] rounded-full text-[14px] leading-5 font-medium font-poppins text-zinc-400 bg-radial from-zinc-600/20 to-zinc-900/60 border border-white/10"
            >
              {detail}
            </span>
          ))}
        </div>

        {/* Add to Cart + Price */}
        <div className="flex items-center gap-5 mt-1">
          <button
            type="button"
            className="cursor-pointer flex flex-1 items-center justify-center gap-2.5 py-3.5 rounded-full text-lg font-medium text-white bg-radial from-[#5a5a5a]/75 via-[#282828]/90 to-[#0c0c0e] hover:bg-black hover:bg-none border border-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)] transition-all duration-300"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden
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

export default function KeyProducts() {
  return (
    <section className="py-20 bg-[linear-gradient(180deg,rgba(52,52,52,0.72)_0%,rgba(24,24,24,0.96)_42%,#111111_100%)]">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        {/* Section header */}
        <div className="flex items-start justify-between gap-12 mb-12">
          <div className="shrink-0">
            <h2 className="text-[1.75rem] sm:text-[2.5rem] lg:text-[3.25rem] xl:text-[60px] font-extrabold text-white leading-[1.1] tracking-tight">
              Our Key
            </h2>
            <h2
              className="font-extrabold italic text-zinc-500 block text-[1.75rem] sm:text-[2.5rem] lg:text-[3.25rem] xl:text-[60px] leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Products.
            </h2>
          </div>

          <p className="text-xl font-normal text-zinc-400 leading-[1.8] max-w-155 pt-2">
            Innodyn was created for a more discerning customer. Not for impulse
            buyers. Not for trend chasers. For individuals who want a platform
            that feels methodical, credible, and engineered with care.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4.5">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all products CTA */}
        <div className="flex justify-center mt-12">
          <Button label=" View All Products" />
        </div>
      </div>
    </section>
  );
}
