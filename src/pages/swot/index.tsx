import { Flex, Grid } from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import {
  DragDropContext,
  DropResult,
  resetServerContext,
  ResponderProvided,
} from "react-beautiful-dnd";
import { SEO } from "../../Components";
import { swotAnalysisMock } from "../../Mocks";
import { SwotActions, SwotDroppableArea } from "../../PageModules";
import { move, reorder } from "./utils";

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
    <Flex
      minH={["1000px", "100vh"]}
      position="relative"
      bg="blackAlpha.800"
      minW="100vw"
    >
      <SEO />
      <SwotActions />
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
  resetServerContext(); // I need to call this to avoid errors when using Drag and drop features

  return { props: {} };
};

export default Swot;
