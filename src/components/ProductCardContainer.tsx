import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"

interface Props {
    children: ReactNode; 
}

export const ProductCardContainer = ({children} : Props) => {
  return (
    <Box display="flex"
    borderRadius="10px"
    boxShadow="3px 3px 3px 3px rgba(0, 0, 0, 0.1),1px 1px 2px 2px rgba(0, 0, 0, 0.06)"
    width='16rem'
    margin='1rem'>{children}</Box>
  )
}
