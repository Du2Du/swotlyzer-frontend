import React, {
  createContext,
  useMemo,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import { SwotAnalysis } from "../../GlobalInterface/Swot";

interface SwotContextInterface {
  swot: SwotAnalysis | undefined;
  setSwot: Dispatch<SetStateAction<SwotAnalysis | undefined>>;
}
export const SwotContext = createContext({} as SwotContextInterface);

export const SwotContextProvider: React.FC<
  React.PropsWithChildren<Pick<SwotContextInterface, "setSwot" | "swot">>
> = ({ swot, setSwot, children }) => {
  const value = useMemo(() => ({ swot, setSwot }), [swot, setSwot]);

  return <SwotContext.Provider value={value}>{children}</SwotContext.Provider>;
};

export function useSwotContext() {
  return useContext(SwotContext);
}
