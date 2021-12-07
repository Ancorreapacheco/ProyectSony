import React from 'react'
import { Link } from 'react-router-dom';

import './css/style_main.css';
import './css/nucleo-icons.css';
import './css/nucleo-svg.css';
import Logo from './images/logosony.png';
import { Aside } from './Aside';

export const Task = () => {
    return (
        <div>
            <Aside/>
            <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
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
                <div>
                    <div>
                        <hr></hr>
                        <h2>
                            Crear actividades
                        </h2>
                        <hr></hr>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'initial' }}>
                        <label for="name">
                            Filtrar por nombre: &emsp;&emsp;
                        </label>
                        <input type="text" id="name"></input>
                        <div style={{ padding: '0 25px' }}>
                            <button style={{ borderRadius: '10px' }}><i className="fas fa-search"></i></button>
                        </div>
                    </div>
                    <br></br>
                    <div style={{ display: 'flex', justifyContent: 'initial' }}>
                        <label for="name">
                            Actividad: &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        </label>
                        <input type="text" id="name"></input>
                        <div style={{ padding: '0 25px' }}>
                            <button style={{ borderRadius: '10px' }}><i className="fas fa-check-circle"></i></button>
                        </div>
                    </div>
                    <br></br>
                    <div style={{ display: 'flex', justifyContent: 'initial' }}>
                        <div style={{ padding: '0 25px' }}>
                            <label for="start">
                                Fecha inicial: &emsp;&emsp;
                            </label>
                            <input type='date' id='start'></input>
                        </div>
                        <div style={{ padding: '0 25px' }}>
                            <label for="finish">
                                Fecha final: &emsp;&emsp;
                            </label>
                            <input type='date' id='finish'></input>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button style={{ borderRadius: '7px', width: '200px', height: '50px', background: '#e91e63', color: 'white'}}>Guardar actividad</button>
                    </div>
                    <br></br>
                    <br></br>
                    <div style={{ display: 'flex', justifyContent: 'center', width: '100hv' }}>
                        <table style={{ widht: '100hv' , border: '1px solid black', color: 'black'}}>
                            <tr style={{ widht: '100px',border: '1px solid black' }}>
                                <th style={{ border: '1px solid black' }}>Actividades</th>
                                <th style={{ border: '1px solid black' }}>Tiempo estimado</th>
                                <th style={{ border: '1px solid black' }}>Fecha de inicio</th>
                                <th style={{ border: '1px solid black' }}>Fecha de finalización</th>
                            </tr>
                            <tr style={{ border: '1px solid black' }}>
                                <td style={{ border: '1px solid black' }}>Desarrollar front end</td>
                                <td style={{ border: '1px solid black' }}>15 días</td>
                                <td style={{ border: '1px solid black' }}>10/12/2021</td>
                                <td style={{ border: '1px solid black' }}>25/12/2021</td>
                            </tr>
                            <tr style={{ border: '1px solid black' }}>
                                <td style={{ border: '1px solid black' }}>Desarrollar back end</td>
                                <td style={{ border: '1px solid black' }}>15 días</td>
                                <td style={{ border: '1px solid black' }}>10/12/2021</td>
                                <td style={{ border: '1px solid black' }}>25/12/2021</td>
                            </tr>
                            <tr style={{ border: '1px solid black' }}>
                                <td style={{ border: '1px solid black' }}>Desplegar aplicación</td>
                                <td style={{ border: '1px solid black' }}>15 días</td>
                                <td style={{ border: '1px solid black' }}>10/12/2021</td>
                                <td style={{ border: '1px solid black' }}>25/12/2021</td>
                            </tr>
                        </table>
                    </div>
                    <br></br>
                    <br></br>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button style={{ borderRadius: '7px', width: '200px', height: '50px', background: '#e91e63', color: 'white' }}>Finalizar proyecto</button>
                    </div>
                </div>
            </main>
        </div>
    )
}
