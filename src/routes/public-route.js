import { Navigate } from "react-router-dom";

function PublicRoute({ children, isAuthenticated }) {
  return isAuthenticated ? <Navigate to="/channels/me" /> : children;
}

export default PublicRoute;
