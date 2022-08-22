import {
  Button,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Logo } from "../Logo";

export const Footer = () => (
  <Container as="footer" role="contentinfo">
    <Stack
      spacing="8"
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      py={{ base: "12", md: "16" }}
    >
      <Stack spacing={{ base: "6", md: "8" }} align="start">
        <Logo />
        <Text color="muted">Save remarkable time buying and selling</Text>
      </Stack>
      <Stack
        direction={{ base: "column-reverse", md: "column", lg: "row" }}
        spacing={{ base: "12", md: "8" }}
      >
        <Stack direction="row" spacing="8">
          <Stack spacing="4" minW="36" flex="1">
            <Text fontSize="sm" fontWeight="semibold" color="subtle">
              Main
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              <Button variant="link">Home</Button>
              <Button variant="link">About</Button>
              <Button variant="link">Products</Button>
            </Stack>
          </Stack>
          <Stack spacing="4" minW="36" flex="1">
            <Text fontSize="sm" fontWeight="semibold" color="subtle">
              Legal
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              <Button variant="link">Privacy</Button>
              <Button variant="link">Terms</Button>
              <Button variant="link">License</Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <ButtonGroup variant="ghost">
        <IconButton
          target="_blank"
          _hover={{ color: "brand" }}
          as="a"
          href="https://linkedin.com"
          aria-label="LinkedIn"
          icon={<FaLinkedin fontSize="1.25rem" />}
        />
        <IconButton
          target="_blank"
          _hover={{ color: "brand" }}
          as="a"
          href="https://facebook.com"
          aria-label="Facebook"
          icon={<FaFacebook fontSize="1.25rem" />}
        />
        <IconButton
          target="_blank"
          _hover={{ color: "brand" }}
          as="a"
          href="https://twitter.com"
          aria-label="Twitter"
          icon={<FaTwitter fontSize="1.25rem" />}
        />
      </ButtonGroup>
    </Stack>
    <Divider />
    <Stack pt="8" pb="12" align="center">
      <Text fontSize="sm" color="subtle">
        &copy; {new Date().getFullYear()} Shopal, Inc. All rights reserved.
      </Text>
    </Stack>
  </Container>
);
