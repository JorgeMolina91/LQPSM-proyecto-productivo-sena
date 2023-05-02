import { getMeApi } from "../api/user"

export function useUser() {
    const getMe = async (token) => {
        try {//Aqui se llama a la funcion 'getMeApi()' del 'src/api/user.js'
            const response = await getMeApi(token);
            return response
        } catch (error) {
            throw error;
        }
    }

    return { // Aqui se exporta la funcion 'getMe()'
        getMe,
    }
}