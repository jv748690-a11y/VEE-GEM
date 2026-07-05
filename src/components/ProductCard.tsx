import type { Product } from "../types";
import { formatNaira } from "../utils/whatsapp";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onQuickAdd: (product: Product) => void;
}

export default function ProductCard({ product, onSelect, onQuickAdd }: ProductCardProps) {
  return (
    <div className="group relative">
      <button
        onClick={() => onSelect(product)}
        className="block w-full text-left"
        aria-label={`View ${product.name}`}
      >
        <div className="relative overflow-hidden bg-ivory-dim rounded-sm">
          <img
            src={product.image}
            alt={product.name}
            className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {product.isNew && (
            <span className="absolute top-3 left-3 bg-onyx text-champagne text-[10px] tracking-wide-lg uppercase px-2.5 py-1 rounded-full">
              New
            </span>
          )}

          {/* Hangtag-style price detail */}
          <div className="absolute top-3 right-3 bg-ivory text-onyx text-xs font-medium px-3 py-1.5 rounded-sm shadow-sm flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full border border-onyx/40" />
            {formatNaira(product.price)}
          </div>
        </div>

        <div className="mt-4">
          <p className="text-[11px] tracking-wide-lg uppercase text-stone">{product.category}</p>
          <h3 className="font-display text-xl mt-1">{product.name}</h3>
        </div>
      </button>

      <button
        onClick={() => onQuickAdd(product)}
        className="mt-3 w-full border border-onyx/15 rounded-full py-2.5 text-xs tracking-wide-lg uppercase hover:bg-onyx hover:text-ivory hover:border-onyx transition-colors"
      >
        Add to bag
      </button>
    </div>
  );
}
