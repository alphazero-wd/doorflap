import { IconButton, Tooltip } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export const CartIcon = () => {
  return (
    <Tooltip label="300" isOpen color="white" bg="brand" hasArrow>
      <span>
        <IconButton
          as={Link}
          to="/cart"
          variant="ghost"
          aria-label="Open cart"
          icon={<FaShoppingCart />}
        />
      </span>
    </Tooltip>
  );
};
