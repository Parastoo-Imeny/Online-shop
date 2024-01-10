import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"

interface Props {
    children: ReactNode; 
}

export const ProductCardContainer = ({children} : Props) => {
  return (
    <Box
    _hover={{
      transform: 'scale(1.03)',
      transition: 'transform .15s ease-in'
    }} 
    borderRadius="10px"
    width='16rem'
    margin='1rem'>{children}</Box>
  )
}
