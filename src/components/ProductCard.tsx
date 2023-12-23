import {
  Card,
  CardBody,
  Text,
  Heading,
  Img,
  Button,
  HStack,
} from "@chakra-ui/react";
import { Product } from "./hooks/useProducts";
import { useState } from "react";
import { CriticScore } from "./CriticScore";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const [setup, isSetup] = useState(false);
  return (
    <Card boxShadow="3px 3px 3px 3px rgba(0, 0, 0, 0.1),1px 1px 2px 2px rgba(0, 0, 0, 0.06)" display="flex" align="center">
      <Img src={product.image} borderRadius="6px" />
      <CardBody>
        <Heading size="3rem">{product.title}</Heading>
        <Text>
          {setup
            ? product.description
            : product.description.slice(0, 20) + "..."}
          <Button
            padding={0.5}
            size={"sm"}
            variant={"Link"}
            onClick={() => isSetup(!setup)}
          >
            {setup ? "Less" : "More"}
          </Button>
        </Text>
        <HStack display="flex" justifyContent='space-between'  marginY={6}>
          <Text>${product.price}</Text>
          <CriticScore rating={product.rating} />
        </HStack>
      </CardBody>
    </Card>
  );
};
