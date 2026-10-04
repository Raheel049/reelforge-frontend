import api from '../../api/client'
import React, { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const loginHandler = async () => {
    try {
    await api.post("/auth/login", {email,password})
      
    } catch (error) {
      console.log(error.message)
    }
  }
  console.log(email)

  return (
    <>
      <input type="text" onChange={(e) => setEmail(e.target.value)} value={email}/>
      <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} />

      <button onClick={loginHandler}>Login</button>
    </>
  )
}

export default Login