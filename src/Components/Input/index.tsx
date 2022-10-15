import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import {
  Box,
  Flex,
  Input as ChakraInput,
  InputGroup,
  InputGroupProps,
  InputProps as ChakraInputProps,
  Text,
  TextProps,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  label?: string;
  inputGroupProps?: InputGroupProps;
  labelProps?: TextProps;
  setValue?: Dispatch<SetStateAction<string>>;
  focusOnMount?: boolean;
}
const Input: React.FC<React.PropsWithChildren<InputProps>> = ({
  type = "text",
  label,
  inputGroupProps,
  labelProps,
  setValue,
  focusOnMount = false,
  children,
  ...rest
}) => {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (focusOnMount && ref.current) ref.current.focus();
  }, []);
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!setValue) return;
    setValue(e.target.value);
  };
  return (
    <Flex direction="column" width="100%">
      {label && <Text {...labelProps}>{label}</Text>}
      <InputGroup {...inputGroupProps} size={inputGroupProps?.size ?? "md"}>
        <ChakraInput
          {...rest}
          ref={ref}
          type={type}
          onChange={rest.onChange ?? onChange}
        />
        {children}
      </InputGroup>
    </Flex>
  );
};

export default Input;
