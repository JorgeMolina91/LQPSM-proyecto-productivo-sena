import { useState } from "react" // Importamos useState
import { getMeApi, getUsersApi, addUserApi, updateUserApi, deleteUserApi } from "../api/user" // Importamos las peticiones a la API
import { useAuth } from "." // Importamos useAuth para el token
 
export function useUser() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [users, setUsers] = useState(null)
    const { auth } =  useAuth()

    const getMe = async (token) => {
        try {//Aqui se llama a la funcion 'getMeApi()' del 'src/api/user.js'
            const response = await getMeApi(token);
            return response
        } catch (error) {
            throw error;
        }
    }

    const getUsers = async () => {
        try {
            setLoading(true) // Aqui esta seteada 'la ruedita' del loading
            const response = await getUsersApi(auth.token) // Aqui se obtiene el token del usuario
            setLoading(false) // Aqui se setea el loading como false porque ya se obtuvo el resultado que queriamos
            setUsers(response) // Aqui se le pasan los datos de response a setUsers()
        } catch (error) {
            setLoading(false)
            setError(error)
        }
    }

    const addUser = async (data) => {
        try {
            setLoading(true);
            await addUserApi(data, auth.token);
            setLoading(false)
        } catch (error) {
            setLoading(false);
            setError(error)
        }
    }

    const updateUser = async (id, data) => {
        try {
            setLoading(true)
            await updateUserApi(id, data, auth.token)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(error)
        }
    }

    const deleteUser = async (id) => {
        try {
            setLoading(true)
            await deleteUserApi(id, auth.token)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(error)
        }
    }

    return { // Aqui se exportan las funciones que se van creando
        loading, 
        error,
        users,
        getMe,
        getUsers,
        addUser, 
        updateUser,
        deleteUser,
    }
}