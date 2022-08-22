import { Box } from "@chakra-ui/react";
import { ProductCard } from "./ProductCard";
import { Product } from "./_data";
import { ProductGrid } from "./ProductGrid";
import { FC } from "react";

interface Props {
  products: Product[];
}

export const Products: FC<Props> = ({ products }) => (
  <Box
    maxW="7xl"
    mx="auto"
    px={{ base: "4", md: "8", lg: "12" }}
    py={{ base: "6", md: "8", lg: "12" }}
  >
    <ProductGrid>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductGrid>
  </Box>
);
