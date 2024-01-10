import { Text, SimpleGrid } from "@chakra-ui/react"
import DefinitionItem from "./DefinitionItem"
import { CriticScore } from "./CriticScore"
import Product from "../entities/Product"

interface Props {
    product: Product;
}

const ProductAttributes = ({ product }: Props) => {
  return (
    <SimpleGrid columns={2} as='dl'>
        <DefinitionItem term="Category">
          {<Text>{product?.category!}</Text>}
        </DefinitionItem>
        <DefinitionItem term="Rate">
          <CriticScore rating={product?.rating!} />
        </DefinitionItem>
      </SimpleGrid>
  )
}

export default ProductAttributes