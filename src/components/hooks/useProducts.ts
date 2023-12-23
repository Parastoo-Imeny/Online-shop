import { ProductQuery } from "../../App";
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
  rating: Rating;
  price: string;
}


const useProducts = (productQuery: ProductQuery) =>
  useData<Product>(
    productQuery.category ? `/products/category/${productQuery.category}` : productQuery.selector ? `/products/category/${productQuery.selector}` : productQuery.sortOrder ? `/products?sort=${productQuery.sortOrder}` : "/products",
    [productQuery]
  );

export default useProducts;
