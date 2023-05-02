import React from 'react'
import { useAuth } from "../../hooks"

export function HomeAdmin() {
  const { logout } = useAuth //Aqui llamamos la funcion logout del useAuth
  return (
    <div>
    <h1>Home Admin</h1>
    <button onClick={ logout }>Cerrar Sesion</button> 
    </div>
  )
}