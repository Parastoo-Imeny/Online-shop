import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import useData from "./hooks/useData"

export const SortSelector = () => {

  return (
    <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown />}>
      Sort
    </MenuButton>
    <MenuList>
        <option value="">d</option>
      {/* {data.map((category: any) => (
        <MenuItem onClick={() => onSelect(category)} key={category}>{category}</MenuItem>
      ))} */}
    </MenuList>
  </Menu>
  )
}
