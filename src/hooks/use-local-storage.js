import { useEffect, useState } from "react";
import { getFromLocalStorage, storeInLocalStorage } from "utils/helpers";

function useLocalStorage(key, value) {
  
  const store = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  return { data, store };
}

export default useLocalStorage;
