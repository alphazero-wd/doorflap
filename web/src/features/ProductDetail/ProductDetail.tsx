import { Box, Container, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product, products } from "../common/Products/_data";
import { AddToCartConfig } from "./AddToCartConfig";
import { ProductImages } from "./ProductImages";

export const ProductDetail = () => {
  const [product, setProduct] = useState<Product | undefined>(undefined);

  const { id } = useParams();
  useEffect(() => {
    if (id && !isNaN(parseInt(id)))
      setProduct(products.find((product) => product.id === parseInt(id)));
  }, []);
  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
      as="section"
    >
      <Container maxW="container.xl">
        <Stack
          spacing={{ base: "4", lg: "8" }}
          direction={{ base: "column", lg: "row" }}
        >
          <ProductImages product={product} />
          <AddToCartConfig product={product} />
        </Stack>
      </Container>
    </Box>
  );
};
