import React from "react";
import "./Projects.css";
const Projects = () => {
  return (
    <div className="project-mainDiv container-fluid">
      <div className="projects-project">
        <h5>Filmen | Movie Website Using Pure React <span className="projects-project-date">22 Jul'24</span></h5>
        <b>Technologies Used: React, Redux, Bootstrap, Node.js, Express, MongoDB</b>
        <ul>
          <li>Led a team to develop a movie website using pure React.</li>
          <li>Implemented MongoDB for the database and Node.js for the backend.</li>
          <li>Delivered a user-friendly and responsive website, enhancing user engagement and satisfaction with intuitive design and functionality.</li>
        </ul>
      </div>
      <div className="projects-project">
        <h5>Zerodha Clone | Commerce Website Using React <span span className="projects-project-date">5 Oct'24</span></h5>
        <b>Technologies Used: React, Redux, Bootstrap, Node.js, Express, MongoDB</b>
        <ul>
          <li>Developed a clone of Zerodha, an online trading platform, with a focus on replicating key features including user authentication, portfolio management, and real-time data updates.</li>
          <li>Implemented a responsive design using Bootstrap CSS to provide a seamless user experience across devices.</li>
          <li>Utilized Redux for state management to ensure efficient handling of application data.</li>
        </ul>
      </div>
      <div className="projects-project">
        <h5>Portfolio | Website Using React <span className="projects-project-date" >26 Dec'24</span></h5>
        <b>Technologies Used: React, HTML, CSS, Bootstrap, Javascript</b>
        <ul>
          <li>Designed and developed a responsive and visually appealing personal portfolio website using React, HTML, CSS, and Bootstrap.</li>
          <li>Implemented dynamic and interactive UI components with JavaScript to enhance user experience.</li>
          <li>Showcased professional projects, skills, and achievements in a clean and organized layout.</li>
          <li>Optimized the website for performance and compatibility across various devices and browsers.</li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
