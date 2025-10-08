// import React, { useState } from 'react'
import Home from './Home'
import Profile from './Profile'
import About from './About'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import ErrorPage from './ErrorPage'
import SingleProfile from './SingleProfile'
import MyProfile from './MyProfile'

function ProvaRouter() {
//    const [link, setLink] = useState('Home')

//   const renderCondizionale = () => {
//     if (link === 'Home') return <Home />
//     if (link === 'Profile') return <Profile />
//     if (link === 'About') return <About />
//   }

  return (
    <div>
        <BrowserRouter>
                   

       <nav className="navbar bg-black">
           <div className="container">
               <Link to='/'>Home</Link>
            <Link to='/About'>About</Link>
            <Link to='/Profile'>Profile</Link>
           </div>
        </nav>


        <nav className='navbar'>
            

        </nav>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/About' element={<About></About>}></Route>
            <Route path='/Profile' element={<Profile/>}></Route>
            <Route path='/Profile/:id' element={<SingleProfile></SingleProfile>}></Route>
            <Route path='/Profile/me' element={<MyProfile></MyProfile>}></Route>
            <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
        </Routes>
        </BrowserRouter>
      {/* <nav className='navbar'>
        <button className='btn btn-link nav-link' onClick={() => setLink('Home')}>Home</button>
        <button className='btn btn-link nav-link' onClick={() => setLink('Profile')}>Profile</button>
        <button className='btn btn-link nav-link'  onClick={() => setLink('About')}>About</button>
      </nav>

      <div>
        <br />
        {renderCondizionale()}
      </div> */}
    </div>
  )
}

export default ProvaRouter
