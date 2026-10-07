import Login from "./pages/auth/login"
import { Route, Routes } from "react-router-dom"
import ReelForgeLanding from "./pages/home/home"
import SignUp from "./pages/auth/signUp"
import OtpVerify from "./pages/auth/otpVerify"
import ResendOtp from "./pages/auth/resendOtp"
import PublicOnlyRoute from "./routes/publicRoutes"
import ProtectedRoute from "./routes/protectedRoutes"
import Dashboard from "./pages/protectedPages/dashboard"

function App() {
  

  return (
    <Routes>
      {/* 1. Open to everyone */}
      <Route path="/" element={<ReelForgeLanding />} />

      {/* 2. Public-only routes (redirect to /studio if already authenticated) */}
      <Route element={<PublicOnlyRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/otpVerify" element={<OtpVerify />} />
        <Route path="/resendOtp" element={<ResendOtp />} />
      </Route>

      {/* 3. Protected routes (require valid authenticated session) */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Add more private routes here (e.g. /dashboard, /settings) */}
      </Route>

      {/* Fallback */}
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  )
}

export default App
