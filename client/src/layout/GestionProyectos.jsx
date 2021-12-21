import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/style_main.css";
import AS from "./images/small-logos/logo-asana.svg";
import GI from "./images/small-logos/github.svg";
import AT from "./images/small-logos/logo-atlassian.svg";
import BO from "./images/small-logos/bootstrap.svg";
import SL from "./images/small-logos/logo-slack.svg";
import DE from "./images/small-logos/devto.svg";
import Lina from "./images/lina.jpg";
import Kevin from "./images/Kevin.jpg";
import { Aside } from "./Aside";
import { CrudEllipsisMenu } from "./components/CrudEllipsisMenu";
import { NavBar } from "./NavBar";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default class GestionProyectos extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      tasks: [],
      _id: "",
      start_date: "",
      finish_date: "",
    };
    this.addTask = this.addTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addTask(e) {
    if (this.state._id) {
      fetch(`http://localhost:4000/projects/${this.state._id}`, {
        method: "PUT",
        body: JSON.stringify(this.state),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          //Aquí debería ir código para mostrar mensaje a usuarios
          this.setState({
            title: "",
            description: "",
            _id: "",
            start_date: "",
            finish_date: "",
          });
          this.getTasks();
        })
        .catch((err) => console.error(err));
    } else {
      console.log(this.state);
      fetch("http://localhost:4000/projects", {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          //Aquí debería ir código para mostrar mensaje a usuarios
          this.setState({
            title: "",
            description: "",
            start_date: "",
            finish_date: "",
          });
          this.getTasks();
        })
        .catch((err) => console.error(err));
    }

    e.preventDefault();
  }

  getTasks() {
    fetch("http://localhost:4000/projects") // como por defecto el fetch es un get, no se necesita adicionar el resto de la configuración
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ tasks: data });
      })
      .catch((err) => console.log(err));
  }

  deleteTask(id) {
    if (window.confirm("Seguro de eliminar?")) {
      fetch(`http://localhost:4000/projects/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.getTasks();
        })
        .catch((err) => console.log(err));
    }
  }

  editTask(id) {
    fetch(`http://localhost:4000/projects/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          title: data.title,
          description: data.description,
          _id: data._id,
          start_date: data.start_date,
          finish_date: data.finish_date,
        });
      });
  }

  componentDidMount() {
    //Esto es una función que permite ejecutar algo apenas se renderiza el componente
    this.getTasks();
    if (!cookies.get("user")) {
      window.location.href = "/login";
    }
  }

  handleChange(e) {
    const { name, value } = e.target; //Desestructuración del target (solo quiero el name y el valor)
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <Aside />
        <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
          <NavBar />

          <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
              <h6 className="text-white text-capitalize ps-3">
                Gestión de Proyectos
              </h6>
            </div>
          </div>

          <div className="container-fluid py-4">
            <div className="row">
              <form onSubmit={this.addTask} className="col-6">
                <div className="mb-3 ">
                  <label htmlFor="inputText" className="form-label">
                    Nombre del proyecto:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    className="border border-primary"
                    onChange={this.handleChange}
                    value={this.state.title}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="inputDescription" className="form-label">
                    Descripción:
                  </label>
                  <textarea
                    className="form-control border border-primary"
                    id="description"
                    name="description"
                    onChange={this.handleChange}
                    rows="3"
                    value={this.state.description}
                  ></textarea>
                </div>

                <div className="mb-3 ">
                  <label htmlFor="start_date" className="form-label">
                    Fecha de inicio:
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="start_date"
                    name="start_date"
                    className="border border-primary"
                    onChange={this.handleChange}
                    value={this.state.start_date}
                  />
                </div>

                <div className="mb-3 ">
                  <label htmlFor="finish_date" className="form-label">
                    Fecha de Fin:
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="finish_date"
                    name="finish_date"
                    className="border border-primary"
                    onChange={this.handleChange}
                    value={this.state.finish_date}
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Enviar datos
                </button>
              </form>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="card my-4">
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                      <h6 className="text-white text-capitalize ps-3">
                        Proyectos Actuales
                      </h6>
                    </div>
                  </div>

                  <div className="card-body px-0 pb-2">
                    <div className="table-responsive p-0">
                      <table className="table align-items-center justify-content-center mb-0">
                        <thead>
                          <tr>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                              Proyecto
                            </th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                              Descripción
                            </th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                              Fecha de inicio
                            </th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                              Fecha de finalización
                            </th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                              Editar/Actualizar
                            </th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">
                              Eliminar
                            </th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.tasks.map((task) => {
                            return (
                              <tr key={task._id}>
                                <td>
                                  <div className="my-auto">
                                    <h6 className="mb-0 text-sm">
                                      {task.title}
                                    </h6>
                                  </div>
                                </td>
                                <td>
                                  <p className="text-sm font-weight-bold mb-0">
                                    {task.description}
                                  </p>
                                </td>
                                <td>
                                  <p className="text-sm font-weight-bold mb-0">
                                    {task.start_date}
                                  </p>
                                </td>
                                <td>
                                  <p className="text-sm font-weight-bold mb-0">
                                    {task.finish_date}
                                  </p>
                                </td>
                                <td>
                                  <span className="text-xs font-weight-bold">
                                    <button
                                      onClick={() => this.editTask(task._id)}
                                    >
                                      Editar
                                    </button>
                                  </span>
                                </td>
                                <td>
                                  <span className="text-xs font-weight-bold">
                                    <button
                                      onClick={() => this.deleteTask(task._id)}
                                    >
                                      Eliminar
                                    </button>
                                  </span>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="card my-4">
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                      <h6 className="text-white text-capitalize ps-3">
                        Usuarios contribuyentes
                      </h6>
                    </div>
                  </div>
                  <div className="card-body px-0 pb-2">
                    <div className="table-responsive p-0">
                      <table className="table align-items-center mb-0">
                        <thead>
                          <tr>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                              Usuario
                            </th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                              Función
                            </th>
                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                              Estado
                            </th>
                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                              Contratado desde
                            </th>
                            <th className="text-secondary opacity-7"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="d-flex px-2 py-1">
                                <div>
                                  <img
                                    src={Lina}
                                    className="avatar avatar-sm me-3 border-radius-lg"
                                    alt="user1"
                                  ></img>
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                  <h6 className="mb-0 text-sm">Lina Florez</h6>
                                  <p className="text-xs text-secondary mb-0">
                                    lalbanes@uninorte.edu.co
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="text-xs font-weight-bold mb-0">
                                Usuario Lider
                              </p>
                              <p className="text-xs text-secondary mb-0">
                                Frontend
                              </p>
                            </td>
                            <td className="align-middle text-center text-sm">
                              <span className="badge badge-sm bg-gradient-success">
                                En línea
                              </span>
                            </td>
                            <td className="align-middle text-center">
                              <span className="text-secondary text-xs font-weight-bold">
                                23/04/18
                              </span>
                            </td>
                            <td className="align-middle">
                              <a
                                href="javascript:;"
                                className="text-secondary font-weight-bold text-xs"
                                data-toggle="tooltip"
                                data-original-title="Edit user"
                              >
                                Editar
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex px-2 py-1">
                                <div>
                                  <img
                                    src="../assets/img/team-3.jpg"
                                    className="avatar avatar-sm me-3 border-radius-lg"
                                    alt="user2"
                                  ></img>
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                  <h6 className="mb-0 text-sm">
                                    Andrés Correa
                                  </h6>
                                  <p className="text-xs text-secondary mb-0">
                                    aacorrea@uninorte.edu.co
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="text-xs font-weight-bold mb-0">
                                Usuario Lider
                              </p>
                              <p className="text-xs text-secondary mb-0">
                                Gestor
                              </p>
                            </td>
                            <td className="align-middle text-center text-sm">
                              <span className="badge badge-sm bg-gradient-secondary">
                                Desconectado
                              </span>
                            </td>
                            <td className="align-middle text-center">
                              <span className="text-secondary text-xs font-weight-bold">
                                11/01/19
                              </span>
                            </td>
                            <td className="align-middle">
                              <a
                                href="javascript:;"
                                className="text-secondary font-weight-bold text-xs"
                                data-toggle="tooltip"
                                data-original-title="Edit user"
                              >
                                Editar
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex px-2 py-1">
                                <div>
                                  <img
                                    src="../assets/img/team-4.jpg"
                                    className="avatar avatar-sm me-3 border-radius-lg"
                                    alt="user3"
                                  ></img>
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                  <h6 className="mb-0 text-sm">Jesus Meza</h6>
                                  <p className="text-xs text-secondary mb-0">
                                    jesusmeza@uninorte.edu.co
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="text-xs font-weight-bold mb-0">
                                Usuario{" "}
                              </p>
                              <p className="text-xs text-secondary mb-0">
                                Front end
                              </p>
                            </td>
                            <td className="align-middle text-center text-sm">
                              <span className="badge badge-sm bg-gradient-success">
                                En línea
                              </span>
                            </td>
                            <td className="align-middle text-center">
                              <span className="text-secondary text-xs font-weight-bold">
                                19/09/17
                              </span>
                            </td>
                            <td className="align-middle">
                              <a
                                href="javascript:;"
                                className="text-secondary font-weight-bold text-xs"
                                data-toggle="tooltip"
                                data-original-title="Edit user"
                              >
                                Editar
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex px-2 py-1">
                                <div>
                                  <img
                                    src="../assets/img/team-3.jpg"
                                    className="avatar avatar-sm me-3 border-radius-lg"
                                    alt="user4"
                                  ></img>
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                  <h6 className="mb-0 text-sm">
                                    Yulieth Zambrano
                                  </h6>
                                  <p className="text-xs text-secondary mb-0">
                                    yulietz@uninorte.edu.co
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="text-xs font-weight-bold mb-0">
                                Usuario Lider
                              </p>
                              <p className="text-xs text-secondary mb-0">
                                Front end
                              </p>
                            </td>
                            <td className="align-middle text-center text-sm">
                              <span className="badge badge-sm bg-gradient-success">
                                En línea
                              </span>
                            </td>
                            <td className="align-middle text-center">
                              <span className="text-secondary text-xs font-weight-bold">
                                24/12/08
                              </span>
                            </td>
                            <td className="align-middle">
                              <a
                                href="javascript:;"
                                className="text-secondary font-weight-bold text-xs"
                                data-toggle="tooltip"
                                data-original-title="Edit user"
                              >
                                Editar
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex px-2 py-1">
                                <div>
                                  <img
                                    src={Kevin}
                                    className="avatar avatar-sm me-3 border-radius-lg"
                                    alt="user5"
                                  ></img>
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                  <h6 className="mb-0 text-sm">
                                    Kevin Quiroga
                                  </h6>
                                  <p className="text-xs text-secondary mb-0">
                                    ksquiroga@uninorte.edu.co
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="text-xs font-weight-bold mb-0">
                                Usuario
                              </p>
                              <p className="text-xs text-secondary mb-0">
                                Desarrollador fullstack
                              </p>
                            </td>
                            <td className="align-middle text-center text-sm">
                              <span className="badge badge-sm bg-gradient-secondary">
                                Desconectado
                              </span>
                            </td>
                            <td className="align-middle text-center">
                              <span className="text-secondary text-xs font-weight-bold">
                                04/10/21
                              </span>
                            </td>
                            <td className="align-middle">
                              <a
                                href="javascript:;"
                                className="text-secondary font-weight-bold text-xs"
                                data-toggle="tooltip"
                                data-original-title="Edit user"
                              >
                                Editar
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex px-2 py-1">
                                <div>
                                  <img
                                    src="../assets/img/team-4.jpg"
                                    className="avatar avatar-sm me-3 border-radius-lg"
                                    alt="user6"
                                  ></img>
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                  <h6 className="mb-0 text-sm">Abraham Lugo</h6>
                                  <p className="text-xs text-secondary mb-0">
                                    alugo@uninorte.edu.co
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="text-xs font-weight-bold mb-0">
                                Asesor
                              </p>
                              <p className="text-xs text-secondary mb-0">
                                Desarrollador
                              </p>
                            </td>
                            <td className="align-middle text-center text-sm">
                              <span className="badge badge-sm bg-gradient-secondary">
                                Desconectado
                              </span>
                            </td>
                            <td className="align-middle text-center">
                              <span className="text-secondary text-xs font-weight-bold">
                                14/09/20
                              </span>
                            </td>
                            <td className="align-middle">
                              <a
                                href="javascript:;"
                                className="text-secondary font-weight-bold text-xs"
                                data-toggle="tooltip"
                                data-original-title="Edit user"
                              >
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
          </div>
        </main>
      </div>
    );
  }
}
