import React from 'react'
import { useState } from 'react'
import api from '../../api/client'

const ResendOtp = () => {

    const [email, setEmail] = useState("")

    const resendOtpHandler = async () => {
        try {
            await api.post("/auth/resend-otp", {email})
        } catch (error) {
            console.log(error.message)
        }
    }
 
  return (
    <div>
        <h1>Resend Otp</h1>
        <input type="email" placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} value={email}/>
        <button onClick={resendOtpHandler}>Resend Otp</button>
    </div>
  )
}

export default ResendOtp