import { AddIcon } from "@chakra-ui/icons";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Button, SEO, SwotCard } from "../../Components";
import { swotAnalysisMock } from "../../Mocks";
import { AsideUserInfo } from "../../PageModules";
import { RoutesName } from "../../RoutesName";

/**
 *
 * @author andr30z
 */
const Dashboard: NextPage = () => {
  const router = useRouter();
  return (
    <Flex minH="100vh" position="relative" bg="blackAlpha.800" w="100%">
      <SEO title="Dashboard" content="Swotlyzer - user dashboard" />
      <AsideUserInfo isOpen />
      <Box flex={1} paddingX="3" paddingTop={[20, 20, 20, 5]}>
        <Box
          as="header"
          marginBottom="10"
          justifyContent="space-between"
          alignItems="center"
          display="flex"
          w="100%"
          flexDirection="row"
        >
          <Text fontSize='3xl' color="white">Your Analysis</Text>
          <Button
            colorScheme="red"
            bg="red"
            onClick={() => router.push(RoutesName.SWOT_ANALYS_FORM)}
          >
            NEW <AddIcon marginLeft="3" color="white" />
          </Button>
        </Box>
        <Grid
          as="main"
          h="200vh"
          w="100%"
          gap={4}
          gridTemplateRows={"repeat(auto-fill, 325px)"}
          gridTemplateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
          ]}
          rowGap={8}
          justifyContent="space-around"
        >
          <SwotCard index={0} {...swotAnalysisMock} />
          <SwotCard index={1} {...swotAnalysisMock} />
          <SwotCard index={2} {...swotAnalysisMock} />
          <SwotCard index={0} {...swotAnalysisMock} />
          <SwotCard index={2} {...swotAnalysisMock} />
        </Grid>
      </Box>
    </Flex>
  );
};

export default Dashboard;
