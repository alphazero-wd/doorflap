import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Image,
  Skeleton,
  Stack,
  StackProps,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { Rating } from "./Rating";
import { PriceTag } from "./PriceTag";
import { Product } from "./_data";
import { Link } from "react-router-dom";

interface Props {
  product: Product;
  rootProps?: StackProps;
}

export const ProductCard = (props: Props) => {
  const { product, rootProps } = props;
  const { name, imageUrl, price, salePrice, rating } = product;
  return (
    <Stack spacing={useBreakpointValue({ base: "4", md: "5" })} {...rootProps}>
      <Box position="relative">
        <AspectRatio ratio={4 / 3}>
          <Image
            src={imageUrl}
            alt={name}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius={useBreakpointValue({ base: "md", md: "xl" })}
          />
        </AspectRatio>
      </Box>
      <Stack>
        <Stack spacing="1">
          <Text
            fontWeight="medium"
            color={useColorModeValue("gray.700", "gray.400")}
          >
            {name}
          </Text>
          <PriceTag price={price} salePrice={salePrice} currency="USD" />
        </Stack>
        <HStack>
          <Rating defaultValue={rating} size="sm" />
          <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
            12 Reviews
          </Text>
        </HStack>
      </Stack>
      <Stack align="center" spacing={3}>
        <Button bg="brand" _hover={{ opacity: 0.75 }} width="full">
          Add to cart
        </Button>
        <Button
          variant="link"
          as={Link}
          to={`/products/${props.product.id}`}
          textDecoration="underline"
          fontWeight="medium"
          color={useColorModeValue("gray.600", "gray.400")}
        >
          Quick shop
        </Button>
      </Stack>
    </Stack>
  );
};
