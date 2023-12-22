import { SimpleGrid, Text } from "@chakra-ui/react";
import useProducts from "./hooks/useProducts";
import { ProductCard } from "./ProductCard";
import { ProductCardSkeleton } from "./ProductCardSkeleton";
import { ProductCardContainer } from "./ProductCardContainer";

interface Props {
  selectedCategory: string | null;
}

export const ProductGrid = ({ selectedCategory }: Props) => {
  const { data, error, isLoading } = useProducts(selectedCategory);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];
 
  return (
    <>
      {error && <Text>{error}</Text>}
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
        {data.map((product) => (
          <ProductCardContainer key={product.id}>
            <ProductCard key={product.id} product={product} />
          </ProductCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};
