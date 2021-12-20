import React, {Component, useEffect} from 'react';
import Script from '@gumgum/react-script-tag';

import './css/style_main.css';
import Logo from './images/logosony.png';
import { Aside } from './Aside';
import { NavBar } from './NavBar';
import Cookies from "universal-cookie";



export const Home = () => {

    const [data, setData] = React.useState(null);
    const cookies = new Cookies();

    React.useEffect(() => {
        fetch("/server")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);

    console.log("Cookies: " + cookies.get('user') +" " + cookies.get('userType') );

    //Si no hay usuario en cookies, entonces lo envío al Login
    useEffect(() => {
        if(!cookies.get('user')){
            window.location.href="/login";
        }
        
      }, []);

    return (
        <div>
            <Aside/>
            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                {/* Navbar */}
                <NavBar/>
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
                            Sony es una plataforma dedicada a gestionar y facilitar el avance de trabajo en los equipos.
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
                    <p>{!data ? "Conectando..." : data}</p> {/*Aquí es solo para saber que si esté conectado el back end */}
                </footer>
            </main>
            <div className="fixed-plugin">
                <a className="fixed-plugin-button text-dark position-fixed px-3 py-2">
                    <i className="material-icons py-2">settings</i>
                </a>
                <div className="card shadow-lg">
                    <div className="card-header pb-0 pt-3">
                        <div className="float-start">
                            <h5 className="mt-3 mb-0">Configuración</h5>
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
