import React from "react";
import { Element } from "react-scroll";
import skillImg from "../../Images/skill.jpg";
import LinearProgress from "@mui/material/LinearProgress";
import "./SkillContainer.css";
const SkillContainer = () => {
  return (
    <Element className="skillContainer" id="skills">
      <div className="skillContainer__image">
        <img src={skillImg} alt="" />
      </div>
      <div className="skillContainer__text">
        <h2>SKILLSET</h2>
        <div className="skillContainer__skillSet">
          <h5>ReactJs</h5>
          <div className="skillContainer__slider skillContainer__slider1">
            <LinearProgress variant="determinate" value={90} />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>JavaScript</h5>
          <div className="skillContainer__slider skillContainer__slider2">
            <LinearProgress variant="determinate" value={91} />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>CSS3</h5>
          <div className="skillContainer__slider skillContainer__slider3">
            <LinearProgress variant="determinate" value={92} />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>HTML5</h5>
          <div className="skillContainer__slider skillContainer__slider4">
            <LinearProgress variant="determinate" value={95} />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>BootStrap</h5>
          <div className="skillContainer__slider skillContainer__slider5">
            <LinearProgress variant="determinate" value={89} />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default SkillContainer;
