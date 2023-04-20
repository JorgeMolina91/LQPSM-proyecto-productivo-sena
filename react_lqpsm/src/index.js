import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'semantic-ui-css/semantic.min.css'
import 'react-toastify/dist/ReactToastify.css' // Aqui se importan los estilos de toastify
import './scss/global.scss' //Aqui se importa el archivo global para poder manipular mejor nuestros estilos

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
