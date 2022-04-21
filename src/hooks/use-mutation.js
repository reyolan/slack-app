import { useContext } from "react";
import { useSWRConfig } from "swr";
import { AuthContext } from "context/auth-context";

function useMutation() {
  const { loginHeaders } = useContext(AuthContext);
  const { mutate } = useSWRConfig();

  const revalidate = key => {
    mutate([key, loginHeaders]);
  };

  return revalidate;
}

export default useMutation;
