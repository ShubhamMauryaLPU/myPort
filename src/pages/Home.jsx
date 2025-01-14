import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="container-fluid home-mainDiv">
      <div className="row pt-5">
        <div className="col-8 home-content-div p-5">
          <h3>Hi</h3>
          <h2>I'm <span style={{color:"rgb(235, 36, 36)"}}>Shubham Maurya</span></h2>
          <h2>a MERN stack developer</h2>
          <p>I am from <b>Chandauli</b>, a district located near <b>Varanasi</b>, one of the oldest and holiest cities in the world. </p>
          <p>Currently i am pursuing my <b>Master of Computer Application at lovely professional university.</b></p>
        </div>
        <div className="col-4 home-image-div">
          <img src="../image/myImg4.webp" alt="" className="home-myimage" />
        </div>
      </div>
    </div>
  );
};

export default Home;
