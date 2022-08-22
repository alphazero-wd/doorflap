import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputProps,
  Stack,
} from "@chakra-ui/react";
import { FC } from "react";

interface Props extends InputProps {
  labelText: string;
  helperText?: string;
  errors?: string[];
}

export const AuthInput: FC<Props> = ({
  labelText,
  helperText,
  errors,
  ...props
}) => {
  return (
    <Stack spacing="5">
      <FormControl isRequired={props.isRequired} isInvalid={props.isInvalid}>
        <FormLabel>{labelText}</FormLabel>
        <Input {...props} />
        {helperText ? (
          <FormHelperText>{helperText}</FormHelperText>
        ) : (
          (errors || []).map((error) => (
            <FormErrorMessage key={error}>{error}</FormErrorMessage>
          ))
        )}
      </FormControl>
    </Stack>
  );
};
AuthInput.defaultProps = {
  isRequired: true,
  errors: [],
  focusBorderColor: "brand",
  outline: "none",
  boxShadow: "none !important",
};
