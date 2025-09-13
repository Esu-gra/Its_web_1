import { useState } from "react";
import React from "react";


function MessaggioSegreto(){
    const[mostra,setMostra]=useState(false)
    return(
        <div>
            <button onClick={()=>setMostra(!mostra)}
                 style={{
          padding: "10px 20px",
          backgroundColor: mostra ? "#d9534f" : "#5cb85c",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
          marginBottom: "10px"
        }}>Click</button>
            {mostra && <p>Messaggio segretto</p>}
        </div>    

        
    );
}

export default MessaggioSegreto;