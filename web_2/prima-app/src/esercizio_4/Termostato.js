import { useState } from "react"

import React from 'react'



function Termostato() {
  const [temperatura,setTemperatura]=useState(0)

  const aumenta= (()=>{
    setTimeout(()=>{
      setTemperatura(current=>current+1)
      // setTemperatura(temperatura+1)
    },2000)
  })
  return (
    
      <div className="row">
        <h1 >La temperatura è di {temperatura} gradi</h1>
        <div >
            <button className="btn btn-danger"  onClick={aumenta} style={{ marginRight: "10px" }}>+</button>
        </div>
        <div>
          <button className="btn btn-success" onClick={()=>setTemperatura(temperatura-1)} style={{marginRight:"10px"}}>-</button>
        </div>
        
      </div>
  
  )
}

export default Termostato
