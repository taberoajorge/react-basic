import React from "react";
import { TodoBarUI } from "./TodoBarUI";

function TodoBar({
  searchValue,
  setSearchValue,
  loading,
  setSearchMode,
  searchMode,
  createTodo
}) {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <TodoBarUI
      searchValue={searchValue}
      onSearchValueChange={onSearchValueChange}
      onDisabled={loading}
      setSearchMode={setSearchMode}
      searchMode={searchMode}
      createTodo={createTodo}
    />
  );
}

export { TodoBar };
