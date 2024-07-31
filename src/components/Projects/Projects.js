import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import xarasoft from "../../Assets/xarasoft.png";
import flexbox from "../../Assets/flexbox-practice.png";
import jew from "../../Assets/jew.png";
import epf from "../../Assets/epf.png";

const jew_stack = ['Angular', 'FuseTheme', 'NestJS', 'PostgreSQL'];
const epf_stack = ['Python', 'Bootstrap', 'MySQL'];
const xarasoft_stack = ['Angular', 'FuseTheme', 'NestJS', 'PostgreSQL'];
const flex_stack = ['Angular', 'FuseTheme', 'NestJS', 'PostgreSQL'];


function Projects() {


  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>

        <h1 className="project-heading">
          My Recent <strong className="blue">Works </strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "right", paddingBottom: "10px" }}>

          <Col md={12} className="project-card">
            <ProjectCard
              imgPath={jew}
              isBlog={false}
              title="Kevin's Jewelry"
              description="Website made for a wholesale jewelry in order to register by invitation new entrepreneurs or afiliates to sell their products (rings, earrings, chains, charms, bracelets, anklets, rosaries) where the users can access to a large inventory with preferencial prices for resell the products and increase their profits."
              stack={jew_stack}
              ghLink="https://github.com/MazorcaLlegosCorpp/jewelry"
            //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={12} className="project-card">
            <ProjectCard
              imgPath={epf}
              isBlog={false}
              title="Enfermos por el Futbol"
              description="A project developed with Django and bootstrap for the university. The idea was to design an app that is able to simulate a single elimination tournament considering the 4 criteria in order to calculate the winner according it's stats"
              stack={epf_stack}
              ghLink="https://github.com/jeronimomayorca/EnfermosxElFutbol"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
          <Col md={12} className="project-card">
            <ProjectCard
              imgPath={xarasoft}
              isBlog={false}
              title="XaraSoft"
              description="I built the landing page for Xarasoft with information about their services, products, and corporate details."
              stack={xarasoft_stack}
              ghLink="https://github.com/jeronimomayorca/xarasoft-page-2.0"
              demoLink="https://xarasoft.co"
            />
          </Col>

          <Col md={12} className="project-card">
            <ProjectCard
              imgPath={flexbox}
              isBlog={false}
              title="Flexbox Practice"
              description="This is a good point to start for a new website of your digital marketing agency, divided by sections where you could promote your services, make famous your team, exhibit your portfolio, works or projects that you realized with your clients and a contact section"
              stack={flex_stack}
              ghLink="https://github.com/jeronimomayorca/practice-flex.git"
              demoLink="https://practiseflexbox.netlify.app/"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
