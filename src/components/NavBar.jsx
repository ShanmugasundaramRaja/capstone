import { React, useState, useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "../styles/Home.css";

import { FaHome, FaEdit, FaInfoCircle } from "react-icons/fa";
import { MdPhotoCamera } from "react-icons/md";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

export default function NavBar({ handleLogout }) {
  const [url, setUrl] = useState();

  useEffect(() => {
    setUrl(JSON.parse(sessionStorage.getItem("prof")));
  }, []);

  return (
    <Nav className="navbar navbar-expand-lg back2" style={{ width: "100vw" }}>
      <Container fluid>
        <div className="d-flex">
          <a className="navbar-brand" href="#">
            Globetrotter
          </a>

          <ul className="navbar-nav me-auto d-flex flex-row mt-3 mt-lg-0">
            <li className="nav-item text-center mx-2 mx-lg-1">
              <a className="nav-link active" aria-current="page" href="#!">
                <div>
                  <Link to="/home">
                    {" "}
                    <FaHome classNameName="mb-1"></FaHome>
                  </Link>
                </div>
                Home
              </a>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
            <li className="nav-item text-center mx-2 mx-lg-1">
              <a className="nav-link" href="#!">
                <div>
                  <Link to="/images">
                    <MdPhotoCamera classNameName="mb-1"></MdPhotoCamera>{" "}
                  </Link>
                </div>
                Photos
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
            <li className="nav-item text-center mx-2 mx-lg-1">
              <a className="nav-link" href="#!">
                <div>
                  <Link to="/todo">
                    <FaEdit classNameName="mb-1"></FaEdit>{" "}
                  </Link>
                </div>
                Planner
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
            <li className="nav-item text-center mx-2 mx-lg-1">
              <a className="nav-link" href="#!">
                <div>
                  <Link to="/per">
                    <FaInfoCircle classNameName="mb-1"></FaInfoCircle>{" "}
                  </Link>
                </div>
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="d-flex">
          <Avatar src={url} sx={{ width: 50, height: 50 }} />
          <Navbar.Collapse id="navbar-dark-example">
            <Nav>
              <NavDropdown>
                <Link to="/user">
                  <NavDropdown.Item className="back2" href="#action/3.2">
                    User info
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>

          <button
            onClick={handleLogout}
            classNameName="btn del delonly ml-2 p-3"
            type="button"
            style={{
              border: "1px solid white",
              borderRadius: "24px",
              background: "transparent",
            }}
          >
            Sign out
          </button>
        </div>
      </Container>
    </Nav>
  );
}
