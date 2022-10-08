import {
  Avatar,
  Box,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Heading,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { RoutesName } from "../../RoutesName";
import { Button } from "../../Components/Button";
import { HamburgerIcon } from "@chakra-ui/icons";

interface AsideUserInfoProps {
  isOpen: boolean;
}

export const AsideUserInfo: React.FC<AsideUserInfoProps> = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const content = (
    <>
      <Center flexDir="column">
        <Heading flex={1} size="lg">
          SWOTLYZER
        </Heading>
        <Center flex={1} flexDir="column">
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

      <Center flex={1} flexDirection="column" w="100%">
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
      <Center flex={1} w="100%">
        <NextLink href={RoutesName.LOGOUT} passHref>
          <Button
            alignSelf="flex-end"
            size="sm"
            w="100%"
            color="white"
            bg="red.400"
            as="a"
          >
            Logout
          </Button>
        </NextLink>
      </Center>
    </>
  );
  return (
    <>
      <Button
        zIndex={100}
        position="fixed"
        top={15}
        left={15}
        display={["unset", "unset", "unset", "none"]}
        colorScheme="white"
        onClick={onOpen}
        borderColor="white"
        shadow="lg"
        opacity={0.5}
        _hover={{
          opacity: 1,
        }}
      >
        <HamburgerIcon color="red" boxSize={6} />
      </Button>
      <Box
        as="aside"
        bg="whiteAlpha.900"
        height="100vh"
        position={["unset", "unset", "unset", "sticky"]}
        left="0"
        top="0"
        display={["none", "none", "none", "flex"]}
        roundedRight="3xl"
        alignItems="center"
        justifyContent="space-between"
        flexDirection="column"
        width={["20%","17%"]}
        padding={4}
      >
        {content}
      </Box>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody height="100%" display="flex" flexDirection="column">
            {content}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
