import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "context/auth-context";

function PrivateRoute({ children }) {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? children : <Navigate to="/" />;
}

export default PrivateRoute;
