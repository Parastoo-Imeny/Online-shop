import { Heading } from "@chakra-ui/react"
import { ProductQuery } from "../App"

interface Props {
    productQuery: ProductQuery;
}

export const ProductHeading = ({ productQuery }: Props) => {
  return (
    <Heading marginY={9} fontSize='5xl'>{productQuery.category} Product</Heading>
  )
}
