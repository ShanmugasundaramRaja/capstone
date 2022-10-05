import React from "react"
import { Form,Container,Row,Col } from "react-bootstrap";
import { GrFormAdd} from "react-icons/gr";
import '../styles/Form.css';

import { useState } from "react"


export default function FormSample(){

    const [user,setUser]=useState(
        {
            name:'',
            lastname:'',
            age:'',
            email:''
        }
    );
   
      const handleChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
      };
    return(
        
        <Container>
            <Row>
                <Col xs={12}>

            
        <Form style={{width:'50%',margin:'0 auto'}}>
      <Form.Group classNameNameName="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" style={{color:'black'}} name="name" value={user.name} onChange={handleChange} />
        </Form.Group>
        <Form.Group classNameNameName="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" style={{color:'black'}} name="lastname" value={user.lastname} onChange={handleChange} />
        </Form.Group>
        <Form.Group classNameNameName="mb-3" controlId="formBasicEmail">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" style={{color:'black'}} name="age" value={user.age} onChange={handleChange} />
        </Form.Group>
        <Form.Group classNameNameName="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="text" style={{color:'black'}} name="email" value={user.email} onChange={handleChange} />
        </Form.Group>
        
        
        
        
     
        </Form>
        </Col>
        </Row>

        <Row><Col><h1>My name is{user.name} {user.lastname}</h1>
        <h1>I am {user.age} and my email address is {user.email}</h1></Col></Row>
        <Row>
           <Col>
           <div classNameName="app">
  <h4 classNameName="mb-3">TODO App</h4>

  <div id="addNew" data-bs-toggle="modal" data-bs-target="#form">
    <span>Add New Task</span>
<GrFormAdd className="faPlus"/>
</div>
<h5 className="text-center my-3">Tasks</h5>

<div id="tasks"></div>

</div>
<form
  className="modal fade"
  id="form"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Add New Task</h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div className="modal-body">
        <p>Task Title</p>
        <input type="text" className="form-control" name="" id="textInput" />
        <div id="msg"></div>
        <br />
        <p>Due Date</p>
        <input type="date" className="form-control" name="" id="dateInput" />
        <br />
        <p>Description</p>
        <textarea
          name=""
          className="form-control"
          id="textarea"
          cols="30"
          rows="5"
        ></textarea>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
          Close
        </button>
        <button type="submit" id="add" className="btn btn-primary">Add</button>
      </div>
    </div>
  </div>
</form>

           
           </Col> 
           </Row>
       
        


      
        

        </Container>
        
    
    )}