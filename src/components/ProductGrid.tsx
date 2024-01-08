import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import { ProductCard } from "./ProductCard";
import { ProductCardContainer } from "./ProductCardContainer";
import { ProductCardSkeleton } from "./ProductCardSkeleton";
import useProducts from "./hooks/useProducts";
import useProductQueryStore from "../services/store";



export const ProductGrid = () => {
  const productQuery = useProductQueryStore(s => s.productQuery);
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useProducts(productQuery);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text>{error.message}</Text>;

  const fetchedProductsCount = data?.pages.reduce((acc, num) => acc + num.length, 0 ) || 0;

  return (
    <InfiniteScroll
    dataLength={fetchedProductsCount}
    hasMore={!!hasNextPage}
    next={() => fetchNextPage()}
    loader={<Spinner />}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={0}
        spacing={10}
        gap={0}
        justifyItems="center"
      >
        {isLoading &&
          skeleton.map((s) => (
            <ProductCardContainer key={s}>
              <ProductCardSkeleton />
            </ProductCardContainer>
          ))}
        {data?.pages.map((page) => (
          <React.Fragment>
            {page.map((product) => (
              <ProductCardContainer key={product.id}>
                <ProductCard key={product.id} product={product} />
              </ProductCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      </InfiniteScroll>
  );
};
