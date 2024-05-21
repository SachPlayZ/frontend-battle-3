import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Navbar from './components/Navbar'
import ProfilePage from './pages/ProfilePage'

function App() {
  return (
<>
<Navbar />

<Routes>
  <Route path="/" element={<LandingPage/>} />
  <Route path="/profile" element={<ProfilePage />} />
</Routes>
</>

  )
}

export default App
