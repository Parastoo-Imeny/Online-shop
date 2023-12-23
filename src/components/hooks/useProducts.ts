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
}


const useProducts = (selectedCategory : string | null, categorySelector: string | null ) =>
  useData<Product>(
    selectedCategory ? `/products/category/${selectedCategory}` : categorySelector ? `/products/category/${categorySelector}` : "/products",
    [selectedCategory, categorySelector]
  );

export default useProducts;
