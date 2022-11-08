/** @format */
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect, React } from "react";
import { usePlacesWidget } from "react-google-autocomplete";

export default function LeftToDo() {
  const [show, setShow] = useState(false);

  const [query, setQuery] = useState("");

  const [results, setResults] = useState([]);

  const [weather, setWeather] = useState("");
  const { ref } = usePlacesWidget({
    apiKey: "AIzaSyDUHuPPzwN-8fCOaw-hhtpZkvs9Stnp83s",
  });

  const searchQuery = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=079045f2fbbdb941bef49889f122240f`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setResults(data);

        setWeather(data.weather[0].main);
        console.log(weather);
        console.log(results);
        setShow(true);
      } else {
        console.log("ERROR");
        setShow(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setResults(JSON.parse(sessionStorage.getItem("weather")));
    setWeather(JSON.parse(sessionStorage.getItem("mood")));
    setShow(JSON.parse(sessionStorage.getItem("show")));
  }, []);
  useEffect(() => {
    sessionStorage.setItem("weather", JSON.stringify(results));
  }, [results]);
  useEffect(() => {
    sessionStorage.setItem("mood", JSON.stringify(weather));
  }, [weather]);
  useEffect(() => {
    sessionStorage.setItem("show", JSON.stringify(show));
  }, [show]);

  return (
    <>
      <div
        style={{
          width: "100%",
          minHeight: "500px",
          borderRadius: "24px",
          margin: "10px",
          color: "whitesmoke",
          background:
            weather === "Clear"
              ? `url(" https://i.gifer.com/1Ku2.gif")`
              : weather === "Clouds"
              ? `url("https://i.gifer.com/1Ku2.gif")`
              : `url("https://i.gifer.com/68J.gif")`,
          backgroundSize: "cover",
        }}
        className="d-none d-md-block mb-2"
      >
        <div className="d-flex flex-column justify-content-end ">
          <div>
            <input
              type="text"
              ref={ref}
              placeholder="Pick a City"
              className="form__field"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="btn del delup delaccept  btn-lg ml-3 mt-2 "
              style={{
                border: "solid 2px white",
                borderRadius: "24px",
              }}
              type="button"
              onClick={searchQuery}
            >
              Search
            </button>
          </div>

          <div className="text-dark">
            {results.main && (
              <div className="cityinfo">
                <div className="weather-section">
                  <Container>
                    <Row className="justify-content-center">
                      <h1 className="mb-3 res">{results.name}</h1>
                      <h1 className="mb-3 res">Today</h1>
                      <Col className="d-flex justify-content-center">
                        <h1 className="res">
                          {Math.round(results.main.temp - 273.15).toFixed(0)} ºC
                        </h1>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {show && (
        <div
          style={{
            width: "100%",
            minHeight: "500px",
            borderRadius: "24px",
            margin: "10px",
          }}
          className="d-none d-md-block blu d-none d-md-block "
        >
          <table style={{ color: "white", fontSize: "2rem", width: "100%" }}>
            <tr>
              <th>Day</th>
              <th style={{ padding: "15px" }}>Value</th>
            </tr>
            <tr>
              <td>Nov 9th</td>
              <td> {Math.round(results.main.temp - 277.15).toFixed(0)} ºC</td>
            </tr>
            <tr>
              <td>Nov 10th</td>
              <td> {Math.round(results.main.temp - 271.15).toFixed(0)} ºC</td>
            </tr>
            <tr>
              <td>Nov 11th</td>
              <td> {Math.round(results.main.temp - 274.15).toFixed(0)} ºC</td>
            </tr>
            <tr>
              <td>Nov 12th</td>
              <td> {Math.round(results.main.temp - 273.15).toFixed(0)} ºC</td>
            </tr>
            <tr>
              <td>Nov 13th</td>
              <td> {Math.round(results.main.temp - 272.15).toFixed(0)} ºC</td>
            </tr>
            <tr>
              <td>Nov 14th</td>
              <td> {Math.round(results.main.temp - 275.15).toFixed(0)} ºC</td>
            </tr>
          </table>
        </div>
      )}
    </>
  );
}
