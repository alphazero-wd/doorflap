import {
  Text,
  Stack,
  Heading,
  HStack,
  FormLabel,
  Slider,
  SliderMark,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Button,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { PriceTag } from "../common/Products/PriceTag";
import { Rating } from "../common/Products/Rating";
import { Product } from "../common/Products/_data";

interface Props {
  product?: Product;
}
export const AddToCartConfig: FC<Props> = ({ product }) => {
  const [qty, setQty] = useState(1);
  return (
    <Stack spacing={5} flexGrow={1}>
      <Heading size={{ base: "md", md: "lg" }}>{product?.name}</Heading>
      <HStack>
        <Rating defaultValue={product?.rating} />{" "}
        <Text>{product?.rating.toFixed(1)}</Text>
      </HStack>
      <PriceTag price={product?.price || 0.0} currency="USD" />
      <Text>{product?.description}</Text>
      <FormLabel>Select quantity ({qty})</FormLabel>
      <Slider
        value={qty}
        onChange={(value) => setQty(value)}
        aria-label="slider-ex-2"
        colorScheme="red"
        min={1}
        max={100}
        defaultValue={1}
      >
        <SliderMark
          value={qty}
          textAlign="center"
          bg="brand"
          color="white"
          mt="-10"
          ml="-5"
          w="12"
        >
          {qty}
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>

        <SliderThumb />
      </Slider>
      <Button
        bg="brand"
        w="fit-content"
        display="inline-block"
        _hover={{ opacity: 0.75 }}
      >
        Add to cart
      </Button>
    </Stack>
  );
};
