import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function TodoList({ todo, setTodo, setEditTodo }) {
  const [day, setDay] = useState([]);
  const [time, setTime] = useState();
  const handleDelete = ({ id }) => {
    setTodo(todo.filter((elem) => elem.id !== id));
    alert("Deleted!");
  };

  /*
  const [time, setTime] = useState([]);
  useEffect(() => {
    setTime(JSON.parse(sessionStorage.getItem("time")));
  }, []);
  useEffect(() => {
    sessionStorage.setItem("time", JSON.stringify(time));
  }, [time]);
  */

  const handleEdit = ({ id }) => {
    const findTodo = todo.find((elem) => elem.id === id);
    setEditTodo(findTodo);
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <div style={{ minHeight: "150px" }}>
            {todo.map((elem) => (
              <li key={elem.id} style={{ listStyle: "none" }}>
                <input
                  type="text"
                  className="inputs2 mt-2 mb-2"
                  value={elem.title}
                  onChange={(event) => event.preventDefault()}
                  style={{ width: "65%", border: "3px solid DodgerBlue" }}
                />
                <input
                  type="text"
                  placeholder="Day"
                  value={day[0]}
                  onChange={(e) => {
                    setDay([...day, e.target.value]);
                  }}
                  className="inputs2 ml-2"
                  style={{ width: "5%", border: "3px solid DodgerBlue" }}
                />
                <input
                  type="time"
                  placeholder="Time"
                  onChange={(e) => {
                    setTime(e.target.value);
                  }}
                  className="inputs2 ml-2"
                  style={{ width: "10%", border: "3px solid DodgerBlue" }}
                />
                <span
                  className=" del delaccept delup  ml-2 p-2"
                  style={{ border: "3px solid white", borderRadius: "10px" }}
                >
                  <MdEdit
                    className="delaccept ics"
                    size="1.5rem"
                    onClick={() => handleEdit(elem)}
                  />
                </span>
                <span
                  className="del delup p-2 ml-2"
                  style={{ border: "3px solid white", borderRadius: "10px" }}
                >
                  <AiFillDelete
                    className="delaccept dell"
                    size="1.5rem"
                    onClick={() => handleDelete(elem)}
                  />
                </span>
              </li>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
