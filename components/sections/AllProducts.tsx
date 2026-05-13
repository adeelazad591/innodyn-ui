"use client";

import { useState } from "react";
import ProductCard, { type Product } from "@/components/common/ProductCard";
import Button from "@/components/ui/Button";

const CATEGORIES = [
  { label: "Peptide Therapy", count: 7 },
  { label: "Hormones", count: 4 },
  { label: "Longevity", count: 2 },
  { label: "Sleep", count: 2 },
  { label: "Hair Regrowth", count: 2 },
  { label: "Weight Loss", count: 2 },
];

const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "5-AMINO-1-MQ",
    inStock: true,
    tags: ["50MG", "TROCHE", "ORAL", "Morning", "50 mg PO once daily"],
    price: "$39.99",
    image: "/images/products/product-1.png",
  },
  {
    id: "2",
    name: "7-KETO DHEA",
    inStock: false,
    tags: [
      "50MG",
      "TABLET/CAPSULE",
      "ORAL",
      "Morning with food",
      "50 mg PO once daily",
    ],
    price: "$39.99",
    image: "/images/products/product-1.png",
  },
  {
    id: "3",
    name: "5-AMINO1MQ/SLU-PP-332",
    inStock: true,
    tags: ["50MG", "TROCHE", "ORAL", "Morning", "50 mg PO once daily"],
    price: "$39.99",
    image: "/images/products/product-1.png",
  },
  {
    id: "4",
    name: "5-AMINO-1-MQ",
    inStock: true,
    tags: ["50MG", "TROCHE", "ORAL", "Morning", "50 mg PO once daily"],
    price: "$39.99",
    image: "/images/products/product-1.png",
  },
  {
    id: "5",
    name: "7-KETO DHEA",
    inStock: false,
    tags: [
      "50MG",
      "TABLET/CAPSULE",
      "ORAL",
      "Morning with food",
      "50 mg PO once daily",
    ],
    price: "$39.99",
    image: "/images/products/product-1.png",
  },
  {
    id: "6",
    name: "5-AMINO1MQ/SLU-PP-332",
    inStock: true,
    tags: ["50MG", "TROCHE", "ORAL", "Morning", "50 mg PO once daily"],
    price: "$39.99",
    image: "/images/products/product-1.png",
  },
  {
    id: "7",
    name: "5-AMINO-1-MQ",
    inStock: true,
    tags: ["50MG", "TROCHE", "ORAL", "Morning", "50 mg PO once daily"],
    price: "$39.99",
    image: "/images/products/product-1.png",
  },
  {
    id: "8",
    name: "7-KETO DHEA",
    inStock: false,
    tags: [
      "50MG",
      "TABLET/CAPSULE",
      "ORAL",
      "Morning with food",
      "50 mg PO once daily",
    ],
    price: "$39.99",
    image: "/images/products/product-1.png",
  },
  {
    id: "9",
    name: "5-AMINO1MQ/SLU-PP-332",
    inStock: true,
    tags: ["50MG", "TROCHE", "ORAL", "Morning", "50 mg PO once daily"],
    price: "$39.99",
    image: "/images/products/product-1.png",
  },
];

export default function AllProducts() {
  const [activeCategory, setActiveCategory] = useState("Peptide Therapy");
  const [search, setSearch] = useState("");

  const filtered = PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-6">
          <div className="shrink-0">
            <h2 className="text-[1.75rem] sm:text-[2.5rem] lg:text-[3.25rem] xl:text-[60px] font-extrabold text-white leading-[1.1] tracking-tight">
              All
            </h2>
            <h2 className="font-extrabold italic font-serif text-silver-gradient block text-[1.75rem] sm:text-[2.5rem] lg:text-[3.25rem] xl:text-[60px] leading-tight">
              Products.
            </h2>
          </div>

          {/* Search input */}
          <div className="relative flex-1 max-w-xs sm:max-w-72">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden
            >
              <circle
                cx="7"
                cy="7"
                r="5.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M11 11l3 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full bg-[#1a1a1a] border border-white/8 text-white placeholder:text-zinc-500 text-sm font-medium outline-none focus:border-white/20 transition-colors"
            />
          </div>
        </div>

        {/* Category filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map(({ label, count }) => (
            <button
              key={label}
              type="button"
              onClick={() => setActiveCategory(label)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-colors border ${
                activeCategory === label
                  ? "bg-white/10 text-white border-white/15"
                  : "text-zinc-400 border-white/8 hover:text-white hover:border-white/15"
              }`}
            >
              {label}
              <span
                className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                  activeCategory === label
                    ? "bg-white/15 text-white"
                    : "bg-white/8 text-zinc-400"
                }`}
              >
                {count}
              </span>
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4.5">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all CTA */}
        <div className="flex justify-center mt-12">
          <Button label="View All Products" />
        </div>
      </div>
    </section>
  );
}
