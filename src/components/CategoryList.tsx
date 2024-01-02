import { Box, Button, HStack, Heading, Image, ImageProps, List, ListItem, Spinner } from "@chakra-ui/react";
import useCategories from "./hooks/useCategories";


interface Props {
  onSelectCategory: (category: string) => void;
  selectedCategory: string | null;
  logos: {[key:string]: ImageProps};
}

export const CategoryList = ({ selectedCategory, onSelectCategory, logos }: Props) => {
  const { data, error, isLoading } = useCategories();



  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <Box paddingLeft="2rem" marginY="1.5rem">
    <Heading fontSize='2xl' marginBottom='1.5rem' >Categories</Heading>
    <List>
      {data?.map((category) => (
        <ListItem key={category}>
          <HStack onClick={() => onSelectCategory(category)}>
            <Image cursor="pointer"  {...logos[category]} boxSize={9} />
            <Button
              fontWeight={category === selectedCategory ? "bold" : "normal"}
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
