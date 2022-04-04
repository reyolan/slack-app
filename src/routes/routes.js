import { Login, Register, Home, Channel } from "pages";

const PUBLIC_ROUTES = [
  { path: "/", element: <Home /> },
  {
    path: "/login",
    element: <Login />,
  },
  { path: "/register", element: <Register /> },
];

const PRIVATE_ROUTES = [
  { path: "channels/:channelId", element: <Channel /> },
  { path: "channels/me/:channelId", element: <Channel /> },
];

export { PUBLIC_ROUTES, PRIVATE_ROUTES };
/*

/ 
/login
/register
/channel/:channelId
/user/messages/:userId
*/
