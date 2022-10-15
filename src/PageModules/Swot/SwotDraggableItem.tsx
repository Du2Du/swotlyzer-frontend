import { Text } from "@chakra-ui/react";
import React from "react";
import { SwotField } from "../../GlobalInterface/Swot";

interface SwotDraggableItemProps {
  item: SwotField;
}

/**
 *
 * @author andr30z
 **/
export const SwotDraggableItem: React.FC<SwotDraggableItemProps> = ({
  item: { text, _id, ...rest },
}) => {
  console.log(rest)
  return <Text {...rest}>{text}</Text>;
};
