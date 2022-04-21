import { useEffect, useState } from "react";

function useFilterUser(unFilteredUsers, immediateLoading = false) {
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
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
  }, [unFilteredUsers, immediateLoading]);

  return {
    search,
    filteredUsers,
    setSearch,
  };
}

export default useFilterUser;
