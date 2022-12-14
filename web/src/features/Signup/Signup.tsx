import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  HStack,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthInput, Logo } from "../common";
import { OAuthButtonGroup } from "../common";

export const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack spacing="8">
        <Stack align="center" spacing="6">
          <Logo />
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={useBreakpointValue({ base: "xs", md: "sm" })}>
              Sign up and join Interior today
            </Heading>
            <HStack spacing="1" justify="center">
              <Text color="muted">Already have an account?</Text>
              <Button
                as={Link}
                to="/login"
                variant="link"
                color="brand"
                _hover={{ opacity: 0.75 }}
              >
                Login
              </Button>
            </HStack>
          </Stack>
        </Stack>
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={useBreakpointValue({ base: "transparent", sm: "bg-surface" })}
          boxShadow={{ base: "none", sm: useColorModeValue("md", "md-dark") }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack spacing="6">
            <Stack spacing={2} direction={{ base: "column", lg: "row" }}>
              <AuthInput
                labelText="First name"
                id="firstName"
                placeholder="John"
              />
              <AuthInput
                labelText="Last name"
                id="lastName"
                placeholder="Doe"
              />
            </Stack>
            <Stack spacing="5">
              <AuthInput
                labelText="Email"
                id="email"
                placeholder="johndoe@email.com"
              />
              <AuthInput
                helperText="Password must be more than 6 characters, containing at least 1 lowercase and uppercase letter, a number and a special character."
                labelText="Password"
                type="password"
                id="password"
                placeholder="??????????????????"
              />
            </Stack>
            <Button
              variant="unstyled"
              as={Link}
              to="/forgot-password"
              _hover={{ opacity: 0.75 }}
              color="brand"
              size="sm"
            >
              Forgot password?
            </Button>
            <Stack spacing="6">
              <Button
                variant="primary"
                isDisabled={
                  !data.firstName ||
                  !data.lastName ||
                  !data.email ||
                  !data.password
                }
                bg="brand"
                _hover={{ opacity: 0.75 }}
              >
                Sign up
              </Button>
              <HStack>
                <Divider />
                <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                  or continue with
                </Text>
                <Divider />
              </HStack>
              <OAuthButtonGroup />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};
