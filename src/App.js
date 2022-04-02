import { BrowserRouter, Routes } from "react-router-dom";
import MainContainer from "components/ui/main-container";
import { PUBLIC_ROUTES, PRIVATE_ROUTES } from "./routes";
import PublicRoute from "./public-route";
import PrivateRoute from "./private-route";
import AuthProvider from "context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <MainContainer>
        <Routes></Routes>
      </MainContainer>
    </BrowserRouter>
  );
}

export default App;
