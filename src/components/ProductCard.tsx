import { Card, CardBody, Text, Heading, Img, Button, HStack } from "@chakra-ui/react";
import { Product } from "./hooks/useProducts";
import { useState } from "react";
import { CriticScore } from "./CriticScore";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
    const[setup, isSetup] = useState(false);
  return (
    <Card align="center">
      <Img
        src={product.image}
        width="18rem"
        height="27rem"
        borderRadius="6px"
      />
      <CardBody>
        <Heading size="3rem">{product.title}</Heading>
        <Text>
            {setup ?  product.description : product.description.slice(0, 36) + '...'}
            <Button padding={0.5} size={'sm'} variant={'Link'} onClick={() => isSetup(!setup)}>{setup ? 'Less' : 'More'}</Button>
            </Text>
            <HStack display='flex' justifyContent='end' marginY={6}>
                <CriticScore rating={product.rating} />
            </HStack>
      </CardBody>
    </Card>
  );
};
