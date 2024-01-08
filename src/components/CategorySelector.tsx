import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import useCategories from "./hooks/useCategories";
import {BsChevronDown} from 'react-icons/bs';
import useProductQueryStore from "../services/store";

interface Props {
  onSelect: (category: string) => void;
}

export const CategorySelector = ({ onSelect }: Props) => {
  const { data, error } = useCategories();
  const productQuery = useProductQueryStore(s => s.productQuery);

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {productQuery.selector || 'Category'}
      </MenuButton>
      <MenuList>
        {data.map((category) => (
          <MenuItem onClick={() => onSelect(category)} key={category}>{category}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
