import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiAngularSimple,
  DiAws,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p className="icon-text">Javascript</p>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p className="icon-text">Nodejs</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p className="icon-text">React</p>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p className="icon-text">Mongodb</p>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p className="icon-text">Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <p className="icon-text">Firebase</p>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <p className="icon-text">Postgresql</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p className="icon-text">Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p className="icon-text">Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple />
        <p className="icon-text">Angular</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" alt-text="AWS">
        <DiAws />
        <p className="icon-text">AWS</p>
      </Col>
    </Row>
  );
}

export default Techstack;
