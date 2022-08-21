import { Button, ButtonProps } from "@chakra-ui/react";
import { FC } from "react";

export const CustomButton: FC<ButtonProps> = (props) => {
  return <Button {...props}>{props.children}</Button>;
};
CustomButton.defaultProps = {
  bg: "brand",
  _hover: {
    opacity: 0.75,
  },
};
