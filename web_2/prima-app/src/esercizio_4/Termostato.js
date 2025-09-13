import { useState } from "react"

import React from 'react'



function Termostato() {
  const [temperatura,setTemperatura]=useState(0)
  return (
    
      <div >
        <h1>La temperatura è di {temperatura} gradi</h1>
        <div>
            <button onClick={()=>setTemperatura(temperatura+1) } style={{ marginRight: "10px" }}>+</button>
        </div>
        <div>
          <butt onClick={()=>setTemperatura(temperatura-1)}>-</butt>
        </div>
        
      </div>
  
  )
}

export default Termostato
