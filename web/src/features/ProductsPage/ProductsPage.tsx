import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Products } from "../common";
import { products } from "../common/Products/_data";
import { ProductsFilter } from "./ProductsFilter";

export const ProductsPage = () => {
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
          <ProductsFilter />
        </GridItem>
        <GridItem colSpan={9}>
          <Products products={products} />
        </GridItem>
      </Grid>
    </Box>
  );
};
