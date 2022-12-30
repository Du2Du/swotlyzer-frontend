import { AddIcon, CheckCircleIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  InputRightElement,
  Text,
  TextProps,
  useBoolean,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ColorChangeHandler, SketchPicker } from "react-color";
import { Button, Select } from "../../Components";
import Input from "../../Components/Input";
import Modal from "../../Components/Modal";
import { useSwotContext } from "../../GlobalContexts";
import type { SwotAreaKeys, SwotField } from "../../GlobalInterface/Swot";

type SelectOpts = Omit<SwotField, "text" | "color" | "_id">;
const fontFamilies: { [x: string]: SelectOpts } = {
  "Ubuntu - bold - 700": {
    fontFamily: "Ubuntu",
    fontStyle: "bold",
    fontWeight: "700",
    fontSize: 20,
  },
  "Ubuntu - regular - 400": {
    fontFamily: "Ubuntu",
    fontStyle: "regular",
    fontWeight: "400",
    fontSize: 20,
  },
  "Roboto Condensed - light - 300": {
    fontFamily: "Roboto Condensed",
    fontStyle: "light",
    fontWeight: "300",
    fontSize: 20,
  },
  "Roboto Condensed - bold - 700": {
    fontFamily: "Roboto Condensed",
    fontSize: 20,
    fontStyle: "bold",
    fontWeight: "700",
  },
  "Anton - regular - 400": {
    fontFamily: "Anton",
    fontSize: 20,
    fontStyle: "regular",
    fontWeight: "400",
  },
};

export const NewSwotFieldModal: React.FC<{
  areaId: SwotAreaKeys;
}> = ({ areaId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [showColorPicker, { on: openColorPicker, off: closeColorPicker }] =
    useBoolean();
  const [value, setValue] = useState("New Field");
  const [colorValue, setColorValue] = useState("#000");

  const [textStyles, setTextStyles] = useState("Ubuntu - bold - 700");
  const { setSwot } = useSwotContext();
  const resetState = () => {
    setValue("");
    onClose();
  };
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
              ...fontFamilies[textStyles],
              text: value,
              color: colorValue,
              _id: areaId + "-" + (past[areaId].fields.length + 1).toString(),
            },
          ],
        },
      };
    });
    resetState();
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
        onClose={resetState}
      >
        <Center gap={3} padding={5} flexDirection="column">
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
          <Select
            label="Font Styles"
            value={textStyles}
            onChange={(e) => {
              setTextStyles(e.target.value);
            }}
            options={Object.values(fontFamilies).map(
              ({ fontFamily, fontWeight, fontStyle }) => {
                const value = `${fontFamily} - ${fontStyle} - ${fontWeight}`;

                return {
                  label: value,
                  value,
                };
              }
            )}
          />

          <Center w="100%" minH={150}>
            <Text
              maxW="100%"
              fontSize="8xl"
              textAlign="center"
              {...(fontFamilies[textStyles] as TextProps)}
              color={colorValue}
            >
              {value}
            </Text>
          </Center>
        </Center>
      </Modal>
    </>
  );
};
