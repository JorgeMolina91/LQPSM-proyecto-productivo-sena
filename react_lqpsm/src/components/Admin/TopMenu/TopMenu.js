import React from 'react'
import "./TopMenu.scss"
import { Icon, Menu } from "semantic-ui-react"
import { useAuth } from "../../../hooks" // Este useAuth nos da los datos del usuario logeado


export function TopMenu() {
    const { auth, logout } = useAuth(); // Aqui se llaman los datos del usuario y la funcion logout
    
    const renderName = () => { // Funcion para jalar o bien el nombre y apellido del usuario logueado, o bien su email en caso que no tenga nombre y apellido
        if(auth.me?.first_name && auth.me?.last_name){
            return `${auth.me.first_name} ${auth.me.last_name}`
        }else{
            return auth.me?.email;
        }
      }

  return (
    <div>
      <Menu fixed='top' className='top-menu-admin'> {/*Aqui se pone el componente de 'semantic-ui-react' 'fixed='top'' que fijara el menu en la parte superior*/}
        <Menu.Item className='top-menu-admin__logo'> {/*el Menu.Item es el item de menu, es decir, el logo*/}
            <p>LQPSM Admin</p> {/*Aqui iria el logo, pero pondremos el nombre por ahora*/}
        </Menu.Item>
        <Menu.Menu position='right'>  {/*Aqui Va el menu de saludo y salida de sesion*/}
            <Menu.Item>Hola, {renderName()}</Menu.Item>  {/*Aqui se renderiza el nombre del usuario o su email en caso que no tenga nombre ni apellido*/}
            <Menu.Item onClick={ logout }><Icon name="sign-out"/></Menu.Item> {/*Aqui ira el item para desloguearse de la sesion llamando la funcion 'logout' añadiendole un 'onClick'*/}
        </Menu.Menu>

      </Menu>

    </div>
  )
}

