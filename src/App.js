import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContainer from "components/ui/containers/main-container/main-container";
import { PUBLIC_ROUTES, PRIVATE_ROUTES } from "routes/routes";
import PublicRoute from "routes/public-route";
import PrivateRoute from "routes/private-route";
import AuthProvider from "context/AuthContext";
import { Channel, Home, Login, Register } from "pages";
import SideBar from "components/sidebar";
import ChannelSideBar from "components/channel/channel-sidebar";
import RowContainer from "components/ui/containers/row-container";

function App() {
  return (
    <MainContainer>
      <BrowserRouter>
        <Channel />
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
