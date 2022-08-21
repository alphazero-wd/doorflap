import { theme } from "@chakra-ui/pro-theme";
import { extendTheme } from "@chakra-ui/react";

export const myTheme = extendTheme({
  ...theme,
  colors: {
    brand: "#F76F72",
  },
});
