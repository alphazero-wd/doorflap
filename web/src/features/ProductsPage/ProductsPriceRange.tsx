import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  VStack,
  FormLabel,
} from "@chakra-ui/react";

export const ProductsPriceRange = () => {
  return (
    <VStack w="full" align="start">
      <FormLabel>Price</FormLabel>
      <RangeSlider
        w="full"
        aria-label={["min", "max"]}
        colorScheme="red"
        defaultValue={[0, 3099.99]}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
    </VStack>
  );
};
