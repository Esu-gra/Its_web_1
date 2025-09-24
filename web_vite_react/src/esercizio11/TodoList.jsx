import React from 'react'

function TodoList({tasks,onDeleteTask}) {
    console.log("todoList",tasks)

  return (
    <ul className='list-group' >
       {
        tasks.map((t)=>{
           return (<TodoItem key={t.id} task={t} onDelete={onDeleteTask}></TodoItem>)
        })
       }
        
    </ul>
  )
}

export default TodoList