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
  data: undefined | void;
  getUser: () => void;
}

const UserContext = createContext<UserContextInterface>(
  {} as UserContextInterface
);

export const UserProvider: React.FC = ({ children }) => {
  const { data, mutate } = useGet(ApiUrls.USER);
  const getUser = useCallback(() => {
    //porra maluco, dps eu vejo sa porra, vou ver filme
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
