import React from "react";
import { ListGroup, Badge } from "react-bootstrap";

export default function Collaps() {
  return (
    <ListGroup as="ol" numbered>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start back"
        style={{ border: "5px solid white" }}
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Louvre Museum Paris</div>
          Historical collections
        </div>
        <Badge bg="primary" pill>
          Most busy
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start back"
        style={{ border: "5px solid white" }}
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Eiffel Tower</div>
          Landmark
        </div>
        <Badge bg="primary" pill>
          Most popular
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start back"
        style={{ border: "5px solid white" }}
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Arc de Triumph</div>
          Crowded plaza
        </div>
        <Badge bg="primary" pill>
          Free visit
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start back"
        style={{ border: "5px solid white" }}
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Musee de Orsay & Tuilleries</div>
          Artifacts,paintings & gardens
        </div>
        <Badge bg="primary" pill>
          Booking required
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start back"
        style={{ border: "5px solid white" }}
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Musee de el Orangerie</div>
          Artifacts and paintings
        </div>
        <Badge bg="primary" pill>
          Booking required
        </Badge>
      </ListGroup.Item>
    </ListGroup>
  );
}
