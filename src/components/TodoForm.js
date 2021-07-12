import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
// import { uuid } from 'uuid';
import { v4 as uuid } from 'uuid';

function TodoForm({ addTodo }) {
  // would need to access it as props.addTodo in the child component.  By destructuring, he can access it as simply addTodo in the child component (without needing the props prefix).
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  const handleChange = (e) => {
    e.preventDefault();
    setTodo({ ...todo, task: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid() });
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <TextField
        label="Task"
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
