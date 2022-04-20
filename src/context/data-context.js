import { createContext, useState, useContext, useEffect } from "react";
import { AuthContext } from "./auth-context";
import { getEmailUsername } from "utils/helpers";
import useAxiosGet from "hooks/use-axios-get";

export const DataContext = createContext();

function DataProvider({ children }) {
  const { loginHeaders } = useContext(AuthContext);
  const [allUsers, setAllUsers] = useState([]);
  const [directMessages, setDirectMessages] = useState([]);
  const [allUsersResponse, allUsersError, isAllUsersLoading, refetchAllUsers] =
    useAxiosGet("users", loginHeaders);
  const [
    channelList,
    channelListError,
    isChannelListLoading,
    refetchChannelList,
  ] = useAxiosGet("channels", loginHeaders);

  useEffect(() => {
    const controller = new AbortController();
    const fetchInterval = setInterval(() => {
      refetchAllUsers();
      refetchChannelList();
    }, 2000);

    return () => {
      clearInterval(fetchInterval);
      controller.abort();
    };
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

  const addDirectMessageUser = (id, uid) => {
    const message = directMessages.find(
      directMessage => directMessage.id === id
    );

    if (!message) {
      setDirectMessages(prevState => [...prevState, { id, uid }]);
    }
  };

  return (
    <DataContext.Provider
      value={{
        allUsers,
        isAllUsersLoading,
        refetchAllUsers,
        channelList,
        isChannelListLoading,
        refetchChannelList,
        directMessages,
        addDirectMessageUser,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
