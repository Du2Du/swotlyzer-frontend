import { Text } from "@chakra-ui/react";
import Router from "next/router";
import { Button } from "../..";
import { useUserContext } from "../../../GlobalContexts";
import { RoutesName } from "../../../RoutesName";

export const SectionHome = () => {
  const { user } = useUserContext();
  const redirectDashboard = () =>
    Router.push(user ? RoutesName.DASHBOARD : RoutesName.LOGIN);
  return (
    <section className="h-[80%] items-center flex flex-col justify-center">
      <div className="items-center flex flex-col justify-center text-slate-100">
        <Text
          fontSize="6xl"
          className="font-bold text-center max-w-[600px] leading-[65px]"
        >
          Quickly Create SWOTs of Your Company
        </Text>
        <Button
          label="Build for Free"
          className="mt-12 text-slate-900"
          style={{ padding: "23px 30px" }}
          onClick={redirectDashboard}
        />
      </div>
    </section>
  );
};
