import React from "react"
import { Container,Form } from "react-bootstrap"



export default function LeftSideBar(){

    let search;

    function target(e){
        search=e.target.value;
        console.log(search)
    }


  

    return(
<Container fluid  className=" pt-3 pb-2 back2" style={{height:'100%'}}>

<div className="form-outline mb-2">
  <Form>
  <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Country</Form.Label>
        <Form.Control style={{borderRadius:'24px'}} type="text" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>City</Form.Label>
        <Form.Control style={{borderRadius:'24px'}} type="text" placeholder="City" />
      </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Arrival</Form.Label>
        <Form.Control style={{borderRadius:'24px'}} type="date" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Departure</Form.Label>
        <Form.Control style={{borderRadius:'24px'}} type="date" placeholder="Departure" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Days of stay</Form.Label>
        <Form.Control style={{borderRadius:'24px'}} type="number" placeholder="Stay(D/N)" />
      </Form.Group>
      <div className="pt-1 mb-2">
                    <button className="btn  btn-lg btn-block"style={{border:"solid 2px white",borderRadius:"24px",background:"#A4D4FB"}} type="button">Submit</button>
                  </div>
                  </Form>

                  
                  </div>
                 
 
                  
                  
                  
                 
 
 
 


</Container>


    )
}