import { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import React, {
  createContext, useCallback,
  useContext, useState
} from "react";
import { ApiUrls } from "../../ApiRoutes";
import { UserInterface } from "../../GlobalInterface/UserInterface";
import { Backend } from "../../Services/Api";

interface UserContextInterface {
  user?: UserInterface;
  getUser: () => Promise<void | AxiosResponse<UserInterface, any>>;
}

const UserContext = createContext<UserContextInterface>(
  {} as UserContextInterface
);

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<UserInterface>();
  const router = useRouter();
  const getUser = useCallback(async () => {
    return Backend.get<UserInterface>(ApiUrls.ME)
      .then((res) => {
        setUser(res.data);
        return res;
      })
      .catch(() => {
        router.push("/register");
      });
  }, []);

  return (
    <UserContext.Provider value={{ user, getUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  return context;
};
