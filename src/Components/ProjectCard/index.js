import React from "react";
import "./index.css";

export default function ProjectCard(props) {
  return (
    <div project-card-container>
      <div className="card-container">
        <img src={props.image} alt="UBA card" className="uba-img" />
        <div className="Description">
          <div className="title pad">{props.name}</div>
          <div className="url-link pad">{props.url}</div>
          <div className="description pad">{props.description}</div>
        </div>
      </div>
    </div>
  );
}
