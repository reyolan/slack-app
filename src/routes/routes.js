import Login from "pages/login";
import Register from "pages/register";
import Home from "pages/home";
import Channel from "pages/channel";

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
