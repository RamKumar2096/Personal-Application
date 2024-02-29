import React, { useState } from "react";
import "./Project.css";

const Project = ({ img, title, description, link }) => {
  const [show, setShow] = useState(false);

  const handleMouseEnter = () => {
    setShow(true);
  };

  const handleMouseLeave = () => {
    setShow(false);
  };

  const handleClick = () => {
    window.open(
      "https://sidharthhousing-app.firebaseapp.com/component/app.html",
      "_blank"
    );
  };

  return (
    <div
      className="project"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {show ? (
        <div className="project__content">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      ) : (
        <img src={img} alt="" />
      )}
    </div>
  );
};

export default Project;
