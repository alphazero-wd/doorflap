import { HStack, Button } from "@chakra-ui/react";
import { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
  onClose?: () => void;
}

export const NavButtonGroup: FC<Props> = ({ onClose }) => {
  return (
    <HStack spacing="3">
      <Button variant="ghost" onClick={onClose}>
        <Link to="/login">Log in</Link>
      </Button>
      <Button
        _hover={{ opacity: 0.75 }}
        bg="brand"
        onClick={onClose}
        variant="primary"
      >
        <Link to="/signup">Sign up</Link>
      </Button>
    </HStack>
  );
};
