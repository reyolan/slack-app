import { useContext, useEffect, useState } from "react";
import { AuthContext } from "context/auth-context";
import { DataContext } from "context/data-context";
import { useParams } from "react-router-dom";
import DashboardSidebar from "components/dashboard/dashboard-sidebar";
import MessageArea from "components/message-area";
import DashboardInterface from "components/dashboard/dashboard-interface";
import LoadingContainer from "components/ui/containers/loading-container";

function Dashboard() {
  const { loggedInUser, loggedInId } = useContext(AuthContext);
  const { allUsers, isAllUsersLoading } = useContext(DataContext);
  const { userId } = useParams();
  const [filteredUsers, setFilteredUsers] = useState(allUsers);
  const [clickedUser, setClickedUser] = useState("");

  useEffect(() => {
    if (allUsers) {
      const filteredUsers = allUsers.filter(user => user.id !== loggedInId);
      setFilteredUsers(filteredUsers);
    }
  }, [allUsers]);

  useEffect(() => {
    if (userId && allUsers) {
      setClickedUser(allUsers.find(user => user.id === +userId)?.uid);
    }
  }, [userId, allUsers]);

  return (
    <>
      {!isAllUsersLoading ? (
        <>
          <DashboardSidebar
            loggedInUser={loggedInUser}
            loggedInId={loggedInId}
            allUsers={filteredUsers}
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
      ) : (
        <LoadingContainer />
      )}
    </>
  );
}

export default Dashboard;
