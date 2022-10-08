import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { RegisterInputs } from "../RegisterInputs";
import style from "./Layout.module.scss";

/**
 *This component is used to register/login users in the system.
 *
 * @param isRegister This param receives a boolean which, if true, will load the fields for user registration.
 *
 * @author Du2Du
 */
export const LayoutCredentials = (
  {
    isRegister = false
  }: {
    isRegister: boolean
  }
) => {
  const titleName = isRegister ? "Register" : "Login";
  const linkName = !isRegister ? "Register" : "Login";
  const messageName = isRegister
    ? "Already have a registration? "
    : "Don't have login? ";

  return (
    <Box className={style.registerBody}>
      <Head>
        <title>{titleName}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        className={style.boxRegister}
        p="6"
        bg="#fff"
        borderRadius="lg"
        border="1px"
        borderColor="#34aee7"
        flexDir={"column"}
      >
        <Heading fontSize="24px" textColor="#666666" textAlign="center" pb={4}>
          {titleName} now to access the website
        </Heading>
        <RegisterInputs marginYItems={2} isRegister={isRegister} />

        <Box
          borderTop="1px"
          marginTop="5"
          paddingTop="4"
          borderColor="#b1b1b1"
          className={style.loginButton}
        >
          {messageName}
          <Link href={`/${linkName.toLowerCase()}`}>{linkName}</Link>
        </Box>
      </Flex>
    </Box>
  );
};
