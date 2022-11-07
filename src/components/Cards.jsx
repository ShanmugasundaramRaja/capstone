import React from "react";
import { Card } from "react-bootstrap";
import { useState } from "react";
import { GrAdd } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function Cards(props) {
  const [arr, setArr] = useState([
    { date: "7th Nov 22, Friday" },
    { date: "8th Nov 22, Saturday" },
    { date: "9th Nov 22, Sunday" },
    { date: "10th Nov 22, Sunday" },
    { date: "11th Nov 22, Sunday" },
    { date: "12th Nov 22, Sunday" },
  ]);

  return (
    <Link to="/todo" style={{ textDecoration: "none" }}>
      <Card style={{ width: "22rem", height: "500px" }}>
        <Card.Img
          variant="top"
          style={{ height: "70%", objectFit: "cover", outline: "none" }}
          src={props.img}
        />
        <Card.Body className="back2">
          <Card.Title>
            Day {props.day}
            <br />
            {props.place}
            <br />
            {props.date}
          </Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
}
