import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export const HeroSection = () => (
  <Box
    maxW="7xl"
    mx="auto"
    px={{ base: "0", lg: "12" }}
    py={{ base: "0", lg: "12" }}
  >
    <Stack
      direction={{ base: "column-reverse", lg: "row" }}
      spacing={{ base: "0", lg: "20" }}
    >
      <Box
        width={{ lg: "sm" }}
        px={{ base: "6", md: "8", lg: "0" }}
        py={{ base: "6", md: "8", lg: "12" }}
      >
        <Stack spacing={{ base: "4", lg: "5" }}>
          <Stack spacing={{ base: "2", lg: "4" }}>
            <Heading size={{ base: "lg", lg: "xl" }} color="brand">
              SHOPAL
            </Heading>
            <Heading
              lineHeight="1"
              size={{ base: "md", lg: "lg" }}
              fontWeight="normal"
            >
              Save remarkable time buying and selling
            </Heading>
          </Stack>
          <Text>
            Enjoy buying and selling products online via Shopal. User-friendly
            interface with simplicity allow user to buy and sell things with
            ease.
          </Text>
          <HStack color="brand" fontWeight="bold" fontSize="lg" spacing="3">
            <Text as={Link} _hover={{ opacity: 0.75 }} to="/signup">
              Discover now
            </Text>
            <Icon color="brand" as={FaArrowRight} />
          </HStack>
        </Stack>
      </Box>
      <Flex flex="1" overflow="hidden">
        <Image
          src="https://images.unsplash.com/photo-1574634534894-89d7576c8259?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
          alt="Lovely Image"
          fallback={<Skeleton />}
          maxH="450px"
          minW="300px"
          objectFit="cover"
          flex="1"
        />
        <Image
          display={{ base: "none", sm: "initial" }}
          src="https://images.unsplash.com/photo-1576072446584-4955dfe17b86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Lovely Image"
          fallback={<Skeleton />}
          maxH="450px"
          objectFit="cover"
        />
      </Flex>
    </Stack>
  </Box>
);
