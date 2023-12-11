import { HStack, Image, Text } from "@chakra-ui/react"
import logo from '../assets/judge_10480497.webp'

export const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize='60px' />
        <Text>Nav Bar</Text>
    </HStack>
  )
}
