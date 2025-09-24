import React, { useEffect, useState } from 'react'
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const API_URL=  ""
function TodoApp() {
  const [tasks,setTask]=useState([])

  const[Loading,setLoading]=useState(true);
  const[error,setError]=useState(null);

  const fetchTask=async()=>{

    try{
        const response=await fetch(API_URL);
        const data=await response.json();
        setTask(data);

    }catch(err){
       setError(err)

    }finally{
        setLoading(false)
    }
  };
  

  const deleteTask=async()=>{
    await fetch(API_URL+"/"+IdleDeadline,{method:"Delete"});

  }
  useEffect(()=>{
      fetchTask()
  },[])

  return (

    <div className='container m-4'>
        <h1  className='mb-4'>Todo List</h1>
        <TodoList tasks={tasks} onDeleteTask={deleteTask}></TodoList>
        <TodoForm></TodoForm>
    </div>

  )
}

export default TodoApp