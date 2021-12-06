import React from 'react';
import Script from '@gumgum/react-script-tag';
import { Link } from 'react-router-dom';

import './css/style_main.css';
import Logo from './images/logosony.png';

export const Home = () => {
    return (
        <div>
            <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
                <div className="sidenav-header">
                    <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
                    <Link className="navbar-brand m-0" to="/" target="_blank">
                        <img src={Logo} className="navbar-brand-img h-100" alt="main_logo"></img>
                        <span className="ms-1 font-weight-bold text-white">Gestion de proyectos</span>
                    </Link>
                </div>
                <hr className="horizontal light mt-0 mb-2"></hr>
                <div className="collapse navbar-collapse  w-auto  max-height-vh-100" id="sidenav-collapse-main">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link text-white active bg-gradient-primary" to="/">
                                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="material-icons opacity-10">receipt_long</i>
                                </div>
                                <span className="nav-link-text ms-1">Inicio</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white " to="/dashboard">
                                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="material-icons opacity-10">dashboard</i>
                                </div>
                                <span className="nav-link-text ms-1">Dashboard</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white " to="/projects">
                                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="material-icons opacity-10">table_view</i>
                                </div>
                                <span className="nav-link-text ms-1">Proyectos</span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-white " to="/notifications">
                                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="material-icons opacity-10">notifications</i>
                                </div>
                                <span className="nav-link-text ms-1">Notificaciones</span>
                            </Link>
                        </li>
                        <li className="nav-item mt-3">
                            <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">Cuentas</h6>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white " to="/count">
                                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="material-icons opacity-10">person</i>
                                </div>
                                <span className="nav-link-text ms-1">Perfil de usuario</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white " to="/login">
                                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="material-icons opacity-10">login</i>
                                </div>
                                <span className="nav-link-text ms-1">Iniciar Sesión</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-white " to="/register">
                                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i class="material-icons opacity-10">assignment</i>
                                </div>
                                <span class="nav-link-text ms-1">Registrarse</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="sidenav-footer position-absolute w-100 bottom-0 ">
                    <div className="mx-3">
                        <a className="btn bg-gradient-primary mt-4 w-100" href="https://github.com/Viinky-Kevs/ProyectSony" type="button" target="_blank">
                            Github
                        </a>
                    </div>
                </div>
            </aside>
            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                {/* Navbar */}
                <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
                    <div className="container-fluid py-1 px-3">
                        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                            <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                                <div className="input-group input-group-outline">
                                    <label className="form-label">Buscando...</label>
                                    <input type="text" className="form-control"></input>
                                </div>
                            </div>
                            <ul className="navbar-nav  justify-content-end">
                                <li className="nav-item d-flex align-items-center">
                                    <Link to="/login" className="nav-link text-body font-weight-bold px-0">
                                        <i className="fa fa-user me-sm-1"></i>
                                        <span className="d-sm-inline d-none">Iniciar sesión</span>
                                    </Link>
                                </li>
                                <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                                    <Link to="javascript:;" className="nav-link text-body p-0" id="iconNavbarSidenav">
                                        <div className="sidenav-toggler-inner">
                                            <i className="sidenav-toggler-line"></i>
                                            <i className="sidenav-toggler-line"></i>
                                            <i className="sidenav-toggler-line"></i>
                                        </div>
                                    </Link>
                                </li>
                                <li className="nav-item px-3 d-flex align-items-center">
                                    <Link to="javascript:;" className="nav-link text-body p-0">
                                        <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i>
                                    </Link>
                                </li>
                                <li className="nav-item dropdown pe-2 d-flex align-items-center">
                                    <Link to="javascript:;" className="nav-link text-body p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fa fa-bell cursor-pointer"></i>
                                    </Link>
                                    <ul className="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
                                        <li className="mb-2">
                                            <Link className="dropdown-item border-radius-md" to="javascript:;">
                                                <div className="d-flex py-1">
                                                    <div className="my-auto">
                                                        <img src="./assets/img/team-2.jpg" className="avatar avatar-sm  me-3 "></img>
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="text-sm font-weight-normal mb-1">
                                                            <span className="font-weight-bold">Nuevo mensaje</span> de Andrés
                                                        </h6>
                                                        <p className="text-xs text-secondary mb-0">
                                                            <i className="fa fa-clock me-1"></i>
                                                            hace 13 minutos
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link className="dropdown-item border-radius-md" to="javascript:;">
                                                <div className="d-flex py-1">
                                                    <div className="my-auto">
                                                        <img src="./assets/img/small-logos/logo-spotify.svg" className="avatar avatar-sm bg-gradient-dark  me-3 "></img>
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="text-sm font-weight-normal mb-1">
                                                            <span className="font-weight-bold">Nuevo proyecto</span> por Yulieth
                                                        </h6>
                                                        <p className="text-xs text-secondary mb-0">
                                                            <i className="fa fa-clock me-1"></i>
                                                            1 día
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item border-radius-md" to="javascript:;">
                                                <div className="d-flex py-1">
                                                    <div className="avatar avatar-sm bg-gradient-secondary  me-3  my-auto">
                                                        <svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                            <title>credit-card</title>
                                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                                                    <g transform="translate(1716.000000, 291.000000)">
                                                                        <g transform="translate(453.000000, 454.000000)">
                                                                            <path className="color-background" d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z" opacity="0.593633743"></path>
                                                                            <path className="color-background" d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"></path>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="text-sm font-weight-normal mb-1">
                                                            Pago realizado exitosamente
                                                        </h6>
                                                        <p className="text-xs text-secondary mb-0">
                                                            <i className="fa fa-clock me-1"></i>
                                                            3 días
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <br></br>
                <img src={ Logo } style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '8%' }}></img>
                <h1 style={{ textAlign: 'center', color: 'black'}}>
                    Plataforma de gestión de proyectos Sony
                </h1>
                <br></br>
                <div >
                    <div style={{ float: 'left', width: '50%', height: '500px',padding: '10px' }}>
                        <br></br>
                        <br></br>
                        <h4 style={{ textAlign: 'justify' , color: 'black'}}>
                            Sony es una plataforma dedicada a gestionar y facilitar el anvance de trabajo en los equipos.
                            Colaborar, gestionar proyectos, y alcanzar nuevos picos de productividad deseada.
                            Desde diversos lugares del globo hasta el trabajo en casa, Sony genera nuevas formas en que tu equipo
                            pueda trabajar en colaboración y de forma única.
                        </h4>
                    </div>
                    <div style={{ float: 'left', width: '50%', height: '500px', padding: '10px' }}>
                        <img src="http://www.ricardosalinas.com/blog/images/fotoblogene2709.png" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '500px', borderRadius: '15px' }}></img>
                    </div>
                </div>
                <br></br>
                
                <h3 style={{ textAlign: 'center', color: 'black'}}>
                    Es más que trabajo. Es una forma de trabajar juntos
                </h3>
                <h5 style={{ textAlign: 'center', color: 'black'}}>
                    Gestión de proyectos, organizador de tareas, y constructor de espiritu de trabajo <strong>en un solo lugar</strong>.
                </h5>
                <br></br>
                <footer>
                    <p>
                        Plataforma desarrollada por Equipo 4 Uninorte
                    </p>
                </footer>
            </main>
            <div className="fixed-plugin">
                <a className="fixed-plugin-button text-dark position-fixed px-3 py-2">
                    <i className="material-icons py-2">settings</i>
                </a>
                <div className="card shadow-lg">
                    <div className="card-header pb-0 pt-3">
                        <div className="float-start">
                            <h5 className="mt-3 mb-0">Material UI Configurator</h5>
                            <p>See our dashboard options.</p>
                        </div>
                        <div className="float-end mt-4">
                            <button className="btn btn-link text-dark p-0 fixed-plugin-close-button">
                                <i className="material-icons">clear</i>
                            </button>
                        </div>
                        {/*<!-- End Toggle Button -->*/}
                    </div>
                    <hr className="horizontal dark my-1"></hr>
                    <div className="card-body pt-sm-3 pt-0">
                        {/*<!--Sidebar Backgrounds-->*/}
                        <div>
                            <h6 className="mb-0">Sidebar Colors</h6>
                        </div>
                        <a href="javascript:void(0)" className="switch-trigger background-color">
                            <div className="badge-colors my-2 text-start">
                                <span className="badge filter bg-gradient-primary active" data-color="primary" onclick="sidebarColor(this)"></span>
                                <span className="badge filter bg-gradient-dark" data-color="dark" onclick="sidebarColor(this)"></span>
                                <span className="badge filter bg-gradient-info" data-color="info" onclick="sidebarColor(this)"></span>
                                <span className="badge filter bg-gradient-success" data-color="success" onclick="sidebarColor(this)"></span>
                                <span className="badge filter bg-gradient-warning" data-color="warning" onclick="sidebarColor(this)"></span>
                                <span className="badge filter bg-gradient-danger" data-color="danger" onclick="sidebarColor(this)"></span>
                            </div>
                        </a>
                        {/*<!--Sidenav Type-->*/}
                        <div className="mt-3">
                            <h6 className="mb-0">Sidenav Type</h6>
                            <p className="text-sm">Choose between 2 different sidenav types.</p>
                        </div>
                        <div className="d-flex">
                            <button className="btn bg-gradient-dark px-3 mb-2 active" data-className="bg-gradient-dark" onclick="sidebarType(this)">Dark</button>
                            <button className="btn bg-gradient-dark px-3 mb-2 ms-2" data-className="bg-transparent" onclick="sidebarType(this)">Transparent</button>
                            <button className="btn bg-gradient-dark px-3 mb-2 ms-2" data-className="bg-white" onclick="sidebarType(this)">White</button>
                        </div>
                        <p className="text-sm d-xl-none d-block mt-2">You can change the sidenav type just on desktop view.</p>
                        {/*<!--Navbar Fixed-->*/}
                        <div className="mt-3 d-flex">
                            <h6 className="mb-0">Navbar Fixed</h6>
                            <div className="form-check form-switch ps-0 ms-auto my-auto">
                                <input className="form-check-input mt-1 ms-auto" type="checkbox" id="navbarFixed" onclick="navbarFixed(this)"></input>
                            </div>
                        </div>
                        <hr className="horizontal dark my-3"></hr>
                        <div className="mt-2 d-flex">
                            <h6 className="mb-0">Light / Dark</h6>
                            <div className="form-check form-switch ps-0 ms-auto my-auto">
                                <input className="form-check-input mt-1 ms-auto" type="checkbox" id="dark-version" onclick="darkMode(this)"></input>
                            </div>
                        </div>
                    </div>
                    <hr className="horizontal dark my-sm-4"></hr>
                    <a className="btn btn-outline-dark w-100" href="">View documentation</a>
                    <div className="w-100 text-center">
                        <a className="github-button" href="https://github.com/creativetimofficial/material-dashboard" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star creativetimofficial/material-dashboard on GitHub">Star</a>
                        <h6 className="mt-3">Thank you for sharing!</h6>
                        <a href="https://twitter.com/intent/tweet?text=Check%20Material%20UI%20Dashboard%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23bootstrap5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fsoft-ui-dashboard" className="btn btn-dark mb-0 me-2" target="_blank">
                            <i className="fab fa-twitter me-1" aria-hidden="true"></i> Tweet
                        </a>
                        <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-dashboard" className="btn btn-dark mb-0 me-2" target="_blank">
                            <i className="fab fa-facebook-square me-1" aria-hidden="true"></i> Share
                        </a>
                    </div>
                </div>
            </div>
            <Script src="./js/material-dashboard.min.js?v=3.0.0" />
            <Script src="./js/core/popper.min.js" />
            <Script src="./js/core/bootstrap.min.js" />
            <Script src="./js/plugins/perfect-scrollbar.min.js" />
            <Script src="./js/plugins/smooth-scrollbar.min.js" />
            <Script src="./js/plugins/chartjs.min.js" />
            <Script async defer src="https://buttons.github.io/buttons.js" />
        </div>
    )
}
