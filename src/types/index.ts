export type Category =
  | "Wristwatches"
  | "Necklaces"
  | "Earrings"
  | "Eyeglasses"
  | "Leg Chains"
  | "Waist Chains"
  | "Waist Beads";

export interface Product {
  id: string;
  name: string;
  category: Category;
  caption: string;
  image: string;
  isNew?: boolean;
}
