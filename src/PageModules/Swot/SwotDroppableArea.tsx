import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Divider,
  Flex,
  InputRightElement,
  Text,
  useBoolean,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Draggable, DraggableChildrenFn, Droppable } from "react-beautiful-dnd";
import Input from "../../Components/Input";
import { SwotArea, SwotAreaKeys } from "../../GlobalInterface/Swot";
import { NewSwotFieldModal } from "./NewSwotFieldModal";
import { SwotDraggableItem } from "./SwotDraggableItem";

interface SwotDroppableAreaProps {
  droppableId: SwotAreaKeys;
  item: SwotArea;
}

export const SwotDroppableArea: React.FC<SwotDroppableAreaProps> = ({
  droppableId,
  item: { fields, bgColor, title: swotTitle },
}) => {
  const [title, setTitle] = useState(swotTitle ?? "");
  const [openInput, { on, off }] = useBoolean();

  const onCloseTitleInput = () => {
    setTitle(swotTitle);
    off();
  };
  const renderDroppableClone: DraggableChildrenFn = (
    provided,
    _snapshot,
    rubric
  ) => {
    const item = fields[rubric.source.index];
    return (
      <div
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        id={item._id}
        //meowwww
      >
        <SwotDraggableItem item={item} />
      </div>
    );
  };

  const inputColor =
    bgColor === "white" || bgColor === "#fff" ? "black" : "white";

  return (
    <Droppable droppableId={droppableId} renderClone={renderDroppableClone}>
      {(provided, _snapshot) => (
        <Flex
          bgColor={bgColor}
          ref={provided.innerRef}
          {...provided.droppableProps}
          flexDirection="column"
          p={3}
          h="100%"
          w="100%"
        >
          {openInput ? (
            <Input
              focusOnMount
              height="40px"
              mb="1rem"
              color={inputColor}
              value={title}
              rounded="3xl"
              setValue={setTitle}
            >
              <InputRightElement
                width="9%"
                alignItems="center"
                display="flex"
                justifyContent="space-evenly"
                padding="7px"
                roundedRight="3xl"
                bg="white"
                paddingRight="10px"
                children={
                  <>
                    <CheckIcon
                      marginRight="10px"
                      boxSize={5}
                      color="green.500"
                      cursor="pointer"
                    />
                    <CloseIcon
                      onClick={onCloseTitleInput}
                      boxSize={4}
                      cursor="pointer"
                      color="red"
                    />
                  </>
                }
              />
            </Input>
          ) : (
            <>
              <Flex as="header" direction="row" justify="space-between">
                <Text
                  fontSize="1.3em"
                  color={inputColor}
                  height="40px"
                  onDoubleClick={on}
                >
                  {swotTitle}
                </Text>
                <NewSwotFieldModal areaId={droppableId} />
              </Flex>
              <Divider mb="1rem" orientation="horizontal" />
            </>
          )}
          {fields.map((item, index) => (
            <Draggable key={item._id} draggableId={item._id} index={index}>
              {renderDroppableClone}
            </Draggable>
          ))}
          {provided.placeholder}
        </Flex>
      )}
    </Droppable>
  );
};
