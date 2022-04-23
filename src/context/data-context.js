import { createContext, useState, useMemo } from "react";
import { getEmailUsername } from "utils/helpers";
import { ALL_USERS_API } from "services/api";
import useGetRequest from "hooks/use-get-request";

export const DataContext = createContext();

function DataProvider({ children }) {
  const [directMessages, setDirectMessages] = useState([]);
  const [allUsersResponse, isAllUsersLoading] = useGetRequest(ALL_USERS_API);

  const allUsers = useMemo(() => {
    if (allUsersResponse) {
      return allUsersResponse.map(user => ({
        ...user,
        uid: getEmailUsername(user.uid),
      }));
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
