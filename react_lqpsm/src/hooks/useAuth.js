import { useContext } from "react"
import { AuthContext } from "../context"

export const useAuth = () => useContext(AuthContext); //Cuando utilicemos 'useAuth', ejecutara 'useContext' que obtiene el valor de nuestro contexto

