import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import kfcI from "../../Assets/Projects/kfcI.png";
import kfcII from "../../Assets/Projects/kfcII.jpg";
import buywow from "../../Assets/Projects/buywow.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kfcII}
              isBlog={false}
              title="Apollo247-Clone"
              description="www.Apollo247.com website clone build with CSS, JavaScript and html. Have features which allows user to  login, add medical Product to Cart, able to Consult Doctor online  ."
              link="https://github.com/Indherjith/Apollo247."
              deplink = "https://wizardly-tereshkova-892eea.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={buywow}
              isBlog={false}
              title="StyleCraze-Clone"
              description="StyleCraze-Clone is a website www.stylecraze.com. It is built with html, CSS, Javascript, React and Redux. Have features which allows user to  login,add products to cart, and Checkout ."
              link="https://github.com/Indherjith/stylecraze.com"
              deplink = "https://astounding-torte-af585a.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kfcI}
              isBlog={false}
              title="Tik-Tak-Tow"
              description="Tik Tak Tow is a small game. I develope this web game for Practice. Who get the straight line is the winner of this Tik Tak Tow. And I used Chinchan and Hemawari cartoon image for child attractions."
              link="https://github.com/Indherjith/Tiktaktow"
              deplink = "https://dynamic-halva-d11a3b.netlify.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={leaf}
              // isBlog={false}
              title=""
              description=""
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={}
              isBlog={false}
              title=""
              description=""
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={emotion}
              isBlog={false}
              title=""
              description=""
              link=""
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
