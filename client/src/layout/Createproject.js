import React from "react";
import { Link } from "react-router-dom";

import "./css/style_main.css";
import "./css/nucleo-icons.css";
import "./css/nucleo-svg.css";
import { Aside } from "./Aside";
import { NavBar } from "./NavBar";

export const Createproject = () => {
  return (
    <div>
      <Aside />
      <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <NavBar />
        <div>
          <div
            style={{
              float: "left",
              width: "70%",
              height: "100px",
              padding: "10px",
            }}
          >
            <hr></hr>
            <h2>Crear proyecto</h2>
            <hr></hr>
          </div>
        </div>
        <br></br>
        <div>
          <br></br>
          <div style={{ marginTop: "80px" }}>
            <form>
              <div>
                <label for="start">Fecha de inicio: &emsp;</label>
                <input type="date" id="start"></input>
              </div>
              <div>
                <label for="finish">Fecha estimada de cierre: &emsp;</label>
                <input type="date" id="finish"></input>
              </div>
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
                <textarea
                  id="description"
                  style={{ width: "500px", borderRadius: "10px" }}
                >
                  
                </textarea>
              </div>
            </form>
          </div>
        </div>
        
      </main>
    </div>
  );
};
