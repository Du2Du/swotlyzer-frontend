import React, { createContext, useCallback, useContext } from "react";
import { ApiUrls } from "../../ApiRoutes";
import { UserInterface } from "../../GlobalInterface/UserInterface";
import { useGet } from "../../Hooks";

interface UserContextInterface {
  data?: UserInterface;
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
