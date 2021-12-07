import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <React.Fragment>
      <input
        onChange={onSearchValueChange}
        className="search-bar"
        placeholder="Encuentra tu tarea"
        value={searchValue}
      />
    </React.Fragment>
  );
}

export { TodoSearch };
