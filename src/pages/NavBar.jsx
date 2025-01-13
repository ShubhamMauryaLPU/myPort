import React, { useState } from "react";
import navData from "../data/navData";
import NavItems from "../components/NavItems";
import "./NavBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  let [show,setShow]=useState(false);
  let navbarButtonToggle=()=>{
    setShow(!show);
  }
  return (
    <>
      <div className="navbar-mainDiv">
        <Link to={"/"}>
          <span className="navBar-main-logo ">
            Shub<span style={{ color: "white" }}>ham</span>
          </span>
        </Link>
        <ul className={show ? "navbar-mobile-button toggle":"navbar-ul"}>
          {navData.map((data, idx) => (
            <NavItems nav={data} key={idx} />
          ))}
          <Link to={"/contact"}>
            <button className="navbar-contact-button mt-2">Contact Me</button>
          </Link>
        </ul>
        <button className="navbar-mobile-button" onClick={navbarButtonToggle}>
          <ion-icon name="menu-outline" className="navbar-toggle-icon"></ion-icon>
        </button>
      </div>
    </>
  );
};

export default NavBar;
