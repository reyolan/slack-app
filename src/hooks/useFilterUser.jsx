import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

function useFilterUser(users, immediateLoading = false) {
  const [search, setSearch] = useState("");
  // const [users, setUsers] = useState(unfilteredUsers);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const debounceSearch = useDebounce(search => filterUsers(search), 800, users);

  const filterUsers = search => {
    if (!search) {
      setFilteredUsers(users);
    }

    console.log("search", search);
    setFilteredUsers(
      users.filter(user =>
        user.uid.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  useEffect(() => {
    if (users && immediateLoading) {
      setFilteredUsers(users);
    }
  }, [users, immediateLoading]);

  return {
    search,
    filteredUsers,
    debounceSearch,
    setSearch,
  };
}

export default useFilterUser;
