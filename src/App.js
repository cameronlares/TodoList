import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'

function App() {
const LOCAL_STORAGE_KEY = "react-todo-list-todos";
const [todos, setTodos] = useState([])

useEffect(() => {
const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))

if(storageTodos){
  setTodos(storageTodos)
}

}, [])

useEffect(() => { //store data
localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
}, [todos])

function toggleComplete(id){
setTodos(
  todos.map(todo => {
    if(todo.id ===id){
      return {
        ...todo,
        completed: !todo.completed
      }
    }
  })
)
}

function addTodo(todo){

  setTodos([todo,...todos ])
}

function removeTodo(id){
  setTodos(todos.filter(todo => todo.id !==id));
}

  return (
    <div className="App">
      <header className="App-header">
        <p> Learn React</p>
        <TodoForm addTodo={addTodo}/>
        <TodoList todos= {todos} 
        toggleComplete = {toggleComplete} 
        removeTodo = {removeTodo}
        
        />
         
        
      </header>
    </div>
  );
}

export default App;
