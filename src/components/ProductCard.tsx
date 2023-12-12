import { Card, CardBody, Flex, Heading, Img } from "@chakra-ui/react";
import { Product } from "./hooks/useProducts";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  return (
    <Card
      display="flex"
      align="center"
      borderRadius="10px"
      boxShadow="3px 3px 3px 3px rgba(0, 0, 0, 0.1),1px 1px 2px 2px rgba(0, 0, 0, 0.06)"
    >
      <Img
        src={product.image}
        width="18rem"
        height="27rem"
        borderRadius="6px"
      />
      <CardBody>
        <Heading size="2rem">{product.title}</Heading>
      </CardBody>
    </Card>
  );
};
