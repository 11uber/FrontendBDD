import React from 'react';

const ListaProductos = ({prod}) => {
    return ( 
        <table className='table'>
            <thead> 
                <tr>
                    <th> Producto </th>
                    <th> Precio </th>
                    <th> Categoria </th>
                    <th> Acciones </th>
                </tr>
            </thead>
            <tbody>
                {prod.map(prod => (
                    <tr key={prod._id}>
                        <td> {prod.producto} </td>
                        <td> {prod.precio }$</td>
                        <td> {prod.categoria} </td>
                        <td> <button class="btn btn-outline-info"> Comprar </button> </td>
                        
                    </tr>
                ) //map() es una funcion que sirve como un foreach pero para recorrer un array
                )}
            </tbody>
        </table>
    );
}

export default ListaProductos;