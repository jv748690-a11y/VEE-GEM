import type { CartItem } from "../types";

const WHATSAPP_NUMBER = "2348027627988";

export function formatNaira(amount: number): string {
  return `₦${amount.toLocaleString("en-NG")}`;
}

export function buildWhatsAppOrderLink(items: CartItem[], customerName?: string): string {
  const lines: string[] = [];
  lines.push("Hello Vee Gem! I'd like to place an order:");
  lines.push("");

  items.forEach((item) => {
    lines.push(
      `• ${item.product.name} (x${item.quantity}) — ${formatNaira(item.product.price * item.quantity)}`
    );
  });

  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  lines.push("");
  lines.push(`Total: ${formatNaira(total)}`);

  if (customerName) {
    lines.push("");
    lines.push(`Name: ${customerName}`);
  }

  const message = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}
