import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiEclipseide,
  SiDiscord,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
        <p className="icon-text"></p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p className="icon-text">VS code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p className="icon-text">Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDiscord/>
        <p className="icon-text">Discord</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide />
        <p className="icon-text">Eclipse</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
