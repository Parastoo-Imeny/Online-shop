import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/judge_10480497.webp'
import { ColorModeSwitch } from "./ColorModeSwitch"

export const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='0.5rem 1.5rem'>
        <Image src={logo} boxSize='60px' />
        <ColorModeSwitch />
    </HStack>
  )
}
