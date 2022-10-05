import React from "react";
import { Card,Button,Collapse} from "react-bootstrap";
import { useState } from "react";
import {GrAdd} from "react-icons/gr"
import { Link } from "react-router-dom";


export default function Cards(props){
  const [open, setOpen] = useState(false);


    return(
      





   
    <Card style={{ width: '22rem',height:'500px'}}>
      <Card.Img variant="top" style={{height:'70%',objectFit:"cover",outline:'none'}} src={props.img} />
      <Card.Body className="back2">
        <Card.Title>Day {props.day} <br />{props.place}</Card.Title>
        <Card.Text>
        <Button 
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        style={{background:'lightblue',outline:'none'}}

        
      >
        <GrAdd/>
        </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
         For further details click <Link to="/todo">here</Link>
        </div>
      </Collapse>
        </Card.Text>
       
      </Card.Body>
    </Card>









    )
}