import { Box, Flex, Grid } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import { SwotCard } from "../../Components";
import { AsideUserInfo } from "../../PageModules";
import { SwotLayoutTypes } from "../../GlobalInterface/Swot";

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
        gridTemplateRows={"repeat(auto-fill, 350px)"}
        gridTemplateColumns={`repeat(4, auto)`}
        rowGap={8}
        justifyContent="space-around"
      >
        <SwotCard
          index={0}
          _id="1233"
          swotLayoutType={SwotLayoutTypes.DEFAULT}
          swotTemplate
          title="Teste"
          opportunities={[
            {
              _id: "1fsdf23423423",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "dfgdfgdgOK",
            },
          ]}
          weaknesses={[
            {
              _id: "21235dfgdfvvwert32535",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "dgdfgOK",
            },
          ]}
          strengths={[
            {
              _id: "34534534rtyrty53",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "OK45325",
            },
          ]}
          threats={[
            {
              _id: "rtyrtyrt2343244",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "OK123",
            },
          ]}
        />
           <SwotCard
          index={0}
          _id="1233"
          swotLayoutType={SwotLayoutTypes.DEFAULT}
          swotTemplate
          title="Teste"
          opportunities={[
            {
              _id: "1fsdf23423423",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "teste",
            },
            {
              _id: "1fsdf2342453423",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "123123121323123dsfsdfsdfsdf",
            },
            {
              _id: "1fsdf2342453423",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "123123121323123dsfsdfsdfsdf",
            },
            {
              _id: "1fsdf2342453423",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "123123121323123dsfsdfsdfsdf",
            },
            {
              _id: "1fsdf2342453423",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "123123121323123dsfsdfsdfsdf",
            },
            {
              _id: "1fsdf2342453423",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "123123121323123dsfsdfsdfsdf",
            },
            {
              _id: "1fsdf2342453423",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "123123121323123dsfsdfsdfsdf",
            },
            {
              _id: "1fsdf2342453423",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "123123121323123dsfsdfsdfsdf",
            },
            {
              _id: "1fsdf2342453423",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "123123121323123dsfsdfsdfsdf",
            },
            {
              _id: "1fsdf2342453423",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "123123121323123dsfsdfsdfsdf",
            },
            {
              _id: "1fsdf2342453423",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "123123121323123dsfsdfsdfsdf",
            },
            {
              _id: "1fsdf2342453423",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "123123121323123dsfsdfsdfsdf",
            },
            {
              _id: "1fsdf236423423",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "ASDASDASDASDASDASDASDASDASDASDASDASDA",
            },
            {
              _id: "1231231231231231312asdasdzxczxczxczxc12dfhgfghghkhgjoliop",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "teste3",
            },
            {
              _id: "1fsdf23423123124dg4098493085423",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "teste4",
            },
          ]}
          weaknesses={[
            {
              _id: "21235dfgdfvvwert32535",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "dgdfgOK",
            },
          ]}
          strengths={[
            {
              _id: "34534534rtyrty53",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "OK45325",
            },
          ]}
          threats={[
            {
              _id: "rtyrtyrt2343244",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "TESTETESTESTESTESTESTEW",
            },
          ]}
        />
           <SwotCard
          index={0}
          _id="1233"
          swotLayoutType={SwotLayoutTypes.DEFAULT}
          swotTemplate
          title="Teste"
          opportunities={[
            {
              _id: "1fsdf23423423",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "dfgdfgdgOK",
            },
          ]}
          weaknesses={[
            {
              _id: "21235dfgdfvvwert32535",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "dgdfgOK",
            },
          ]}
          strengths={[
            {
              _id: "34534534rtyrty53",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "OK45325",
            },
          ]}
          threats={[
            {
              _id: "rtyrtyrt2343244",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "OK123",
            },
          ]}
        />
           <SwotCard
          index={0}
          _id="1233"
          swotLayoutType={SwotLayoutTypes.DEFAULT}
          swotTemplate
          title="Teste"
          opportunities={[
            {
              _id: "1fsdf23423423",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "dfgdfgdgOK",
            },
          ]}
          weaknesses={[
            {
              _id: "21235dfgdfvvwert32535",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "dgdfgOK",
            },
          ]}
          strengths={[
            {
              _id: "34534534rtyrty53",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "OK45325",
            },
          ]}
          threats={[
            {
              _id: "rtyrtyrt2343244",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "OK123",
            },
          ]}
        />
           <SwotCard
          index={0}
          _id="1233"
          swotLayoutType={SwotLayoutTypes.DEFAULT}
          swotTemplate
          title="Teste"
          opportunities={[
            {
              _id: "1fsdf23423423",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "dfgdfgdgOK",
            },
          ]}
          weaknesses={[
            {
              _id: "21235dfgdfvvwert32535",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "dgdfgOK",
            },
          ]}
          strengths={[
            {
              _id: "34534534rtyrty53",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW",
            },
          ]}
          threats={[
            {
              _id: "rtyrtyrt2343244",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "OK123",
            },
          ]}
        />
           <SwotCard
          index={0}
          _id="1233"
          swotLayoutType={SwotLayoutTypes.DEFAULT}
          swotTemplate
          title="Teste"
          opportunities={[
            {
              _id: "1fsdf23423423",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "dfgdfgdgOK",
            },
          ]}
          weaknesses={[
            {
              _id: "21235dfgdfvvwert32535",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "dgdfgOK",
            },
          ]}
          strengths={[
            {
              _id: "34534534rtyrty53",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "OK45325",
            },
          ]}
          threats={[
            {
              _id: "rtyrtyrt2343244",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "OK123",
            },
          ]}
        />
           <SwotCard
          index={0}
          _id="1233"
          swotLayoutType={SwotLayoutTypes.DEFAULT}
          swotTemplate
          title="Teste"
          opportunities={[
            {
              _id: "1fsdf23423423",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "dfgdfgdgOK",
            },
          ]}
          weaknesses={[
            {
              _id: "21235dfgdfvvwert32535",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "dgdfgOK",
            },
          ]}
          strengths={[
            {
              _id: "34534534rtyrty53",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "OK45325",
            },
          ]}
          threats={[
            {
              _id: "rtyrtyrt2343244",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "OK123",
            },
          ]}
        />
        <SwotCard
          index={0}
          _id="1233"
          swotLayoutType={SwotLayoutTypes.DEFAULT}
          swotTemplate
          title="Teste"
          opportunities={[
            {
              _id: "1fsdf23423423",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "dfgdfgdgOK",
            },
          ]}
          weaknesses={[
            {
              _id: "21235dfgdfvvwert32535",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "dgdfgOK",
            },
          ]}
          strengths={[
            {
              _id: "34534534rtyrty53",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "OK45325",
            },
          ]}
          threats={[
            {
              _id: "rtyrtyrt2343244",
              color: "#fff",
              fontFamily: "sans serify",
              fontSize: 15,
              fontWeight: "bold",
              text: "OK123",
            },
          ]}
        />
      </Grid>
    </Flex>
  );
};

export default Dashboard;
