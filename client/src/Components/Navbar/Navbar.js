import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <h1>Workout-Buddy</h1>
        <div className='menu'>
            <Link to='/'>Log in</Link>
            <Link to='/'>Sign up</Link>
        </div>
    </nav>
  )
}

export default Navbar