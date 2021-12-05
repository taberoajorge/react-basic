import React from "react";
import './TodoSearch.css';

function TodoSearch(props) {
  return (
    <React.Fragment>
      <input className="search-bar" placeholder="Encuentra tu tarea" />
      {props.children}
    </React.Fragment>
  );
}

export { TodoSearch };
