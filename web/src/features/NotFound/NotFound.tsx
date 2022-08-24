import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => navigate("/"), 3000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
      as="section"
    >
      <Container py="5">
        <VStack textAlign="center" spacing={4}>
          <Heading size="lg">Oops, page not found :(</Heading>
          <Text>You will be redirected to the home page after 3 seconds</Text>
          <Text>
            If it does not redirect, click{" "}
            <Text as={Link} color="brand" _hover={{ opacity: 0.75 }} to="/">
              here
            </Text>
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};
