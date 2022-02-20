import { useCallback, useEffect, useMemo, useState } from "react";

export const useLoadingSpinner = (initialValue = false) => {
  const [visibleSpinner, setVisibleSpinner] = useState(initialValue);

  return {
    visibleSpinner,
    setVisibleSpinner,
  };
};
