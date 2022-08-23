import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  IconButton,
  VStack,
  Text,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Logo } from "../Logo";
import { NavButtonGroup } from "./NavButtonGroup";
import { navLinks } from "./navLinks";

export const NavMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        display={{ base: "flex", lg: "none" }}
        variant="ghost"
        onClick={onOpen}
        icon={<FiMenu fontSize="1.25rem" />}
        aria-label="Open Menu"
      />
      <Drawer onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={8} justify="center" align="center" h="full">
              <Logo />
              {navLinks.map((link) => (
                <Text
                  onClick={onClose}
                  as={Link}
                  to={link.to}
                  _hover={{ color: "brand" }}
                >
                  {link.text}
                </Text>
              ))}
              <NavButtonGroup onClose={onClose} />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
