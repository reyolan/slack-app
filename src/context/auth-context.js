import { createContext, useState, useEffect } from "react";
import {
  getEmailUsername,
  getFromLocalStorage,
  storeInLocalStorage,
} from "utils/helpers";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginHeaders, setLoginHeaders] = useState({});
  const [loggedInUser, setLoggedInUser] = useState("");
  const [loggedInId, setLoggedInId] = useState(-1);

  useEffect(() => {
    if (Object.keys(loginHeaders).length > 0) {
      const uid = getEmailUsername(loginHeaders.headers.uid);
      setLoggedInUser(uid);
      storeInLocalStorage("token", loginHeaders);
      storeInLocalStorage("user", uid);
    }
    console.log(loginHeaders);
  }, [loginHeaders]);

  useEffect(() => {
    const token = getFromLocalStorage("token");
    const user = getFromLocalStorage("user");
    const id = getFromLocalStorage("id");

    if (token && user && id) {
      setLoginHeaders(token);
      setLoggedInUser(user);
      setLoggedInId(id);
      setIsAuthenticated(true);
    }
  }, []);

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
