import { Heading } from "@chakra-ui/react"
import useProductQueryStore from "../services/store"


export const ProductHeading = () => {
  const productQuery =useProductQueryStore(s => s.productQuery)
  return (
    <Heading marginY={9} fontSize='5xl'>{productQuery.category} Product</Heading>
  )
}
