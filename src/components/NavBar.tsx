import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/judge_10480497.webp'
import { ColorModeSwitch } from "./ColorModeSwitch"
import { SearchInput } from "./SearchInput"
import { Link } from "react-router-dom"


export const NavBar = () => {
  return (
    <HStack padding='0.5rem 1.5rem'>
        <Link to='/'>
          <Image src={logo} boxSize='60px' objectFit='cover' />
        </Link>
        <SearchInput />
        <ColorModeSwitch />
    </HStack>
  )
}
