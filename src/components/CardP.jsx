import { React, useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { FcLike } from "react-icons/fc";
import { AiFillLike } from "react-icons/ai";
import { BiShare } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineDoneOutline } from "react-icons/md";

export default function CardP({ src }) {
  return (
    <Container fluid>
      <Row>
        <Col className="d-flex flex-wrap" xs={12}>
          <Card style={{ width: "23rem", height: "450px" }}>
            <Card.Img
              style={{ height: "80%", objectFit: "cover", padding: "10%" }}
              src={src}
            />
            <Card.Body>
              <div className="d-flex justify-content-between">
                <div></div>
                <div>
                  <FcLike className="mr-2" />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
