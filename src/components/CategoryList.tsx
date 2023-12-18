import { List, ListItem, Spinner } from "@chakra-ui/react";
import useCategories from "./hooks/useCategories";

export const CategoryList = () => {
  const { data, error, isLoading } = useCategories();
  
  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
      <List marginY="1.5rem" paddingLeft="2rem">
        {data.map((category) => (
          <ListItem key={category}>{category}</ListItem>
        ))}
      </List>
  );
};
