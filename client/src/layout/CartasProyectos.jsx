import React from 'react';

import './css/style_main.css';


export const ProjectCard = ({ projects }) => {

  return (
  <div className="col-xl-3 col-md-6 mb-xl-0 mb-4" key={projects.id}>
    <div className="card card-blog card-plain">
      <div className="card-header p-0 mt-n4 mx-3">
        <a className="d-block shadow-xl border-radius-xl">
          <img
            src={projects.imgUrl}
            alt="img-blur-shadow"
            className="img-fluid shadow border-radius-xl"
          ></img>
        </a>
      </div>

      <div className="card-body p-3">
        <p className="mb-0 text-sm">{projects.projectName}</p>
        <a href="javascript:;">
          <h5>{projects.title}</h5>
        </a>
        <p className="mb-4 text-sm">
          {projects.description}
        </p>
        <div className="d-flex align-items-center justify-content-between">
          <button type="button" className="btn btn-outline-primary btn-sm mb-0">
            Ver proyecto
          </button>
        </div>
      </div>
    </div>
  </div>)
};
