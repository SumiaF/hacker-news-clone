import React, { useState } from "react";
import "./App.css";

function SearchStories({ getUserQuery }) {
  const [userQuery, setUserQuery] = useState("");
  const handleOnChange = (e) => {
    setUserQuery(e.target.value);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    getUserQuery(userQuery); // setting the user query
    setUserQuery("");
  };

  return (
    <div className="field" id="searchform">
      <form onSubmit={handleSearchSubmit}>
        <input
          onChange={handleOnChange}
          type="text"
          value={userQuery}
          id="searchterm"
        />
        <button id="search">Search</button>
      </form>
    </div>
  );
}

export default SearchStories;
