import React from "react";
import "./index.css";
import Image from "../../Images/ProjectCardImage.jpeg";

export default function ProjectCard() {
  return (
    <div className="project-card-container">
      <span className="card-container">
        <img src={Image} alt="UBA card" className="uba-img" />
        <div className="Description">
          <div className="title pad">Web app name: UBA bank app</div>
          <div className="url-link pad">URL: <a href="https://ibank.ubagroup.com/" >https://ibank.ubagroup.com/</a></div>
          <div className="description pad">
            Description: With a history of over 7 decades, UBA is one of the
            leading and most recognised banks to originate from sub-Saharan
            Africa. UBA has growing operations in 20 African countries, the UK,
            USA, UAE and a representative office in France.
          </div>
        </div>
      </span>

      <span className="card-container">
        <img src={Image} alt="UBA card" className="uba-img" />
        <div className="Description">
          <div className="title pad">Web app name: UBA bank app</div>
          <div className="url-link pad">URL: <a href="https://ibank.ubagroup.com/" >https://ibank.ubagroup.com/</a></div>
          <div className="description pad">
            Description: With a history of over 7 decades, UBA is one of the
            leading and most recognised banks to originate from sub-Saharan
            Africa. UBA has growing operations in 20 African countries, the UK,
            USA, UAE and a representative office in France.
          </div>
        </div>
      </span>

      <span className="card-container">
        <img src={Image} alt="UBA card" className="uba-img" />
        <div className="Description">
          <div className="title pad">Web app name: UBA bank app</div>
          <div className="url-link pad">URL: <a href="https://ibank.ubagroup.com/" >https://ibank.ubagroup.com/</a></div>
          <div className="description pad">
            Description: With a history of over 7 decades, UBA is one of the
            leading and most recognised banks to originate from sub-Saharan
            Africa. UBA has growing operations in 20 African countries, the UK,
            USA, UAE and a representative office in France.
          </div>
        </div>
      </span>
    </div>
  );
}
