import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Products } from "../common";
import { products } from "../common/Products/_data";

export const FeatureProducts = () => {
  return (
    <Box as="section" id="features">
      <Container maxW="container.xl">
        <Heading size="lg" textAlign="center">
          Featured Products
        </Heading>
        <Products products={products} />
        <Flex justify="center">
          <Button
            mt={5}
            borderWidth="medium"
            as={Link}
            to="/products"
            borderStyle="solid"
            bg="transparent"
            borderColor="brand"
            color="brand"
            _hover={{ bg: "brand", color: "white" }}
          >
            See all products
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};
