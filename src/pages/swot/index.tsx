import { Flex, Grid } from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import { useCallback, useState } from "react";
import {
  DragDropContext,
  DropResult,
  resetServerContext,
  ResponderProvided,
} from "react-beautiful-dnd";
import { SEO } from "../../Components";
import { SwotContextProvider } from "../../GlobalContexts";
import type { SwotAnalysis } from "../../GlobalInterface/Swot";
import { swotAnalysisMock } from "../../Mocks";
import { SwotActions, SwotDroppableArea } from "../../PageModules";
import { move, reorder } from "../../Utils";

type SwotAreasNames = "strengths" | "weaknesses" | "opportunities" | "threats";

const Swot: NextPage = () => {
  const [swot, setSwot] = useState<SwotAnalysis | undefined>(swotAnalysisMock);
  const onDragEnd = useCallback(
    (result: DropResult, _provided: ResponderProvided) => {
      const { source, destination } = result;

      // dropped outside the list
      if (!destination) {
        return;
      }
      const startLocation: SwotAreasNames =
        source.droppableId as SwotAreasNames;
      const targetLocation: SwotAreasNames =
        destination.droppableId as SwotAreasNames;
      if (startLocation === targetLocation) {
        setSwot((past) => {
          if (!past) return past;
          const newValue = { ...past };
          const items = reorder(
            newValue[startLocation].fields,
            source.index,
            destination.index
          );
          return {
            ...past,
            [startLocation]: { ...past![startLocation], fields: items },
          };
        });
      } else {
        setSwot((past) => {
          if (!past) return past;
          const newState = { ...past };
          const result = move(
            newState[startLocation].fields,
            newState[targetLocation].fields,
            source,
            destination
          );
          newState[startLocation].fields = result[startLocation];
          newState[targetLocation].fields = result[targetLocation];
          return newState;
        });
      }
    },
    []
  );

  return (
    <Flex
      minH={["1000px", "100vh"]}
      position="relative"
      bg="blackAlpha.800"
      minW="100vw"
    >
      <SEO />
      <SwotContextProvider setSwot={setSwot} swot={swot}>
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
            {swot && (
              <>
                <SwotDroppableArea
                  droppableId="strengths"
                  item={swot.strengths}
                />
                <SwotDroppableArea
                  droppableId="weaknesses"
                  item={swot.weaknesses}
                />
                <SwotDroppableArea
                  droppableId="opportunities"
                  item={swot.opportunities}
                />
                <SwotDroppableArea droppableId="threats" item={swot.threats} />
              </>
            )}
          </DragDropContext>
        </Grid>
      </SwotContextProvider>
    </Flex>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  resetServerContext(); // I need to call this to avoid errors when using Drag and drop features

  return { props: {} };
};

export default Swot;
