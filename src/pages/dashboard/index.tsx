import { Box, Flex, Grid } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import { SwotCard } from "../../Components";
import { AsideUserInfo } from "../../PageModules";
import { SwotLayoutTypes } from "../../GlobalInterface/Swot";
import { swotAnalysisMock } from "../../Mocks";

/**
 *
 * @author andr30z
 */
const Dashboard: NextPage = () => {
  return (
    <Flex minH="100vh" position="relative" bg="blackAlpha.800" w="100%">
      <Head>
        <title>Swotlyzer - Dashboard</title>
        <meta name="description" content="Swotlyzer - user dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AsideUserInfo isOpen />

      <Grid
        as="main"
        h="200vh"
        w="100%"
        p={3}
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
    </Flex>
  );
};

export default Dashboard;
