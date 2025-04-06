import React from 'react'
import { useState } from 'react'

import './Login.css'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
   
  }
  return (
    <div className='login-form'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
            <label htmlFor='email'>Email:</label>
            <input type='email' onChange={(e)=>setEmail(e.target.value)} value={email} />
            </div>
            <div className='form-group'>
            <label htmlFor='password'>Password:</label>
            <input type='password' onChange={(e)=>setPassword(e.target.value)} value={password} />
            </div>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login