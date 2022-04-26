import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
} from "react";
import { ApiUrls } from "../../ApiRoutes";
import { UserInterface } from "../../GlobalInterface/UserInterface";
import { useGet } from "../../Hooks";

interface UserContextInterface {
  userData?: UserInterface;
  getUser: () => void;
  isValidating: boolean;
}

const UserContext = createContext<UserContextInterface>(
  {} as UserContextInterface
);

export const UserProvider: React.FC = ({ children }) => {
  const { data, mutate, isValidating } = useGet<UserInterface>(ApiUrls.USER);
  const getUser = useCallback(() => {
    mutate();
  }, []);

  return (
    <UserContext.Provider value={{ userData: data, getUser, isValidating }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  return context;
};
