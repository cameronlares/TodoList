import React, { useState } from "react";
import {TextField,Button} from "@material-ui/core"
// import uuid  from 'uuidv4';
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
    <form className="todo-form" onSubmit={handleSubmit}>
      <TextField
      label = "Task"
        name="todo"
        type="text"
        value={todo.task}
        onChange={handleChange}
        autoComplete="off"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default TodoForm;
