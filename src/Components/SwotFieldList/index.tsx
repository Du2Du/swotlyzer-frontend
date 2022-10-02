import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { SwotAnalysis, SwotField } from "../../GlobalInterface/Swot";

const PrintSwotField: React.FC<{ list: Array<SwotField> }> = ({ list }) => {
  return (
    <Box display="flex" overflow="hidden" flex={1} flexDirection={"column"} alignItems="baseline">
      {list.map((item, index) => (
        <Box width="100%" maxWidth={330 / 2} key={item._id + "-" + index}>
          <Text textAlign="start"  noOfLines={1}>
            {item.text}
          </Text>
        </Box>
      ))}
    </Box>
  );
};

/**
 *
 * @author andr30z
 **/
export const SwotFiedList: React.FC<SwotAnalysis> = ({
  opportunities,
  strengths,
  threats,
  weaknesses,
}) => {
  return (
    <Box
      width={300}
      height={500}
      display="grid"
      gridTemplateRows={"auto auto"}
      gridTemplateColumns={"1fr 1fr"}
    >
      <PrintSwotField list={opportunities} />
      <PrintSwotField list={strengths} />
      <PrintSwotField list={threats} />
      <PrintSwotField list={weaknesses} />
    </Box>
  );
};
