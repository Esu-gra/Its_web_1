import React from "react";
import TodoItem from "./TodoItem";

function TodoList({tasks,handleDeleteTask,handleToggleTask}){
    if(!tasks|| tasks.length===0) return <p>Nessun task ancora.</p>
    return (
        <ul style={{padding:0}}>
           {tasks.map((task)=>(
            <TodoItem 
            key={task.id}
            task={task}
            handleDeleteTask={handleDeleteTask}
            handleToggleTask={handleToggleTask}/>
           ))}
        </ul>
    ) 
}

export default TodoList