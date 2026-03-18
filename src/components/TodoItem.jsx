import React from "react";
import style from "./todoItem.module.css";

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li
      className={`${style.todoItem} ${
        todo.completed ? style.completedItem : ""
      }`}
    >
      <input
        type="checkbox"
        className={style.checkbox}
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />

      <span className={style.todoText}>{todo.text}</span>

      <button className={style.deleteBtn} onClick={() => deleteTodo(todo.id)}>
        &times;
      </button>
    </li>
  );
}

export default TodoItem;
