import { useQuery } from "@tanstack/react-query";
import { Product } from "./useProducts";
import APIClient from "../../services/api-client";

const apiClient = new APIClient<Product>('products');

const useProduct = (id: number) => useQuery<Product, Error>({
    queryKey: ['products', id],
    queryFn: () => apiClient.get(id)
})

export default useProduct;