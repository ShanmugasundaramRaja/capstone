/** @format */
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect, React } from "react";
import { BsArrowReturnRight } from "react-icons/bs";

const NewWeather = () => {
  const [query, setQuery] = useState("");

  const [results, setResults] = useState([]);

  const searchQuery = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=079045f2fbbdb941bef49889f122240f`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setResults(data);
        console.log(results);
      } else {
        console.log("ERROR");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setResults(JSON.parse(sessionStorage.getItem("weather")));
  }, []);
  useEffect(() => {
    sessionStorage.setItem("weather", JSON.stringify(results));
  }, [results]);
  return (
    <>
      <div className="d-flex flex-column justify-content-end ">
        <div>
          <input
            type="text"
            placeholder="Pick a City"
            className="form__field"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="btn del delup delaccept  btn-lg ml-3 mt-2 "
            style={{
              border: "solid 2px white",
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
                    <Col className="d-flex justify-content-center">
                      <h1 className="res">
                        {Math.round(results.main.temp - 273.15).toFixed(1)} ºC
                      </h1>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NewWeather;
