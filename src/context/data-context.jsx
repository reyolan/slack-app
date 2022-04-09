import { createContext, useState, useContext } from "react";
import { AuthContext } from "./auth-context";
import { getRequest } from "services/axios-resolver";

export const DataContext = createContext();

function DataProvider({ children }) {
  const { loginHeaders } = useContext(AuthContext);
  const [channels, setChannels] = useState([]);
  const [channelUsers, setChannelUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  const fetchChannels = () => {
    getRequest("channels", loginHeaders).then(res =>
      setChannels(res.response.data.data)
    );
  };

  return (
    <DataContext.Provider
      value={{
        channels,
        setChannels,
        channelUsers,
        setChannelUsers,
        messages,
        setMessages,
        fetchChannels,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
