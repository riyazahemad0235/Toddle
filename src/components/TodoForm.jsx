import React, { useState } from "react";
import style from "./todoForm.module.css";

// This component now *only* cares about getting new todo text
// It receives the "onSubmit" function from App.js
function TodoForm({ onSubmit }) {
  // This state is now "encapsulated" inside the form
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    // Prevents the page from refreshing on submit
    e.preventDefault();
    if (inputValue.trim() === "") return; // No empty todos

    // Call the function from App.js with the new text
    onSubmit(inputValue);

    // Clear the input field
    setInputValue("");
  };

  return (
    // We use a <form> and its onSubmit event
    <form className={style.inputSec} onSubmit={handleSubmit}>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        className={style.todoInput}
        placeholder="Enter your todo..."
      />
      {/* The button type is "submit" */}
      <button type="submit" className={style.addTodo}>
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
