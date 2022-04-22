import { createContext, useState, useEffect } from "react";
import { getEmailUsername } from "utils/helpers";
import { CHANNEL_LIST_API, ALL_USERS_API } from "services/api";
import useGetRequest from "hooks/use-get-request";

export const DataContext = createContext();

function DataProvider({ children }) {
  const [allUsers, setAllUsers] = useState([]);
  const [directMessages, setDirectMessages] = useState([]);
  const [channelList, isChannelListLoading] = useGetRequest(CHANNEL_LIST_API);
  const [allUsersResponse, isAllUsersLoading] = useGetRequest(ALL_USERS_API);

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
        channelList,
        isChannelListLoading,
        directMessages,
        addDirectMessageUser,
        setDirectMessages,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
