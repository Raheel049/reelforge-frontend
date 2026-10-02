import Login from "./pages/auth/login"
import { Route, Routes } from "react-router-dom"


function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Login />}/>
    </Routes>
  )
}

export default App
