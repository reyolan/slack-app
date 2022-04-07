import { useState, useEffect } from "react";

function useFilterUser(unfilteredUsers) {
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(unfilteredUsers);

  useEffect(() => {
    setFilteredUsers(
      unfilteredUsers.filter(data =>
        data.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, unfilteredUsers]);

  return { search, filteredUsers, setSearch };
}

export default useFilterUser;
