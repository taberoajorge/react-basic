import React from "react";
import { TodoSearchUI } from "./TodoSearchUI";

function TodoSearch({searchValue, setSearchValue}) {

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
