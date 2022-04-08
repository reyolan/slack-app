import { createContext, useState, useEffect } from "react";
import { getEmailUsername } from "utils/helpers";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginHeaders, setLoginHeaders] = useState({});
  const [loggedInUser, setLoggedInUser] = useState("");
  const [loggedInId, setLoggedInId] = useState("");

  useEffect(() => {
    if (Object.keys(loginHeaders).length > 0)
      setLoggedInUser(getEmailUsername(loginHeaders.headers.uid));
  }, [loginHeaders]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        loginHeaders,
        setLoginHeaders,
        loggedInUser,
        setLoggedInId,
        loggedInId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
