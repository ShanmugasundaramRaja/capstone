import { React, useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useMap } from "react-leaflet/hooks";
import { GoGlobe } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { Marker, Popup } from "react-leaflet";
import Geocode from "react-geocode";
import { IoLocationSharp, IoTrashSharp } from "react-icons/io5";
import { Row, Col } from "react-bootstrap";

let autoComplete;

const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

function handleScriptLoad(updateQuery, autoCompleteRef) {
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    { types: ["establishment"] }
  );
  autoComplete.setFields(["address_components", "formatted_address"]);
  autoComplete.addListener("place_changed", () =>
    handlePlaceSelect(updateQuery)
  );
}

async function handlePlaceSelect(updateQuery) {
  const addressObject = autoComplete.getPlace();
  const query = addressObject.formatted_address;
  updateQuery(query);
  console.log(addressObject);
}

export default function Map() {
  const [place, setPlace] = useState(null);
  const [lati, setLati] = useState();
  const [longi, setLongi] = useState();
  const [mark, setMark] = useState([]);
  const [center, setCenter] = useState([48.86, 2.34]);

  const autoCompleteRef = useRef(null);
  const navigate = useNavigate();
  const map = () => {
    navigate("/map");
  };

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=AIzaSyDUHuPPzwN-8fCOaw-hhtpZkvs9Stnp83s&libraries=places`,
      () => handleScriptLoad(setPlace, autoCompleteRef)
    );
  }, []);

  let coords;
  let latit;
  let longit;
  const loc = () => {
    console.log(place);
    Geocode.setApiKey("AIzaSyDUHuPPzwN-8fCOaw-hhtpZkvs9Stnp83s");
    Geocode.fromAddress(`${place}`).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log("lat", lat, "long", lng);
        setLati(lat);
        latit = lat;
        longit = lng;
        setCenter([lat, lng]);

        setLongi(lng);
        coords = { lat, lng };
        setMark([...mark, coords]);
        console.log("coords", coords);
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
  useEffect(() => {
    setCenter(JSON.parse(sessionStorage.getItem("center")));
  }, []);
  useEffect(() => {
    sessionStorage.setItem("center", JSON.stringify(center));
  }, [center]);

  const reset = () => {
    setMark([]);
    setPlace("");
  };

  return (
    <>
      <div className="search-location-input">
        <input
          ref={autoCompleteRef}
          onChange={(event) => setPlace(event.target.value)}
          placeholder="Enter a City"
          value={place}
          className="form__field black"
          style={{
            width: "70%",
            borderBottom: "solid black",
            color: "black",
          }}
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
      </div>

      <Row style={{ marginLeft: "0.5px" }}>
        <Col xs={12}>
          <MapContainer
            style={{ minHeight: "40vh", width: "100%" }}
            center={center}
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
      <Row style={{ marginLeft: "1px" }}>
        <Col>
          <button
            className="delonly2 btn "
            style={{ width: "100%" }}
            onClick={map}
          >
            Map view
            <GoGlobe className="delsub ml-4" size="2rem" />
          </button>
        </Col>
      </Row>
    </>
  );
}
