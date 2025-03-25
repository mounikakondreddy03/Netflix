import React from 'react'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Player from './pages/Player/Player'
import Login from './pages/Login/Login'


const App = () => {
  return (
    <div>
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