import React from 'react'
import { Link } from 'react-router-dom';

import './css/style_main.css';
import Logo from './images/logosony.png';
import Lina from './images/lina.jpg';
import Kevin from './images/Kevin.jpg';

export const Cuenta = () => {
    return (
        <div>
            <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
                <div className="sidenav-header">
                    <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
                    <Link className="navbar-brand m-0" to="/" target="_blank"> 
                        <img src={ Logo } className="navbar-brand-img h-100" alt="main_logo"></img>
                        <span className ="ms-1 font-weight-bold text-white">Gestion de proyectos</span>
                    </Link>
                </div>
                <hr className="horizontal light mt-0 mb-2"></hr>
                <div className="collapse navbar-collapse  w-auto  max-height-vh-100" id="sidenav-collapse-main">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link text-white " to="/">
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
                            <Link className="nav-link text-white " to="/">
                                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="material-icons opacity-10">table_view</i>
                                </div>
                                <span className="nav-link-text ms-1">Proyectos</span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-white " to="/">
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
                            <Link className="nav-link text-white active bg-gradient-primary" to="/count">
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
            <div className="main-content position-relative bg-gray-100 max-height-vh-100 h-100">
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
                                                            <span className="font-weight-bold">New message</span> from Laur
                                                        </h6>
                                                        <p className="text-xs text-secondary mb-0">
                                                            <i className="fa fa-clock me-1"></i>
                                                            13 minutes ago
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="mb-2">
                                            <a className="dropdown-item border-radius-md" href="javascript:;">
                                                <div className="d-flex py-1">
                                                    <div className="my-auto">
                                                        <img src="./assets/img/small-logos/logo-spotify.svg" className="avatar avatar-sm bg-gradient-dark  me-3 "></img>
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="text-sm font-weight-normal mb-1">
                                                            <span className="font-weight-bold">New album</span> by Travis Scott
                                                        </h6>
                                                        <p className="text-xs text-secondary mb-0">
                                                            <i className="fa fa-clock me-1"></i>
                                                            1 day
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item border-radius-md" href="javascript:;">
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
                                                            Payment successfully completed
                                                        </h6>
                                                        <p className="text-xs text-secondary mb-0">
                                                            <i className="fa fa-clock me-1"></i>
                                                            2 days
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/*<!-- End Navbar -->*/}
                <div className="container-fluid px-2 px-md-4">
                    <div className="page-header min-height-300 border-radius-xl mt-4" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)'}}>
                        <span className="mask  bg-gradient-primary  opacity-6"></span>
                    </div>
                    <div className="card card-body mx-3 mx-md-4 mt-n6">
                        <div className="row gx-4 mb-2">
                            <div className="col-auto">
                                <div className="avatar avatar-xl position-relative">
                                    <img src={ Lina } alt="profile_image" className="w-100 border-radius-lg shadow-sm"></img>
                                </div>
                            </div>
                            <div className="col-auto my-auto">
                                <div className="h-100">
                                    <h5 className="mb-1">
                                        Lina Florez
                                    </h5>
                                    <p className="mb-0 font-weight-normal text-sm">
                                        Usuario Lider
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
                                <div className="nav-wrapper position-relative end-0">
                                    <ul className="nav nav-pills nav-fill p-1" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link mb-0 px-0 py-1 active " data-bs-toggle="tab" href="javascript:;" role="tab" aria-selected="true">
                                                <i className="material-icons text-lg position-relative">home</i>
                                                <span className="ms-1">Inicio</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link mb-0 px-0 py-1 " data-bs-toggle="tab" href="javascript:;" role="tab" aria-selected="false">
                                                <i className="material-icons text-lg position-relative">email</i>
                                                <span className="ms-1">Mensajes</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link mb-0 px-0 py-1 " data-bs-toggle="tab" href="javascript:;" role="tab" aria-selected="false">
                                                <i className="material-icons text-lg position-relative">settings</i>
                                                <span className="ms-1">Ajustes</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="row">
                                <div className="col-12 col-xl-4">
                                    <div className="card card-plain h-100">
                                        <div className="card-header pb-0 p-3">
                                            <h6 className="mb-0">Ajustes de plataforma</h6>
                                        </div>
                                        <div className="card-body p-3">
                                            <h6 className="text-uppercase text-body text-xs font-weight-bolder">Cuenta</h6>
                                            <ul className="list-group">
                                                <li className="list-group-item border-0 px-0">
                                                    <div className="form-check form-switch ps-0">
                                                        <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault" ></input>
                                                        <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0" for="flexSwitchCheckDefault">Envíame un correo electrónico cuando alguien me siga</label>
                                                    </div>
                                                </li>
                                                <li className="list-group-item border-0 px-0">
                                                    <div className="form-check form-switch ps-0">
                                                        <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault1"></input>
                                                        <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0" for="flexSwitchCheckDefault1">Envíame un correo electrónico cuando alguien responda a mi publicación</label>
                                                    </div>
                                                </li>
                                                <li className="list-group-item border-0 px-0">
                                                    <div className="form-check form-switch ps-0">
                                                        <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault2" ></input>
                                                        <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0" for="flexSwitchCheckDefault2">Envíame un correo electrónico cuando alguien me mencione</label>
                                                    </div>
                                                </li>
                                            </ul>
                                            <h6 className="text-uppercase text-body text-xs font-weight-bolder mt-4">Aplicación</h6>
                                            <ul className="list-group">
                                                <li className="list-group-item border-0 px-0">
                                                    <div className="form-check form-switch ps-0">
                                                        <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault3"></input>
                                                        <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0" for="flexSwitchCheckDefault3">Nuevos lanzamientos y proyectos</label>
                                                    </div>
                                                </li>
                                                <li className="list-group-item border-0 px-0">
                                                    <div className="form-check form-switch ps-0">
                                                        <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault4" ></input>
                                                        <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0" for="flexSwitchCheckDefault4">Actualizaciones mensuales de productos</label>
                                                    </div>
                                                </li>
                                                <li className="list-group-item border-0 px-0 pb-0">
                                                    <div className="form-check form-switch ps-0">
                                                        <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault5"></input>
                                                        <label className ="form-check-label text-body ms-3 text-truncate w-80 mb-0" for="flexSwitchCheckDefault5">Suscribirse al boletín</label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-4">
                                    <div className="card card-plain h-100">
                                        <div className="card-header pb-0 p-3">
                                            <div className="row">
                                                <div className="col-md-8 d-flex align-items-center">
                                                    <h6 className="mb-0">Bibliografía</h6>
                                                </div>
                                                <div className="col-md-4 text-end">
                                                    <a href="javascript:;">
                                                        <i className="fas fa-user-edit text-secondary text-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Profile"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body p-3">
                                            <p className="text-sm">
                                                Hola, soy Lina Florez, Decisiones: si no puede decidir, la respuesta es no.
                                                Si dos caminos igualmente difíciles, elija el más doloroso en el corto
                                                término (evitar el dolor es crear una ilusión de igualdad).
                                            </p>
                                            <hr className="horizontal gray-light my-4"></hr>
                                            <ul className ="list-group">
                                                <li className ="list-group-item border-0 ps-0 pt-0 text-sm"><strong className ="text-dark">Nombre completo: </strong> &nbsp; Lina Andres Florez Albanes</li>
                                                <li className ="list-group-item border-0 ps-0 text-sm"><strong className ="text-dark">Celular: </strong> &nbsp; (44) 123 1234 123</li>
                                                <li className ="list-group-item border-0 ps-0 text-sm"><strong className ="text-dark">Email: </strong> &nbsp; lalbanes@uninorte.edu.co</li>
                                                <li className ="list-group-item border-0 ps-0 text-sm"><strong className ="text-dark">Ubicación: </strong> &nbsp; Medellín, COL</li>
                                                <li className ="list-group-item border-0 ps-0 pb-0">
                                                    <strong className ="text-dark text-sm">Redes sociales </strong> &nbsp;
                                                    <a className ="btn btn-facebook btn-simple mb-0 ps-1 pe-2 py-0" href="javascript:;">
                                                        <i className ="fab fa-facebook fa-lg"></i>
                                                    </a>
                                                    <a className ="btn btn-twitter btn-simple mb-0 ps-1 pe-2 py-0" href="javascript:;">
                                                        <i className ="fab fa-twitter fa-lg"></i>
                                                    </a>
                                                    <a className ="btn btn-instagram btn-simple mb-0 ps-1 pe-2 py-0" href="javascript:;">
                                                        <i className ="fab fa-instagram fa-lg"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-4">
                                    <div className="card card-plain h-100">
                                        <div className="card-header pb-0 p-3">
                                            <h6 className="mb-0">Conversaciones</h6>
                                        </div>
                                        <div className="card-body p-3">
                                            <ul className="list-group">
                                                <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2 pt-0">
                                                    <div className="avatar me-3">
                                                        <img src={ Kevin } alt="kal" className="border-radius-lg shadow"></img>
                                                    </div>
                                                    <div className="d-flex align-items-start flex-column justify-content-center">
                                                        <h6 className="mb-0 text-sm">Kevin Q.</h6>
                                                        <p className="mb-0 text-xs">Hola, necesito más información..</p>
                                                    </div>
                                                    <a className="btn btn-link pe-3 ps-0 mb-0 ms-auto w-25 w-md-auto" href="javascript:;">Contestar</a>
                                                </li>
                                                <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                                                    <div className="avatar me-3">
                                                        <img src="../assets/img/marie.jpg" alt="kal" className="border-radius-lg shadow"></img>
                                                    </div>
                                                    <div className="d-flex align-items-start flex-column justify-content-center">
                                                        <h6 className="mb-0 text-sm">Andrés C.</h6>
                                                        <p className="mb-0 text-xs">Excelente trabajo, puedes..</p>
                                                    </div>
                                                    <a className="btn btn-link pe-3 ps-0 mb-0 ms-auto w-25 w-md-auto" href="javascript:;">Contestar</a>
                                                </li>
                                                <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                                                    <div className="avatar me-3">
                                                        <img src="../assets/img/ivana-square.jpg" alt="kal" className="border-radius-lg shadow"></img>
                                                    </div>
                                                    <div className="d-flex align-items-start flex-column justify-content-center">
                                                        <h6 className="mb-0 text-sm">Yulieth Z.</h6>
                                                        <p className="mb-0 text-xs">Sonre los archivos, yo..</p>
                                                    </div>
                                                    <a className="btn btn-link pe-3 ps-0 mb-0 ms-auto w-25 w-md-auto" href="javascript:;">Contestar</a>
                                                </li>
                                                <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                                                    <div className="avatar me-3">
                                                        <img src="../assets/img/team-4.jpg" alt="kal" className="border-radius-lg shadow"></img>
                                                    </div>
                                                    <div className="d-flex align-items-start flex-column justify-content-center">
                                                        <h6 className="mb-0 text-sm">Jesus M.</h6>
                                                        <p className="mb-0 text-xs">Excelente tarde..</p>
                                                    </div>
                                                    <a className="btn btn-link pe-3 ps-0 mb-0 ms-auto w-25 w-md-auto" href="javascript:;">Contestar</a>
                                                </li>
                                                <li className="list-group-item border-0 d-flex align-items-center px-0">
                                                    <div className="avatar me-3">
                                                        <img src="../assets/img/team-3.jpg" alt="kal" className="border-radius-lg shadow"></img>
                                                    </div>
                                                    <div className="d-flex align-items-start flex-column justify-content-center">
                                                        <h6 className="mb-0 text-sm">Abraham R.</h6>
                                                        <p className="mb-0 text-xs">Hola! Quiero conoc..</p>
                                                    </div>
                                                    <a className="btn btn-link pe-3 ps-0 mb-0 ms-auto w-25 w-md-auto" href="javascript:;">Contestar</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mt-4">
                                    <div className="mb-5 ps-3">
                                        <h6 className="mb-1">Proyectos</h6>
                                        <p className="text-sm">FrontEnds en desarrollo</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-3 col-md-6 mb-xl-0 mb-4">
                                            <div className="card card-blog card-plain">
                                                <div className="card-header p-0 mt-n4 mx-3">
                                                    <a className="d-block shadow-xl border-radius-xl">
                                                        <img src="https://miro.medium.com/max/2000/1*ghfEivqtCdLAFXbgBDEoyw.png" alt="img-blur-shadow" className="img-fluid shadow border-radius-xl"></img>
                                                    </a>
                                                </div>
                                                <div className="card-body p-3">
                                                    <p className="mb-0 text-sm">Proyecto #2</p>
                                                    <a href="javascript:;">
                                                        <h5>
                                                            Estático
                                                        </h5>
                                                    </a>
                                                    <p className="mb-4 text-sm">
                                                        As Uber works through a huge amount of internal management turmoil.
                                                    </p>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <button type="button" className="btn btn-outline-primary btn-sm mb-0">Ver proyecto</button>
                                                        <div className="avatar-group mt-2">
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Elena Morison">
                                                                <img alt="Image placeholder" src="../assets/img/team-1.jpg"></img>
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Milly">
                                                                <img alt="Image placeholder" src="../assets/img/team-2.jpg"></img>
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Nick Daniel">
                                                                <img alt="Image placeholder" src="../assets/img/team-3.jpg"></img>
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Peterson">
                                                                <img alt="Image placeholder" src="../assets/img/team-4.jpg"></img>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-6 mb-xl-0 mb-4">
                                            <div className="card card-blog card-plain">
                                                <div className="card-header p-0 mt-n4 mx-3">
                                                    <a className="d-block shadow-xl border-radius-xl">
                                                        <img src="https://www.reactjsindia.com/blog/wp-content/uploads/2021/05/Everything-to-know-about-ReactJs-Web-App-Development.jpg" alt="img-blur-shadow" className="img-fluid shadow border-radius-lg"></img>
                                                    </a>
                                                </div>
                                                <div className="card-body p-3">
                                                    <p className="mb-0 text-sm">Proyecto #1</p>
                                                    <a href="javascript:;">
                                                        <h5>
                                                            Dinámico
                                                        </h5>
                                                    </a>
                                                    <p className="mb-4 text-sm">
                                                        Music is something that every person has his or her own specific opinion about.
                                                    </p>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <button type="button" className="btn btn-outline-primary btn-sm mb-0">Ver Proyecto</button>
                                                        <div className="avatar-group mt-2">
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Nick Daniel">
                                                                <img alt="Image placeholder" src="../assets/img/team-3.jpg"></img>
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Peterson">
                                                                <img alt="Image placeholder" src="../assets/img/team-4.jpg"></img>
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Elena Morison">
                                                                <img alt="Image placeholder" src="../assets/img/team-1.jpg"></img>
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Milly">
                                                                <img alt="Image placeholder" src="../assets/img/team-2.jpg"></img>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-6 mb-xl-0 mb-4">
                                            <div className="card card-blog card-plain">
                                                <div className="card-header p-0 mt-n4 mx-3">
                                                    <a className="d-block shadow-xl border-radius-xl">
                                                        <img src="https://i.ytimg.com/vi/NO2DaxhoWHk/maxresdefault.jpg" alt="img-blur-shadow" className="img-fluid shadow border-radius-xl"></img>
                                                    </a>
                                                </div>
                                                <div className="card-body p-3">
                                                    <p className="mb-0 text-sm">Proyecto #3</p>
                                                    <a href="javascript:;">
                                                        <h5>
                                                            Aplicación
                                                        </h5>
                                                    </a>
                                                    <p className="mb-4 text-sm">
                                                        Different people have different taste, and various types of music.
                                                    </p>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <button type="button" className="btn btn-outline-primary btn-sm mb-0">Ver Proyecto</button>
                                                        <div className="avatar-group mt-2">
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Peterson">
                                                                <img alt="Image placeholder" src="../assets/img/team-4.jpg"></img>
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Nick Daniel">
                                                                <img alt="Image placeholder" src="../assets/img/team-3.jpg"></img>
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Milly">
                                                                <img alt="Image placeholder" src="../assets/img/team-2.jpg"></img>
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Elena Morison">
                                                                <img alt="Image placeholder" src="../assets/img/team-1.jpg"></img>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-6 mb-xl-0 mb-4">
                                            <div className="card card-blog card-plain">
                                                <div className="card-header p-0 mt-n4 mx-3">
                                                    <a className="d-block shadow-xl border-radius-xl">
                                                        <img src="https://3.bp.blogspot.com/-co9IzI0I4mI/XGS3iyQi1sI/AAAAAAAAFo4/RhLWOcJeBvE3XzBIy8akSmTZ5TTGgRJEwCLcBGAs/s1600/maxresdefault.jpg" alt="img-blur-shadow" className="img-fluid shadow border-radius-xl"></img>
                                                    </a>
                                                </div>
                                                <div className="card-body p-3">
                                                    <p className="mb-0 text-sm">Proyecto #4</p>
                                                    <a href="javascript:;">
                                                        <h5>
                                                            Dinámico
                                                        </h5>
                                                    </a>
                                                    <p className="mb-4 text-sm">
                                                        Why would anyone pick blue over pink? Pink is obviously a better color.
                                                    </p>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <button type="button" className="btn btn-outline-primary btn-sm mb-0">Ver Proyecto</button>
                                                        <div className="avatar-group mt-2">
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Peterson">
                                                                <img alt="Image placeholder" src="../assets/img/team-4.jpg"></img>
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Nick Daniel">
                                                                <img alt="Image placeholder" src="../assets/img/team-3.jpg"></img>
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Milly">
                                                                <img alt="Image placeholder" src="../assets/img/team-2.jpg"></img>
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Elena Morison">
                                                                <img alt="Image placeholder" src="../assets/img/team-1.jpg"></img>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed-plugin">
                <a className="fixed-plugin-button text-dark position-fixed px-3 py-2">
                    <i className="material-icons py-2">Ajustes</i>
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
                    <div className ="card-body pt-sm-3 pt-0">
                    {/*<!--Sidebar Backgrounds-->*/}
                        <div>
                            <h6 className ="mb-0">Sidebar Colors</h6>
                        </div>
                        <a href="javascript:void(0)" className ="switch-trigger background-color">
                            <div className ="badge-colors my-2 text-start">
                                <span className ="badge filter bg-gradient-primary active" data-color="primary" onclick="sidebarColor(this)"></span>
                                <span className ="badge filter bg-gradient-dark" data-color="dark" onclick="sidebarColor(this)"></span>
                                <span className ="badge filter bg-gradient-info" data-color="info" onclick="sidebarColor(this)"></span>
                                <span className ="badge filter bg-gradient-success" data-color="success" onclick="sidebarColor(this)"></span>
                                <span className ="badge filter bg-gradient-warning" data-color="warning" onclick="sidebarColor(this)"></span>
                                <span className ="badge filter bg-gradient-danger" data-color="danger" onclick="sidebarColor(this)"></span>
                            </div>
                        </a>
                    {/*<!--Sidenav Type-->*/}
                        <div className ="mt-3">
                            <h6 className ="mb-0">Sidenav Type</h6>
                            <p className ="text-sm">Choose between 2 different sidenav types.</p>
                        </div>
                        <div className ="d-flex">
                            <button className ="btn bg-gradient-dark px-3 mb-2 active" data-className ="bg-gradient-dark" onclick="sidebarType(this)">Dark</button>
                            <button className ="btn bg-gradient-dark px-3 mb-2 ms-2" data-className ="bg-transparent" onclick="sidebarType(this)">Transparent</button>
                            <button className ="btn bg-gradient-dark px-3 mb-2 ms-2" data-className ="bg-white" onclick="sidebarType(this)">White</button>
                        </div>
                        <p className ="text-sm d-xl-none d-block mt-2">You can change the sidenav type just on desktop view.</p>
                    {/*<!--Navbar Fixed-->*/}
                        <hr className ="horizontal dark my-3"></hr>
                        <div className ="mt-2 d-flex">
                            <h6 className ="mb-0">Light / Dark</h6>
                            <div className ="form-check form-switch ps-0 ms-auto my-auto">
                                <input className ="form-check-input mt-1 ms-auto" type ="checkbox" id="dark-version" onclick="darkMode(this)"></input>
                            </div>
                        </div>
                        <hr className ="horizontal dark my-sm-4"></hr>
                        <a className ="btn btn-outline-dark w-100" href="">View documentation</a>
                        <div className ="w-100 text-center">
                            <a className ="github-button" href="https://github.com/creativetimofficial/material-dashboard" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star creativetimofficial/material-dashboard on GitHub">Star</a>
                                <h6 className ="mt-3">Thank you for sharing!</h6>
                            <a href="https://twitter.com/intent/tweet?text=Check%20Material%20UI%20Dashboard%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23bootstrap5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fsoft-ui-dashboard" className ="btn btn-dark mb-0 me-2" target="_blank">
                                <i className ="fab fa-twitter me-1" aria-hidden="true"></i> Tweet
                            </a>
                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-dashboard" className ="btn btn-dark mb-0 me-2" target="_blank">
                                <i className ="fab fa-facebook-square me-1" aria-hidden="true"></i> Share
                            </a>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
    )
}
