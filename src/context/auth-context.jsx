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
  const [loggedInId, setLoggedInId] = useState(0);

  useEffect(() => {
    if (Object.keys(loginHeaders).length > 0) {
      const uid = getEmailUsername(loginHeaders.headers.uid);
      setLoggedInUser(uid);
      storeInLocalStorage("token", loginHeaders);
      storeInLocalStorage("user", uid);
      return;
    }
  }, [loginHeaders]);

  useEffect(() => {
    if (loggedInId) {
      storeInLocalStorage("id", loggedInId);
    }
  }, [loggedInId]);

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

  //create function to check fi there is header, user and id in localStorage? if there is, access private route

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
