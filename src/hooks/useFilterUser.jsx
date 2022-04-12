import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

function useFilterUser(unFilteredUsers, immediateLoading = false) {
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const debounceSearch = useDebounce(
    search => filterUsers(search),
    800,
    unFilteredUsers
  );

  const filterUsers = search => {
    if (!search) {
      setFilteredUsers(unFilteredUsers);
    }

    console.log("search", search);
    setFilteredUsers(
      unFilteredUsers.filter(user =>
        user.uid.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  useEffect(() => {
    if (unFilteredUsers && immediateLoading) {
      setFilteredUsers(unFilteredUsers);
    }
  }, [unFilteredUsers, immediateLoading]);

  useEffect(() => {
    if (search) {
      setFilteredUsers(
        unFilteredUsers.filter(user =>
          user.uid.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [unFilteredUsers]);

  return {
    search,
    filteredUsers,
    debounceSearch,
    setSearch,
  };
}

export default useFilterUser;
