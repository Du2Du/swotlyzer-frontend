import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useUserContext } from "../../GlobalContexts";
import LoginUser from "../../pages/login";

export function WithAuth<T>(Component: React.ComponentType<T>) {
  function WrapperFunction(props: T) {
    const { userData, isValidating } = useUserContext();
    const { pathname } = useRouter();

    useEffect(() => {
      // if (isValidating) return;
      switch (pathname) {
        case "/login":
        case "/register":
          if (userData) Router.push("/");
          break;
        default:
          Router.push("/");
          break;
      }
    }, [isValidating, pathname, userData]);
    // if (isValidating) return;
    if (userData?._id) return <Component {...props} />;
    return <></>;
  }
  return WrapperFunction;
}
