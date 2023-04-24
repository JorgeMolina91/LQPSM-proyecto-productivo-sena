import React from 'react'
import { ToastContainer } from "react-toastify"
import { Navigation } from "./routers"
import { AuthProvider } from "./context"


export default function App(){
  return(
    <AuthProvider>
      <Navigation />

      <ToastContainer  //Aqui se usa el componente ToastContainer y agregaremos varios props
        position='bottom-center'
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </AuthProvider>
  )
}

