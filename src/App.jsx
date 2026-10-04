import Login from "./pages/auth/login"
import { Route, Routes } from "react-router-dom"
import ReelForgeLanding from "./pages/home/home"
import SignUp from "./pages/auth/signUp"
import OtpVerify from "./pages/auth/otpVerify"
import ResendOtp from "./pages/auth/resendOtp"

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<ReelForgeLanding />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />}  />
      <Route path="/otpVerify" element={<OtpVerify />} />
      <Route path="/resendOtp" element={<ResendOtp />}/>
    </Routes>
  )
}

export default App
