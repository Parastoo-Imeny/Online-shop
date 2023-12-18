
import useData from "./useData";

export interface Rating {
    rate: number;
    count: number;
}

export interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  rating: Rating
}

const useProducts = () => useData<Product>("/products")

export default useProducts;
