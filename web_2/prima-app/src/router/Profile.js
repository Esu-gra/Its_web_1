import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Profile() {
  return (
    <>
        <div>Profile Page</div>
    <div><Outlet></Outlet></div>
    <nav className='navbar'>
        <Link to='me'>My Profile</Link>
        <Link to='/profile/2'></Link>
    </nav>
    <Outlet></Outlet>
    </>

  )
}

export default Profile