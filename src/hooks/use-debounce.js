import { useCallback } from "react";
import debounce from "utils/debounce";

function useDebounce(callbackFn, delay, dataToSearch) {
  const debouncedFn = useCallback(
    debounce((...args) => callbackFn(...args), delay),
    [delay, dataToSearch]
  );

  return debouncedFn;
}

export default useDebounce;
