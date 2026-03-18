import { useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  // 1. State is now an array of objects
  const [todos, setTodos] = useState([]);

  // 2. Add function now creates a full object with a unique ID
  const addTodo = (text) => {
    // crypto.randomUUID() is a modern way to create a unique ID
    const newTodo = {
      id: crypto.randomUUID(),
      text: text,
      completed: false,
    };
    // We add the new todo object to the start of the array
    setTodos([newTodo, ...todos]);
  };

  // 3. New function to delete a todo by its unique ID
  const deleteTodo = (id) => {
    setTodos((currentTodos) => {
      // We filter the array, keeping only the items that
      // do NOT match the ID we want to delete
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  // 4. New function to toggle the "completed" status by its ID
  const toggleTodo = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          // Return a new object with the "completed" value flipped
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    });
  };

  return (
    <>
      <Heading />
      <div className="mainContent">
        {/* We pass the addTodo function to the form */}
        <TodoForm onSubmit={addTodo} />

        {/* We pass the list and the new functions to the List */}
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </>
  );
}

export default App;
