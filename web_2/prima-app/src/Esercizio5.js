import React from 'react'
import { posts } from './dati'


function Esercizio5() {
  return (
    <div>
        <div className='row'>
            
          {posts.map((p)=>{
            return(
                <div className='col'>
                    <p>{p.id}</p>
                    <p>{p.titolo}</p>
                    <p>{p.descrizione}</p>
                <div className="card" style="width: 18rem;">
 
                 <div className="card-body">
                    <h4>{p.titolo}</h4>
                    <h5 className="card-title">{p.id}</h5>
                    <p className="card-text">{p.descrizione}</p>
                    
                </div> 
                </div>
                    
                </div>
                           
                
            )
          })}
            
        </div>
    </div>
  )
}

export default Esercizio5