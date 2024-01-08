import { create } from 'zustand'

interface ProductQuery {
  category?: string | null;
  selector?: string | null;
  sortOrder?: string;
  searchText?: string;
  pageSize?: 5;
}

interface ProductQueryStore {
  productQuery: ProductQuery;
  setSearchText: (searchText: string) => void;
  setCategory: (category: string) => void;
  setSelectorCategory: (category: string) => void;
  setSortOrder: (sortOrder: string) => void;

}

const useProductQueryStore = create<ProductQueryStore>(set => ({
    productQuery: {},
    setSearchText: (searchText) => set(() => ({productQuery: {searchText}})),
    setCategory: (category) => set(store => ({productQuery: {...store.productQuery, category}})), 
    setSelectorCategory: (category) => set(store => ({productQuery: {...store.productQuery, category}})),
    setSortOrder: (sortOrder) => set(store =>({productQuery: {...store.productQuery, sortOrder}}))
}))


export default useProductQueryStore;