import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import useCategories from "./hooks/useCategories";
import {BsChevronDown} from 'react-icons/bs';
import useProductQueryStore from "../services/store";


export const CategorySelector = () => {
  const { data, error } = useCategories();
  const productQuery = useProductQueryStore(s => s.productQuery);
  const setSelectorCategory = useProductQueryStore(s => s.setSelectorCategory);

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {productQuery.selector || 'Category'}
      </MenuButton>
      <MenuList>
        {data.map((category) => (
          <MenuItem onClick={() => setSelectorCategory(category)} key={category}>{category}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
