import React, { useState } from 'react'

function MostraNascondi() {

    const[mostra,setMostraNascondi]=useState(false)
  return (
    <div style={{textAlign:"center"}}>
     <h3 style={{textAlign:"center"}}>Mostra o Nascondi</h3>
      <button  onClick={()=>setMostraNascondi(!mostra)}>
        {mostra?"Nascondi":"Mostra"}
      </button>
      {mostra && <p>Testo visualizzato  </p>}
    </div>
  )
}

export default MostraNascondi
