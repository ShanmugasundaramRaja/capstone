import { React } from "react";
import "../styles/todo.css";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  InputGroup,
  Form,
  Modal,
  Alert,
} from "react-bootstrap";
import List from "./List";
import { MdAdd } from "react-icons/md";
import NavBar from "./NavBar";
import Footer from "./Footer";
import LeftToDo from "./LeftToDo";
import { useState } from "react";
import ModalS from "./ModalS";
import { Link } from "react-router-dom";
import Map from "./Map";

import Header from "./Header";

export default function ToDo({ handleLogout }) {
  const [lgShow, setLgShow] = useState(false);
  const [show, setShow] = useState(false);
  const [showS, setShowS] = useState(false);

  return (
    <Container fluid className="back" style={{ padding: "0" }}>
      <Row>
        <Col xs={12}>
          <NavBar handleLogout={handleLogout} />
        </Col>
      </Row>
      <Row>
        <Col xs={3} style={{ height: "100%" }}>
          <LeftToDo />
        </Col>
        <Col xs={9}>
          <Card style={{ width: "100%" }} className="back2 mt-3 ">
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
              <button className="del btn delonly2" style={{ width: "100%" }}>
                Holiday planner
              </button>

              <Header />
            </Card.Body>
          </Card>
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
