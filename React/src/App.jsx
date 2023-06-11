/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./style.css";
import { NewTodoForm } from "./newTodoForm";
import { TodoList } from "./todoList";

export default function App() {
  
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos((currentTodos) => {
          return [
            ...todos,
            { id: crypto.randomUUID(), title, completed: false },
          ];
        });
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id ) return { ...todo, completed }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  // console.log(todos);

  return (
    <>
      <NewTodoForm onSubmit={addTodo}/>
      <h1 className="header">My ToDo list</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  );
}
