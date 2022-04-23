import { useEffect, useState, useMemo } from "react";
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

  const debouncedFilterUsers = useMemo(
    () => debounce((users, search) => filterUsers(users, search), 800),
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
        debouncedFilterUsers(unFilteredUsers, search);
        return;
      }

      filterUsers(unFilteredUsers, search);
    }
  }, [search, unFilteredUsers, isDebouncedSearch, debouncedFilterUsers]);

  useEffect(() => {
    return () => debouncedFilterUsers.cancel();
  }, []);

  return {
    search,
    filteredUsers,
    setSearch,
  };
}

export default useFilterUser;
