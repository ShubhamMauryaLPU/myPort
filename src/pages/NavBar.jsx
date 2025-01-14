import React, { useState } from "react";
import navData from "../data/navData";
import NavItems from "../components/NavItems";
import "./NavBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  let [show, setShow] = useState(false);
  let navbarButtonToggle = () => {
    setShow(!show);
  };
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <Link to={"/"} style={{textDecoration:"none"}}>
          <span className="navBar-main-logo  " >
            Shub<span style={{ color: "white" }}>ham</span>
          </span>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon text-light fs-2"><ion-icon name="menu-outline"className="navbar-menu-icon" ></ion-icon></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
          <div class="navbar-nav ">
              {navData.map((data, idx) => (
                <NavItems nav={data} key={idx}/>
              ))}
              <Link to={"/contact"} style={{textDecoration:"none"}}>
                <button className="navbar-contact-button mt-2 nav-link">
                  Contact Me
                </button>
              </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
{
  /* <>
      <div className="navbar-mainDiv">
        
        
        <button className="navbar-mobile-button" onClick={navbarButtonToggle}>
          <ion-icon name="menu-outline" className="navbar-toggle-icon"></ion-icon>
        </button>
      </div>
    </> */
}
