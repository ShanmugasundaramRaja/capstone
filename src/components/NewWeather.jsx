/** @format */
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

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
  return (
    <>
    <div className="d-flex flex-column justify-content-end ">

   
      <div>
      <input
            type="text"
            placeholder="Type City Name Here"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <input
            type="button"
            id="searchBtn"
            value=" Search"
            className="mt-3"
            onClick={searchQuery}
          />
      </div>

      <div className="text-dark">
        {results.main && (
          <div className="cityinfo">
            <div className="weather-section">
              <Container>
                <Row className="justify-content-center">
                  <h1 className="mb-3">{results.name}</h1>
                  <Col className="d-flex justify-content-center">
                    
                      <h1 className="subtitle">
                       
                        
                        {(Math.round(results.main.temp - 273.15)).toFixed(1)} ºC
                     
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