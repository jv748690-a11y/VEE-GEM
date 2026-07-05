import { useState } from "react";
import type { Category, Product } from "../types";
import ProductCard from "./ProductCard";

const CATEGORIES: (Category | "All")[] = ["All", "Rings", "Necklaces", "Earrings", "Bracelets"];

interface ProductGridProps {
  products: Product[];
  onSelect: (product: Product) => void;
  onQuickAdd: (product: Product) => void;
}

export default function ProductGrid({ products, onSelect, onQuickAdd }: ProductGridProps) {
  const [active, setActive] = useState<Category | "All">("All");

  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <section id="collection" className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
      <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
        <div>
          <p className="text-champagne text-xs tracking-wide-lg uppercase mb-3">The collection</p>
          <h2 className="font-display text-3xl md:text-4xl">Pieces worth keeping.</h2>
        </div>

        <div className="flex gap-2 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-xs tracking-wide-lg uppercase border transition-colors ${
                active === cat
                  ? "bg-onyx text-ivory border-onyx"
                  : "border-onyx/15 text-onyx/70 hover:border-onyx/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} onSelect={onSelect} onQuickAdd={onQuickAdd} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-stone py-16">No pieces in this category yet — check back soon.</p>
      )}
    </section>
  );
}
