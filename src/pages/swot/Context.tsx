import React, { createContext, useMemo, useContext } from "react";
import { SwotAnalysis } from "../../GlobalInterface/Swot";

interface SwotContextInterface {
  swot: SwotAnalysis;
}
export const SwotContext = createContext({} as SwotContextInterface);

export const SwotContextProvider: React.FC<
  React.PropsWithChildren<{ swot: SwotAnalysis }>
> = ({ swot, children }) => {
  const value = useMemo(() => ({ swot }), [swot]);
  return <SwotContext.Provider value={value}>{children}</SwotContext.Provider>;
};

export function useSwotContext() {
  return useContext(SwotContext);
}
