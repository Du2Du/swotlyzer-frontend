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
  userData: UserInterface | null;
  setUserData: Dispatch<SetStateAction<UserInterface | null>>;
  getUser: () => Promise<AxiosBaseResponse<UserInterface>>;
}

const UserContext = createContext<UserContextInterface>(
  {} as UserContextInterface
);

export const UserProvider: React.FC = ({ children }) => {
  const [userData, setUserData] = useState<UserInterface | null>(null);
  const { data, mutate } = useGet(ApiUrls.USER);
  const getUser = useCallback(() => {
    // setUserData(data.data);
    mutate();
    return data;
  }, [userData]);

  return (
    <UserContext.Provider value={{ userData, setUserData, getUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  return context;
};
