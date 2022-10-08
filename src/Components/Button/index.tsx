import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";
import React from "react";

interface CustomButtonProps extends ButtonProps {
  /**
   * This param store the label color.
   */
  textColor?: string;
  /**
   * This param sotre the label of the Button.
   */
  label?: string | number;

  /**
   * This param store the borderRadius of the Button.
   */
  borderRadius?: string;
  /**
   * This param store the border of the Button.
   */
  border?: string;

}

/**
 * This component already leaves a stylized default button ready,
 *  but if you want to change it is possible.
 *
 * @author Du2Du
 */
export const Button = (
 {
  label,
  children,
  textColor,
  bg,
  borderRadius,
  border,
  onClick,
  ...rest
 }: CustomButtonProps
) => {
  return (
    <ChakraButton
      onClick={onClick}
      borderRadius={borderRadius ? borderRadius : "full"}
      border={border ? border : "1px"}
      {...rest}
    >
      {label}
      {children}
    </ChakraButton>
  );
};
