import { Login, Register, Home, Channel, Dashboard, NotFound } from "pages";

const PUBLIC_ROUTES = [
  { path: "/", element: <Home /> },
  {
    path: "/login",
    element: <Login />,
  },
  { path: "/register", element: <Register /> },
];

const PRIVATE_ROUTES = [
  { path: "/channels/:channelId", element: <Channel /> },
  { path: "/channels/me/", element: <Dashboard /> },
];

const NOTFOUND_ROUTE = { path: "*", element: <NotFound /> };

export { PUBLIC_ROUTES, PRIVATE_ROUTES, NOTFOUND_ROUTE };
