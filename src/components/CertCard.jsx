import React from "react";
import "./CertCard.css";
const CertCard = ({ certification }) => {
  return (
    <div className="certCard-mainDiv"style={{backgroundColor: certification.specialization&&"#d17d08"}}>
      <div>
        <img
          src={certification.image}
          alt="certification Image"
          className="certCard-img"
        />
      </div>
      <div className="certCard-detail" >
        <h5>
          {certification.name}
          <span style={{ float: "right", color: "green" }}>
            {certification.date}
          </span>
        </h5>
        <p>
          <b> {certification.from}</b>{" "}
          <span style={{ float: "right" }}>
            {" "}
            <b className="certCart-grade">{certification.Grade}</b>{" "}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CertCard;
