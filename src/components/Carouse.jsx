import { React, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import CardP from "./CardP";
import NavBar from "./NavBar";
import { AiFillDelete } from "react-icons/ai";

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
              <label for="upload-photo">+Upload images</label>
              <input type="file" id="upload-photo" onChange={handleChange} />
              <button
                className="btn "
                style={{
                  borderRadius: "24px",
                  width: "20%",
                  backgroundColor: "aliceblue",
                }}
                onClick={handleUpload}
              >
                Submit
              </button>
            </div>
          </Container>
        </Col>
      </Row>
      <Row className="d-flex   mt-5 ml-5">
        {link.map((elem) => {
          return (
            <>
              <Col xs={4} className="mt-4 ">
                <CardP src={elem} />
                <button
                  style={{
                    borderRadius: "24px",
                    width: "50px",
                    border: "2px solid white",
                    marginTop: "5px",
                  }}
                >
                  <AiFillDelete onClick={() => deleteFromFirebase(elem)} />
                </button>
              </Col>
            </>
          );
        })}
      </Row>
    </Container>
  );
}
