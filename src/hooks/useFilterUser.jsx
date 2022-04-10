import { useState } from "react";
import useDebounce from "./useDebounce";

function useFilterUser() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const debounceSearch = useDebounce(search => filterUsers(search), 500, users);

  const filterUsers = search => {
    if (search.length === 0) {
      return;
    }
    console.log(users);
    console.log("search", search);
    setFilteredUsers(
      users.filter(user =>
        user.email.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  return {
    search,
    filteredUsers,
    filterUsers,
    debounceSearch,
    setSearch,
    setUsers,
  };
}

export default useFilterUser;
