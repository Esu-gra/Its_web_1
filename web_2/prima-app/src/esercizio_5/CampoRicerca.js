import React from "react";
import { useState } from "react";

function CampoRicerca(){
    const [testoRicerca,setTestoricerca]=useState('')
    return(
        <div>
            <input type="text" value={testoRicerca} onChange={(e)=>setTestoricerca(e.target.value)}></input>
            <p >sta scrivendo: {testoRicerca}</p>
        </div>
    );
}

export default CampoRicerca;