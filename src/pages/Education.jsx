import React from "react";
import "./Education.css";
import Card from "../components/Card.jsx";
import educationDetail from "../data/eduation";
const Education = () => {
  let i=0;
  return (
    <div className="education-mainDiv">
      {
        educationDetail.map((education,idx)=>(
          <Card educations={education} key={idx}/>
        ))
      }
      
    </div>
  );
};

export default Education;
