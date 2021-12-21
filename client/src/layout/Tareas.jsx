import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Tareas extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      tasks: [],
      _id: "",
    };
    this.addTask = this.addTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addTask(e) {
    if (this.state._id) {
      fetch(`http://localhost:4000/api/task/${this.state._id}`, {
        method: "PUT",
        body: JSON.stringify(this.state),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
      }).then(res=> res.json())
      .then(data => {
          console.log(data);
          //Aquí debería ir código para mostrar mensaje a usuarios
          this.setState({ title: "", description: "", _id:"" });
          this.getTasks();
        })
        .catch(err => console.error(err));
      
    } else {
      fetch("http://localhost:4000/api/task/", {
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
          this.setState({ title: "", description: "" });
          this.getTasks();
        })
        .catch((err) => console.error(err));
    }

    e.preventDefault();
  }

  getTasks() {
    fetch("http://localhost:4000/api/task") // como por defecto el fetch es un get, no se necesita adicionar el resto de la configuración
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ tasks: data });
      })
      .catch((err) => console.log(err));
  }

  deleteTask(id) {
    if (window.confirm("Seguro de eliminar?")) {
      fetch(`http://localhost:4000/api/task/${id}`, {
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
    fetch(`http://localhost:4000/api/task/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          title: data.title,
          description: data.description,
          _id: data._id,
        });
      });
  }

  componentDidMount() {
    //Esto es una función que permite ejecutar algo apenas se renderiza el componente
    this.getTasks();
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
        <h1>Tareas</h1>
        <div className="container-fluid">
          <form onSubmit={this.addTask} className="col-6">
            <div className="mb-3 ">
              <label htmlFor="inputText" className="form-label">
                Tarea:{" "}
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                onChange={this.handleChange}
                value={this.state.title}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="inputDescription" className="form-label">
                Descripción:{" "}
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

            <button type="submit" className="btn btn-primary">
              Enviar datos
            </button>
          </form>

          <div className="col-6">
            <table className="table-primary">
              <thead>
                <tr>
                  <th>Tarea</th>
                  <th>Descripción</th>
                </tr>
              </thead>
              <tbody>
                {this.state.tasks.map((task) => {
                  return (
                    <tr key={task._id}>
                      <td>{task.title}</td>
                      <td>{task.description}</td>
                      <td>
                        <button onClick={() => this.editTask(task._id)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-pencil"
                            viewBox="0 0 16 16"
                          >
                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                          </svg>
                        </button>
                        <button onClick={() => this.deleteTask(task._id)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-trash"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path
                              fillRule="evenodd"
                              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
