import { useState, createContext, useEffect } from "react";
import { setToken, getToken, removeToken } from "../api/token"
import { useUser } from "../hooks"


export const AuthContext = createContext({
    auth: undefined, //Porque aun no se sabe si el usuario se logeo o no
    login: () => null, // Que actualizara el auth
    logout: () => null // Al ser un deslogueo, borrara el usuario 
})


export function AuthProvider(props){
    const { children } = props; // Recibe un children porque el AuthProvider va a estar envolviendo toda nuestra aplicacion, y va a renderizar nuestra aplicacion
    const [auth, setAuth] = useState(undefined)
    const { getMe } = useUser();


    useEffect(() => {
        (async () => { // Funcion anonima autoejecutable anonima
            const token = getToken(); // Aqui se obtiene el token
            if (token){
                const me = await getMe(token)
                setAuth({token, me})
            }else{
                setAuth(null) //Borra el setAuth
            }
        })();
    }, []);

    

    const login = async (token) => { // Se usa async porque es una peticion http
        setToken(token)
        //console.log(token)
        const me = await getMe(token)
        //console.log(me)
        setAuth({token, me})
    };

    const logout = () =>{
        if (auth){
            removeToken();
            setAuth(null);
        }
    };

    const valueContext = {
        auth,
        login,
        logout
    };

    if (auth === undefined) return null; //  Para evitar el 'flash' de la pagina de login cuando recargamos

    return (
        <AuthContext.Provider value={ valueContext }>
            { children }
        </AuthContext.Provider>
    );
}