import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import useCategories from "./hooks/useCategories";
import {BsChevronDown} from 'react-icons/bs';

interface Props {
  onSelect: (category: string) => void;
  categorySelector: string | null
}

export const CategorySelector = ({ onSelect, categorySelector }: Props) => {
  const { data, error } = useCategories();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {categorySelector || 'Category'}
      </MenuButton>
      <MenuList>
        {data.map((category) => (
          <MenuItem onClick={() => onSelect(category)} key={category}>{category}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
