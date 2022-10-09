import { Flex } from "@chakra-ui/react";
import React from "react";
import { Draggable, DraggableChildrenFn, Droppable } from "react-beautiful-dnd";
import { SwotArea } from "../../GlobalInterface/Swot";
import { SwotDraggableItem } from "./SwotDraggableItem";

interface SwotDroppableAreaProps {
  droppableId: string;
  item: SwotArea;
}

export const SwotDroppableArea = React.memo<SwotDroppableAreaProps>(
  ({ droppableId, item: { fields, bgColor } }) => {
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
  }
);
