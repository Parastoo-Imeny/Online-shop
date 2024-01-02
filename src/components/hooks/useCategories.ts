import { useQuery } from "@tanstack/react-query";
import apiClient from "../../services/api-client";
import categories from "../../data/categories";

const useCategories = () => useQuery({
    queryKey: ['categories'],
    queryFn: () => apiClient
    .get<string[]>('/products/categories').then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h 
    initialData: categories
});

export default useCategories;
