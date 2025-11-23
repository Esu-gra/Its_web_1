import React from 'react'
import { useState } from 'react'

function InputLive() {
  const [testo,setTesto]=useState("")
  return (
    <div style={{padding:"20px0",fontFamily:"Ariel"}}>
      <h2>Scrivi qualcosa:</h2>
      <input type='text'
             value={testo}
             onChange={(e)=>setTesto(e.target.value)}
             placeholder='Scrivi qui...'
             style={{padding:"8px",width:"250px",marginBottom:"15px",fontSize:"16px"}}/> {/*tiene traccia dei caratteri inseriti*/}

             <p style={{fontSize:"18px"}}>
                Hai scritto : <strong>{testo}</strong>
             </p>

    </div>
  )
}

export default InputLive
