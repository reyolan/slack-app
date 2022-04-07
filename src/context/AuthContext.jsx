import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginHeader, setLoginHeader] = useState({});

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        loginHeader,
        setLoginHeader,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
