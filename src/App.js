import React, { useEffect, useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const storedData = localStorage.getItem('todoList');
  const initialValue = storedData ? JSON.parse(storedData) : []
  const [todoList, setTodoList] = useState(initialValue);

  const addTodo = todo => {
    const todoObj = {
      id: Date.now(),
      task: todo.task,
      label: todo.label,
      priority: todo.priority,
      completed: false
    }
    setTodoList(todoList.concat(todoObj))
  }

  const editTodo = (todo, update) => {
    setTodoList(todoList.map(item => item.id === todo.id ? { ...item, task: update }: item));
  }

  const removeTodo = id => {
    setTodoList(todoList.filter(todo => todo.id !== id))
  }

  const markCompleted = id => {
    if(Array.isArray(id)) {
      setTodoList(todoList.map(item => id.includes(item.id) ? { ...item, completed: true }: item));
    } else setTodoList(todoList.map(item => item.id === id ? { ...item, completed: true }: item));
  }

  const removeSelected = selectedTodos => {
    setTodoList(todoList.filter(todo => !selectedTodos.includes(todo.id)))
  }
  
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList))
  })

  return (
    <div className="container-fluid">
      <header className="header">
        <h5>TODO Planner</h5>
      </header>
      <div className="container">
        <AddTodo addTodo={addTodo}/>
        <TodoList 
          todoList={todoList} 
          editTodo={editTodo} 
          removeTodo={removeTodo} 
          markCompleted={markCompleted}
          removeSelected={removeSelected}
        />
    </div>
    </div>
  );
}

export default App;
