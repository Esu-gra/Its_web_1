import React, { useState } from "react";

function TodoForm({handleAddTask}){
    const [text,setText]=useState('');

    function onSubmit(e){
        e.preventDefault();
        handleAddTask(text);
        setText('');
    }

    return(
        <form onSubmit={onSubmit}>
            <input
            value={text}
            onChange={(e)=>setText(e.target.value)}
            placeholder="Nuova Task"
            style={{flex:1,padding:'8px 10px',fontSize:16}}>

            </input>

            <button  type="submit" style={{padding:'8px 12px',fontSize:16}}>
                Aggiungi
            </button>
        </form>
    );
}

export default TodoForm