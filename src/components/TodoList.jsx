import style from "./todoList.module.css";
import TodoItem from "./TodoItem";

// Receives the list and the functions to pass down
function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <div className={style.displaySec}>
      <ul className={style.displayTodo}>
        {/* We pass the "key" (the unique ID) and all props 
          down to the individual item component.
        */}
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
