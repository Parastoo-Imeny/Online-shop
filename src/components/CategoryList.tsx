import { Box, Button, HStack, Heading, Image, ImageProps, List, ListItem, Spinner } from "@chakra-ui/react";
import useCategories from "./hooks/useCategories";
import useProductQueryStore from "../services/store";


interface Props {
  logos: {[key:string]: ImageProps};
}

export const CategoryList = ({ logos }: Props) => {
  const { data, error, isLoading } = useCategories();
  const setCategory = useProductQueryStore( s => s.productQuery.category)
  const setSelectedCategory = useProductQueryStore( s => s.setSelectorCategory)



  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <Box paddingLeft="2rem" marginY="1.5rem">
    <Heading fontSize='2xl' marginBottom='1.5rem' >Categories</Heading>
    <List>
      {data?.map((category) => (
        <ListItem key={category}>
          <HStack onClick={() => setSelectedCategory(category)}>
            <Image cursor="pointer"  {...logos[category]} boxSize={9} />
            <Button
              fontWeight={category === setCategory ? "bold" : "normal"}
              variant="Link"
              key={category}
            >
              {category}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </Box>
  );
};
