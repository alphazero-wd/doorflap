import { Box, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import { Products } from "../common";
import { categories } from "../common/Products/categories";
import { products } from "../common/Products/_data";
import { ProductsFilter } from "./ProductsFilter";
export interface Filter {
  search: string;
  categories: string[];
  priceRange: number[];
}
export const ProductsPage = () => {
  const [filter, setFilter] = useState<Filter>({
    search: "",
    categories,
    priceRange: [0, Math.max(...products.map((prod) => prod.price))],
  });
  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{ base: "4", md: "8" }}
      py={{ base: "6", md: "8", lg: "12" }}
      as="section"
    >
      <Grid gap={5} templateColumns={{ lg: "repeat(12, 1fr)" }}>
        <GridItem colSpan={3}>
          <ProductsFilter filter={filter} setFilter={setFilter} />
        </GridItem>
        <GridItem colSpan={9}>
          <Products products={products} />
        </GridItem>
      </Grid>
    </Box>
  );
};
