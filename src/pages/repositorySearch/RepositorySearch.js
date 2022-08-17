import React, { useState } from "react";
import style from "./RepositorySearch.module.css";
import axios from "../../axios";
import RepositoryCard from "../../components/card/RepositoryCard";

function RepositorySearch() {
  const [query, setQuery] = useState("");
  
  const [repositories, setRepositories] = useState([]); /* this will be filled with users after searchs */

  const fecthRepos = async () => {
    try {
      const { data } = await axios.get("/search/repositories?q=" + query);
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
  const handleSearchRepo = async (e) => {
    e.preventDefault();
    if (query) {
      const repos = await fecthRepos();
      setRepositories(repos);
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
            placeholder="Search repositories"
            value={query}
            onChange={handleQueryInput}
          />
          <button onClick={handleSearchRepo}>Search</button>
        </form>
      </div>
      <div className={style.search_results}>
      {repositories ? (
          repositories.map((repository) => {
            return <RepositoryCard repository={repository} key={repositories.id} />;
          })
        ) : (
          <h2>Write down your username</h2>
        )}
      </div>
    </div>
  );
}

export default RepositorySearch;
