import {React} from "react";
import '../styles/todo.css';
import {Container,Row,Col,Card,Button,InputGroup,Form,Modal,Alert} from "react-bootstrap"
import List from "./List";
import {MdAdd} from 'react-icons/md'
import NavBar from "./NavBar";
import Footer from "./Footer"
import LeftToDo from "./LeftToDo"
import { useState } from "react";
import ModalS from "./ModalS"
import { Link } from "react-router-dom";
import Map from "./Map";



export default function ToDo() {
    const [lgShow, setLgShow] = useState(false);
    const [show, setShow] = useState(false);
    const [showS, setShowS] = useState(false);
  

    return (
        <Container fluid className="back" style={{padding:'0'}}>
            <Row>
                <Col xs={12}>
                    <NavBar/>
                </Col>
            </Row>
            <Row>
                <Col xs={3} style={{height:'100%'}}>
                    <LeftToDo/>
                </Col>
                <Col xs={9}>
                <Card style={{width:'100%'}} className="back2">
      <Card.Img variant="top" src="https://wallpaper.dog/large/17055502.jpg" style={{width:'100%',height:'200px',margin:'0 auto',objectFit:'cover'}} />
      <Card.Body>
        <Card.Title>Paris:Day 1</Card.Title>
        <div>
        <InputGroup className="mb-3 back">
        <Form.Control style={{marginRight:"5px",border:'2px solid black'}}
          placeholder="New plan"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <button onClick={() => setLgShow(true)}><MdAdd/></button>
      </InputGroup>
        </div>
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Add plans
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <ModalS/>
        </Modal.Body>
        <Button variant="success">Submit</Button>
      </Modal>
      <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Alert variant="danger">
      <Alert.Heading>Warning!</Alert.Heading>
      <p>
        Are you sure you want to delete me?
      </p>
      <hr />
      
    </Alert>
        </Modal.Body>
        <Button variant="danger" onClick={() => setShow(false)}>Delete</Button>
      </Modal>
      <Modal
        size="lg"
        show={showS}
        onHide={() => setShowS(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Alert variant="warning">
      <Alert.Heading>Alert!</Alert.Heading>
      <p>
        Successfully saved!
      </p>
      <hr />
      
    </Alert>
        </Modal.Body>
        <Button variant="warning" onClick={() => setShowS(false)}>Save</Button>
      </Modal>
        <Card.Text>
            <List name="Eiffel Tower"/>
            <List name="Louvre Museum"/>
            <List name="Centre de Pompidou"/>

        
        </Card.Text>
        <Button onClick={() => setShowS(true)} className="butcir">Save changes</Button>
        <Button variant="danger" onClick={() => setShow(true)} className="butcir">Discard</Button>
        
       
      </Card.Body>
    </Card>
    <Map />
                
                </Col>
            </Row>
           
            <Row>
                <Col xs={12}>
                    <Footer/>
                </Col>
            </Row>
            
           
        </Container>
        
    )
}
  