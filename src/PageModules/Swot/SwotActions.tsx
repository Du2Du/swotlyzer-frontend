import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex, useBoolean } from "@chakra-ui/react";
import React from "react";

interface SwotActionsProps {}



/**
 *
 * @author andr30z
 **/
export const SwotActions: React.FC<SwotActionsProps> = () => {
  const [isOpen, { toggle }] = useBoolean(false);
  const Icon = isOpen ? ChevronRightIcon : ChevronLeftIcon;

  return (
    <>
      <Flex
        position="fixed"
        h={["800px", "100vh"]}
        right={isOpen ? 0 : "-25%"}
        as="aside"
        alignItems="center"
        justify="center"
        width={["30%"]}
        transition="right .5s"
      >
        <Box
          borderLeftRadius={15}
          w="100%"
          h="80%"
          bg="whiteAlpha.900"
          paddingX={5}
          paddingY={3}
          shadow="xl"
          position="relative"
        >
          <Icon
            onClick={toggle}
            bgSize={15}
            boxSize={10}
            left={"-20px"}
            position="absolute"
            userSelect="none"
            top="50%"
            bg="white"
            shadow="lg"
            cursor="pointer"
            borderRadius="50%"
            _hover={{
              bg: "black",
              color: "white",
              transition: "background-color .4s",
            }}
          />
          test
        </Box>
      </Flex>
    </>
  );
};
