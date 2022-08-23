import { Stack, Skeleton, Grid, GridItem, Image } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { Product, ProductImage } from "../common/Products/_data";
interface Props {
  product?: Product;
}
export const ProductImages: FC<Props> = ({ product }) => {
  const [curImage, setCurImage] = useState(1);
  const [productImages, setProductImages] = useState<ProductImage[]>([
    { id: 1, src: product?.imageUrl || "", alt: product?.name || "" },
    ...(product?.images || []),
  ]);
  useEffect(() => {
    setProductImages([
      { id: 1, src: product?.imageUrl || "", alt: product?.name || "" },
      ...(product?.images || []),
    ]);
  }, [product?.id]);

  return (
    <Stack spacing={4} minW={{ base: "full", lg: "500px" }}>
      <Image
        maxH="400px"
        objectFit="cover"
        rounded="md"
        fallback={<Skeleton />}
        src={productImages[curImage - 1].src}
      />
      <Grid justifyItems="center" gap="4" templateColumns="repeat(5, 1fr)">
        {productImages?.map((image) => (
          <GridItem key={image.id}>
            <Image
              onClick={() => setCurImage(image.id)}
              border={curImage === image.id ? "3px solid #f72f62" : "none"}
              opacity={image.id === curImage ? 0.5 : 1}
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
  );
};
