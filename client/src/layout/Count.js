import React, {Component, useEffect} from 'react';

import './css/style_main.css';
import Lina from './images/lina.jpg';
import Kevin from './images/Kevin.jpg';
import { Aside } from './Aside';
import { NavBar } from './NavBar';
import { ProjectCard } from './CartasProyectos';
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const Cuenta = ({dataUser, userProjects}) => {
    //Si no hay usuario en cookies, entonces lo envío al Login
    useEffect(() => {
        if(!cookies.get('user')){
            window.location.href="/login";
        }
        
      }, []);
    return (
        <div>           
            <Aside/>
            <div className="main-content position-relative bg-gray-100 max-height-vh-100 h-100">
                <NavBar/>
                <div className="container-fluid px-2 px-md-4">
                    <div className="page-header min-height-300 border-radius-xl mt-4" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)' }}>
                        <span className="mask  bg-gradient-primary  opacity-6"></span>
                    </div>

                    {/* Mapeo información que viene enviada del backend */}

                    {dataUser.map(ele=> 
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
                                        {ele.nombre}
                                    </h5>
                                    <p className="mb-0 font-weight-normal text-sm">
                                        {ele.rol}
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
                                                {ele.textBiogra}
                                            </p>
                                            <hr className="horizontal gray-light my-4"></hr>
                                            <ul className ="list-group">
                                                <li className ="list-group-item border-0 ps-0 pt-0 text-sm"><strong className ="text-dark">Nombre completo: </strong> &nbsp; {ele.nameComplete}</li>
                                                <li className ="list-group-item border-0 ps-0 text-sm"><strong className ="text-dark">Celular: </strong> &nbsp; {ele.phone}</li>
                                                <li className ="list-group-item border-0 ps-0 text-sm"><strong className ="text-dark">Email: </strong> &nbsp; {ele.email}</li>
                                                <li className ="list-group-item border-0 ps-0 text-sm"><strong className ="text-dark">Ubicación: </strong> &nbsp; {ele.city}</li>
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
                                    {/* Listado de proyectos del usuario - lo hago a traves de un componente que se llama ProjectCard */}
                                    <div className="row">                                       

                                        {
                                            userProjects.map(ele => (
                                                <ProjectCard key={ele.id} projects={ele}/>
                                            ))
                                        }                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    )}

                    {/* Fin del mape de info del usuario */}
                    
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
