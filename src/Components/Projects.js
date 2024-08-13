import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import daltalks from "../Assets/images/daltalks.png";
import binary_translator from "../Assets/images/binary translator.png";
import hackathon from "../Assets/images/hackathon.png";
import portfolio from "../Assets/images/portfolio.png";
import scrabble from "../Assets/images/scrabble.png";
import image_classifier from "../Assets/images/image classifier.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "MRI and Neural Data Hackathon",
      description: "Python and ML",
      imgUrl: hackathon,
    },
    {
      title: "DalTalks: A social media application",
      description: "React and Springboot",
      imgUrl: daltalks,
    },
    {
      title: "Binary translator",
      description: "Systems programming (C)",
      imgUrl: binary_translator,
    },
    {
      title: "Image Classifier",
      description: "Python and ML",
      imgUrl: image_classifier,
    },
    {
      title: "My portfolio",
      description: "React and Bootstrap",
      imgUrl: portfolio,
    },
    {
      title: "Scrabble",
      description: "C",
      imgUrl: scrabble,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}