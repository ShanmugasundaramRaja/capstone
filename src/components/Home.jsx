import { Container, Row, Col, Form } from "react-bootstrap";
import { React } from "react";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import { useNavigate } from "react-router-dom";
import { usePlacesWidget } from "react-google-autocomplete";

import Cards from "./Cards.jsx";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  const handleLogout = () => {
    sessionStorage.removeItem("Auth Token");
    navigate("/signin");
  };

  let navigate = useNavigate();

  const [cit, setCit] = useState();

  let city;

  function handleCity(e) {
    city = e.target.value;
    console.log(city);
    setCit(city);
  }
  const { ref } = usePlacesWidget({
    apiKey: "AIzaSyDUHuPPzwN-8fCOaw-hhtpZkvs9Stnp83s",
  });

  const [date1, setDate1] = useState();
  const [date2, setDate2] = useState();
  const [arr, setArr] = useState([
    "6th Nov 22,Thursday",
    "7th Nov 22, Friday",
    "8th Nov 22, Saturday",
    "9th Nov 22, Sunday",
    "10th Nov 22, Sunday",
    "11th Nov 22, Monday",
    "12th Nov 22, Tuesday",
  ]);
  const [more, setMore] = useState([]);

  const handleSubmit = () => {
    if (diff) {
      for (let i = 1; i <= diff + 1; i++) {
        let dum = i;
        more.push({ day: dum, date: arr[i] });
        setMore([...more]);
      }
    }
    console.log(more);
    sessionStorage.setItem("city", JSON.stringify(cit));
  };

  useEffect(() => {
    setMore(JSON.parse(sessionStorage.getItem("more")));
  }, []);
  useEffect(() => {
    sessionStorage.setItem("more", JSON.stringify(more));
    setCit(JSON.parse(sessionStorage.getItem("city")));
  }, [more]);
  const clear = () => {
    setCit("");
    setMore([]);
    window.location.reload();
    sessionStorage.removeItem("more");
    sessionStorage.removeItem("city");
  };
  const dat1e = new Date(date1);
  const dat2e = new Date(date2);
  const diff = dat2e.getDate() - dat1e.getDate();
  console.log(diff);

  const wall = ["https://i.gifer.com/1KXZ.gif", "https://i.gifer.com/CKYX.gif"];

  return (
    <Container
      fluid
      style={{ padding: "0px", width: "100vw", minHeight: "100vh" }}
    >
      <NavBar handleLogout={handleLogout} />

      <Container fluid className="d-flex back" style={{ minHeight: "70vh" }}>
        <Col md={3} xs={12}>
          <Container
            fluid
            className=" pt-3 pb-2 back2"
            style={{ height: "100%" }}
          >
            <div className="form-outline mb-2">
              <Form>
                <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    ref={ref}
                    style={{ borderRadius: "24px" }}
                    type="text"
                    placeholder="City"
                    onChange={handleCity}
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Label>Start</Form.Label>
                  <Form.Control
                    style={{ borderRadius: "24px" }}
                    type="date"
                    placeholder="Departure"
                    onChange={(e) => setDate1(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Label>End</Form.Label>
                  <Form.Control
                    style={{ borderRadius: "24px" }}
                    type="date"
                    placeholder="Arrival"
                    onChange={(e) => setDate2(e.target.value)}
                  />
                </Form.Group>
              </Form>
              <div className="pt-1 mt-4 mb-2">
                <button
                  className="btn del delaccept delup  btn-lg btn-block "
                  style={{
                    border: "solid 2px white",
                    borderRadius: "24px",
                  }}
                  type="button"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
              <div className="pt-1 mt-4 mb-4">
                <button
                  className="btn del delaccept delup  btn-lg btn-block "
                  style={{
                    border: "solid 2px white",
                    borderRadius: "24px",
                  }}
                  type="button"
                  onClick={clear}
                >
                  Clear
                </button>
              </div>
            </div>
          </Container>
        </Col>
        <Col
          md={9}
          xs={12}
          className="d-flex flex-wrap justify-content-around align-items-center"
          style={{ padding: "15px" }}
        >
          {more.map((elem) => {
            return (
              <Cards
                day={elem.day}
                date={elem.date}
                place={cit}
                img={wall[0]}
              />
            );
          })}
        </Col>
      </Container>

      <Row>
        <Col xs={12}>{<Footer />}</Col>
      </Row>
    </Container>
  );
}
