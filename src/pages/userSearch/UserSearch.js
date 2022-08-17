import React, { useState } from "react";
import style from "./UserSearch.module.css";
import axios from "../../axios";
import UserCard from "../../components/card/UserCard";

function UserSearch() {
  const [query, setQuery] = useState("");
  /* this will be filled with users after searchs */
  const [users, setUsers] = useState([]);

  const fecthUsers = async () => {
    try {
      const { data } = await axios.get("/search/users?q=" + query);
      console.log(data);
      return data?.items;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const handleQueryInput = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  const handleSearchUser = async (e) => {
    e.preventDefault();
    if (query) {
      const items = await fecthUsers();
      setUsers(items);
    } else {
      console.log("query empty");
    }
  };

  return (
    <div className={style.container}>
      <div className={style.search_form}>
        <form>
          <input
            type="text"
            placeholder="Search users"
            value={query}
            onChange={handleQueryInput} /*after enter*/
          />
          <button onClick={handleSearchUser}>Search</button>
        </form>
      </div>
      <div className={style.search_results}>
        {users ? (
          users.map((user) => {
            return <UserCard user={user} key={user.id} />;
          })
        ) : (
          <h2>Write down your username</h2>
        )}
      </div>
    </div>
  );
}

export default UserSearch;
