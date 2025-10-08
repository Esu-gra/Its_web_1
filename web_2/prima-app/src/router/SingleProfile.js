import React from 'react'
import { useParams } from 'react-router-dom'

function SingleProfile() {
    const params=useParams();
  return (
    <div>SingleProfile con id {params.id}</div>
  )
}

export default SingleProfile