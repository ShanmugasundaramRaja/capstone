import { React } from "react";
import { Col, Row, Form, Container } from "react-bootstrap";
import { useState } from "react";
import { IoArrowForwardCircle } from "react-icons/io5";
import { AiFillDelete } from "react-icons/ai";

import ProfileCard from "./ProfileCard";

import NavBar from "./NavBar";
import Footer from "./Footer";

export default function User({
  user,
  handleChange,
  handleLogout,
  handleMail,
  handlePass,
  changeMail,
  changePass,
  deleteMe,
}) {
  return (
    <Container fluid className="back" style={{ padding: "0" }}>
      <Row>
        <Col xs={12}>
          <NavBar handleLogout={handleLogout} />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <ProfileCard />
        </Col>
      </Row>
      <Row>
        <Col md={10}>
          <Form
            className="back2"
            style={{
              margin: "10%",
              padding: "20px",
              border: "4px solid white",
              borderRadius: "24px",
              width: "100%",
            }}
          >
            <Row>
              <Col md={6} className=" mb-4">
                <input
                  type="text"
                  id="fname"
                  className="inputs"
                  name="firstname"
                  value={user.firstname}
                  placeholder="Shanmugasundaram"
                  onChange={handleChange}
                ></input>
              </Col>
              <Col md={6} className=" mb-4">
                <input
                  type="text"
                  id="fname"
                  className="inputs"
                  name="lastname"
                  value={user.lastname}
                  onChange={handleChange}
                  placeholder="Raja"
                ></input>
              </Col>
            </Row>
            <Row className="mt-3">
              <input
                type="text"
                id="fname"
                className="inputs"
                name="dob"
                value={user.dob}
                placeholder="18.08.1994"
                onChange={handleChange}
              ></input>

              <input
                type="text"
                id="fname"
                className="inputs mt-3 mb-2"
                name="email"
                placeholder=" shanmusinbox@gmail.com"
                onChange={handleMail}
              ></input>
              <IoArrowForwardCircle
                className="delaccept ics"
                onClick={changeMail}
                size="2rem"
              />
            </Row>

            <Row className="mt-3">
              <input
                type="password"
                id="fname"
                className="inputs mb-2"
                name="password"
                placeholder=" ........"
                onChange={handlePass}
              ></input>
              <IoArrowForwardCircle
                className="delaccept ics"
                onClick={changePass}
                size="2rem"
              />

              <input
                type="text"
                id="fname"
                className="inputs mt-3 mb-2"
                name="number"
                value={user.number}
                placeholder="+4917636852525"
                onChange={handleChange}
              ></input>
              <AiFillDelete
                className="delaccept dell"
                onClick={deleteMe}
                size="2rem"
              />
            </Row>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}
