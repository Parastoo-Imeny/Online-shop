import { useQuery } from "@tanstack/react-query";
import { ProductQuery } from "../../App";
import apiClient from "../../services/api-client";

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
  useQuery<Product[], Error>({
    queryKey: ['products', productQuery],
    queryFn: () =>
      apiClient
        .get<Product[]>(
          productQuery.category
            ? `/products/category/${productQuery.category}`
            : productQuery.selector
            ? `/products/category/${productQuery.selector}`
            : productQuery.sortOrder
            ? `/products?sort=${productQuery.sortOrder}`
            : "/products"
        )
        .then((res) => res.data),
  });
// useData<Product>(
//   productQuery.category ? `/products/category/${productQuery.category}` : productQuery.selector ? `/products/category/${productQuery.selector}` : productQuery.sortOrder ? `/products?sort=${productQuery.sortOrder}` : "/products",
//   [productQuery]
// );

export default useProducts;
