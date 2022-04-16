import { createContext, useState, useContext, useEffect } from "react";
import { AuthContext } from "./auth-context";
import { getEmailUsername } from "utils/helpers";
import useAxiosGet from "hooks/useAxiosGet";

export const DataContext = createContext();

function DataProvider({ children }) {
  const { loginHeaders } = useContext(AuthContext);
  const [allUsers, setAllUsers] = useState([]);
  const [allUsersResponse, allUsersError, isAllUsersLoading, refetchAllUsers] =
    useAxiosGet("users", loginHeaders);
  const [
    channelList,
    channelListError,
    isChannelListLoading,
    refetchChannelList,
  ] = useAxiosGet("channels", loginHeaders);

  useEffect(() => {
    const interval = setInterval(() => {
      refetchAllUsers();
      refetchChannelList();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (allUsersResponse) {
      const allUsers = allUsersResponse.map(user => ({
        ...user,
        uid: getEmailUsername(user.uid),
      }));

      setAllUsers(allUsers);
    }
  }, [allUsersResponse]);

  return (
    <DataContext.Provider
      value={{
        allUsers,
        isAllUsersLoading,
        refetchAllUsers,
        channelList,
        isChannelListLoading,
        refetchChannelList,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
