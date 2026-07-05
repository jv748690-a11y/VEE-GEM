import { useState } from "react";
import type { CartItem } from "../types";
import { buildWhatsAppOrderLink, formatNaira } from "../utils/whatsapp";

interface CartDrawerProps {
  isOpen: boolean;
  items: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
}

export default function CartDrawer({ isOpen, items, onClose, onUpdateQuantity, onRemove }: CartDrawerProps) {
  const [name, setName] = useState("");
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <>
      <div
        className={`fixed inset-0 bg-onyx/50 z-40 transition-opacity ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-ivory z-50 flex flex-col transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone/20">
          <h2 className="font-display text-2xl">Your Bag</h2>
          <button onClick={onClose} aria-label="Close cart" className="text-onyx/50 hover:text-onyx">
            Close ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <p className="text-stone text-center mt-16">Your bag is empty — go find something beautiful.</p>
          ) : (
            <ul className="divide-y divide-stone/15">
              {items.map((item) => (
                <li key={item.product.id} className="py-4 flex gap-4">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-sm flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-display text-lg leading-tight">{item.product.name}</p>
                    <p className="text-champagne text-sm mt-1">{formatNaira(item.product.price)}</p>

                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                        className="w-7 h-7 border border-onyx/20 rounded-full flex items-center justify-center hover:border-onyx"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="text-sm w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="w-7 h-7 border border-onyx/20 rounded-full flex items-center justify-center hover:border-onyx"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                      <button
                        onClick={() => onRemove(item.product.id)}
                        className="text-xs text-stone hover:text-onyx ml-2 underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-stone/20 px-6 py-5">
            <label className="text-xs tracking-wide-lg uppercase text-stone block mb-2">
              Your name (for the order)
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Victoria"
              className="w-full border border-onyx/20 rounded-sm px-3 py-2.5 text-sm mb-4 focus:outline-none focus:border-champagne"
            />

            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-stone">Total</span>
              <span className="font-display text-2xl text-champagne">{formatNaira(total)}</span>
            </div>

            <a
              href={buildWhatsAppOrderLink(items, name || undefined)}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#25D366] text-white rounded-full py-3.5 text-sm tracking-wide-lg uppercase hover:opacity-90 transition-opacity"
            >
              Order via WhatsApp
            </a>
            <p className="text-[11px] text-stone text-center mt-3">
              You'll be redirected to WhatsApp to confirm your order with us.
            </p>
          </div>
        )}
      </aside>
    </>
  );
}
