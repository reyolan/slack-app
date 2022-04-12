import { useContext, useEffect, useState } from "react";
import { AuthContext } from "context/auth-context";
import styles from "./dashboard.module.css";
import { useParams } from "react-router-dom";
import DashboardSidebar from "components/dashboard/dashboard-sidebar";
import MessageArea from "components/channel/message-area";
import DashboardInterface from "components/dashboard/dashboard-interface";
import useAxiosGet from "hooks/useAxiosGet";
import { getEmailUsername } from "utils/helpers";

function Dashboard() {
  const { loggedInUser, loggedInId, loginHeaders } = useContext(AuthContext);
  const { userId } = useParams();
  const [allUsers, setAllUsers] = useState([]);
  const [clickedUser, setClickedUser] = useState("");
  const [allUsersResponse, allUsersError, isLoading] = useAxiosGet(
    "users",
    loginHeaders
  );

  useEffect(() => {
    if (allUsersResponse) {
      const allUsers = allUsersResponse.data.data
        .filter(user => user.id !== loggedInId)
        .map(user => ({
          ...user,
          uid: getEmailUsername(user.uid),
        }));
      setAllUsers(allUsers);
    }
  }, [allUsersResponse]);

  useEffect(() => {
    if (userId && allUsers) {
      setClickedUser(allUsers.find(user => user.id === +userId)?.uid);
    }
  }, [userId, allUsers]);

  return (
    <>
      <DashboardSidebar
        loggedInUser={loggedInUser}
        loggedInId={loggedInId}
        allUsers={allUsers}
      />
      {userId ? (
        <MessageArea receiver="User" id={userId} name={clickedUser} />
      ) : (
        <DashboardInterface
          loggedInUser={loggedInUser}
          loggedInId={loggedInId}
        />
      )}
    </>
  );
}

export default Dashboard;
