import React from "react";
import { TodoSearchUI } from "./TodoSearchUI";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <TodoSearchUI
      searchValue={searchValue}
      onSearchValueChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
