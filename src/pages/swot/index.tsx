import { Box, Flex } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import { SEO } from "../../Components";

const Swot: NextPage = () => {
  return (
    <Flex minH="100vh" position="relative" bg="blackAlpha.800" w="100%">
      <SEO />
    </Flex>
  );
};
export default Swot;
