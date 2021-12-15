import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './css/style_main.css';

export const Register = () => {

    const [usernameReg, setUsernameReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    return (
        <div>
            <div class="container position-sticky z-index-sticky top-0">
                <div class="row">
                    <div class="col-12">
                        {/*<!-- Navbar -->*/}
                        <nav class="navbar navbar-expand-lg blur border-radius-lg top-0 z-index-3 shadow position-absolute mt-4 py-2 start-0 end-0 mx-4">
                            <div class="container-fluid ps-2 pe-0">
                                <a class="navbar-brand font-weight-bolder ms-lg-0 ms-3 " href="../pages/dashboard.html">
                                    Plataforma Sony 
                                </a>
                                <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon mt-2">
                                        <span class="navbar-toggler-bar bar1"></span>
                                        <span class="navbar-toggler-bar bar2"></span>
                                        <span class="navbar-toggler-bar bar3"></span>
                                    </span>
                                </button>
                                <div class="collapse navbar-collapse" id="navigation">
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
                                            <Link className="nav-link me-2" to="/login">
                                                <i className="fa fa-user-plus opacity-6 text-dark me-1"></i>
                                                Iniciar sesión
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        {/*<!-- End Navbar -->*/}
                    </div>
                </div>
            </div>
            <main class="main-content  mt-0">
                <section>
                    <div class="page-header min-vh-100">
                        <div class="container">
                            <div class="row">
                                <div class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column">
                                    <div class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80)' }}>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5">
                                    <div class="card card-plain">
                                        <div class="card-header">
                                            <h4 class="font-weight-bolder">Registrarse</h4>
                                            <p class="mb-0">Ingresa tu email y contraseña para registrarte</p>
                                        </div>
                                        <div class="card-body">
                                            <form role="form">
                                                <div class="input-group input-group-outline mb-3">
                                                    <label class="form-label">Nombre</label>
                                                    <input type="text" class="form-control" onChange={(e) => {
                                                        setUsernameReg(e.target.value);
                                                    }}></input>
                                                </div>
                                                <div class="input-group input-group-outline mb-3">
                                                    <label class="form-label">Email</label>
                                                    <input type="email" class="form-control" onChange={(e) => {
                                                        setEmailReg(e.target.value);
                                                    }}></input>
                                                </div>
                                                <div class="input-group input-group-outline mb-3">
                                                    <label class="form-label">Contraseña</label>
                                                    <input type="password" class="form-control" onChange={(e) => {
                                                        setPasswordReg(e.target.value);
                                                    }}></input>
                                                </div>
                                                <div class="form-check form-check-info text-start ps-0">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked></input>
                                                    <label class ="form-check-label" for="flexCheckDefault">
                                                    Acepto los<a href="javascript:;" class ="text-dark font-weight-bolder">Terminos y Condiciones</a>
                                                    </label>
                                                </div>
                                                <div class="text-center">
                                                    <button type="button" class="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0">Registrarme</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="card-footer text-center pt-0 px-lg-2 px-1">
                                            <p class="mb-2 text-sm mx-auto">
                                                ¿Ya posees una cuenta?
                                                <Link to="/login" class="text-primary text-gradient font-weight-bold"> Inicia sesión</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
