import { Box, Grid, GridItem, Show, Flex } from "@chakra-ui/react"
import { CategoryList } from "../components/CategoryList"
import { CategorySelector } from "../components/CategorySelector"
import { ProductGrid } from "../components/ProductGrid"
import { ProductHeading } from "../components/ProductHeading"
import { SortSelector } from "../components/SortSelector"
import electric from '../assets/logo/electric.png'
import jewelery from '../assets/logo/jewelery.png';

const HomePage = () => {

    const logos = {
        electronics: { src:electric, alt:'electric'},
        jewelery: { src:jewelery, alt:'jewelery'},
      };

  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
    >
      <Show above="lg">
        <GridItem area={"aside"}>
          <CategoryList
            logos={logos}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box padding={4}>
          <ProductHeading />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <CategorySelector />
            </Box>
            <SortSelector />
          </Flex>
        </Box>
        <ProductGrid />
      </GridItem>
    </Grid>
  )
}

export default HomePage