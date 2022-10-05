import React from "react"
import {Form,InputGroup} from "react-bootstrap"

export default function ModalInput(props){
return(
    <InputGroup className="mb-3">
    <Form.Control
      placeholder={props.place}
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Text id="basic-addon2">Points</InputGroup.Text>
  </InputGroup>
 
)
}