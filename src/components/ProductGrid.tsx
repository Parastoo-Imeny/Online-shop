import { SimpleGrid, Text } from "@chakra-ui/react";
import useProducts from "./hooks/useProducts";
import { ProductCard } from "./ProductCard";
import { ProductCardSkeleton } from "./ProductCardSkeleton";

export const ProductGrid = () => {
  const { products, error, isLoading } = useProducts();
  const skeleton= [1,2,3,4,5,6,7,8]

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={3}
        spacing={10}
        gap={0}
        justifyItems='center'
      >
        {isLoading && (skeleton.map( () => <ProductCardSkeleton /> ))}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </>
  );
};
