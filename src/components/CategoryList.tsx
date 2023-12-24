import { Box, Button, HStack, Heading, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useCategories from "./hooks/useCategories";


interface Props {
  onSelectCategory: (category: string) => void;
  selectedCategory: string | null;
  logos: string[];
}

export const CategoryList = ({ selectedCategory, onSelectCategory, logos }: Props) => {
  const { data, error, isLoading } = useCategories();



  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <Box paddingLeft="2rem" marginY="1.5rem">
    <Heading fontSize='2xl' marginBottom='1.5rem' >Categories</Heading>
    <List>
      {data.map((category) => (
        <ListItem key={category}>
          <HStack>
            {logos.map((logo) => (category === logo) && <Image src={logo} />)}
            <Button
              fontWeight={category === selectedCategory ? "bold" : "normal"}
              onClick={() => onSelectCategory(category)}
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
