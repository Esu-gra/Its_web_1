import React from 'react'

const Componente1 = (props) => {

  
  return (

    <React.Fragment> 
      <div>Componente1 {props.children}
        <Anagrafica/>
        <Messaggio/>

      </div>
       <footer></footer>
    </React.Fragment>
    
  )
}

const Anagrafica=()=>{
    return (
        <div>Anagrafica</div>
    )
}


const Messaggio=()=>{
    return (
        <div>messaggio</div>
    )
}



export default Componente1