import { Center, SimpleGrid, Text } from "@chakra-ui/react";
import useProducts from "./hooks/useProducts";
import { ProductCard } from "./ProductCard";

export const ProductGrid = () => {
  const {products, error} = useProducts();

  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid  columns={{ sm:1, md:2, lg:3, xl:4}} padding={3} spacing={10}>
        {products.map( (product) => (<ProductCard key={product.id} product={product} />) )}
    </SimpleGrid>
    </>
  )
}
