import React, { Fragment, useState, useEffect } from 'react';
//import { useHistory, BrowserRouter, Route, Switch } from 'react-router-dom';

//Componentes
import ListaProductos from '../ListaProductos';
import NuevoUsuario from '../Formularios/NuevoUsuario';

//Estilos
//import "tiendabd2-app/src/styles/navbar.css"

function Home() {

    const [usuario, setUsuario] = useState({ //Se usa {} para definir un objeto y poder pasarle características
        user_name: '',
        user_pass: ''
    })


    //const [producto, setproducto] = useState([])
    const [productos, setProductos] = useState([]) //Se usa [] para definir que será un arreglo

    useEffect(() => {
        const getProd = () => {
            fetch('http://localhost:9000/api/productos')
                .then(res => res.json())
                .then(res => setProductos(res))
        }
        getProd()
    }, [])

    return (
        <Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col-7'>
                        <br></br>
                        <h2 style={{ textAlign: 'center' }}> Productos </h2>
                        <ListaProductos prod={productos} />
                    </div>
                    <div className='col-5'>
                        <br></br>
                        <h3 style={{ textAlign: 'center' }}> ¿Aún no tienes cuenta? </h3>
                        <NuevoUsuario usuario={usuario} setUsuario={setUsuario}/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Home;