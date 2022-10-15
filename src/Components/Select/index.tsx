import React from "react";
import {
  Flex,
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps,
  Text,
} from "@chakra-ui/react";

interface SelectProps extends ChakraSelectProps {
  options: Array<{ label: string; value: any }>;
  label?: string;
}
export const Select: React.FC<SelectProps> = ({
  placeholder = "Select",
  options,
  label,
  ...rest
}) => {
  return (
    <Flex width="100%" direction="column">
      {label && <Text>{label}</Text>}
      <ChakraSelect {...rest} placeholder={placeholder}>
        {options.map((opt, idx) => (
          <option key={idx} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </ChakraSelect>
    </Flex>
  );
};
