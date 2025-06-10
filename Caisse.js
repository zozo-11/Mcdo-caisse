import React from 'react'

export default function Caisse() {
  return (
    <div className="page">
      <header>Mode Caisse</header>
      {/* Ici tu pourras intégrer ton catalogue, panier, paiements, logs, etc. */}
      <p>Catalogue & personnalisation panier → API McDo<br/>
         Paiements CB, ESP, FRA + code ticket aléatoire<br/>
         Commandes ESP de la borne → onglet « Commandes en cours »<br/>
         Footer version automatique</p>
      <footer>v3.0</footer>
    </div>
  )
}