import { Text } from "@chakra-ui/react";
import useProducts from "./hooks/useProducts";

export const ProductGrid = () => {
  const {products, error} = useProducts();

  return (
    <>
    {error && <Text>{error}</Text>}
    <ul>
        {products.map( product => <li key={product.id}>{product.title}</li>)}
    </ul>
    </>
  )
}
