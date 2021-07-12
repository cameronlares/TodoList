import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'

function App() {
const LOCAL_STORAGE_KEY = "react-todo-list-todos";
const [todos, setTodos] = useState([])

useEffect(() => { //store data
localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify())
}, [todos])

function addTodo(todo){

  setTodos([todo,...todos ])
}

  return (
    <div className="App">
      <header className="App-header">
        <p> Learn React</p>
        <TodoForm addTodo={addTodo}/>
        <TodoList todos= {todos} />
         
        
      </header>
    </div>
  );
}

export default App;
