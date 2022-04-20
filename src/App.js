import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContainer from "components/ui/containers/main-container/main-container";
import { PUBLIC_ROUTES, PRIVATE_ROUTES, NOTFOUND_ROUTE } from "routes/routes";
import PublicRoute from "routes/public-route";
import PrivateRoute from "routes/private-route";
import AuthProvider from "context/auth-context";
import DataProvider from "context/data-context";
import Sidebar from "components/sidebar";

function App() {
  return (
    <MainContainer>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {PUBLIC_ROUTES.map((route, i) => (
              <Route
                key={i}
                path={route.path}
                element={<PublicRoute>{route.element}</PublicRoute>}
              />
            ))}

            <Route
              path="/channels"
              element={
                <PrivateRoute>
                  <DataProvider>
                    <Sidebar />
                  </DataProvider>
                </PrivateRoute>
              }
            >
              {PRIVATE_ROUTES.map((route, i) => (
                <Route
                  key={i}
                  path={route.path}
                  element={<PrivateRoute>{route.element}</PrivateRoute>}
                />
              ))}
            </Route>
            <Route
              path={NOTFOUND_ROUTE.path}
              element={NOTFOUND_ROUTE.element}
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </MainContainer>
  );
}

export default App;
