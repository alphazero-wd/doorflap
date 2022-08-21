import { chakra, ImageProps, forwardRef } from "@chakra-ui/react";
import logo from "../../logo.png";

export const Logo = forwardRef<ImageProps, "img">(() => {
  return <chakra.img src={logo} w="40" />;
});
