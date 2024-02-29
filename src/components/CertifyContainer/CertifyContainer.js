import React from "react";
import { Element } from "react-scroll";
import Certify from "../CertifyBox/Certify";
import "./CertifyContainer.css";

const CertifyContainer = () => {
  return (
    <Element className="certifyContainer" id="certification">
      <h1>Experience & Certification</h1>
      <div className="certifyContainer__info">
        <Certify institute="1year" course="Sidharth Housing" />
        <Certify
          institute="5"
          course="Projects"
          style={{ backgroundColor: "#ff4500" }}
        />
        <Certify institute="UI+react" course="Fita Academy" />
        <Certify institute="ReactJs" course=" Mosh/online" />
      </div>
    </Element>
  );
};

export default CertifyContainer;
