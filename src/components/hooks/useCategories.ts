import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";


const useCategories= () => {
    const [categories, setCategories] = useState<string[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      const controller = new AbortController();
  setLoading(true);
      apiClient
        .get<string[]>("/products/categories", { signal: controller.signal })
        .then((res) => {
          setCategories(res.data);
          setLoading(false);
      })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });
  
      return () => controller.abort();
    }, []);
  
    return { categories, error, isLoading };
}

export default useCategories;