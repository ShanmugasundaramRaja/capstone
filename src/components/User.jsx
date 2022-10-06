import {React} from "react"
import {Col,Row,Form,Container,InputGroup,Modal,Button} from "react-bootstrap"
import { useState} from "react";

import ProfileCard from "./ProfileCard";

import NavBar from "./NavBar";
import Footer from "./Footer"


export default function User({user}){



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
           
          
                            <input type="text" id="fname" className="inputs" name="firstname" value={user.firstname}   placeholder="firstname" onClick={handleShow}  ></input>
     
            </Col>
            <Col md={6} className=" mb-4">
            <input type="text" id="fname" className="inputs" name="lasttname" value={user.lastname}   placeholder="lasttname" onClick={handleShow}  ></input>
     
            </Col>
          </Row>
          <Row className="mt-3">
          
            <input type="date" id="fname" className="inputs" name="dob" value={user.dob}   placeholder="dob" onClick={handleShow}   ></input>
           
         
         <input type="text" id="fname" className="inputs mt-3" name="email" value={user.email}   placeholder="email" onClick={handleShow}  ></input>
         
          
          </Row>

          

      
     <Row className="mt-3">
   
      <input type="password" id="fname" className="inputs" name="password" value={user.password}   placeholder="password" onClick={handleShow}  ></input>
     
      <input type="text" id="fname" className="inputs mt-3" name="number" value={user.number}   placeholder="number" onClick={handleShow}  ></input>

  

      </Row>

     
     
      
     
       
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