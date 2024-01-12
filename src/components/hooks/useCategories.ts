import { useQuery } from "@tanstack/react-query";
import APIClient from "../../services/api-client";
import categories from "../../data/categories";

const apiClient = new APIClient<string>('/products/categories');

const useCategories = () => useQuery<string[]>({
    queryKey: ['categories'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h 
    initialData: categories
});

export default useCategories;
