import { React, useState } from "react";
import "../styles/todo.css";
import {
  Container,
  Row,
  Col,
  Card,
  Collapse,
  Badge,
  ListGroup,
} from "react-bootstrap";

import NavBar from "./NavBar";
import Footer from "./Footer";
import LeftToDo from "./LeftToDo";
import Collaps from "./Collaps";

import Header from "./Header";
import Map from "./Map";

export default function ToDo({ handleLogout }) {
  const [open, setOpen] = useState(false);
  return (
    <Container
      fluid
      className="back"
      style={{ padding: "0", minHeight: "100vh" }}
    >
      <NavBar handleLogout={handleLogout} />

      <Row>
        <Col xs={0} md={3} style={{ height: "100%" }}>
          <LeftToDo />
        </Col>
        <Col xs={12} md={9}>
          <Card style={{ width: "100%" }} className="back2 mt-3 ">
            <button className="del btn delonly2" style={{ width: "100%" }}>
              Holiday planner
            </button>
            <Card.Img
              variant="top"
              src="https://i.gifer.com/921j.gif"
              style={{
                width: "100%",
                height: "350px",
                margin: "0 auto",
                objectFit: "cover",
              }}
            />
            <Card.Body style={{ padding: "0" }}>
              <button
                className="del btn delonly2"
                style={{ width: "100%" }}
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                MOST POPULAR
              </button>

              <Collapse in={open}>
                <div id="example-collapse-text">
                  <Collaps />
                </div>
              </Collapse>

              <Header />
            </Card.Body>
          </Card>

          <Map />
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
