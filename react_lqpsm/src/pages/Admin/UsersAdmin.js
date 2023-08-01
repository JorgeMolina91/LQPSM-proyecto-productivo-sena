import React, { useState, useEffect } from 'react'
import { Loader } from "semantic-ui-react"
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
  const [refetch, setRefetch] = useState(false)
  const { loading, users, getUsers, deleteUser } = useUser()
  
  useEffect(() => {
    getUsers();
  }, [refetch]);
   

  const openCloseModal = () => setShowModal((prev) => !prev)

  const onRefetch = () => setRefetch((prev) => !prev)

  const addUser = () => {
    setTitleModal('Nuevo Usuario')
    setContentModal(<AddEditUsersForm onClose = {openCloseModal} onRefetch={onRefetch}/>)
    openCloseModal()
  }

  const updateUser = (data) => {
    setTitleModal('Actualizar Usuario')
    setContentModal(
      <AddEditUsersForm 
        onClose = {openCloseModal} 
        onRefetch={onRefetch} 
        user={data}
      />
    )
    openCloseModal()
  }

  const onDeleteUser = async (data) => {
    const result = window.confirm(`¿Eliminar usuario ${data.email}?`)

    if (result){
      try {
        await deleteUser(data.id)
        onRefetch()
      } catch (error) {
        console.error(error)
      }
    }
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
        <TableUsers 
          users = { users } 
          updateUser = { updateUser } 
          onDeleteUser={ onDeleteUser }
        /> // Aqui se renderiza la lista de usuarios
      )}

      <ModalBasic 
        show={showModal} 
        onClose={openCloseModal}
        title={titleModal}
        children={contentModal}/>
    </>
  );
}
