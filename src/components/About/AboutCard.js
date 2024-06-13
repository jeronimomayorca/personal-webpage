import React from "react";
import Card from "react-bootstrap/Card";
import { ImArrowRight2 } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="blue">Jeronimo </span>
            from <span className="blue"> Manizales, Colombia</span>
            <br />
            <br />
            I am currently working as a freelancer and pursuing
            <br />
            a Systems Engeneering degree at Universidad de Caldas.
            <br />
            <br />
            Apart from coding, I enjoy other activities like
          </p>
          <ul>
            <li className="about-activity">
              <ImArrowRight2 /> Ride bicycle
            </li>
            <li className="about-activity">
              <ImArrowRight2 /> Motorcycle Sports
            </li>
            <li className="about-activity">
              <ImArrowRight2 /> Doing personal projects
            </li>
            <li className="about-activity">
              <ImArrowRight2 /> Walking in nature
            </li>
            <li className="about-activity">
              <ImArrowRight2 /> Travel
            </li>
          </ul>

          <br />
          <p style={{ color: "rgb(138, 191, 255)" }}>
            If I had to define myself in one word, it would be 'learner'{" "}
          </p>
          <footer className="blockquote-footer">Mayorcadev</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
