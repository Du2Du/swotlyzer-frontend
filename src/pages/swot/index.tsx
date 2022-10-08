import { Flex, Grid } from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import {
  DragDropContext,
  DraggableLocation,
  DropResult,
  resetServerContext,
  ResponderProvided
} from "react-beautiful-dnd";
import { SEO } from "../../Components";
import type { SwotField } from "../../GlobalInterface/Swot";
import { swotAnalysisMock } from "../../Mocks";
import { SwotDroppableArea } from "../../PageModules";

const reorder = (
  list: Array<SwotField>,
  startIndex: number,
  endIndex: number
) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (
  source: Array<SwotField>,
  destination: Array<SwotField>,
  droppableSource: DraggableLocation,
  droppableDestination: DraggableLocation
) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result: { [x: string]: Array<SwotField> } = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

type SwotAreasNames = "strengths" | "weaknesses" | "opportunities" | "threats";

const Swot: NextPage = () => {
  const [swot, setSwot] = useState(swotAnalysisMock);
  const onDragEnd = (result: DropResult, _provided: ResponderProvided) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd: SwotAreasNames = source.droppableId as SwotAreasNames;
    const dInd: SwotAreasNames = destination.droppableId as SwotAreasNames;

    if (sInd === dInd) {
      const items = reorder(swot[sInd].fields, source.index, destination.index);
      setSwot((past) => ({
        ...past,
        [sInd]: { ...past[sInd], fields: items },
      }));
    } else {
      const result = move(
        swot[sInd].fields,
        swot[dInd].fields,
        source,
        destination
      );
      setSwot((past) => {
        const newState = { ...past };
        newState[sInd].fields = result[sInd];
        newState[dInd].fields = result[dInd];

        return newState;
      });
    }
  };

  return (
    <Flex minH={["1000px", "100vh"]} bg="blackAlpha.800" minW="100vw">
      <SEO />
      <Grid
        alignItems="center"
        justifyContent="center"
        as="main"
        flex={1}
        gridTemplateColumns={"1fr 1fr"}
        gridTemplateRows={"1fr 1fr"}
      >
        <DragDropContext onDragEnd={onDragEnd}>
          <SwotDroppableArea droppableId="strengths" item={swot.strengths} />
          <SwotDroppableArea droppableId="weaknesses" item={swot.weaknesses} />
          <SwotDroppableArea
            droppableId="opportunities"
            item={swot.opportunities}
          />
          <SwotDroppableArea droppableId="threats" item={swot.threats} />
        </DragDropContext>
      </Grid>
    </Flex>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  resetServerContext(); // <-- CALL RESET SERVER CONTEXT, SERVER SIDE

  return { props: {} };
};

export default Swot;
