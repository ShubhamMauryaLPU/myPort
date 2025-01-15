import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      <div className="about-mainDiv container-fluid">
        <div className="row">
          <h1 className="about-heading mt-2">Hello!</h1>
          <p className="about-heading-para">
            I'm creative MERN stack developer
          </p>
          <div className="col-4 mt-3 about-about-me">
            <b className="about-about-me-heading">About me</b>
            <p className="about-about-me">
              I am a versatile web developer, beginning my career as a fresher
              with a strong skill set in both frontend and backend development.
            </p>
            <p className="about-about-me">
              I have a strong command of frontend technologies, including HTML,
              CSS, JavaScript, and the React.js library. On the backend, I am
              proficient in Node.js along with the Express.js framework.
              Additionally, I have experience working with PHP and the Laravel
              framework to build robust and scalable web applications.
            </p>
            <p className="about-about-me">
              I have the good knowledge of databases like SQL and Mongo DB.
            </p>
          </div>
          <div className="col-4 mt-3 pt-2 about-detail">
            <b>Detail</b>
            <p>
              <b>Name: </b>Shubham Kumar Maurya
            </p>

            <p>
              <b>Age:</b> 23 years
            </p>

            <p>
              <b>Location: </b> GT Road Chandauli Uttar Pradesh 232104
            </p>
            <b>Skills:</b>
            <p>
              <div className="about-skills-div">
                <p>
                  <b>Langueage: </b>
                  <span className="about-skills">
                    c , c++, java, javascript, php, sql
                  </span>
                </p>
                <p>
                  <b>Framework: </b>
                  <span className="about-skills">express js, Bootstrap, Laravel </span>
                </p>
                <p>
                  <b>Library/ Tool: </b>
                  <span className="about-skills">html, css, react js</span>
                </p>
                <p>
                  <b>Databases: </b>
                  <span className="about-skills">Mysql ,Mongo db</span>
                </p>
                <p>
                  <b>Plateform: </b>
                  <span className="about-skills">Windows, Linux, VS code</span>
                </p>
              </div>
            </p>
          </div>
          <div className="col-4 about-image-div">
            <img
              src="/image/myImg2.png"
              alt="myImg"
              className="about-img mb-3 mt-2"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
