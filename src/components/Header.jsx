import { useState, React, useEffect } from "react";
import NewForm from "./NewForm";
import TodoList from "./TodoList";
import { Col, Container, Row } from "react-bootstrap";

export default function Header() {
  const initialState = JSON.parse(localStorage.getItem("todo")) || [];
  const [input, setInput] = useState("");

  const [todo, setTodo] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <NewForm
              input={input}
              setInput={setInput}
              todo={todo}
              setTodo={setTodo}
              editTodo={editTodo}
              setEditTodo={setEditTodo}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <TodoList todo={todo} setTodo={setTodo} setEditTodo={setEditTodo} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
