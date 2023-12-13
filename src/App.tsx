import { Grid, GridItem, Show } from '@chakra-ui/react'
import { NavBar } from './components/NavBar';
import { ProductGrid } from './components/ProductGrid';
import { CategoryList } from './components/CategoryList';

function App() {
  return(
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`}}>
      <GridItem area={'nav'}><NavBar /></GridItem>
      <Show above='lg'>
        <GridItem area={'aside'}><CategoryList /></GridItem>
      </Show>
      <GridItem area={'main'}><ProductGrid /></GridItem>
    </Grid>
  ) 
  
}

export default App;
