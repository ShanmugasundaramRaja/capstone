import {React} from "react"
import {Col,Row,Form,Container,InputGroup,Modal,Button} from "react-bootstrap"
import { useState} from "react";

import ProfileCard from "./ProfileCard";

import NavBar from "./NavBar";
import Footer from "./Footer"


export default function User(){

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

    return(
<Container fluid className="back" style={{padding:'0'}} >
    <Row>
        <Col xs={12}>
            <NavBar/>
        </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <ProfileCard/>
      </Col>
    </Row>
       <Row>

        

        <Col md={10} >

       

                    
                  
            
            
        <Form className="back2" style={{margin:'10%',padding:'20px',border:'4px solid white',borderRadius:'24px',width:'100%'}} >
        
         
          <Row>
            <Col md={6} className=" mb-4">
            <InputGroup className="mb-3">
        
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <InputGroup.Text id="basic-addon1"  onClick={handleShow}>Edit</InputGroup.Text>
      </InputGroup>
            </Col>
            <Col md={6} className=" mb-4">
            <InputGroup className="mb-3">
        
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <InputGroup.Text id="basic-addon1" onClick={handleShow}>Edit</InputGroup.Text>
      </InputGroup>
            </Col>
          </Row>

          <InputGroup className="mb-3">
        
        <Form.Control
          placeholder="Date of birth"
          aria-label="Username"
          aria-describedby="basic-addon1"
          type="date"
        />
        <InputGroup.Text id="basic-addon1"  onClick={handleShow}>Edit</InputGroup.Text>
      </InputGroup>

<InputGroup className="mb-3">
        
        <Form.Control
          placeholder="Email address"
          aria-label="Username"
          aria-describedby="basic-addon1"
          type="email"
        />
        <InputGroup.Text id="basic-addon1"  onClick={handleShow}>Edit</InputGroup.Text>
      </InputGroup>

      <InputGroup className="mb-3">
        
        <Form.Control
          placeholder="Password"
          aria-label="Username"
          aria-describedby="basic-addon1"
          type="password"
        />
        <InputGroup.Text id="basic-addon1"  onClick={handleShow}>Change</InputGroup.Text>
      </InputGroup>
      <InputGroup className="mb-3">
        
        <Form.Control
          placeholder="Contact number"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <InputGroup.Text id="basic-addon1"  onClick={handleShow}>Edit</InputGroup.Text>
      </InputGroup>
       
        </Form>
        </Col>
        </Row>
        <Row>
        <Col xs={12}>
            <Footer/>
        </Col>
    </Row>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Old Value</Form.Label>
              <Form.Control
                type="email"
                placeholder="Old value"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>New Value</Form.Label>
              <Form.Control
                type="email"
                placeholder="New Value"
                autoFocus
              />
            </Form.Group>
            
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        
        </Container> 
        
    
    )
}