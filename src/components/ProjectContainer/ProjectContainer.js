import React from "react";
import { Element } from "react-scroll";
import Project from "../Project/Project";
import SidharthLogo from "./Sidharth-Logo-Final.png";
import "./ProjectContainer.css";

const ProjectContainer = () => {
  const projects = [
    {
      img: SidharthLogo,
      title: "Sidharth WebApp - Live Project",
      description:
        "Technologies Utilized - HTML5, CSS3, Bootstrap, JAVASCRIPT, JQUERY",
      link: "www.google.com",
    },
    // {
    //   img: "https://images.unsplash.com/photo-1516054237813-0df813b7f496?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80",
    //   title: "",
    //   description: "",
    //   link: "www.google.com",
    // },
    // {
    //   img: "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    //   title: "Stripe",
    //   description: "",
    //   link: "www.google.com",
    // },
    // {
    //   img: "",
    //   title: "Stripe",
    //   description: "",
    //   link: "www.google.com",
    // },
    // {
    //   img: "",
    //   title: "Stripe",
    //   description: "",
    //   link: "www.google.com",
    // },
    // {
    //   img: "",
    //   title: "Stripe",
    //   description: "",
    //   link: "www.google.com",
    // },
  ];

  return (
    <Element className="projectContainer" id="projects">
      <h1>Projects</h1>
      <p>
        Here are some projects that I have done to make people's lives easier
      </p>
      <div className="projectContainer__projects">
        {projects.map((project, index) => (
          <Project
            key={index}
            img={project.img}
            title={project.title}
            description={project.description}
            link={project.link}
            style={{ display: "flex", justifyContent: "center" }} // Corrected the property name to justifyContent
          />
        ))}
      </div>
    </Element>
  );
};

export default ProjectContainer;
