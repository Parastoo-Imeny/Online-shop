import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useProductQueryStore from "../services/store";

export const SortSelector = () => {
  const productQuery = useProductQueryStore(s => s.productQuery);
  const setSortOrder = useProductQueryStore(s => s.setSortOrder);
  const sortOrder = [
    { value: "desc", label: "Price" },
    { value: "asc", label: "Rating" },
  ];

  const currentSortOrder= sortOrder.find(order => order.value === productQuery.sortOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: { currentSortOrder?.label || '...'}
      </MenuButton>
      <MenuList>
        {sortOrder.map((order) => (
          <MenuItem onClick={() => setSortOrder(order.value) } key={order.value} value={order.value}>{order.label}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
