import { useEffect, useState } from "react";
import useDebounce from "./use-debounce";

function useFilterUser(unFilteredUsers, immediateLoading = false) {
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const debounceSearch = useDebounce(
    search => filterUsers(search),
    1000,
    unFilteredUsers
  );

  const filterUsers = search => {
    if (!search.trim().length) {
      if (immediateLoading) {
        setFilteredUsers(unFilteredUsers);
      } else {
        setFilteredUsers([]);
      }
      return;
    }
    //lagay naman ng condition dito kapag immediateloading
    console.log("search", search);
    setFilteredUsers(
      unFilteredUsers.filter(user =>
        user.uid.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  useEffect(() => {
    if (immediateLoading && unFilteredUsers) {
      setFilteredUsers(unFilteredUsers);
      return;
    }
    //if magchachange ung unfilteredUsers, dapat maupdate yung filteredUsers
  }, [unFilteredUsers]);

  const searchUsers = searchValue => {
    setSearch(searchValue);
    debounceSearch(searchValue);
  };

  // useEffect(() => {
  //   if (!search.trim().length) {
  //     setFilteredUsers(
  //       unFilteredUsers.filter(user =>
  //         user.uid.toLowerCase().includes(search.toLowerCase())
  //       )
  //     );
  //   }
  // }, [unFilteredUsers]);

  return {
    search,
    filteredUsers,
    searchUsers,
  };
}

export default useFilterUser;
