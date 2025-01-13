import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      <div className="about-mainDiv container-fluid">
        <div className="row">
          <h1 className="about-heading">Hello!</h1>
          <p className="about-heading-para">
            I'm creative MERN stack developer
          </p>
          <div className="col-4 mt-3 about-about-me">
            <h5 className="about-about-me-heading">About me</h5>
            <p className="about-about-me">
              I am a versatile web developer, beginning my career as a fresher
              with a strong skill set in both frontend and backend development.
            </p>
            <p className="about-about-me">
              For the frontend i have HTML,CSS,JAVASCRIPT and also know the
              frontend library REACT JS very well. For the backend I have the
              knowledge of NODE JS and framework Express JS.
            </p>
            <p className="about-about-me">
              I have the good knowledge of databases like SQL and Mongo DB.
            </p>
          </div>
          <div className="col-4 mt-3 p-4 about-detail">
            <h5>Detail</h5>
            <h5>Name:</h5>
            <p>Shubham Kumar Maurya</p>
            <h5>Age:</h5>
            <p>23 years</p>
            <h5>Location:</h5>
            <p>GT Road Chandauli Uttar Pradesh 232104</p>
            <h5>Skills:</h5>
            <p>c , c++, java, html, css, javascript ,react js ,express js , sql, mongo db </p>
          </div>
          <div className="col-4 about-image-div">
            <img
              src="/image/myImg2.png"
              alt="myImg"
              className="about-img mb-3"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
