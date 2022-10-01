import Router, { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useUserContext } from "../../GlobalContexts";

export function WithAuth<T>(Component: React.ComponentType<T>) {
  function WrapperFunction(props: T) {
    const { userData, isValidating } = useUserContext();
    // const { pathname } = useRouter();

    // useEffect(() => {
    //   // if (isValidating) return;
    //   switch (pathname) {
    //     case "/login":
    //     case "/register":
    //     case "/":
    //       if (userData?._id) Router.push("/dashboard");
    //       break;
    //     default:
    //       if (!userData?._id) Router.push("/login");
    //       break;
    //   }
    // }, [isValidating, pathname, userData]);
    // // if (isValidating) return;
    // if (userData?._id) return <Component {...(props as unknown as T)} />;
    return <></>;
  }
  return WrapperFunction;
}
