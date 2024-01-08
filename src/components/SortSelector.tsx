import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useProductQueryStore from "../services/store";

interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
}

export const SortSelector = ({ onSelectSortOrder }: Props) => {
  const productQuery = useProductQueryStore(s => s.productQuery);
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
          <MenuItem onClick={() => onSelectSortOrder(order.value) } key={order.value} value={order.value}>{order.label}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
