import { createContext, useEffect, useContext } from "react";
import { AuthContext } from "./auth-context";
import resolveAxios from "services/axios-resolver";

export const AllUsersContext = createContext();

function AllUsersProvider() {
  const { headers } = useContext(AuthContext);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {}, [allUsers]);

  return <AllUsersContext.Provider>{children}</AllUsersContext.Provider>;
}

export default AllUsersProvider;
