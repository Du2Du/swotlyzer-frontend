import Router from "next/router";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
} from "react";
import { ApiUrls } from "../../ApiRoutes";
import { UserInterface } from "../../GlobalInterface/UserInterface";
import { useGet } from "../../Hooks";
import { RoutesName } from "../../RoutesName";

interface UserContextInterface {
  userData?: UserInterface;
  getUser: () => void;
}

const UserContext = createContext<UserContextInterface>(
  {} as UserContextInterface
);

export const UserProvider: React.FC = ({ children }) => {
  const { data, mutate, error } = useGet<UserInterface>(ApiUrls.USER);
  const getUser = useCallback(() => {
    mutate();
  }, []);

  useEffect(() => {
    if (error?.response?.status === 401 && Router.locale === "/dashboard")
      Router.push(RoutesName.REGISTER);
  }, [error]);

  return (
    <UserContext.Provider value={{ userData: data, getUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  return context;
};
