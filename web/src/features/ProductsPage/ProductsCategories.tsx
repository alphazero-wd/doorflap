import { FormLabel, VStack, Text, Checkbox } from "@chakra-ui/react";

export const ProductsCategories = () => {
  return (
    <VStack align="flex-start" spacing={3}>
      <FormLabel htmlFor="categories">Categories</FormLabel>
      {["Office", "Living Room", "Kitchen", "Bedroom", "Dining", "Kids"].map(
        (c) => (
          <Checkbox isChecked colorScheme="red" key={c}>
            {c}
          </Checkbox>
        )
      )}
    </VStack>
  );
};
