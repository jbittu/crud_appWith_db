import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <h1>Workout-Buddy</h1>
        <div className='menu'>
            <p>log-in</p>
            <p>sign-up</p>
        </div>
    </nav>
  )
}

export default Navbar