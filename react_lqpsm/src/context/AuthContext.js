import React , { useState, useEffect, createContext } from "react";
import { setToken } from "../api/token"
import { useUser } from "../hooks"


export const AuthContext = createContext({
    auth: undefined, //Porque aun no se sabe si el usuario se logeo o no
    login: () => null, // Que actualizara el auth
    logout: () => null // Al ser un deslogueo, borrara el usuario 
})


export function AuthProvider(props){
    const { children } = props; // Recibe un children porque el AuthProvider va a estar envolviendo toda nuestra aplicacion, y va a renderizar nuestra aplicacion
    const { getMe } = useUser();

    const login = async (token) => { // Se usa async porque es una peticion http
        setToken() //Se ejecuta la funcion importada de "../api/token"
        const me = await getMe(token); //Se ejecuta la funcion importada de "../hooks"
        console.log(me)
    }

    const valueContext = {
        auth: null,
        login, // Aqui se usa la funcion que se creo aqui arriba
        logout: () => console.log('Cerrando Sesion')
    }

    return (
        <AuthContext.Provider value={valueContext}>
            { children }
        </AuthContext.Provider>
    )
}