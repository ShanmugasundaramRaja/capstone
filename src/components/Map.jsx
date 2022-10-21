import { React, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { Marker, Popup } from "react-leaflet";
import Geocode from "react-geocode";

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
        mark.push(coords);
        console.log(coords);
        console.log(mark);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const reset = () => {
    setMark([]);
    setPlace("");
  };

  return (
    <>
      <input
        style={{ borderRadius: "24px" }}
        onChange={handleInput}
        value={place}
        type="text"
      />
      <button style={{ borderRadius: "24px" }} onClick={loc}>
        +Stops
      </button>
      <button style={{ borderRadius: "24px" }} onClick={reset}>
        Clear
      </button>

      <MapContainer
        style={{ height: "30vh" }}
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
    </>
  );
}
