import type { Product } from "../types";
import { formatNaira } from "../utils/whatsapp";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export default function ProductModal({ product, onClose, onAddToCart }: ProductModalProps) {
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-onyx/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-ivory max-w-3xl w-full grid grid-cols-1 md:grid-cols-2 rounded-sm overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={product.image} alt={product.name} className="w-full aspect-square object-cover" />

        <div className="p-8 md:p-10 flex flex-col">
          <button
            onClick={onClose}
            aria-label="Close"
            className="self-end text-onyx/50 hover:text-onyx mb-4 text-sm"
          >
            Close ✕
          </button>

          <p className="text-[11px] tracking-wide-lg uppercase text-stone">{product.category}</p>
          <h2 className="font-display text-3xl mt-2">{product.name}</h2>
          <p className="font-display text-2xl text-champagne mt-3">{formatNaira(product.price)}</p>

          <p className="text-onyx/70 mt-6 leading-relaxed">{product.description}</p>

          <button
            onClick={() => {
              onAddToCart(product);
              onClose();
            }}
            className="mt-auto pt-8 w-full bg-onyx text-ivory rounded-full py-3.5 text-sm tracking-wide-lg uppercase hover:bg-onyx/85 transition-colors"
          >
            Add to bag
          </button>
        </div>
      </div>
    </div>
  );
}
