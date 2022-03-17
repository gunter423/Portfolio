import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Salut, Je suis <span className="purple">Réda Hamadi </span>
            , Je viens de <span className="purple"> France, Brest.</span>
            <br />Je suis développeur web en freelance.
            <br />
            <br />
            Mise à part la programmation, je pratique d'autres activités que j'adore!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jouer au jeux vidéos
            </li>
            <li className="about-activity">
              <ImPointRight /> Voyages
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
