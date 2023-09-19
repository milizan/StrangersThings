import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Posts from "./pages/Posts"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import Register from "./pages/Register"
import NavBar from "./components/NavBar"
import CreatePost from "./components/CreatePost"

function App() {
  const [token, setToken] = useState(localStorage.getItem("token")? localStorage.getItem("token"): "");

  return (
    <>    
      <NavBar token={token} setToken={setToken} />
      <div className="container">
        <h1>Welcome</h1>
        <Routes>
          <Route path="/posts" element={<Posts token={token}/>} />
          <Route path="/createpost" element={<CreatePost token={token}/>} />
          <Route path="/profile" element={<Profile token={token}/>} />
          <Route path="/login" element={<Login buttonText="login" setToken={setToken}/>} />
          <Route path="/register" element={<Register buttonText="register" setToken={setToken}/>} />
        </Routes>  
      </div>
    </>
  )
}

export default App
