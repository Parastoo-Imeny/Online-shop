import { Rating } from "../components/hooks/useProducts";

export default interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  rating: Rating;
  price: string;
  category: string;
}
