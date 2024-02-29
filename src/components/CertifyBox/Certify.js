import React from "react";
import "./Certify.css";
const Certify = ({ institute, course, style }) => {
  return (
    <div style={{ ...style }} className="certify">
      <h1>{institute}</h1>
      <p>{course}</p>
    </div>
  );
};

export default Certify;
