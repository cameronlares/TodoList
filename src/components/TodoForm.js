import React, { useState } from "react";
import { uuid } from 'uuidv4';
function TodoForm({ addTodo}) {
    
    const id = uuid()
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  const handleChange = (e) => {
    e.preventDefault();
    setTodo({ ...todo, task: e.target.value });
  };

  function handleSubmit(e){
      e.preventDefault();

      if(todo.task.trim()){
          addTodo({...todo, id:id })
          //reset task input
          setTodo({...todo, task:""})
      }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="todo"
        type="text"
        value={todo.task}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TodoForm;
