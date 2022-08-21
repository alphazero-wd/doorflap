import {
  Box,
  Container,
  Icon,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiInfo } from "react-icons/fi";

export const Banner = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box
      as="section"
      pb={{ base: "12", md: "24" }}
      position="relative"
      top={{ lg: "88.212px", base: "80.213px" }}
    >
      <Box bg="bg-surface" boxShadow={useColorModeValue("sm", "sm-dark")}>
        <Container py={{ base: "4", md: "2.5" }} position="relative">
          <Stack
            flexGrow="1"
            spacing="4"
            direction={{ base: "column", md: "row" }}
            align={{ base: "start", md: "center" }}
          >
            {!isMobile && <Icon as={FiInfo} boxSize="6" />}
            <Stack
              spacing={{ base: "0.5", md: "1.5" }}
              pe={{ base: "4", sm: "0" }}
            >
              <Text fontWeight="medium">
                Warning: This is not a genuine e-commerce website
              </Text>
              <Text color="muted">
                This is just a coding project. Buying products will not result
                in loss of money
              </Text>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};
