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
            <Heading size="xl" color="brand">
              Inferior
            </Heading>
            <Heading lineHeight="1" size="md" fontWeight="normal">
              Design Your Comfort Zone
            </Heading>
          </Stack>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            maiores, est quo voluptate tenetur sit earum cum ullam? Minima
            repellendus ratione praesentium sint odit mollitia suscipit delectus
            dolores consequuntur laboriosam?
          </Text>
          <HStack color="brand" fontWeight="bold" fontSize="lg" spacing="3">
            <Text as={Link} _hover={{ opacity: 0.75 }} to="/signup">
              Shop now
            </Text>
            <Icon color="brand" as={FaArrowRight} />
          </HStack>
        </Stack>
      </Box>
      <Flex flex="1" overflow="hidden">
        <Image
          display={{ base: "none", sm: "initial" }}
          src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGludGVyaW9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Lovely Image"
          fallback={<Skeleton />}
          maxH="450px"
          objectFit="cover"
        />
        <Image
          src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGludGVyaW9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Lovely Image"
          fallback={<Skeleton />}
          maxH="450px"
          minW="300px"
          objectFit="cover"
          flex="1"
        />
      </Flex>
    </Stack>
  </Box>
);
