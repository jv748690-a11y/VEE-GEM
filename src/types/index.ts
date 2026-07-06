export type Category = "Wristwatches" | "Necklaces" | "Earrings" | "Eyeglasses";

export interface Product {
  id: string;
  name: string;
  category: Category;
  caption: string;
  image: string;
  isNew?: boolean;
}
