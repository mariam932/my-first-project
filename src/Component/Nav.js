import React from 'react'
import { NavLink } from 'react-router-dom'
import './CSS/Nav.css'
function Nav() {
  return (
    <div className='nav'>
      <ul>
        <li><NavLink to='/home'>Home</NavLink></li>
        <li><NavLink to='/service'>Service</NavLink></li>
        <li><NavLink to='/gallery'>Gallery</NavLink></li>
        <li><NavLink to='/contact'>Contact Us</NavLink></li>
        <li><NavLink to='/signin'>Signin</NavLink></li>
        <li><NavLink to='/signup'>Signup</NavLink></li>
      </ul>
    </div>
  )
}

export default Nav
