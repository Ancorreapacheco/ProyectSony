import React from 'react';
import { Link } from 'react-router-dom';

import './css/style_main.css';
import './css/nucleo-icons.css';
import './css/nucleo-svg.css';
import { Aside } from './Aside';
import { NavBar } from './NavBar';

export const Createproject = () => {
    return (
        <div>
            <Aside/>
            <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                <NavBar/>
                <div>
                    <div style={{ float: 'left', width: '70%', height: '100px', padding: '10px' }}>
                        <hr></hr>
                        <h2>
                            Crear proyecto
                        </h2>
                        <hr></hr>
                    </div>
                    <div style={{ float: 'left', width: '30%', height: '100px', padding: '10px' }}>
                        <br></br>
                        <form runat="server">
                            <input accept="image/*" type='file' id="imgInp" />
                            <img id="blah" src="#" alt="your image" />
                            <p>Selecciona la imagen del proyecto</p>
                        </form>
                    </div>
                </div>
                <br></br>
                <div>
                    <br></br>
                    <div style={{  marginTop: '80px' }}>
                        <form>
                        <div>
                            <label for="start">
                                Fecha de inicio: &emsp;
                            </label>
                            <input type="date" id="start"></input>
                        </div>
                        <div>
                            <label for="finish">
                                Fecha de cierre: &emsp;
                            </label>
                            <input type="date" id="finish"></input>
                        </div>
                        </form>
                    </div>
                </div>
                <hr></hr>
                <div>
                    <div>
                        <label for="title">
                            Título: &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        </label>
                        <input type="text" id="title"></input>
                    </div>
                    <br></br>
                    <div>
                        <label for="description">
                            Descripción: &emsp;&emsp;&emsp;&emsp;&emsp;
                        </label>
                        <textarea id="description" style = {{ width: '500px' , borderRadius: '10px'}}>Escribe aquí....</textarea>
                    </div>
                </div>
                <br></br>
                <h4>Asignar usuarios subalternos</h4>
                <br></br>
                <div style={{ color: 'black' }}>
                    <div style={{ float: 'left', width: '60%', height: '100px', padding: '10px' }}>
                        <div style={{ display: 'flex' }}>
                            <label for="ID">
                                Filtrar por ID: &emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;
                            </label>
                            <input type="text" id="ID"></input>
                            <div style={{ padding: '0 25px' }}>
                                <button style={{ borderRadius: '10px' }}><i className="fas fa-search"></i></button>
                            </div>
                            <div style={{ padding: '0 25px' }}>
                                <button style={{ borderRadius: '10px' }}>Agregar</button>
                            </div>
                        </div>
                        <br></br>
                        <div style={{ display: 'flex' , justifyContent: 'initial'}}>
                            <label for="name">
                                Filtrar por nombre: &emsp;&emsp;
                            </label>
                            <input type="text" id="name"></input>
                            <div style={{ padding: '0 25px' }}>
                                <button style={{ borderRadius: '10px' }}><i className="fas fa-search"></i></button>
                            </div>
                            <div style={{ padding: '0 25px'}}>
                                <button style={{ borderRadius: '10px' }}>Agregar</button>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <div>
                            <h3 style = {{ textAlign: 'center'}}>Asignación de actividades a usuarios</h3>
                            <br></br>
                            <div style = {{ display: 'flex', justifyContent: 'center' }}>
                                <Link to='/projects/create/task'>
                                    <button style={{ borderRadius: '10px', background: '#e91e63', width: '200px', color: 'white', height: '50px' }}>Click aquí</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div style={{ float: 'left', width: '40%', height: '100px', padding: '10px' }}>
                        <div style = {{ display: 'block'}}>
                            <h5 style = {{ textAlign: 'center' }}>Usuarios subalternos asociados al proyecto</h5>
                            <br></br>
                            <div style = {{ display: 'flex', justifyContent: 'center' }}>
                                <textarea style={{ borderRadius: '10px', width: '500px', height: '200px' }}></textarea>
                            </div>
                            <br></br>
                            <div style = {{ display: 'flex', justifyContent: 'center' }}>
                                <button style={{ borderRadius: '10px', background: '#e91e63', width: '200px', color: 'white', height: '50px' }}>Eliminar usuario</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>    
        </div>
    )
}
