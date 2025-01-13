import React from "react";
import "./Card.css";
const Card = ({ educations, id }) => {
  return (
    <div className="card-mainDiv" key={id} style={{backgroundColor:educations.CGPA&&"#d17d08"}}>
      <div>
        <img src={educations.collegeImage}  alt="college Img" className="card-college-image"/>
      </div>
      <div className="card-college-detail">
        <h5>
          {educations.degreeName}
          <span style={{ color: "green", float: "right" }} className="card-percentage" >
            {educations.year}
          </span>
        </h5>
        <p className="card-college-detail">
          <b>{educations.collegeName}</b>
          <b className="card-percentage" style={{ float: "right" }}>
            {educations.CGPA?<b>CGPA </b>:<b>Percentage </b>}
            {educations.CGPA || educations.percentage}
          </b>
        </p>
      </div>
    </div>
  );
};

export default Card;
