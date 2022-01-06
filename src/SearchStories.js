import React, { useState } from "react";

function SearchStories({ getUserQuery }) {
  const [userQuery, setUserQuery] = useState("");
  const handleOnChange = (e) => {
    setUserQuery(e.target.value);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    getUserQuery(userQuery);// setting the user query
    setUserQuery("");
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input onChange={handleOnChange} type="text" value={userQuery} />
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchStories;
