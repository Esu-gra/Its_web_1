import React from 'react'

function Clock(props) {
    const t=Date.new()+3600*props.timezone*1000
    
const date= new Date(t)
  return (

        <h2>
        {
         date.toLocaleDateString()+"  "+ date.toLocaleTimeString()}
      </h2>
    
    
    
  )
}

export default Clock