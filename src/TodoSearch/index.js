import React from "react";
import { TodoSearchUI } from "./TodoSearchUI";

function TodoSearch({searchValue, setSearchValue, loading}) {

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <TodoSearchUI
      loading={loading}
      searchValue={searchValue}
      onSearchValueChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
