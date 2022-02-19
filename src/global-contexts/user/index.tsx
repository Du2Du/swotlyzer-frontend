import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useState,
} from "react";
import { ApiUrls } from "../../ApiRoutes";
import {
  AxiosBaseResponse,
  UserInterface,
} from "../../global-interface/user-interface";
import { useGet } from "../../services/api";

interface UserContextInterface {
  data: UserInterface | void;
  getUser: () => void;
}

const UserContext = createContext<UserContextInterface>(
  {} as UserContextInterface
);

export const UserProvider: React.FC = ({ children }) => {
  const { data, mutate } = useGet<UserInterface>(ApiUrls.USER);
  const getUser = useCallback(() => {
    return mutate();
  }, [data]);

  return (
    <UserContext.Provider value={{ data, getUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  return context;
};
