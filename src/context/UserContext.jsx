import { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [headers, setHeaders] = useState({});

  return (
    <UserContext.Provider value={(headers, setHeaders)}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
