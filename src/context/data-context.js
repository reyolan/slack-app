import { createContext, useState, useEffect } from "react";
import { getEmailUsername } from "utils/helpers";
import useAxiosGet from "hooks/use-axios-get";

export const DataContext = createContext();

function DataProvider({ children }) {
  const [allUsers, setAllUsers] = useState([]);
  const [directMessages, setDirectMessages] = useState([]);
  const [allUsersResponse, allUsersError, isAllUsersLoading, refetchAllUsers] =
    useAxiosGet("users", 5000);
  const [
    channelList,
    channelListError,
    isChannelListLoading,
    refetchChannelList,
  ] = useAxiosGet("channels", 3000);

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
      setDirectMessages(prevState => [{ id, uid }, ...prevState]);
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
