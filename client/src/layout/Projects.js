import React from 'react';
import { Link } from 'react-router-dom';

import './css/style_main.css';
import AS from './images/small-logos/logo-asana.svg';
import GI from './images/small-logos/github.svg';
import AT from './images/small-logos/logo-atlassian.svg';
import BO from './images/small-logos/bootstrap.svg';
import SL from './images/small-logos/logo-slack.svg';
import DE from './images/small-logos/devto.svg';
import Lina from './images/lina.jpg';
import Kevin from './images/Kevin.jpg';
import { Aside } from './Aside';
import { CrudEllipsisMenu } from './components/CrudEllipsisMenu';

export const Projects = () => {
    return (
        <div>            
            <Aside/>
            <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
                    <div className="container-fluid py-1 px-3">
                        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                            <div>
                                <Link to='/projects/create'>
                                    <button style={{ borderRadius: '15px', width: '220px', height: '70px', background: '#E73872' , color: 'white', fontWeight: '450'}}>
                                    Crear nuevo proyecto
                                    </button>
                                </Link>
                            </div>
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
                <div class="container-fluid py-4">
                    <div class="row">
                        <div class="col-12">
                            <div class="card my-4">
                                <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                    <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                                        <h6 class="text-white text-capitalize ps-3">Usuarios contribuyentes</h6>
                                    </div>
                                </div>
                                <div class="card-body px-0 pb-2">
                                    <div class="table-responsive p-0">
                                        <table class="table align-items-center mb-0">
                                            <thead>
                                                <tr>
                                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Usuario</th>
                                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Función</th>
                                                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Estado</th>
                                                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Contratado desde</th>
                                                    <th class="text-secondary opacity-7"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex px-2 py-1">
                                                            <div>
                                                                <img src={Lina} class="avatar avatar-sm me-3 border-radius-lg" alt="user1"></img>
                                                            </div>
                                                            <div class="d-flex flex-column justify-content-center">
                                                                <h6 class="mb-0 text-sm">Lina Florez</h6>
                                                                <p class="text-xs text-secondary mb-0">lalbanes@uninorte.edu.co</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p class="text-xs font-weight-bold mb-0">Usuario Lider</p>
                                                        <p class="text-xs text-secondary mb-0">Frontend</p>
                                                    </td>
                                                    <td class="align-middle text-center text-sm">
                                                        <span class="badge badge-sm bg-gradient-success">En línea</span>
                                                    </td>
                                                    <td class="align-middle text-center">
                                                        <span class="text-secondary text-xs font-weight-bold">23/04/18</span>
                                                    </td>
                                                    <td class="align-middle">
                                                        <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                            Editar
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex px-2 py-1">
                                                            <div>
                                                                <img src="../assets/img/team-3.jpg" class="avatar avatar-sm me-3 border-radius-lg" alt="user2"></img>
                                                            </div>
                                                            <div class="d-flex flex-column justify-content-center">
                                                                <h6 class="mb-0 text-sm">Andrés Correa</h6>
                                                                <p class="text-xs text-secondary mb-0">aacorrea@uninorte.edu.co</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p class="text-xs font-weight-bold mb-0">Usuario Lider</p>
                                                        <p class="text-xs text-secondary mb-0">Gestor</p>
                                                    </td>
                                                    <td class="align-middle text-center text-sm">
                                                        <span class="badge badge-sm bg-gradient-secondary">Desconectado</span>
                                                    </td>
                                                    <td class="align-middle text-center">
                                                        <span class="text-secondary text-xs font-weight-bold">11/01/19</span>
                                                    </td>
                                                    <td class="align-middle">
                                                        <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                            Editar
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex px-2 py-1">
                                                            <div>
                                                                <img src="../assets/img/team-4.jpg" class="avatar avatar-sm me-3 border-radius-lg" alt="user3"></img>
                                                            </div>
                                                            <div class="d-flex flex-column justify-content-center">
                                                                <h6 class="mb-0 text-sm">Jesus Meza</h6>
                                                                <p class="text-xs text-secondary mb-0">jesusmeza@uninorte.edu.co</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p class="text-xs font-weight-bold mb-0">Usuario </p>
                                                        <p class="text-xs text-secondary mb-0">Front end</p>
                                                    </td>
                                                    <td class="align-middle text-center text-sm">
                                                        <span class="badge badge-sm bg-gradient-success">En línea</span>
                                                    </td>
                                                    <td class="align-middle text-center">
                                                        <span class="text-secondary text-xs font-weight-bold">19/09/17</span>
                                                    </td>
                                                    <td class="align-middle">
                                                        <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                            Editar
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex px-2 py-1">
                                                            <div>
                                                                <img src="../assets/img/team-3.jpg" class="avatar avatar-sm me-3 border-radius-lg" alt="user4"></img>
                                                            </div>
                                                            <div class="d-flex flex-column justify-content-center">
                                                                <h6 class="mb-0 text-sm">Yulieth Zambrano</h6>
                                                                <p class="text-xs text-secondary mb-0">yulietz@uninorte.edu.co</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p class="text-xs font-weight-bold mb-0">Usuario Lider</p>
                                                        <p class="text-xs text-secondary mb-0">Front end</p>
                                                    </td>
                                                    <td class="align-middle text-center text-sm">
                                                        <span class="badge badge-sm bg-gradient-success">En línea</span>
                                                    </td>
                                                    <td class="align-middle text-center">
                                                        <span class="text-secondary text-xs font-weight-bold">24/12/08</span>
                                                    </td>
                                                    <td class="align-middle">
                                                        <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                            Editar
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex px-2 py-1">
                                                            <div>
                                                                <img src={ Kevin } class="avatar avatar-sm me-3 border-radius-lg" alt="user5"></img>
                                                            </div>
                                                            <div class="d-flex flex-column justify-content-center">
                                                                <h6 class="mb-0 text-sm">Kevin Quiroga</h6>
                                                                <p class="text-xs text-secondary mb-0">ksquiroga@uninorte.edu.co</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p class="text-xs font-weight-bold mb-0">Usuario</p>
                                                        <p class="text-xs text-secondary mb-0">Desarrollador fullstack</p>
                                                    </td>
                                                    <td class="align-middle text-center text-sm">
                                                        <span class="badge badge-sm bg-gradient-secondary">Desconectado</span>
                                                    </td>
                                                    <td class="align-middle text-center">
                                                        <span class="text-secondary text-xs font-weight-bold">04/10/21</span>
                                                    </td>
                                                    <td class="align-middle">
                                                        <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                            Editar
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex px-2 py-1">
                                                            <div>
                                                                <img src="../assets/img/team-4.jpg" class="avatar avatar-sm me-3 border-radius-lg" alt="user6"></img>
                                                            </div>
                                                            <div class="d-flex flex-column justify-content-center">
                                                                <h6 class="mb-0 text-sm">Abraham Lugo</h6>
                                                                <p class="text-xs text-secondary mb-0">alugo@uninorte.edu.co</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p class="text-xs font-weight-bold mb-0">Asesor</p>
                                                        <p class="text-xs text-secondary mb-0">Desarrollador</p>
                                                    </td>
                                                    <td class="align-middle text-center text-sm">
                                                        <span class="badge badge-sm bg-gradient-secondary">Desconectado</span>
                                                    </td>
                                                    <td class="align-middle text-center">
                                                        <span class="text-secondary text-xs font-weight-bold">14/09/20</span>
                                                    </td>
                                                    <td class="align-middle">
                                                        <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                            Edit
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="card my-4">
                                <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                    <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                                        <h6 class="text-white text-capitalize ps-3">Proyectos</h6>
                                    </div>
                                </div>
                                <div class="card-body px-0 pb-2">
                                    <div class="table-responsive p-0">
                                        <table class="table align-items-center justify-content-center mb-0">
                                            <thead>
                                                <tr>
                                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Proyecto</th>
                                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Días presupuestados</th>
                                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Estatus</th>
                                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">Progreso</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex px-2">
                                                            <div>
                                                                <img src= { AS } class="avatar avatar-sm rounded-circle me-2" alt="spotify"></img>
                                                            </div>
                                                            <div class="my-auto">
                                                                <h6 class="mb-0 text-sm">Asana</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p class="text-sm font-weight-bold mb-0">15</p>
                                                    </td>
                                                    <td>
                                                        <span class="text-xs font-weight-bold">activo</span>
                                                    </td>
                                                    <td class="align-middle text-center">
                                                        <div class="d-flex align-items-center justify-content-center">
                                                            <span class="me-2 text-xs font-weight-bold">60%</span>
                                                            <div>
                                                                <div class="progress">
                                                                    <div class="progress-bar bg-gradient-info" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ "width": "60%" }}></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="align-middle">
                                                        <button class="btn btn-link text-secondary mb-0">
                                                            <i class="fa fa-ellipsis-v text-xs"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex px-2">
                                                            <div>
                                                                <img src={ GI } class="avatar avatar-sm rounded-circle me-2" alt="invision"></img>
                                                            </div>
                                                            <div class="my-auto">
                                                                <h6 class="mb-0 text-sm">Github</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p class="text-sm font-weight-bold mb-0">50</p>
                                                    </td>
                                                    <td>
                                                        <span class="text-xs font-weight-bold">terminado</span>
                                                    </td>
                                                    <td class="align-middle text-center">
                                                        <div class="d-flex align-items-center justify-content-center">
                                                            <span class="me-2 text-xs font-weight-bold">100%</span>
                                                            <div>
                                                                <div class="progress">
                                                                    <div class="progress-bar bg-gradient-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ "width" : "100%" }}></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="align-middle">
                                                        <button class="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                                                            <i class="fa fa-ellipsis-v text-xs"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex px-2">
                                                            <div>
                                                                <img src= { AT } class="avatar avatar-sm rounded-circle me-2" alt="jira"></img>
                                                            </div>
                                                            <div class="my-auto">
                                                                <h6 class="mb-0 text-sm">Atlassian</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p class="text-sm font-weight-bold mb-0">60</p>
                                                    </td>
                                                    <td>
                                                        <span class="text-xs font-weight-bold">cancelado</span>
                                                    </td>
                                                    <td class="align-middle text-center">
                                                        <div class="d-flex align-items-center justify-content-center">
                                                            <span class="me-2 text-xs font-weight-bold">30%</span>
                                                            <div>
                                                                <div class="progress">
                                                                    <div class="progress-bar bg-gradient-danger" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="30" style={{ "width" : "30%" }}></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="align-middle">
                                                        <button class="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                                                            <i class="fa fa-ellipsis-v text-xs"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex px-2">
                                                            <div>
                                                                <img src= { BO } class="avatar avatar-sm rounded-circle me-2" alt="webdev"></img>
                                                            </div>
                                                            <div class="my-auto">
                                                                <h6 class="mb-0 text-sm">Bootstrap</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p class="text-sm font-weight-bold mb-0">80</p>
                                                    </td>
                                                    <td>
                                                        <span class="text-xs font-weight-bold">activo</span>
                                                    </td>
                                                    <td class="align-middle text-center">
                                                        <div class="d-flex align-items-center justify-content-center">
                                                            <span class="me-2 text-xs font-weight-bold">80%</span>
                                                            <div>
                                                                <div class="progress">
                                                                    <div class="progress-bar bg-gradient-info" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="80" style={{ "width" : "80%" }}></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="align-middle">
                                                        <button class="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                                                            <i class="fa fa-ellipsis-v text-xs"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex px-2">
                                                            <div>
                                                                <img src= { SL } class="avatar avatar-sm rounded-circle me-2" alt="slack"></img>
                                                            </div>
                                                            <div class="my-auto">
                                                                <h6 class="mb-0 text-sm">Slack</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p class="text-sm font-weight-bold mb-0">45</p>
                                                    </td>
                                                    <td>
                                                        <span class="text-xs font-weight-bold">cancelado</span>
                                                    </td>
                                                    <td class="align-middle text-center">
                                                        <div class="d-flex align-items-center justify-content-center">
                                                            <span class="me-2 text-xs font-weight-bold">0%</span>
                                                            <div>
                                                                <div class="progress">
                                                                    <div class="progress-bar bg-gradient-success" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="0" style={{ "width": "0%" }}></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="align-middle">
                                                        <button class="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                                                            <i class="fa fa-ellipsis-v text-xs"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex px-2">
                                                            <div>
                                                                <img src= { DE } class="avatar avatar-sm rounded-circle me-2" alt="xd"></img>
                                                            </div>
                                                            <div class="my-auto">
                                                                <h6 class="mb-0 text-sm">Devto</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p class="text-sm font-weight-bold mb-0">87</p>
                                                    </td>
                                                    <td>
                                                        <span class="text-xs font-weight-bold">terminado</span>
                                                    </td>
                                                    <td class="align-middle text-center">
                                                        <div class="d-flex align-items-center justify-content-center">
                                                            <span class="me-2 text-xs font-weight-bold">100%</span>
                                                            <div>
                                                                <div class="progress">
                                                                    <div class="progress-bar bg-gradient-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ "width" : "100%" }}></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="align-middle">
                                                        <CrudEllipsisMenu projectId="9"/>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
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
