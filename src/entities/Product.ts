import { Rating } from "../components/hooks/useProducts";

export interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  rating: Rating;
  price: string;
  category: string;
}
