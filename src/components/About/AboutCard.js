import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Buvaneswaran S </span>
            <br/>
            from <span className="purple"> Villupuram, TamilNadu, India.</span>
            <br/>
            <br />I am a Full Stack Web Developer, graduated from Masai School.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Creating WebApp
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Docx
            </li>
            <li className="about-activity">
              <ImPointRight /> Bike Ride in Hill Stations
            </li>
          </ul>
          <p>Coding is a mistery, Who handle that in efficient way it make some magic.</p>
          <span>-Buvaneswaran S</span>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
