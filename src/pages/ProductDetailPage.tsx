import { Text, Heading, Button, Spinner } from "@chakra-ui/react"
import { useState } from "react";
import useProduct from "../components/hooks/useProduct";
import { useParams } from "react-router-dom";


const ProductDetailPage = () => {
  const {id} = useParams();
  const {data: product, error, isLoading} = useProduct(parseInt(id!));
  const [setup, isSetup] = useState(false);

  if (isLoading) return <Spinner />;

  if (error) throw error;
  
  return (
    <>
    <Heading size="3rem">{product?.title}</Heading>
        <Text>
          {setup
            ? product?.description
            : product?.description.slice(0, 20) + "..."}
          <Button
            padding={0.5}
            size={"sm"}
            variant={"Link"}
            onClick={() => isSetup(!setup)}
          >
            {setup ? "Less" : "More"}
          </Button>
        </Text>
    </>
  )
}

export default ProductDetailPage