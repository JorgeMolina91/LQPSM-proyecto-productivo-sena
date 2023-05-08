import React from 'react'
import { Menu, Icon } from "semantic-ui-react"
import { Link, useLocation } from "react-router-dom" // Aqui se genera el link y el useLocation para saber en que ruta estamos ubicados
import { useAuth } from "../../../hooks" // Aqui importamos el useAuth para restringir el acceso a solo admins
import "./SideMenu.scss"

export function SideMenu(props) {
    const { children } = props
    const { pathname } = useLocation() //Aqui se llama la funcion useLocation() para saber la ruta en la que estamos ubicados


  return (
    <div className='side-menu-admin'>
      <MenuLeft pathname={pathname} /> 
      <div className='content'>
        { children }
      </div>
    </div>
  )
}

function MenuLeft(props){
    const { pathname } = props // Este prop muestra la ruta en la que este ubicado, y me permite manipularla 
    const { auth } = useAuth() //Aqui usamos la funcion useAuth() para obtener los usuarios autorizados

    return(
        <Menu fixed='left' borderless className='side' vertical> {/*Estas son propiedades del "react-router-dom"*/}
            <Menu.Item as={Link} to={"/admin"} active={pathname === "/admin"}> {/*La propiedad 'as' convierte en link el item, la 'to' le muestra la ruta a la que se debe dirigir una vez le demos click, y la 'active' mantiene señalado el item usando el prop pathname*/}
                <Icon name='home' /> Pedidos {/*Aquí van el icono y el nombre de la seccion del menu lateral"*/}
            </Menu.Item>

            {/*Aqui hacia abajo se crean los demás items del menu de administrador con la misma logica del de arriba"*/}
            <Menu.Item as={Link} to={"/admin/tables"} active={pathname === "/admin/tables"}>
                <Icon name='table' /> Mesas
            </Menu.Item>

            <Menu.Item as={Link} to={"/admin/payments-history"} active={pathname === "/admin/payments-history"}>
                <Icon name='history' /> Historial de Pagos
            </Menu.Item>

            <Menu.Item as={Link} to={"/admin/categories"} active={pathname === "/admin/categories"}>
                <Icon name='folder' /> Categorias
            </Menu.Item>

            <Menu.Item as={Link} to={"/admin/products"} active={pathname === "/admin/products"}>
                <Icon name='cart' /> Productos
            </Menu.Item>

            {auth.me?.is_staff  && (
            <Menu.Item as={Link} to={"/admin/users"} active={pathname === "/admin/users"}>
                <Icon name='users' /> Usuarios
            </Menu.Item>
            )}
        </Menu>
    )

}