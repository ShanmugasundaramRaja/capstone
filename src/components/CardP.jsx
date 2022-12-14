import { React, useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";

export default function CardP({ src }) {
  return (
    <Container fluid>
      <Row>
        <Col className="d-flex flex-wrap" xs={12}>
          <Card
            style={{
              width: "350px",
              height: "450px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <Card.Img
              style={{ height: "90%", objectFit: "cover", padding: "10%" }}
              src={src}
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
