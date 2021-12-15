import React from "react";
import { TodoBarUI } from "./TodoBarUI";

function TodoBar({
  searchValue,
  setSearchValue,
  loading,
  setSearchMode,
  searchMode,
  onClickButton,
  setValue,
}) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <TodoBarUI
      setValue={setValue}
      searchValue={searchValue}
      onSearchValueChange={onSearchValueChange}
      onDisabled={loading}
      setSearchMode={setSearchMode}
      searchMode={searchMode}
      onCreate={onClickButton}
    />
  );
}

export { TodoBar };
