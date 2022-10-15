import { AddIcon, CheckCircleIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Flex,
  InputRightAddon,
  InputRightElement,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  useBoolean,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ColorChangeHandler, SketchPicker } from "react-color";
import { Button } from "../../Components";
import Input from "../../Components/Input";
import Modal from "../../Components/Modal";
import type { SwotAreaKeys } from "../../GlobalInterface/Swot";
import { useSwotContext } from "../../pages/swot/Context";

export const NewSwotFieldModal: React.FC<{
  areaId: SwotAreaKeys;
}> = ({ areaId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [showColorPicker, { on: openColorPicker, off: closeColorPicker }] =
    useBoolean();
  const [value, setValue] = useState("");
  const [colorValue, setColorValue] = useState("#000");
  const { setSwot } = useSwotContext();
  const addField = () => {
    if (!value.trim().length)
      return toast({
        position: "top",
        title: "Field text is empty!",
        status: "error",
        isClosable: true,
      });
    setSwot((past) => {
      if (!past) return past;

      return {
        ...past,
        [areaId]: {
          ...past[areaId],
          fields: [
            ...past[areaId].fields,
            {
              text: value,
              fontSize: 13,
              fontFamily: "sans serif",
              color: colorValue,
              fontWeight: "bold",
              _id: (past[areaId].fields.length + 1).toString(),
            },
          ],
        },
      };
    });
    onClose();
  };
  const onChangeColor: ColorChangeHandler = (color) => setColorValue(color.hex);
  return (
    <>
      <Button onClick={onOpen} size="sm" colorScheme="green" rounded="full">
        <AddIcon color="white" />
      </Button>
      <Modal
        colorScheme="blackAlpha"
        size={"xl"}
        title="New Field"
        isOpen={isOpen}
        footer={
          <Button
            rounded="lg"
            border="0"
            colorScheme="green"
            onClick={addField}
          >
            <CheckCircleIcon boxSize={23} color="white" />
          </Button>
        }
        onClose={() => {
          setValue("");
          onClose();
        }}
      >
        <Center padding={5}>
          <Input
            label="Field text"
            color={colorValue}
            rounded="md"
            roundedRight="none"
            value={value}
            setValue={setValue}
          >
            <InputRightElement position="relative">
              <Button
                roundedLeft="none"
                roundedRight="md"
                onClick={openColorPicker}
                background={colorValue}
              />
              {showColorPicker && (
                <Box bg="white" zIndex={1000} position="absolute" top={0}>
                  <SketchPicker
                    color={colorValue}
                    onChange={onChangeColor}
                    onChangeComplete={onChangeColor}
                  />
                  <Box marginTop="4">
                    <Button
                      width="full"
                      rounded="none"
                      onClick={closeColorPicker}
                      colorScheme="green"
                    >
                      <CheckCircleIcon boxSize={23} color="white" />
                    </Button>
                  </Box>
                </Box>
              )}
            </InputRightElement>
          </Input>
        </Center>
      </Modal>
    </>
  );
};
