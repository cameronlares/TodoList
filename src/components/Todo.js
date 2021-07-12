import React from 'react'
import {Checkbox, IconButton, ListItem, Typography} from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
function Todo({todo, toggleComplete,removeTodo}) {

function handleCheckbox(){
    toggleComplete(todo.id)
}

function handleRemove() {
    removeTodo(todo.id)
}

    return (
        <ListItem style= {{ display:"flex" }}>
        <Checkbox onClick= {handleCheckbox} checked={todo.completed} /> 
         {/* change input with checkbox component, add checked property
         removed checkbox property
         change li to Typography */}
        <Typography
        varient = "body1"
        style={{
        
            textDecoration: todo.completed ? "line-through":null
        }}
        >{todo.task}</Typography>
        
        <IconButton onClick= {handleRemove}> <CloseIcon/> </IconButton></ListItem> //Change from button to IconButton. Add CloseIcon button instead of X
    );
}

export default Todo
