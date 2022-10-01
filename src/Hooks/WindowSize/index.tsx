import { useEffect, useState } from "react";

export interface WindowSizeInterface {
  width: number | undefined;
  height: number | undefined;
}

/**
 * This hook is used to capture the screen size
 *
 * @author Du2Du
 */
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSizeInterface>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowSize;
};
