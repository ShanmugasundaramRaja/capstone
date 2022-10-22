import { React, useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import CardP from "./CardP";
import NavBar from "./NavBar";
import red from "../red";
import { FiHeart } from "react-icons/fi";
import { MdAdd } from "react-icons/md";

import { storage } from "./firebase";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

export default function Carouse({ handleLogout }) {
  const [file, setFile] = useState([]);

  const [link, setLink] = useState([]);
  const [fav, setFav] = useState([]);

  let storageRef;
  let uploadTask;

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  const handleUpload = async () => {
    console.log(file);

    storageRef = ref(storage, `/files/${file.name}`);

    uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed", async (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("PROGRESS: ", progress);
      const url = await getDownloadURL(snapshot.ref);
      console.log("URL : ", url);
      setLink([...link, url]);
    });

    // uploadTask.on("error", (err) => console.log(err));
  };

  const deleteFromFirebase = (url) => {
    //1.

    setLink(link.filter((elem) => elem !== url));
    console.log("Deleted");
  };

  const select = (url) => {
    setFav([...fav, url]);
    console.log(fav);
    sessionStorage.setItem("fav", JSON.stringify(fav));
  };
  useEffect(() => {
    setLink(JSON.parse(sessionStorage.getItem("url")));
  }, []);
  useEffect(() => {
    sessionStorage.setItem("url", JSON.stringify(link));
  }, [link]);

  return (
    <Container
      fluid
      style={{ padding: "0", width: "100vw", minHeight: "100vh" }}
      className="back"
    >
      <NavBar handleLogout={handleLogout} />
      <Row>
        <Col>
          <Container
            fluid
            style={{ width: "100%", height: "200px", padding: "5%" }}
          >
            <div className="App d-flex flex-column justify-content-center align-items-center p-4">
              <label for="upload-photo">
                <MdAdd
                  size="2rem"
                  className="ics delaccept del delup "
                  style={{ border: "3px solid white", borderRadius: "5px" }}
                />
              </label>
              <input type="file" id="upload-photo" onChange={handleChange} />
              <button
                className="btn  del delaccept delup"
                style={{
                  borderRadius: "24px",
                  width: "20%",
                }}
                onClick={handleUpload}
              >
                Upload images
              </button>
            </div>
          </Container>
        </Col>
      </Row>
      <Row className="d-flex   mt-5 ml-5">
        {link.map((elem) => {
          return (
            <>
              <Col xs={4} className="mt-4 d-flex flex-column ">
                <CardP src={elem} />
                <button
                  className="btn del delonly2  btn-lg ml-3 "
                  style={{
                    border: "solid 2px white",

                    maxWidth: "350px",
                  }}
                  onClick={() => select(elem)}
                >
                  <FiHeart
                    size="2rem"
                    className="ml-2 red like "
                    onClick={red}
                  />
                </button>
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
  );
}
