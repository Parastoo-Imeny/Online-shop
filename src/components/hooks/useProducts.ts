import { InfiniteData, QueryKey, useInfiniteQuery } from "@tanstack/react-query";
import { ProductQuery } from "../../App";
import apiClient from "../../services/apiClient";


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
  useInfiniteQuery<Product[], Error, InfiniteData<Product[]>, QueryKey, number>({
    queryKey: ['products', productQuery],
    queryFn: ({ pageParam = 1}) =>
      apiClient
        .get<Product[]>(
          productQuery.category
            ? `/products/category/${productQuery.category}`
            : productQuery.selector
            ? `/products/category/${productQuery.selector}`
            : productQuery.sortOrder
            ? `/products?sort=${productQuery.sortOrder}`
            : "/products", {
              params: {
                _start: (pageParam - 1) * productQuery.pageSize,
                _limit: productQuery.pageSize
              }
            }
        )
        .then(res => res.data),
        staleTime: 24 * 60 * 60 * 1000, //24h
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
          return lastPage.length > 0 ? allPages.length + 1 : undefined;
        }
  });
// useData<Product>(
//   productQuery.category ? `/products/category/${productQuery.category}` : productQuery.selector ? `/products/category/${productQuery.selector}` : productQuery.sortOrder ? `/products?sort=${productQuery.sortOrder}` : "/products",
//   [productQuery]
// );

export default useProducts;
