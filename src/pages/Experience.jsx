import React from "react";
import Dots from "../components/Dots";
import "./Experience.css";
const Experience = () => {
  return (
    <div className=" experience-mainDiv">
      <div className="experience-exp">
            <h5>
              MERN STACK DEVELOPER (Intern)
              <b style={{ float: "right", color: "darkGreen" }} className="exprience-year">
                Jul'24 - Dec'24
              </b>
            </h5>
            <b>PHOECLOUD jaipur , rajasthan (Remote)</b>
            <ul>
              <li>Implemented UI/UX designs provided by the design team.</li>
              <li>
                Architected and developing API infrastructure for the backend.
              </li>
              <li>
                Developed robust web applications, leveraged the power of MERN
                stack.
              </li>
              <li>
                Worked on Various React Projects for building the single page
                web application.
              </li>
            </ul>
          </div>
          <div className="experience-exp">
            <h5>
              WEB DEVELOPMENT INTERN
              <b style={{ float: "right", color: "darkGreen" }}>
                Sep'24 - Oct'24
              </b>
            </h5>
            <b>PRODIGY INFOTECH (Remote)</b>
            <ul>
              <li>Implemented and learn about HTML and CSS to structure the content on the web page.</li>
              <li>Worked with JAVASCRIPT to add the functionalities in the web page.</li>
              <li>Built web applications using the pure React to make code easy to understand and to write.</li>
              <li>Made weather-application to know real time upadates using React JS.</li>
            </ul>
          </div>
    </div>
  );
};

export default Experience;
