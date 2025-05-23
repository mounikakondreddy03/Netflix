import React, { useEffect } from 'react'
import Home from './pages/Home/Home'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Player from './pages/Player/Player'
import Login from './pages/Login/Login'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Logged In");
        navigate('/Home');
      } else {
        console.log("Logged Out");
        navigate('/')
      }
    })
  }, [])
  return (
    <div>
      <ToastContainer theme='dark'/>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/Home' element={<Home />}/>
        <Route path='/player/:id' element={<Player />}/>
      </Routes>
    </div>
  )
}

export default App