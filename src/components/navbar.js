import React from 'react';
import { Link } from "react-router-dom"

const Navbar = ({brand}) => {
    return ( 
        <nav className='navbar navbar-dark bg-dark'>
            <div className='container'>
                <Link to='/' className='navbar-brand'> {brand} </Link>
                <div className=''>
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item'>
                            <Link to='/login' className='nav-link'> Login </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/pedidos' className='nav-link'> Pedidos </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/usuario' className='nav-link'> Usuario </Link>
                        </li>
                    </ul>
                </div>
                
            </div>
        </nav>
    );
}

export default Navbar;
