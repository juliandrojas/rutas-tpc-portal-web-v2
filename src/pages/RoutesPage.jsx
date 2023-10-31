import React from 'react'
import { Link } from 'react-router-dom'

function RoutesPage() {
  return (
    <>
        <p>Routes</p>
        <Link to="/"> {/* Enlace a la página Home */}
        <button>Volver a Home</button>
      </Link>
    </>
  )
}

export default RoutesPage