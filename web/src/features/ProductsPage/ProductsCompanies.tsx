import { Checkbox, FormLabel, VStack } from "@chakra-ui/react";

export const ProductsCompanies = () => {
  return (
    <VStack align="flex-start" spacing={3}>
      <FormLabel htmlFor="categories">Companies</FormLabel>
      {["Marcos", "Liddy", "IKEA", "Caressa"].map((c) => (
        <Checkbox isChecked colorScheme="red" key={c}>
          {c}
        </Checkbox>
      ))}
    </VStack>
  );
};
