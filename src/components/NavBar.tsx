import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/judge_10480497.webp'
import { ColorModeSwitch } from "./ColorModeSwitch"
import { SearchInput } from "./SearchInput"

interface Props {
  onSearch: (searchText: string) => void;
}

export const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding='0.5rem 1.5rem'>
        <Image src={logo} boxSize='60px' />
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
    </HStack>
  )
}
