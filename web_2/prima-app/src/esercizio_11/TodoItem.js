import React from 'react'


function TodoItem({task,handleDeleteTask,handleToggleTask}){
    const textStyle={
        textDecoration:task.completed?'line-through':'none',
        opacity: task.completed?0.6:1,
    };

    return(
        <li>
            <input 
              type="checkbox"
              checked={task.completed}
              onChange={()=>handleToggleTask(task.id,!task.completed)}>
            </input>

            <span style={{flex: 1,...textStyle}}>{task.text}</span>
            <button onClick={()=>handleDeleteTask(task.id)} style={{padding:'6px 10px'}}>Elimina</button>
        </li>
    )

}

export default TodoItem;