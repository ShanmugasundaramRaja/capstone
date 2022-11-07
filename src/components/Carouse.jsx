import { React, useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import CardP from "./CardP";
import NavBar from "./NavBar";
import red from "../red";
import { FiHeart } from "react-icons/fi";
import { MdAdd } from "react-icons/md";

import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalBody,
} from "mdb-react-ui-kit";
import { AiFillDelete } from "react-icons/ai";

import { storage } from "./firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function Carouse({ handleLogout }) {
  const [file, setFile] = useState([]);

  const [link, setLink] = useState([]);
  const [fav, setFav] = useState([]);
  const [fullscreenXlModal, setFullscreenXlModal] = useState(false);

  const toggleShow = () => setFullscreenXlModal(!fullscreenXlModal);

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
    console.log("fav", fav);
  };

  useEffect(() => {
    setLink(JSON.parse(sessionStorage.getItem("url")));
  }, []);
  useEffect(() => {
    setFav(JSON.parse(sessionStorage.getItem("fav")));
  }, []);

  useEffect(() => {
    sessionStorage.setItem("url", JSON.stringify(link));
  }, [link]);
  useEffect(() => {
    sessionStorage.setItem("fav", JSON.stringify(fav));
  }, [fav]);

  const deleteFromWishlist = (url) => {
    //1.

    setFav(fav.filter((elem) => elem !== url));
    console.log("Deleted");
  };

  return (
    <>
      <MDBModal
        tabIndex="-1"
        show={fullscreenXlModal}
        setShow={setFullscreenXlModal}
      >
        <MDBModalDialog size="fullscreen">
          <MDBModalContent>
            <MDBModalHeader className="delonly2">
              <MDBBtn
                type="button"
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <Container
                fluid
                className="blue"
                style={{
                  minHeight: "100vh",

                  padding: "0",
                }}
              >
                <Row className="p-3">
                  {fav.map((elem) => {
                    return (
                      <>
                        <Col
                          xs={12}
                          className="mt-4 ml-4 d-flex flex-column align-items-center justify-content-center "
                        >
                          <CardP src={elem} />
                          <button
                            className="delonly2 mr-4"
                            style={{
                              borderRadius: "24px",
                              border: "3px solid white",
                            }}
                          >
                            <AiFillDelete
                              className="delaccept dell "
                              size="2rem"
                              onClick={() => deleteFromWishlist(elem)}
                            />
                          </button>
                        </Col>
                      </>
                    );
                  })}
                </Row>
              </Container>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
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
              style={{ width: "100%", height: "250px", padding: "5%" }}
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
                    border: "3px solid white",
                  }}
                  onClick={handleUpload}
                >
                  Upload images
                </button>
                <button
                  className="btn del delonly2  btn-lg mt-4  "
                  style={{
                    border: "solid 2px white",
                    borderRadius: "24px",

                    maxWidth: "350px",
                  }}
                  onClick={toggleShow}
                >
                  Favourites
                </button>
              </div>
            </Container>
          </Col>
        </Row>
        <Row className="d-flex   mt-5 ml-5">
          {link.map((elem) => {
            return (
              <>
                <Col xs={12} sm={4} className="mt-4 d-flex flex-column ">
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
    </>
  );
}
