import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ModeSelection() {
  const nav = useNavigate()
  return (
    <div className="mode-selection">
      {/* Trois boutons plein écran */}
      <button onClick={() => nav('/admin')}>Mode Admin</button>
      <button onClick={() => nav('/caisse')}>Mode Caisse</button>
      <button onClick={() => nav('/borne')}>Mode Borne</button>
      <footer>v3.0</footer>
    </div>
  )
}