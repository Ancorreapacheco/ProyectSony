import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";


//Se instancian las cookies

const cookies = new Cookies();

export default class LogSesion extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      userType: "",
      _id: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target; //Desestructuración del target (solo quiero el name y el valor)
    this.setState({
      [name]: value,
    });
  }

  handleSubmit() {
    console.log("Hello");
  }
  //827ccb0eea8a706c4c34a16891f84e7b
  //e10adc3949ba59abbe56e057f20f883e

   logIn = async (e) => {
    const location = window.location.origin === 'https://sonyproyectofront.onrender.com' ? 'https://sonyproyectofront.onrender.com' : 'localhost:4000';
    await axios
      .get(
        //`http://localhost:4000/login/${this.state.email}/${this.state.password}`
        `${location}/login/${this.state.email}/${this.state.password}`
      )
      .then((response) => {
        console.log(response.data);
        return response.data;
        
      })
      .then( data =>{
          if (data.cod==="0") {
              alert('Usuario o contraseña no validos') //Ojo cambiar esto por un TOAST
          } else {
            //Aquí almaceno en las cookies
              cookies.set('user', data.email,{path:'/'});
              cookies.set('userType',data.userType,{path:'/'}) ;
              alert('Bienvenido: '+ data.email + ' Tipo de usuario: '+ data.userType);
              window.location.href='/';
          }
      })
      .catch((error) => console.log(error, ' ennre en error'));
  };

  componentDidMount() {
    //Esto es una función que permite ejecutar algo apenas se renderiza el componente
    
    if (cookies.get("user")) {
      window.location.href = "/";
    }
  }

  render() {
    return (
      <div>
        <div className="container position-sticky z-index-sticky top-0">
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-lg blur border-radius-xl top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
                <div className="container-fluid ps-2 pe-0">
                  <Link
                    className="navbar-brand font-weight-bolder ms-lg-0 ms-3 "
                    to=""
                  >
                    Gestión de proyectos Sony
                  </Link>
                  
                
                </div>
              </nav>
            </div>
          </div>
        </div>
        <main className="main-content  mt-0">
          <div
            className="page-header align-items-start min-vh-100"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80)",
            }}
          >
            <span className="mask bg-gradient-dark opacity-6"></span>
            <div className="container my-auto">
              <div className="row">
                <div className="col-lg-4 col-md-8 col-12 mx-auto">
                  <div className="card z-index-0 fadeIn3 fadeInBottom">
                    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                      <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                        <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">
                          Iniciar Sesión
                        </h4>
                        <div className="row mt-3">
                          <div className="col-2 text-center ms-auto">
                            <a
                              className="btn btn-link px-3"
                              href="javascript:;"
                            >
                              <i className="fa fa-facebook text-white text-lg"></i>
                            </a>
                          </div>
                          <div className="col-2 text-center px-1">
                            <a
                              className="btn btn-link px-3"
                              href="javascript:;"
                            >
                              <i className="fa fa-github text-white text-lg"></i>
                            </a>
                          </div>
                          <div className="col-2 text-center me-auto">
                            <a
                              className="btn btn-link px-3"
                              href="javascript:;"
                            >
                              <i className="fa fa-google text-white text-lg"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="text-start">
                        <div className="input-group input-group-outline my-3">
                          <input
                            placeholder="Email"
                            type="email"
                            className="form-control"
                            name="email"
                            onChange={this.handleChange}
                          ></input>
                        </div>
                        <div className="input-group input-group-outline mb-3">
                          <input
                            placeholder="Password"
                            type="password"
                            className="form-control"
                            name="password"
                            onChange={this.handleChange}
                          ></input>
                        </div>

                        <div className="text-center">
                          <button
                            type="submit"
                            className="btn bg-gradient-primary w-100 my-4 mb-2"
                            onClick={() => this.logIn()}
                          >
                            Iniciar sesión
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
