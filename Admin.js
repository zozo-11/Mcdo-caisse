import React from 'react'

export default function Admin() {
  return (
    <div className="page">
      <header>Mode Admin</header>
      {/* Authentification, gestion catalogue/promo, fidélité, tableaux de bord */}
      <p>Login : enzo / Mot de passe : Enzo1010<br/>
         CRUD produits & promos, programme fidélité, dashboards, exports CSV/PDF</p>
      <footer>v3.0</footer>
    </div>
  )
}