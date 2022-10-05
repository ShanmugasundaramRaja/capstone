import React from "react";
import { useState } from "react";
import {Col,Row,Container} from "react-bootstrap"
import { storage } from "./firebase.js";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function UploadPhotos(){
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState(null);

  
    const handleImageChange = (e) => {
      if (e.target.files[0]) {
        setImage(e.target.files[0]);
      }
    };
  
    
    const handleSubmit = () => {
        const imageRef = ref(storage, "image");
        uploadBytes(imageRef, image)
          .then(() => {
            getDownloadURL(imageRef)
              .then((url) => {
                setUrl(url);
              })
              .catch((error) => {
                console.log(error.message, "error getting the image url");
              });
            setImage(null);
          })
          .catch((error) => {
            console.log(error.message);
          });
      };
   

    return(
        <Container fluid className="back" style={{padding:'0',width:'100vw'}} >
    <Row className="d-flex justify-content-around" style={{width:'100%'}}>
        <Col xs={2}>
        <div className="App d-flex flex-column justify-content-center align-items-center p-4" >
      <img src={url} style={{height:'300px',width:'300px',objectFit:'cover',borderRadius:'24px'}} />
      <label for="upload-photo">Upload</label>
      <input type="file" id="upload-photo" onChange={handleImageChange} />
      <button className="butcir" onClick={handleSubmit}>Submit</button>
    </div>
          
        </Col>
        <Col xs={2}>
        <div className="App d-flex flex-column justify-content-center align-items-center p-4" >
      <img src={url} style={{height:'300px',width:'300px',objectFit:'cover',borderRadius:'24px'}} />
      <label for="upload-photo">Upload</label>
      <input type="file" id="upload-photo" onChange={handleImageChange} />
      <button className="butcir" onClick={handleSubmit}>Submit</button>
    </div>
          
        </Col>
        <Col xs={2}>
        <div className="App d-flex flex-column justify-content-center align-items-center p-4" >
      <img src={url} style={{height:'300px',width:'300px',objectFit:'cover',borderRadius:'24px'}} />
      <label for="upload-photo">Upload</label>
      <input type="file" id="upload-photo" onChange={handleImageChange} />
      <button className="butcir" onClick={handleSubmit}>Submit</button>
    </div>
          
        </Col>
        <Col xs={2}>
        <div className="App d-flex flex-column justify-content-center align-items-center p-4" >
      <img src={url} style={{height:'300px',width:'300px',objectFit:'cover',borderRadius:'24px'}} />
      <label for="upload-photo">Upload</label>
      <input type="file" id="upload-photo" onChange={handleImageChange} />
      <button className="butcir" onClick={handleSubmit}>Submit</button>
    </div>
          
        </Col>
    </Row>
    </Container>


    )
}
