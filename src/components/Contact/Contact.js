import React from "react";
import { Element } from "react-scroll";
import { IconButton } from "@mui/material";
import { LinkedIn, GitHub } from "@mui/icons-material";
import "./Contact.css";
const Contact = () => {
  return (
    <Element className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contact__container">
        <p>
          Mobile Number: <span>+91-9092464431</span>
        </p>
        <p>
          Email: <span>r.ramkumar0820@gmail.com</span>
        </p>
        {/* <p>
          Github Username: <span>@RamKumar2096</span>
        </p> */}
        <div className="contact__icons">
          <a href="google.com">
            <IconButton>{/* <Facebook /> */}</IconButton>
          </a>
          <a href="google.com">
            <IconButton>{/* <Instagram /> */}</IconButton>
          </a>
          <a
            href="https://www.linkedin.com/in/ramkumar-r-7b18701a7/"
            target="_blank"
          >
            <IconButton>
              <LinkedIn />
            </IconButton>
          </a>
          <a href="https://github.com/RamKumar2096/ticket.git" target="_blank">
            <IconButton>
              <GitHub />
            </IconButton>
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
