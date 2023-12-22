import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import useCategories from "./hooks/useCategories";
import {BsChevronDown} from 'react-icons/bs'

export const CategorySelector = () => {
  const { data, error } = useCategories();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Category
      </MenuButton>
      <MenuList>
        {data.map((category) => (
          <MenuItem key={category}>{category}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
