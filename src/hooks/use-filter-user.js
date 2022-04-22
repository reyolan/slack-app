import { useEffect, useState, useCallback } from "react";
import debounce from "lodash.debounce";

function useFilterUser(
  unFilteredUsers,
  isImmediateLoading = true,
  isDebouncedSearch = false
) {
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const filterUsers = (users, search) => {
    const filteredUsers = users.filter(user =>
      user.uid.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(filteredUsers);
  };

  const debouncedFilterUsers = useCallback(
    debounce((users, search) => filterUsers(users, search), 800),
    []
  );

  useEffect(() => {
    if (!isImmediateLoading && !search.trim().length) {
      setFilteredUsers([]);
      return;
    }

    if (isImmediateLoading && unFilteredUsers) {
      setFilteredUsers(unFilteredUsers);
    }
  }, [isImmediateLoading, search, unFilteredUsers]);

  useEffect(() => {
    if (search.trim().length) {
      if (isDebouncedSearch) {
        console.log(search);
        debouncedFilterUsers(unFilteredUsers, search);
        return;
      }

      filterUsers(unFilteredUsers, search);
    }
  }, [search, unFilteredUsers, isDebouncedSearch]);

  return {
    search,
    filteredUsers,
    setSearch,
  };
}

export default useFilterUser;
