import React from "react";
import NavBar from "./NavBar";
import image from "./prof.jpg";
import { Card, Row, Col, Container } from "react-bootstrap";
import { GrMail, GrLinkedin, GrGithub } from "react-icons/gr";
import { FaInfoCircle } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import {
  SiHtml5,
  SiCsswizardry,
  SiJavascript,
  SiReactos,
  SiBootstrap,
} from "react-icons/si";

export default function Personal({ handleLogout }) {
  return (
    <div style={{ height: "200vh", width: "100vw" }} className="back">
      <NavBar handleLogout={handleLogout} />
      <Container fluid className="d-flex justify-content-center  ">
        <Row className="mt-4">
          <Col className="d-flex flex-wrap" xs={12}>
            <Card
              style={{
                width: "50vw",
                height: "170vh",
                borderRadius: "24px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
              className="back2"
            >
              <Card.Img
                style={{
                  height: "30%",
                  objectFit: "contain",
                  padding: "5%",
                }}
                src={image}
              />

              <Row style={{ padding: "15px" }}>
                <Col className=" mb-4 d-flex flex-column">
                  <input
                    type="text"
                    id="fname"
                    className="inputs"
                    name="firstname"
                    value="SHANMUGASUNDARAM"
                    style={{ backgroundColor: "white" }}
                  ></input>
                </Col>

                <Col className=" mb-4 d-flex flex-column">
                  <input
                    type="text"
                    id="lname"
                    name="lastname"
                    className="inputs"
                    value="RAJA"
                    style={{ backgroundColor: "white" }}
                  ></input>
                </Col>
              </Row>
              <Row style={{ padding: "15px" }}>
                <Col className=" mb-4 d-flex flex-column">
                  <label for="lname">
                    <FaInfoCircle size="2rem" />
                  </label>
                  <input
                    type="text"
                    id="lname"
                    name="lastname"
                    className="inputs"
                    value="FRONT END DEVELOPER"
                    style={{ backgroundColor: "white" }}
                  ></input>
                </Col>
                <Col className=" mb-4 d-flex flex-column">
                  <label for="lname">
                    <MdSchool size="2rem" />
                  </label>
                  <input
                    type="text"
                    id="lname"
                    name="lastname"
                    className="inputs"
                    value="EPICODE SCHOOL"
                    style={{ backgroundColor: "white" }}
                  ></input>
                </Col>
              </Row>
              <Row style={{ padding: "15px" }}>
                <Col className=" mb-4 d-flex flex-column">
                  <label for="lname">
                    <GrMail size="2rem" />
                  </label>
                  <input
                    type="text"
                    id="lname"
                    name="lastname"
                    className="inputs"
                    value="shanmusinbox@gmail.com"
                    style={{ backgroundColor: "white" }}
                  ></input>
                </Col>
              </Row>
              <Row style={{ padding: "15px" }}>
                <Col className=" mb-4 d-flex flex-column">
                  <label for="lname">
                    <GrLinkedin size="2rem" />
                  </label>
                  <a href="https://www.linkedin.com/in/shanmugasundaram-raja-938b9a244/">
                    <div
                      id="lname"
                      name="lastname"
                      className="inputs pt-2"
                      style={{ backgroundColor: "white" }}
                    >
                      https://www.linkedin.com/in/shanmugasundaram-raja-938b9a244/
                    </div>
                  </a>
                </Col>
              </Row>
              <Row style={{ padding: "15px" }}>
                <Col className=" mb-4 d-flex flex-column">
                  <label for="lname">
                    <GrGithub size="2rem" />
                  </label>
                  <a href="https://github.com/ShanmugasundaramRaja">
                    <div
                      id="lname"
                      name="lastname"
                      className="inputs pt-2"
                      style={{ backgroundColor: "white" }}
                    >
                      https://github.com/ShanmugasundaramRaja
                    </div>
                  </a>
                </Col>
              </Row>
              <Row style={{ padding: "15px" }}>
                <Col className=" mb-4 d-flex flex-column">
                  <label for="lname">
                    <IoBookSharp size="2rem" />
                  </label>

                  <div
                    id="lname"
                    name="lastname"
                    style={{
                      backgroundColor: "white",
                      padding: "15px",
                      borderRadius: "24px",
                    }}
                  >
                    <Row>
                      <Col>
                        {" "}
                        <SiHtml5 size="3rem" className="mr-4" />
                      </Col>
                      <Col>
                        {" "}
                        <SiCsswizardry size="3rem" className="mr-4" />
                      </Col>
                      <Col>
                        {" "}
                        <SiJavascript size="3rem" className="mr-4" />
                      </Col>
                      <Col>
                        <SiReactos size="3rem" className="mr-4" />
                      </Col>
                      <Col>
                        {" "}
                        <SiBootstrap size="3rem" />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <h2>HTML</h2>
                      </Col>
                      <Col>
                        <h2>CSS</h2>
                      </Col>
                      <Col>
                        <h2>JavaScript</h2>
                      </Col>
                      <Col>
                        <h2>React</h2>
                      </Col>
                      <Col>
                        <h2>Bootstrap</h2>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
