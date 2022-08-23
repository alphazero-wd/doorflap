import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

export const ProductsSearch = () => {
  return (
    <InputGroup>
      <Input
        boxShadow="none !important"
        placeholder="Search"
        focusBorderColor="brand"
      />
      <InputRightElement children={<FiSearch />} />
    </InputGroup>
  );
};
