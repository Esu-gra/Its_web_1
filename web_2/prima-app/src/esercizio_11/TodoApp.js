import React, { useEffect, useState } from 'react'
// import { useState } from 'react';
// import { useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList'

const API_URL = 'http://localhost:3001/tasks';

function TodoApp() {
    const[tasks,setTasks]=useState([]);
    const[loading,setLoading]=useState(false)
    const[error,setError]=useState(null)


    useEffect(()=>{
        fetchTasks();
    },[]);

    async function fetchTasks() {
        setLoading(true);
        setError(null);
        
        try{
            const res =await fetch(API_URL);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data= await res.json()
            setTasks(data)
        }catch(err){
            setError(err.message || 'Errore durante il fetch');
        }finally{
            setLoading(false);
        }
    
    }
    
    async function handleAddTask(text) {
        if (!text.trim()) return;
        try{
            const res= await fetch(API_URL,{
                method: 'POST',
                headers: {'Content-Type': 'aplication/json'},
                body: JSON.stringify({text,completed:false}),
            });
            if (!res.ok) throw new Error("Errore nell'aggiunta");
            fetchTasks();
        }catch(err){
            setError(err.message);
        }

    }

    async function handeleDeleteTask(id){
        try{
            const res= await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
            if (!res.ok) throw new Error("Errore nell'eliminazione");
            fetchTasks();
        }catch(err){
            setError(err.message);
        }
    }


    async function handleTogglseTask(id,completed) {
        try{
            const res = await fetch(`${API_URL}/${id}`,{
                method: 'PATCH',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({completed})
            });
            if(!res.ok) throw new Error("Errore nell'aggiornamento");
            fetchTasks();
        }catch(err){
            setError(err.message);
        }
    }

  return (
    <div>
      <h1>To-Do List</h1>
      <TodoForm handleAddTask={handleAddTask}></TodoForm>
      
      {loading && <p>Caricamento...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
       
      <TodoList
      tasks={tasks}
      handeleDeleteTask={handeleDeleteTask}
      handleTogglseTask={handleTogglseTask}>

      </TodoList>

    </div>
  );
}

export default TodoApp
