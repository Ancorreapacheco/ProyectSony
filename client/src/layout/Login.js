import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './css/style_main.css';

export const Login = () => {

    

    return (
        <div>
            <div className="container position-sticky z-index-sticky top-0">
                <div className="row">
                    <div className="col-12">
                        
                        <nav className="navbar navbar-expand-lg blur border-radius-xl top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
                            <div className="container-fluid ps-2 pe-0">
                                <Link className="navbar-brand font-weight-bolder ms-lg-0 ms-3 " to="/">
                                    Gestión de proyectos
                                </Link>
                                <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon mt-2">
                                        <span className="navbar-toggler-bar bar1"></span>
                                        <span className="navbar-toggler-bar bar2"></span>
                                        <span className="navbar-toggler-bar bar3"></span>
                                    </span>
                                </button>
                                <div className="collapse navbar-collapse" id="navigation">
                                    <ul className="navbar-nav mx-auto">
                                        <li class="nav-item">
                                            <Link class="nav-link me-2" to="/">
                                                <i class="fas fa-home opacity-6 text-dark me-1"></i>
                                                Inicio
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link d-flex align-items-center me-2 active" aria-current="page" to="/dashboard">
                                                <i className="fa fa-chart-pie opacity-6 text-dark me-1"></i>
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link me-2" to="/count">
                                                <i className="fa fa-user opacity-6 text-dark me-1"></i>
                                                Perfil de usuario
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link me-2" to="/register">
                                                <i className="fa fa-user-plus opacity-6 text-dark me-1"></i>
                                                Registrarse
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        
                    </div>
                </div>
            </div>
            <main className="main-content  mt-0">
                <div className="page-header align-items-start min-vh-100" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80)' }} >
                    <span className="mask bg-gradient-dark opacity-6"></span>
                    <div className="container my-auto">
                        <div className="row">
                            <div className="col-lg-4 col-md-8 col-12 mx-auto">
                                <div className="card z-index-0 fadeIn3 fadeInBottom">
                                    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                        <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                                            <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">Iniciar Sesión</h4>
                                            <div className="row mt-3">
                                                <div className="col-2 text-center ms-auto">
                                                    <a className="btn btn-link px-3" href="javascript:;">
                                                        <i className="fa fa-facebook text-white text-lg"></i>
                                                    </a>
                                                </div>
                                                <div className="col-2 text-center px-1">
                                                    <a className="btn btn-link px-3" href="javascript:;">
                                                        <i className="fa fa-github text-white text-lg"></i>
                                                    </a>
                                                </div>
                                                <div className="col-2 text-center me-auto">
                                                    <a className="btn btn-link px-3" href="javascript:;">
                                                        <i className="fa fa-google text-white text-lg"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <form role="form" className="text-start">
                                            <div className="input-group input-group-outline my-3">
                                                <label className="form-label">
                                                    Email
                                                </label>
                                                <input type="email" className="form-control"></input>
                                            </div>
                                            <div className="input-group input-group-outline mb-3">
                                                <label className="form-label">
                                                    Contraseña
                                                </label>
                                                <input type="password" className="form-control"></input>
                                            </div>
                                            <div className="form-check form-switch d-flex align-items-center mb-3">
                                                <input className="form-check-input" type="checkbox" id="rememberMe"></input>
                                                <label className ="form-check-label mb-0 ms-2" for="rememberMe">Recordarme</label>
                                            </div>
                                            <div className="text-center">
                                                <button type="button" className="btn bg-gradient-primary w-100 my-4 mb-2">Iniciar sesión</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </main>
        </div>
    )
}
