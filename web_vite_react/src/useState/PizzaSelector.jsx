import React, { useState } from 'react'

function PizzaSelector() {
  const [pizza,setPizza]=useState("")
  return (
    <div style={{padding:"20px",fontFamily:"Ariel"}}>
        <h2>Sciegli la tua pizza</h2>
       <select onChange={(e)=>setPizza(e.target.value)}
                style={{padding:"8px",fontSize:"16px",marginBottom:"15px"}}>

        <option value="">-- Seleziona una pizza --</option>
        <option value="Margherita">Margherita</option>
        <option value="Diavola">Diavola</option>
        <option value="Capricciosa">Capricciosa</option>
        <option value="Quattro Stagioni">Quattro Stagioni</option>
        <option value="Bufalina">Bufalina</option>
    </select>
      <p style={{fontSize:"18px"}}>
        Hai scelto: <strong>{pizza || "nessuna pizza"}</strong>
      </p>
    </div>
  )
}

export default PizzaSelector
