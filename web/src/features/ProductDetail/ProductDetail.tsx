import {
  Box,
  Button,
  chakra,
  Container,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Skeleton,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PriceTag } from "../common/Products/PriceTag";
import { Rating } from "../common/Products/Rating";
import { Product, products } from "../common/Products/_data";

export const ProductDetail = () => {
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [curImage, setCurImage] = useState(1);
  const [qty, setQty] = useState(1);
  const { id } = useParams();
  useEffect(() => {
    setProduct(products.find((product) => product.id === +(id as string)));
  }, []);
  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
      as="section"
    >
      <Container maxW="container.xl">
        <Stack
          spacing={{ base: "4", lg: "8" }}
          direction={{ base: "column", lg: "row" }}
        >
          <Stack spacing={4} w={{ base: "full", lg: "500px" }}>
            <Image
              maxH="400px"
              objectFit="cover"
              rounded="md"
              fallback={<Skeleton />}
              src={product?.images[curImage - 1].src}
            />
            <Grid
              justifyItems="center"
              gap="4"
              templateColumns="repeat(5, 1fr)"
            >
              {product?.images.slice(0, 5).map((image) => (
                <GridItem key={image.id}>
                  <Image
                    onClick={() => setCurImage(image.id)}
                    _hover={{ opacity: 0.5, cursor: "pointer" }}
                    rounded="md"
                    w="100px"
                    h="100px"
                    as={Image}
                    fallback={<Skeleton />}
                    objectFit="cover"
                    src={image.src}
                    alt={image.alt}
                  />
                </GridItem>
              ))}
            </Grid>
          </Stack>
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
        </Stack>
      </Container>
    </Box>
  );
};
