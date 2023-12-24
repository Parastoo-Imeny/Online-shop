import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { ProductGrid } from "./components/ProductGrid";
import { CategoryList } from "./components/CategoryList";
import { useState } from "react";
import { CategorySelector } from "./components/CategorySelector";
import { SortSelector } from "./components/SortSelector";
import { ProductHeading } from "./components/ProductHeading";
import electric from './assets/logo/electric.png'
import jewelery from './assets/logo/jewelery.png'

export interface ProductQuery {
  category: string | null;
  selector: string | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [productQuery, setProductQuery] = useState<ProductQuery>(
    {} as ProductQuery
  );

  const logos = [ electric, jewelery];

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        <NavBar
          onSearch={(searchText) =>
            setProductQuery({ ...productQuery, searchText })
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"}>
          <CategoryList
            logos={logos}
            selectedCategory={productQuery.category}
            onSelectCategory={(category) =>
              setProductQuery({ ...productQuery, category: category })
            }
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box padding={4}>
          <ProductHeading productQuery={productQuery} />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <CategorySelector
                categorySelector={productQuery.selector}
                onSelect={(category) =>
                  setProductQuery({ ...productQuery, selector: category })
                }
              />
            </Box>
            <SortSelector
              sortSelector={productQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setProductQuery({ ...productQuery, sortOrder })
              }
            />
          </Flex>
        </Box>
        <ProductGrid productQuery={productQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
