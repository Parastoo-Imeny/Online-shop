import { Button, List, ListItem, Spinner } from "@chakra-ui/react";
import useCategories from "./hooks/useCategories";

interface Props {
  onSelectCategory: (category: string) => void;
  selectedCategory: string | null;
}

export const CategoryList = ({selectedCategory, onSelectCategory}:Props) => {
  const { data, error, isLoading } = useCategories();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List marginY="1.5rem" paddingLeft="2rem">
      {data.map((category) => (
        <ListItem key={category}>
          <Button fontWeight={category === selectedCategory ? 'bold' : 'normal'} onClick={() => onSelectCategory(category) } variant="Link" key={category}>
            {category}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};
