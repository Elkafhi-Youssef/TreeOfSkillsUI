import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Login from './pages/Login'
import './App.css'

function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
    </Routes>
   </Router>
   
   </>
  )
}

export default App
