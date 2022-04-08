import { createContext, useState } from "react";

export const DataContext = createContext();

function DataProvider({ children }) {
  const [channels, setChannels] = useState([]);
  const [channelUsers, setChannelUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  return (
    <DataContext.Provider
      value={{
        channels,
        setChannels,
        channelUsers,
        setChannelUsers,
        messages,
        setMessages,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
