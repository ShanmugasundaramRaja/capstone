import { React, useState, useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { Marker, Popup } from "react-leaflet";
import Geocode from "react-geocode";
import { IoLocationSharp, IoTrashSharp } from "react-icons/io5";
import { Row, Col } from "react-bootstrap";

export default function Map() {
  const [place, setPlace] = useState(null);
  const [lati, setLati] = useState();
  const [longi, setLongi] = useState();
  const [mark, setMark] = useState([]);

  const handleInput = (e) => {
    setPlace(e.target.value);
  };

  const loc = () => {
    console.log(place);
    Geocode.setApiKey("AIzaSyDUHuPPzwN-8fCOaw-hhtpZkvs9Stnp83s");
    Geocode.fromAddress(`${place}`).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
        setLati(lat);
        setLongi(lng);
        const coords = { lat, lng };
        setMark([...mark, coords]);
        console.log(coords);
        console.log(mark);
      },
      (error) => {
        console.error(error);
      }
    );
  };
  useEffect(() => {
    setMark(JSON.parse(sessionStorage.getItem("marker")));
  }, []);
  useEffect(() => {
    sessionStorage.setItem("marker", JSON.stringify(mark));
  }, [mark]);

  const reset = () => {
    setMark([]);
    setPlace("");
  };

  return (
    <>
      <Row>
        <Col xs={12}>
          <input
            className="form__field"
            style={{
              width: "50%",
              borderBottom: "solid black",
              color: "black",
            }}
            onChange={handleInput}
            value={place}
            type="text"
          />
          <button
            className="m-3 delmark"
            style={{
              border: "solid white",
              borderRadius: "24px",
              background: " black",
            }}
            onClick={loc}
          >
            <IoLocationSharp style={{ color: "white" }} />
          </button>
          <button
            className="delmark"
            style={{
              border: "solid white",
              borderRadius: "24px",
              background: " black",
            }}
            onClick={reset}
          >
            <IoTrashSharp style={{ color: "white" }} />
          </button>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <MapContainer
            style={{ height: "90vh" }}
            center={[48.8606, 2.3376]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {mark.map((elem) => {
              return <Marker position={[elem.lat, elem.lng]}></Marker>;
            })}
          </MapContainer>
        </Col>
      </Row>
    </>
  );
}
