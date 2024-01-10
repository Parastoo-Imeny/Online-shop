import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import ProductAttributes from "../components/ProductAttributes";
import useProduct from "../components/hooks/useProduct";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data: product, error, isLoading } = useProduct(parseInt(id!));

  if (isLoading) return <Spinner />;

  if (error) throw error;

  return (
    <>
      <Heading size="3rem">{product?.title}</Heading>
      <ExpandableText>{product?.description!}</ExpandableText>
      <ProductAttributes product={product!} />
    </>
  );
};

export default ProductDetailPage;
