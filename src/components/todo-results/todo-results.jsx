// src/components/todo-results/todo-results.jsx
import * as React from "react";
import "./todo-results.scss";

export const TodoResults = ({ todos }) => {
  const completedCount = todos.filter((todo) => todo.checked).length;

  return (
    <div className="todo-results">
      <h3>Completed Tasks: {completedCount}</h3>
    </div>
  );
};
