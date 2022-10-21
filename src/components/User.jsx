import { React } from "react";
import {
  Col,
  Row,
  Form,
  Container,
  InputGroup,
  Modal,
  Button,
} from "react-bootstrap";
import { useState } from "react";
import { IoArrowForwardCircle } from "react-icons/io5";
import { AiFillDelete } from "react-icons/ai";

import ProfileCard from "./ProfileCard";

import NavBar from "./NavBar";
import Footer from "./Footer";

export default function User({
  user,
  handleChange,
  handleLogout,
  handleMail,
  handlePass,
  changeMail,
  changePass,
  deleteMe,
}) {
  const [show, setShow] = useState(false);
  /*const [images,setImages]=useState([]);*/
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  /*
    const [imageURLs,setImageURLs]=useState([]);

 

  useEffect(()=>{
    if(images.length<1)return;
const newImageUrls=[];
images.forEach(image=>newImageUrls.push(URL.createObjectURL(image)));
  
    
  },[images]);

  function onImageChange(e){
    setImages([...e.target.files]);
  }


            <div style={{width:'200px',height:'200px',borderRadius:'50%', backgroundImage: `url(${imag})`,backgroundSize:'cover',backgroundRepeat:'none',marginLeft:'52%'}}>
                <input type="file"
       
       multiple accept="image/*" onChange={onImageChange}/>
       {imageURLs.map(imageSrc=><img src={imageSrc}/>)} 

       </div>




  */

  return (
    <Container fluid className="back" style={{ padding: "0" }}>
      <Row>
        <Col xs={12}>
          <NavBar handleLogout={handleLogout} />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <ProfileCard />
        </Col>
      </Row>
      <Row>
        <Col md={10}>
          <Form
            className="back2"
            style={{
              margin: "10%",
              padding: "20px",
              border: "4px solid white",
              borderRadius: "24px",
              width: "100%",
            }}
          >
            <Row>
              <Col md={6} className=" mb-4">
                <input
                  type="text"
                  id="fname"
                  className="inputs"
                  name="firstname"
                  value={user.firstname}
                  placeholder="firstname"
                  onChange={handleChange}
                ></input>
              </Col>
              <Col md={6} className=" mb-4">
                <input
                  type="text"
                  id="fname"
                  className="inputs"
                  name="lastname"
                  value={user.lastname}
                  onChange={handleChange}
                  placeholder="lastname"
                ></input>
              </Col>
            </Row>
            <Row className="mt-3">
              <input
                type="date"
                id="fname"
                className="inputs"
                name="dob"
                value={user.dob}
                placeholder="dob"
                onChange={handleChange}
              ></input>

              <input
                type="text"
                id="fname"
                className="inputs mt-3 mb-2"
                name="email"
                placeholder=" Change email"
                onChange={handleMail}
              ></input>
              <IoArrowForwardCircle onClick={changeMail} />
            </Row>

            <Row className="mt-3">
              <input
                type="password"
                id="fname"
                className="inputs mb-2"
                name="password"
                placeholder=" Change password"
                onChange={handlePass}
              ></input>
              <IoArrowForwardCircle onClick={changePass} />

              <input
                type="text"
                id="fname"
                className="inputs mt-3 mb-2"
                name="number"
                value={user.number}
                placeholder="number"
                onChange={handleChange}
              ></input>
              <AiFillDelete onClick={deleteMe} />
            </Row>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}
