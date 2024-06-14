import React from 'react';
import { TodoList } from './components/todo-list/todo-list';
import { TodoResults } from './components/todo-results/todo-results';
import TodoForm from './components/todo-form/todo-form';
import './index.scss';

const App = () => {
  const [todos, setTodos] = React.useState([]);

  const addTodo = (newTodoLabel) => {
    const newTodo = { id: Date.now(), label: newTodoLabel, checked: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="app">
      <TodoList todos={todos} setTodos={setTodos} />
      <TodoResults todos={todos} />
      <TodoForm onAdd={addTodo} />
    </div>
  );
};

export default App;
