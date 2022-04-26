import { Text } from "@chakra-ui/react";
import Image from "next/image";
import Router from "next/router";
import React from "react";
import { Button } from "../..";
import { useWindowSize } from "../../../Hooks";
import { RoutesName } from "../../../RoutesName";

export const SectionHome = () => {
  const { width } = useWindowSize();

  const redirectDashboard = () => {
    Router.push(RoutesName.DASHBOARD);
  };
  if (!width) return <>Error</>;
  return (
    <section className="text-black mt-12">
      <div className="items-center flex flex-col justify-center text-stone-800">
        <Text fontSize="3xl" className="font-bold text-center">
          Quickly create SWOTS of your company
        </Text>
        <Button
          label="Build for Free"
          className="mt-12"
          style={{ padding: "23px 30px" }}
          onClick={redirectDashboard}
        />
        {
          //Still deciding which image to put
        }
      </div>
    </section>
  );
};
