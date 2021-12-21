import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import "./css/style_main.css";
import { Aside } from "./Aside";
import { NavBar } from "./NavBar";
import Cookies from "universal-cookie";
import { Dropdown } from "react-bootstrap";

const cookies = new Cookies();

export default class Activities extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      tasks: [],
      _id: "",
      start_date: "",
      finish_date: "",
      project_id: "",
      project_name: "",
      activities: [],
    };
    this.addTask = this.addTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  addTask(e) {
    if (this.state._id) {
      fetch(`http://localhost:4000/activities/${this.state._id}`, {
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
            project_id: "",
            project_name: "",
          });
          this.getTasks();
        })
        .catch((err) => console.error(err));
    } else {
      console.log(this.state);
      fetch("http://localhost:4000/activities", {
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
            project_id: "",
            project_name: "",
          });
          this.getTasks();
        })
        .catch((err) => console.error(err));
    }

    e.preventDefault();
  }

  getTasks() {
    fetch("http://localhost:4000/activities") // como por defecto el fetch es un get, no se necesita adicionar el resto de la configuración
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ activities: data });
      })
      .catch((err) => console.log(err));
  }

  getProjects() {
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
      fetch(`http://localhost:4000/activities/${id}`, {
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
    fetch(`http://localhost:4000/activities/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          title: data.title,
          description: data.description,
          _id: data._id,
          start_date: data.start_date,
          finish_date: data.finish_date,
          project_id: data.project_id,
          project_name: data.project_id,
        });
      });
  }

  componentDidMount() {
    //Esto es una función que permite ejecutar algo apenas se renderiza el componente
    this.getTasks();
    this.getProjects();
  }

  handleChange(e) {
    const { name, value } = e.target; //Desestructuración del target (solo quiero el name y el valor)
    this.setState({
      [name]: value,
    });
    console.log(this.state);
  }

  handleSelect(e) {
    this.state.project_name = e.target.innerText;
    this.state.project_id = e.target.id;

    console.log(this.state.project_id);
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
                Gestión de Actividades por Proyecto
              </h6>
            </div>
          </div>

          <div className="container-fluid py-4">
            <div className="row">
              <form onSubmit={this.addTask} className="col-6">
                <div className="mb-3 ">
                  <label htmlFor="inputText" className="form-label">
                    Actividad:
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
                    Descripción de actividad:
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

                <div className="mb-3 ">
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Listado de Proyectos
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {this.state.tasks.map((data) => (
                        <Dropdown.Item
                          title={data.title}
                          id={data._id}
                          key={data._id}
                          onClick={this.handleSelect}
                        >
                          {data.title}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
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
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                              Proyecto
                            </th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                              Actividad
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
                          {this.state.activities.map((task) => {
                            return (
                              <tr key={task._id}>
                                <td>
                                  <div className="my-auto">
                                    <h6 className="mb-0 text-sm">
                                      {task.project_name}
                                    </h6>
                                  </div>
                                </td>
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
          </div>
        </main>
      </div>
    );
  }
}
