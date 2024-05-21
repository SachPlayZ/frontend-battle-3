import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Navbar from './components/Navbar'
import ProfilePage from './pages/ProfilePage'
import ConnectionsPage from './pages/ConnectionsPage'
import JobPage from './pages/JobPage'

function App() {
  return (
<>
<Navbar />

<Routes>
  <Route path="/" element={<LandingPage/>} />
  <Route path="/profile" element={<ProfilePage />} />
  <Route path='/connections' element={<ConnectionsPage />} />
  <Route path='/jobs' element={<JobPage />} />
</Routes>
</>

  )
}

export default App
