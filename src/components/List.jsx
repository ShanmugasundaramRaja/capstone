import React from "react"
import { ListGroup,Modal,Button } from "react-bootstrap"
import {MdEdit,MdDelete} from "react-icons/md"
import { useState } from "react";
import ModalS from "./ModalS";

export default function List(props){
    const [lgShow, setLgShow] = useState(false)
    const [lgShowD, setLgShowD] = useState(false);
    const [lgShowE, setLgShowE] = useState(false);
  
    return(
<ListGroup as="ol" >
      <ListGroup.Item
        as="li"
        className="d-flex list justify-content-between align-items-start"
      >
        <div className="ms-2 ">
          <div className="fw-bold">{props.name}</div>
          
        </div>
        <div className="ms-2 ">
            
            </div>
        <div>
        <button className="butciredit" onClick={() => setLgShowE(true)}><MdEdit/></button>
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Edit plans
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <ModalS/>
        </Modal.Body>
        <Button variant="success">Submit</Button>
      </Modal>
      <Modal
        size="lg"
        show={lgShowE}
        onHide={() => setLgShowE(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Edit plans
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <ModalS/>
        </Modal.Body>
        <Button variant="info">Submit</Button>
      </Modal>
      <Modal
        size="lg"
        show={lgShowD}
        onHide={() => setLgShowD(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Delete plans
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <ModalS/>
        </Modal.Body>
        <Button variant="danger">Submit</Button>
      </Modal>
      <button onClick={() => setLgShowD(true)} className="ml-2 butcirdel"><MdDelete/></button>
      

        </div>
       
      </ListGroup.Item>
      
    </ListGroup>
    )
}