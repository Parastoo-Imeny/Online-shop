import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import electric from './assets/logo/electric.png';
import jewelery from './assets/logo/jewelery.png';
import { CategoryList } from "./components/CategoryList";
import { CategorySelector } from "./components/CategorySelector";
import { NavBar } from "./components/NavBar";
import { ProductGrid } from "./components/ProductGrid";
import { ProductHeading } from "./components/ProductHeading";
import { SortSelector } from "./components/SortSelector";



function App() {

  const logos = {
    electronics: { src:electric, alt:'electric'},
    jewelery: { src:jewelery, alt:'jewelery'},
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
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
  );
}

export default App;
