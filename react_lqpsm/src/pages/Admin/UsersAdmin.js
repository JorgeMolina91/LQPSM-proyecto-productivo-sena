import React, { useState, useEffect } from 'react'
import { Loader, Modal } from "semantic-ui-react"
import { 
  HeaderPage, 
  TableUsers, 
  AddEditUsersForm 
} from "../../components/Admin"
import { ModalBasic } from "../../components/Common"
import { useUser } from '../../hooks'

export function UsersAdmin() {  
  const [showModal, setShowModal] = useState(false)
  const [titleModal, setTitleModal] = useState(null)
  const [contentModal, setContentModal] = useState(null)
  const { loading, users, getUsers } = useUser()
  
  useEffect(() => getUsers(), []) 

  const openCloseModal = () => setShowModal((prev) => !prev)

  const addUser = () => {
    setTitleModal('Nuevo Usuario')
    setContentModal(<AddEditUsersForm />)
    openCloseModal()
  }

  return (
    <>
      <HeaderPage 
        title='Usuarios'  
        btnTitle='Nuevo Usuario' 
        btnClick={addUser}/>
      {loading ? ( // Aqui se comprueba si está cargando o no la página
        <Loader active inline='centered'>
          Cargando ...
        </Loader>
      ) : ( // Estos ':' es como el 'else' de la comprobacion
        <TableUsers users = { users }/> // Aqui se renderiza la lista de usuarios
      )}

      <ModalBasic 
        show={showModal} 
        onClose={openCloseModal}
        title={titleModal}
        children={contentModal}/>
    </>
  );
}
