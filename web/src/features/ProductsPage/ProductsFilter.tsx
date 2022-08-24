import {
  Checkbox,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  useRangeSlider,
  useRangeSliderContext,
  VStack,
} from "@chakra-ui/react";
import { Dispatch, FC, useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { categories } from "../common/Products/categories";
import { products } from "../common/Products/_data";
import { Filter } from "./ProductsPage";

interface Props {
  filter: Filter;
  setFilter: Dispatch<React.SetStateAction<Filter>>;
}

export const ProductsFilter: FC<Props> = ({ filter, setFilter }) => {
  const [checked, setChecked] = useState(Array(categories.length).fill(false));
  useEffect(() => {
    setFilter({
      ...filter,
      categories: categories.filter((_, i) => !checked[i]),
    });
  }, [checked]);

  return (
    <VStack
      as="aside"
      align="flex-start"
      py={{ base: "6", md: "8", lg: "12" }}
      spacing="8"
      position="sticky"
      top="20"
    >
      <VStack align="flex-start" spacing={3}>
        {/* search */}
        <InputGroup>
          <Input
            onChange={(e) => setFilter({ ...filter, search: e.target.value })}
            boxShadow="none !important"
            placeholder="Search"
            focusBorderColor="brand"
          />
          <InputRightElement children={<FiSearch />} />
        </InputGroup>

        {/* categories */}
        <FormLabel htmlFor="categories">Categories</FormLabel>
        {categories.map((c, i) => (
          <Checkbox
            onChange={(e) =>
              setChecked(
                checked.map((check, index) =>
                  index === i ? !e.target.checked : check
                )
              )
            }
            defaultChecked
            checked={checked[i]}
            id={c}
            colorScheme="red"
            value={c}
            key={c}
          >
            {c}
          </Checkbox>
        ))}

        {/* price range */}
        <VStack w="full" align="start">
          <FormLabel>
            Price (${filter.priceRange[0]} - ${filter.priceRange[1]})
          </FormLabel>
          <RangeSlider
            onChange={(val) => setFilter({ ...filter, priceRange: val })}
            w="full"
            aria-label={["min", "max"]}
            colorScheme="red"
            defaultValue={[0, Math.max(...products.map((p) => p.price))]}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>
        </VStack>
      </VStack>
    </VStack>
  );
};
