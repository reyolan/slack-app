import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

function useFilterUser(unfilteredUsers) {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState(unfilteredUsers);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const debounceSearch = useDebounce(search => filterUsers(search), 800, users);

  const filterUsers = search => {
    if (search.length === 0) {
      return users;
    }

    console.log("search", search);
    setFilteredUsers(
      users.filter(user =>
        user.email.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  // useEffect(() => {
  //   if (users) {
  //     setFilteredUsers(users);
  //   }
  // }, [users]);

  return {
    search,
    filteredUsers,
    debounceSearch,
    setSearch,
    setUsers,
  };
}

export default useFilterUser;
