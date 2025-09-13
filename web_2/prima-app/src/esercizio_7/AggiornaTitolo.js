import { useEffect } from "react";
import { useState } from "react";
import React from "react";

function AggiornaTitolo(){
    const[nome,setNome]=useState("");
    useEffect(() => {
      if(nome ===""){
        document.title="Benvenuto!";
      }else{
       document.title= `Ciao, ${nome}`;
      }
    
    }, [nome]);
    return(
        
        <div>
            <h1 >{nome === "" ? "Benvenuto!" : `Ciao, ${nome}`}</h1>
            <input type="text" placeholder="scrivi il tuo nome..." value={nome} onChange={(e)=>setNome(e.target.value)}></input>
        
        </div>
        
    );
}


export default AggiornaTitolo;