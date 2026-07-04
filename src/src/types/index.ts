export type Category = "Rings" | "Necklaces" | "Earrings" | "Bracelets";

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number; // in Naira
  description: string;
  image: string;
  isNew?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
