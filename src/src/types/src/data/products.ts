import type { Product } from "../types";

const img = (label: string) =>
  `https://placehold.co/700x700/0E0E10/C9A455?font=playfair-display&text=${encodeURIComponent(label)}`;

export const products: Product[] = [
  {
    id: "r-001",
    name: "Amara Gold Band",
    category: "Rings",
    price: 18500,
    description: "A slim, hand-finished gold-plated band with a soft brushed texture. Everyday elegance that stacks well with others.",
    image: img("Amara Ring"),
    isNew: true,
  },
  {
    id: "r-002",
    name: "Solera Signet Ring",
    category: "Rings",
    price: 24000,
    description: "A bold statement signet with a smooth polished face, inspired by heirloom design.",
    image: img("Solera Ring"),
  },
  {
    id: "n-001",
    name: "Adaeze Pendant Necklace",
    category: "Necklaces",
    price: 32000,
    description: "Delicate chain with a teardrop pendant, finished in warm gold tone. Sits perfectly at the collarbone.",
    image: img("Adaeze Necklace"),
    isNew: true,
  },
  {
    id: "n-002",
    name: "Layered Coin Necklace",
    category: "Necklaces",
    price: 27500,
    description: "Two-layer chain featuring a coin charm, for that effortless layered look.",
    image: img("Coin Necklace"),
  },
  {
    id: "e-001",
    name: "Zuri Hoop Earrings",
    category: "Earrings",
    price: 15000,
    description: "Medium-sized huggie hoops, lightweight enough for all-day wear.",
    image: img("Zuri Hoops"),
  },
  {
    id: "e-002",
    name: "Teardrop Stud Earrings",
    category: "Earrings",
    price: 12500,
    description: "Minimalist studs with a subtle teardrop shape, catching light with every turn.",
    image: img("Teardrop Studs"),
    isNew: true,
  },
  {
    id: "b-001",
    name: "Femi Chain Bracelet",
    category: "Bracelets",
    price: 21000,
    description: "A substantial curb-link chain bracelet with a secure lobster clasp.",
    image: img("Femi Bracelet"),
  },
  {
    id: "b-002",
    name: "Beaded Charm Bracelet",
    category: "Bracelets",
    price: 16500,
    description: "Hand-strung beads paired with a single gold charm — playful yet refined.",
    image: img("Charm Bracelet"),
  },
];
