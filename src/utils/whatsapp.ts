import type { Product } from "../types";

const WHATSAPP_NUMBER = "2348027627988";

export function buildEnquiryLink(product: Product): string {
  const lines = [
    "Hello Vee Gem! I'd like to enquire about this piece:",
    "",
    `Item: ${product.name}`,
    `Category: ${product.category}`,
    "",
    "Could you tell me the price and availability?",
  ];
  const message = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

export function buildGeneralEnquiryLink(): string {
  const message = encodeURIComponent("Hello Vee Gem! I'd like to know more about your pieces.");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}
