import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
    sortSelector: string;
}

export const SortSelector = ({ onSelectSortOrder, sortSelector }: Props) => {
  const sortOrder = [
    { value: "desc", label: "Price" },
    { value: "asc", label: "Rating" },
  ];

  const currentSortOrder= sortOrder.find(order => order.value === sortSelector);
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
