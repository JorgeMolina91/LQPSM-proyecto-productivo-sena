import React from 'react'
import * as Yup from 'yup' //Aqui está importados yup
import { Button, Form } from 'semantic-ui-react'
import { useFormik } from 'formik' //Aqui está importados formik
import{ toast } from 'react-toastify' //Aqui está importados toast
import {loginApi} from "../../../api/user" // Aqui importamos nuestra funcion ‘loginApi’
import { useAuth } from "../../../hooks"
import './LoginForm.scss' 

export function LoginForm() {
  const { login } = useAuth()  // Aqui se usa la funcion de login

  const formik = useFormik({
    initialValues: initialValues(), //Aqui se llama la funcion que evalua los valores iniciales
    validationSchema: Yup.object(validationSchema()), // Aqui se valida que se envia info. Si no se pone info da error
    onSubmit: async (formValue) => { //Aqui se obtienen los datos enviados en el formulario con una promesa. Por eso se pone async
      try {
        const response = await loginApi(formValue) //Aqui se valida la promesa y se devuelve la funcion loginApi
        const { access } = response;
        login(access)  // Aqui se le pasa el access token a la funcion
      } catch (error) { // Si da error se devuelve este catch
        toast.error(error.message)
      }
    } 
  })
  return (
    <Form className='login-form-admin' onSubmit={formik.handleSubmit}> 
        <Form.Input 
          name='email' 
          placeholder='Correo Electrónico' 
          value={formik.values.email} 
          onChange={formik.handleChange} 
          error = {formik.errors.email}
      /> 
        <Form.Input 
          name='password' 
          type='password' 
          placeholder='Contraseña'
          value={formik.values.password}  
          onChange={formik.handleChange}  
          error = {formik.errors.password}
        />

        <Button type='submit' content='Iniciar Sesión' primary fluid value={formik.values.password} />
    </Form>
  )
}

function initialValues(){ 
  return{
    email: "",
    password: ""
  } 
}

function validationSchema(){
  return{
    email: Yup.string().email(true).required(true),
    password: Yup.string().required(true)
  }
}

