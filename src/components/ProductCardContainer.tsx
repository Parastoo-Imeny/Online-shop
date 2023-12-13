import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"

interface Props {
    children: ReactNode; 
}

export const ProductCardContainer = ({children} : Props) => {
  return (
    <Box 
    borderRadius="10px"
    width='16rem'
    margin='1rem'>{children}</Box>
  )
}
