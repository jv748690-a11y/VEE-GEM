import type { Product } from "../types";
import { buildEnquiryLink } from "../utils/whatsapp";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export default function ProductCard({ product, onSelect }: ProductCardProps) {
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
        </div>

        <div className="mt-4">
          <p className="text-[11px] tracking-wide-lg uppercase text-stone">{product.category}</p>
          <h3 className="font-display text-xl mt-1">{product.name}</h3>
          <p className="text-sm text-stone mt-1">{product.caption}</p>
        </div>
      </button>

      <a
        href={buildEnquiryLink(product)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 block w-full text-center border border-onyx/15 rounded-full py-2.5 text-xs tracking-wide-lg uppercase hover:bg-onyx hover:text-ivory hover:border-onyx transition-colors"
      >
        Enquire on WhatsApp
      </a>
    </div>
  );
}
