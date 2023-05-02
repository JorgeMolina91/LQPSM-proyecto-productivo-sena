import { TOKEN } from "../utils/constants" //Aqui se esta importando el token guardado en la constante

export function setToken(token){ // Esta funcion se encargara de guardar el token en el local storage. Recibe como parametro el token.
    localStorage.setItem(TOKEN, token) 
}


export function getToken(){
    return localStorage.getItem(TOKEN);
}

export function removeToken(){
    localStorage.removeItem(TOKEN)
}