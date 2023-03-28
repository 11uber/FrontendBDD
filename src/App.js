//Routers
import { Route, Routes } from "react-router-dom"
import React, { Fragment, useState, useEffect } from 'react';

//Componentes
//import React, { Fragment, useState, useEffect } from 'react';
import Navbar from "./components/navbar";

//Estilos
import "./styles/navbar.css"

//Paginas
import Pedidos from './components/Pages/Pedidos';
import InicioSesion from './components/Pages/InicioSesion';
import EditarUsuario from './components/Pages/EditarUsuario';
import Home from './components/Pages/Home';
//import NuevoUsuario from "./components/Formularios/NuevoUsuario";


function App() {
  
  return (
    <>
    <Navbar brand='Tienda-app'></Navbar>
    <div className="container">
      <Routes>
        <Route path="/" element={ <Home/> }></Route>
        <Route path="/pedidos" element={ <Pedidos/> }></Route>
        <Route path="/usuario" element={ <EditarUsuario/> }></Route>
        <Route path="/login" element={ <InicioSesion/> }></Route>
      </Routes>
    </div>
    </>
  );
}

export default App;
