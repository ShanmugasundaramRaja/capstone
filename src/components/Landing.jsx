import React from "react";
import { Link } from "react-router-dom";
import "../styles/Landing.css";
import { Button } from "react-bootstrap";
import video from "./video7.mp4";

export default function Landing(props) {
  return (
    <>
      <video
        id="background-video"
        autoPlay
        loop
        muted
        src={video}
        type="video/mp4"
      ></video>

      <div className="bigo">
        <div className="outer">
          <div className="smallc"></div>
          <div className="bigc"></div>

          <h1 style={{ color: "white" }}>Globetrotter</h1>
        </div>

        <div className="outer2">
          <h3 style={{ color: "white" }}>
            Plan your travel here like a true Globetrotter!
          </h3>
        </div>
        <div className="outer3">
          <Link to="/signup">
            <Button
              style={{ width: "10rem", borderRadius: "24px" }}
              className="mr-2"
              variant="outline-primary"
            >
              Sign up
            </Button>
          </Link>
          <Link to="/signin">
            <Button
              style={{ width: "10rem", borderRadius: "24px" }}
              variant="outline-success"
            >
              Sign in
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
