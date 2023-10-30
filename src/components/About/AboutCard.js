import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Prasham Jain </span>
            from <span className="purple"> Madhya Pradesh, India.</span>
            <br /> I am a second year student pursuing B.tech with Computer Science Engineering from SRMIST ktr.
            <br />
          
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cycling
            </li>
            <li className="about-activity">
              <ImPointRight />  Designing UI
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Nothing in here is so complexed which cannot be fixed!"{" "}
          </p>
          <footer className="blockquote-footer">Prasham</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
