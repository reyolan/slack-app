import { useEffect, useState } from "react";

function useFilterUser(unFilteredUsers, immediateLoading = false) {
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    if (!immediateLoading && !search.trim().length) {
      setFilteredUsers([]);
    }

    console.log(search);

    if (search.trim().length) {
      const filteredUsers = unFilteredUsers.filter(user =>
        user.uid.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredUsers(filteredUsers);
      return;
    }

    if (immediateLoading && unFilteredUsers) {
      setFilteredUsers(unFilteredUsers);
    }

    //double check pa natin ung dependency na unfilteredusers
  }, [immediateLoading, search, unFilteredUsers]);

  return {
    search,
    filteredUsers,
    setSearch,
  };
}

export default useFilterUser;

//kapag kinlick yung hamburger icon,
//i transform translateX natin to the left then after that transition, display: none;
//so dapat magbabago className nun
