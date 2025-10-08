import React from 'react'
import { useNavigate } from 'react-router-dom'

function ErrorPage() {
    const navigate=useNavigate();
  return (
    <div>
      <p>Questa Pagina non esiste </p>
      <button className='btn btn-success' onClick={()=>navigate("/")}>Torna all'Home</button>
      <button className='btn btn-success' onClick={()=>navigate(-1)}>Torna alla pagina precedente</button>
    </div>
  )
}

export default ErrorPage