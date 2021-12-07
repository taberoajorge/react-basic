import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  const onComplete = () => {
    alert(`Ya completaste la tarea: ${props.text}`);
  };
  const onDelete = () => {
    alert(`Borraste la tarea: ${props.text}`);
  };

  return (
    <li className="todo-item">
      <input
        className={`input-checkbox ${props.completed}`}
        type="checkbox"
        id="checkbox"
      />

      <label
        className={`checkbox-label  ${props.completed && "checked"}`}
        onClick={onComplete}
        id="label"
        for="checkbox"
      >
        <div className={` ${props.completed && "aver"} `}></div>

        {props.text}
      </label>

      <button 
      
      onClick={onDelete}

      className="button-delete">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
          <path
            fill="#494C6B"
            fill-rule="evenodd"
            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
          />
        </svg>
      </button>
    </li>
  );
}
export { TodoItem };
