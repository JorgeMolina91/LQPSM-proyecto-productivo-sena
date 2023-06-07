import React from 'react'
import { Table, Button, Icon } from "semantic-ui-react"
import { map } from "lodash"
import './TableUsers.scss'

export function TableUsers(props) {
    const { users, updateUser, onDeleteUser } = props // Aqui esta el array de usuarios
  return (
    <Table className='table-users-admin'>
        <Table.Header> {/* Para las cabeceras de las columna */}
            <Table.Row>
                <Table.HeaderCell>Username</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Nombre</Table.HeaderCell>
                <Table.HeaderCell>Apellido</Table.HeaderCell>
                <Table.HeaderCell>Activo</Table.HeaderCell>
                <Table.HeaderCell>Staff</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
        </Table.Header>     

        <Table.Body> {/* Para los datos de los usuarios */}
            {map(users, (users, index) => (
                <Table.Row key={index}>
                    <Table.Cell>{users.username}</Table.Cell>
                    <Table.Cell>{users.email}</Table.Cell>
                    <Table.Cell>{users.first_name}</Table.Cell>
                    <Table.Cell>{users.last_name}</Table.Cell>
                    <Table.Cell className='status'>{/* Si es true mostrar el 'check', si no 'close' */}
                        {users.is_active ? <Icon name='check'/> : <Icon name='close'/>}
                    </Table.Cell>
                    <Table.Cell className='status'>{/* Si es true mostrar el 'check', si no 'close' */}
                        {users.is_staff ? <Icon name='check'/> : <Icon name='close'/>}
                    </Table.Cell>

                    <Actions 
                        user={users} 
                        updateUser={updateUser} 
                        onDeleteUser={onDeleteUser}                        
                    />
                </Table.Row>
            ))}
        </Table.Body> 
        
    </Table>
  )
}

function Actions(props){
    const { user, updateUser, onDeleteUser } = props
    return (
        <Table.Cell textAlign='right'>
            <Button icon onClick={() => updateUser(user)}>
                <Icon name='pencil'/>
            </Button>
            <Button icon negative onClick={() => onDeleteUser(user)}>
                <Icon name='close'/>
            </Button>
        </Table.Cell>
    )
}