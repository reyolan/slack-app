import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContainer from "components/ui/containers/main-container/main-container";
import { PUBLIC_ROUTES, PRIVATE_ROUTES } from "routes/routes";
import PublicRoute from "routes/public-route";
import PrivateRoute from "routes/private-route";
import AuthProvider from "context/AuthContext";
import { Home, Login, Register } from "pages";

function App() {
  return (
    <MainContainer>
      <BrowserRouter>
        <Register />
        {/* <Routes>
          <PublicRoute>
            {PUBLIC_ROUTES.map((route, i) => (
              <Route key={i} path={route.path} element={route.element} />
            ))}
          </PublicRoute>
          <PrivateRoute>
            {PRIVATE_ROUTES.map((route, i) => (
              <Route key={i} path={route.path} element={route.element} />
            ))}
          </PrivateRoute>
        </Routes> */}
      </BrowserRouter>
    </MainContainer>
  );
}

export default App;
