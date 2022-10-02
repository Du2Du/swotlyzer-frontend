import { Avatar, Box, Center, Heading, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { RoutesName } from "../../RoutesName";
import { Button } from "../../Components/Button";

interface AsideUserInfoProps {
  isOpen: boolean;
}

export const AsideUserInfo: React.FC<AsideUserInfoProps> = ({}) => {
  return (
    <Box
      as="aside"
      bg="whiteAlpha.900"
      height="100vh"
      position="sticky"
      left="0"
      top="0"
      display="flex"
      roundedRight="3xl"
      alignItems="center"
      justifyContent="space-between"
      flexDirection="column"
      width="10%"
      padding={4}
      
    >
      <Center flexDir="column">
        <Heading size="lg">SWOTLYZER</Heading>
        <Center flexDir="column">
          <Avatar
            loading="eager"
            size="2xl"
            name="André Luiz"
            src="https://bit.ly/dan-abramov"
          />
          <Heading marginTop={3} size="md" noOfLines={1}>
            André Luiz
          </Heading>
        </Center>
      </Center>

      <Center flexDirection="column" w="100%">
        <NextLink href={RoutesName.PROFILE} passHref>
          <Button size="sm" w="100%" color="white" bg="blackAlpha.800" as="a">
            Profile
          </Button>
        </NextLink>
        <NextLink href={RoutesName.SWOT_ANALYS_FORM} passHref>
          <Button size="sm" w="100%" color="white" bg="blackAlpha.800" as="a">
            New SWOT Diagram
          </Button>
        </NextLink>
      </Center>
      <Center w="100%" alignSelf="flex-end">
        <NextLink href={RoutesName.LOGOUT} passHref>
          <Button size="sm" w="100%" color="white" bg="red.400" as="a">
            Logout
          </Button>
        </NextLink>
      </Center>
    </Box>
  );
};
