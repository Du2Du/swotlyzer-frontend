import React, { useEffect } from "react";
import { useUserContext } from "../../GlobalContexts";

export function WithAuth<T>(Component: React.ComponentType<T>) {
  function WrapperFunction(props: T) {
    const { user, getUser } = useUserContext();

    useEffect(() => {
      if (!user) getUser();
    }, []);
    return user ? <Component {...props} /> : <>LOADING</>;
  }
  return WrapperFunction;
}
