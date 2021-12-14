import React from 'react';

import './css/style_main.css';
import './css/nucleo-icons.css';
import './css/nucleo-svg.css';
import { Aside } from './Aside';
import { NavBar } from './NavBar';

export const Task = () => {
    return (
        <div>
            <Aside/>
            <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                <NavBar/>
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
