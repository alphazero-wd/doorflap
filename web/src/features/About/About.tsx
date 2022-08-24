import {
  Box,
  Button,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const About = () => {
  return (
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
          px={{ base: "6", md: "8", lg: "0" }}
          py={{ base: "20", md: "8", lg: "12" }}
        >
          <Stack
            direction={{ base: "column", lg: "row" }}
            spacing={{ base: "4", lg: "5" }}
            align="center"
          >
            <Image
              rounded="md"
              w={{ base: "full", lg: "50%" }}
              src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
            <Stack spacing={{ base: "2", lg: "4" }}>
              <Heading size="xl" color="brand">
                About Inferior
              </Heading>
              <Divider />
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                adipisci, alias error facilis nihil temporibus atque deleniti
                voluptatibus nulla explicabo similique fugiat numquam. Obcaecati
                nostrum, quia nulla aliquid deserunt laudantium alias? Ratione
                dolorum voluptatum atque reiciendis nulla nam dignissimos enim
                non aperiam, labore cumque eius veniam beatae tempore, nihil
                architecto dolore nesciunt similique. Suscipit cupiditate
                corrupti ullam cum perspiciatis quo?
              </Text>
              <Button
                as={Link}
                to="/"
                w="fit-content"
                bg="brand"
                _hover={{ opacity: 0.75 }}
              >
                Back to Home
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};
