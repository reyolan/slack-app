import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "context/auth-context";

function PublicRoute({ children }) {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? <Navigate to="/channels/me" /> : children;
}

export default PublicRoute;
