import { useCallback } from "react";
import debounce from "utils/debounce";

function useDebounce(callbackFn, delay, ...otherDependencies) {
  const debouncedFn = useCallback(
    debounce((...args) => callbackFn(...args), delay),
    [delay, ...otherDependencies]
  );

  return debouncedFn;
}

export default useDebounce;
