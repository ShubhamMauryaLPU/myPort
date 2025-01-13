import React from "react";
import "./Certificates.css";
import certificationDetail from "../data/certification";
import CertCard from "../components/CertCard";
const Certificates = () => {
  return (
    <div className="certification-mainDiv">
      {
        certificationDetail.map((certification)=>(
          <CertCard certification={certification} key={certification._id}/>
        ))
      }
    </div>
  );
};

export default Certificates;
