import { VStack } from "@chakra-ui/react";
import { ProductsCategories } from "./ProductsCategories";
import { ProductsCompanies } from "./ProductsCompanies";
import { ProductsPriceRange } from "./ProductsPriceRange";
import { ProductsSearch } from "./ProductsSearch";

export const ProductsFilter = () => {
  return (
    <VStack
      as="aside"
      align="flex-start"
      py={{ base: "6", md: "8", lg: "12" }}
      spacing="8"
      position="sticky"
      top="20"
    >
      <ProductsSearch />
      <ProductsCategories />
      <ProductsPriceRange />
      <ProductsCompanies />
    </VStack>
  );
};
