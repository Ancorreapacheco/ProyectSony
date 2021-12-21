//Componente creado para la NavBar General - Ojo: actualmente no está puesta en projects
import React from 'react'
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

import './css/style_main.css';


export const NavBar = () => {

    const cookies = new Cookies();

    function logOut() {

        cookies.remove('user','/');
        cookies.remove('userType','/');
        window.location.href='/login';
    }


    return <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
    <div className="container-fluid py-1 px-3">
        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
            <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                <div className="input-group input-group-outline">
                    <p>{cookies.get('user')}</p>
                </div>
            </div>
            <ul className="navbar-nav  justify-content-end">
                <li className="nav-item d-flex align-items-center">
                    <Link to="/login" className="nav-link text-body font-weight-bold px-0">
                        <i className="fa fa-user me-sm-1"></i>
                        <span className="d-sm-inline d-none" onClick={()=>logOut()}>LogOut</span>
                    </Link>
                </li>                   
            </ul>
        </div>
    </div>
</nav>
}