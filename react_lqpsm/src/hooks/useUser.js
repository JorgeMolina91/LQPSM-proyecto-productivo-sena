import { getMeApi } from "../api/user"

export function useUser() {
    const getMe = async (token) => {
        try {//Aqui se llama a la funcion 'getMeApi()' del 'src/api/user.js'
            const reponse = await getMeApi(token);
            return reponse
        } catch (error) {
            throw error;
        }
    }

    return { // Aqui se exporta la funcion 'getMe()'
        getMe,
    }
}