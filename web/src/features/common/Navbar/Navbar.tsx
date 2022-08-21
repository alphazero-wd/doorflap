import {
  Box,
  useBreakpointValue,
  useColorModeValue,
  Container,
  HStack,
  Flex,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { Logo } from "../Logo";
import { FiMenu } from "react-icons/fi";
import { navLinks } from "./navLinks";
import { Link } from "react-router-dom";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { CustomButton } from "../Button";

export const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Box
      as="section"
      w="full"
      zIndex="overlay"
      bg={useColorModeValue("white", "gray.700")}
      position="fixed"
    >
      <Box
        as="nav"
        bg="bg-surface"
        // boxShadow={useColorModeValue("sm", "sm-dark")}
      >
        <Container maxW="container.xl" py={{ base: "4", lg: "5" }}>
          <HStack spacing="10" justify="space-between">
            <Logo />
            {isDesktop ? (
              <Flex justify="space-between" flex="1">
                <HStack display={{ base: "none", lg: "flex" }} spacing="8">
                  {navLinks.map((item) => (
                    <Button
                      _hover={{ color: "brand" }}
                      variant="unstyled"
                      key={item.to}
                    >
                      <Link to={item.to}>{item.text}</Link>
                    </Button>
                  ))}
                </HStack>
                <HStack spacing="3">
                  <ColorModeSwitcher />
                  <CustomButton bg="transparent" variant="ghost">
                    <Link to="/login">Log in</Link>
                  </CustomButton>
                  <CustomButton variant="primary">
                    <Link to="/signup">Sign up</Link>
                  </CustomButton>
                </HStack>
              </Flex>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};
