import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  return (
<>
<Navbar />

<Routes>
  <Route path="/" element={<LandingPage/>} />
</Routes>
</>

  )
}

export default App
