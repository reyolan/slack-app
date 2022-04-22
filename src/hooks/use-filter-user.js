import { useEffect, useState } from "react";

function useFilterUser(unFilteredUsers, immediateLoading = false) {
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    if (!immediateLoading && !search.trim().length) {
      setFilteredUsers([]);
    }

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
  }, [immediateLoading, search, unFilteredUsers]);

  return {
    search,
    filteredUsers,
    setSearch,
  };
}

export default useFilterUser;
