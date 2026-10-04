import React from 'react'
import { useState } from 'react'
import api from '../../api/client'

const OtpVerify = () => {

    const [formData, setFormData] = useState({
        email: "",
        otp: ""
    })

    const assignValue = (e) => {
        const acviteField = e.target.name
        const value = e.target.value

        setFormData((preData) => ({
            ...preData,
            [acviteField]: value

        }))
    }

    const otpHandler = async () => {
        try {
            await api.post("/auth/verify-otp", formData)
        } catch (error) {
            console.log(error.message)
        }
    }

    console.log(formData)
 
  return (
    <div>
        <h1>Otp Verification</h1>
        <input type="email" placeholder='Enter email' name='email' onChange={assignValue} value={formData.email}/>
        <input type="text" placeholder='Enter otp' name="otp" onChange={assignValue} value={formData.otp}/>

        <button onClick={otpHandler}>Verify</button>
    </div>
  )
}

export default OtpVerify