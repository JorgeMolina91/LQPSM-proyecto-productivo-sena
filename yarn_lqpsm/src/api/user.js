import { BASE_API } from '../utils/constants'

export async function loginApi(formValue){
    try{
        const url = `${BASE_API}/api/auth/login/`
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formValue),
        };
        const response = await fetch(url, params);

        if(response.status !== 200){
            throw new Error("Usuario o Contraseña incorrectos");
        }

        const result = await response.json();
        return result;
        
    } catch(error){
        throw error
    }
}

export async function getMeApi(token) {
    try {
        const url = `${BASE_API}/api/auth/me/`;// Que sería la url desde donde se esta trayendo el metodo GET
        const params = {
            headers: {
                Authorization: `Bearer ${token}`, //Asi es como se envia una peticion autorizada
            },
        }
        const response = await fetch(url, params);
        const result = await response.json();
        return result;       
    } 
    catch (error) {
        throw error;
    }}  