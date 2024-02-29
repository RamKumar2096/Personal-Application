import React from "react";
import { Link } from "react-scroll";
import "./TopContent.css";

const TopContent = () => {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement("a");
    // Set the href attribute to the file URL
    link.href = "https://app.luminpdf.com/viewer/65c045c08e26b873bf8083e4";
    // Specify the filename to be downloaded
    link.download = "CV.pdf";
    // Set target=" _blank" to open in a new tab
    link.target = "_blank";
    // Programmatically trigger the download
    link.click();
  };

  return (
    <div className="topContent">
      <div className="topContent__container">
        <h1>Mr. RamKumar R</h1>
        <p>A Professional Front End Developer</p>
        {/* Call the handleDownload function when the button is clicked */}
        <button className="topContent__downloadButton" onClick={handleDownload}>
          Download CV
        </button>
        <Link to="projects" smooth={true} duration={500}>
          <button className="topContent__workButton">My Work</button>
        </Link>
      </div>
    </div>
  );
};

export default TopContent;
