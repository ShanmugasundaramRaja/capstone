import { elementTypeAcceptingRef } from "@mui/utils";
import { React, useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import CardP from "./CardP";

import NavBar from "./NavBar";
export default function Favourite() {
  const [wish, setWish] = useState([]);
  useEffect(() => {
    setWish(JSON.parse(sessionStorage.getItem("fav")));
  }, []);
  useEffect(() => {
    sessionStorage.setItem("fav", JSON.stringify(wish));
  }, [wish]);
  const deleteFromFirebase = (url) => {
    //1.

    setWish(wish.filter((elem) => elem !== url));
    console.log("Deleted");
  };

  return (
    <>
      <Container
        fluid
        className="blue"
        style={{
          minHeight: "100vh",
          padding: "0",
        }}
      >
        <Row>
          <Col
            className="back2"
            xs={12}
            style={{ height: "10vh", padding: "10px" }}
          >
            <NavBar />
          </Col>
        </Row>
        <Row className="p-3">
          {wish.map((elem) => {
            return (
              <>
                <Col xs={4} className="mt-4 d-flex flex-column ">
                  <CardP src={elem} />

                  <button
                    className="btn del delonly  btn-lg ml-3 "
                    style={{
                      border: "solid 2px white",

                      maxWidth: "350px",
                    }}
                    onClick={() => deleteFromFirebase(elem)}
                  >
                    Delete
                  </button>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
