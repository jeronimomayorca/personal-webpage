import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I'm from <span className="blue"> Manizales, </span>
            I'm from Manizales, a medium-sized city located in the heart of the coffee axis, known for human kindness, sunsets, coffee, and university culture.
            <br />
            <br />
            I am a <span className="blue">creative</span> and <span className="blue">disruptive</span> youngster who questions established norms to find new and better ways of doing things.
            That's why I always look for unconventional alternatives and <span className="underlined">usually come up with great ideas!</span>
            <br />
            <br />
            I am a natural problem solver due to my way of thinking and my personality. I learn very quickly and am always seeking continuous improvement,
            focusing my energy on optimizing the product to sustainably increase both users and revenue.
            <br />
            <br />
            I am currently studying Software Engineering at Universidad Iberoamericana de Bogotá and actively seeking job opportunities.
          </p>

          <br />
          <p style={{ color: "rgb(138, 191, 255)" }}>
            If you're looking for someone who thinks differently and has great ideas, count on me!
          </p>
          <br />
          <footer className="blockquote-footer">Mayorcadev</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
