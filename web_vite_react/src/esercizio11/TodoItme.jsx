import React from 'react'

function TodoItme({task,onDelete}) {
  return (
    <li className='list-group-item d-flex justify-contente-between'>TodoItme
    <span>{task.text}</span>
    <button className='btn btn-sm bt-danger' onClick={()=>onDelete{{task.id}}>Elimina</button>
    </li>
    
  )
}

export default TodoItme