import React from 'react';
import { LoginAdmin } from '../../pages/Admin' 
import { TopMenu, SideMenu } from "../../components/Admin" // Aqui se importan los menus
import { useAuth } from "../../hooks"
import './AdminLayout.scss';

export function AdminLayout(props) {
  const {children} = props;
  const { auth } = useAuth();

  if(!auth) return <LoginAdmin /> 

  return (
    <div className="admin-layout">
      <div className='admin-layout__menu'>
        <TopMenu /> {/* Aqui se pone el TopMenu que se esta importando */}
      </div>
      <div className='admin-layout__main-content'>
        <SideMenu>{children}</SideMenu> {/* Aqui se pone el SideMenu que se esta importando */}
      </div>
    </div>
  )
}
