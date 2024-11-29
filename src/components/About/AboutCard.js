import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vedansh Tiwari </span>
            from <span className="purple"> Varanasi, India.</span>
            <br />
            I am currently employed as a Full Stack developer at <br /> Aradhya
            Technologies and Skill Development.
            <br />
            <br />
            I have Pursuing Master Of Computer Applications (MCA) at VIT Bhopal
            .
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> &nbsp; Reading
            </li>

            <li className="about-activity">
              <ImPointRight /> &nbsp; Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Focus on creating solutions that truly matter!"{" "}
          </p>
          <footer className="blockquote-footer">Vedansh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
