"use client";

import { useState } from "react";
import ProductCard from "@/components/common/ProductCard";
import type { Product } from "@/types/types";
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
          <div className="shrink-0 whitespace-nowrap">
            <h2 className="text-[1.75rem] sm:text-[2.5rem] lg:text-[3.25rem] xl:text-[60px] font-extrabold text-white leading-[1.1] tracking-tight inline">
              All{" "}
            </h2>
            <h2 className="font-extrabold italic font-serif text-silver-gradient inline text-[1.75rem] sm:text-[2.5rem] lg:text-[3.25rem] xl:text-[60px] leading-tight">
              Products.
            </h2>
          </div>

          {/* Search input */}
          <div className="relative flex-1 max-w-xs sm:max-w-88">
            <div className="relative isolate overflow-hidden rounded-[10px] border border-white/6 bg-white/[0.01] backdrop-blur-[10px] before:absolute before:inset-x-0 before:top-0 before:h-[80%] before:-z-10 before:rounded-[10px] before:bg-radial-[50%_100%_at_50%_0%] before:from-white/[0.22] before:to-transparent before:content-[''] focus-within:border-white/20 transition-colors">
              <svg
                className="absolute z-20 left-4 top-1/2 -translate-y-1/2 text-white pointer-events-none w-6 h-6"
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
                className="relative z-10 w-full pl-12 pr-4 h-12 bg-transparent text-white placeholder:text-white text-sm font-medium outline-none"
              />
            </div>
          </div>
          {/* <div className="relative flex-1 max-w-xs sm:max-w-88">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white pointer-events-none w-6 h-6"
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
              className="w-full pl-12 pr-4 h-12 rounded-[10px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08)_0%,rgba(12,12,14,1)_75%)] bg-[#1a1a1a] border border-white/8 text-white placeholder:text-white text-sm font-medium outline-none focus:border-white/20 transition-colors"
            />
          </div> */}
        </div>

        {/* Category filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map(({ label, count }) => (
            <button
              key={label}
              type="button"
              onClick={() => setActiveCategory(label)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-colors border cursor-pointer ${
                activeCategory === label
                ? "text-white border-white/6 bg-white/[0.01] backdrop-blur-[10px] before:absolute before:inset-x-0 before:bottom-0 before:h-[80%] before:-z-10 before:rounded-full before:bg-radial-[50%_100%_at_50%_100%] before:from-white/[0.22] before:to-transparent before:content-['']"
                  // ? "bg-white/10 text-white border-white/15 bg-[radial-gradient(circle_at_bottom,rgba(120,120,125,0.55)_0%,rgba(58,58,62,0.42)_30%,rgba(18,18,22,1)_100%)]"
                  : "text-neutral-400 border-white/8 hover:text-white hover:border-white/15"
              }`}
            >
              {label}
              <span
                className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                  activeCategory === label
                    ? "bg-white text-[#175CD3]"
                    : "bg-white/8 text-neutral-400"
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
        {/* <div className="flex justify-center mt-12">
          <Button label="View All Products" href="/products" />
        </div> */}
      </div>
    </section>
  );
}
