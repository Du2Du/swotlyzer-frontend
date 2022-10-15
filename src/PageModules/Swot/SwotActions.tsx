import { ChevronUpIcon } from "@chakra-ui/icons";
import {
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Input from "../../Components/Input";

interface SwotActionsProps {}

/**
 *
 * @author andr30z
 **/
export const SwotActions: React.FC<SwotActionsProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [testState, setTestState] = useState("");
  const handleChange = (event: any) => setTestState(event.target.value);

  return (
    <Flex position="fixed" bottom={25} width={"100vw"}>
      <Center width={"100%"}>
        <ChevronUpIcon
          onClick={onOpen}
          bgSize={15}
          boxSize={10}
          userSelect="none"
          color="blackAlpha.500"
          cursor="pointer"
          background="whiteAlpha.300"
          borderRadius="50%"
          opacity={0.8}
          _hover={{
            opacity: 1,
            bg: "blackAlpha.500",
            color: "white",
            transition: "background-color .4s",
          }}
        />
      </Center>
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen} size="xl">
        <DrawerOverlay />
        <DrawerContent height={["70%", "50%"]}>
          <DrawerCloseButton />
          <DrawerHeader>Actions</DrawerHeader>
          <DrawerBody>
            <Stack as="section" spacing={3}>
              <Input
                value={testState}
                onChange={handleChange}
                placeholder="large size"
                size="lg"
              />
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
