import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ModeSelection from './components/ModeSelection'
import Caisse from './pages/Caisse'
import Borne from './pages/Borne'
import Admin from './pages/Admin'

function App() {
  return (
    <Routes>
      <Route path="/" element={<ModeSelection />} />
      <Route path="/caisse" element={<Caisse />} />
      <Route path="/borne" element={<Borne />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  )
}

export default App