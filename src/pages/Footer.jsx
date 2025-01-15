import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="f-mainDiv">
      <div className="f-social">
        <a href="https://www.facebook.com/profile.php?id=100004602798462">
          <ion-icon name="logo-facebook"></ion-icon>
        </a>
        <a href="https://www.linkedin.com/in/shubhamkrmaurya/">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
        <Link to={"/contact"}>
          <ion-icon name="mail-outline"></ion-icon>
        </Link>
        
        <a href="https://x.com/Skmaurya08">
          <ion-icon name="logo-xing"></ion-icon>
        </a>
        <a href="https://www.instagram.com/iamshubhammaurya/">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
      </div>
      <div>
        <span className="f-li-items">
          <Link to={"/"} className="footer-link">
            Home
          </Link>
          <Link to={"/About"} className="footer-link">
            About
          </Link>
          <Link to={"/Education"} className="footer-link">
            Education
          </Link>
          <Link to={"/Certificates"} className="footer-link">
            Certificates
          </Link>
        </span>
        <span className="f-li-items">
          <Link to={"/Projects"} className="footer-link">
            Projects
          </Link>
          <Link to={"/Experience"} className="footer-link">
            Experience
          </Link>
          <Link to={"/contact"} className="footer-link">
            Contact
          </Link>
        </span>
      </div>
      <p className="f-p">Be a good person always</p>
    </div>
  );
};

export default Footer;