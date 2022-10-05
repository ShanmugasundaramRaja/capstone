
    import React from "react"
   
   

  
    import '../styles/signup.css';
    import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { Container, Row, Col, Form } from "react-bootstrap";

    
        export default function SignUp({handleAction,setEmail,setPassword}){

         
        
          return(
          
            
             
            
              <>
              <Container fluid className="back">
                <Row>
                    <Col md={7} classNameName="d-none d-md-block" >
                        <div style={{marginTop:'30%'}} >
                        <h1 className="my-5 display-5 fw-bold ls-tight" style={{color:'rgb(93, 84, 234)'}}>
                      Hello,<br />
                      <span style={{color:'rgb(93, 84, 234)'}}> Globetrotter!</span>
                    </h1>
                    <p className="mb-4 opacity-70" style={{color:'rgb(93, 84, 234)'}}>
                    “Travel is an investment in yourself.”
                    <br />
                    -Unknown

                    </p>
                        </div>
                    
                    </Col>
                    <Col md={5} style={{marginTop:'5%'}}>

                    
                  
            
            
                        <Form className="back2" style={{margin:'10%',padding:'20px',border:'4px solid white',borderRadius:'24px'}} >
                        
                         
                          <Row>
                            <Col md={6} className=" mb-4">
                            <Form.Group className="mb-3" >
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" />
        </Form.Group>
                            </Col>
                            <Col md={6} className=" mb-4">
                            <Form.Group className="mb-3" >
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text"/>
        </Form.Group>
                            </Col>
                          </Row>

                          <Form.Group className="mb-3" >
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control />
        </Form.Group>
            
                        
                          <Form.Group className="mb-3" >
        <Form.Label>E-mail address</Form.Label>
        <Form.Control type="email" onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>
            
                          <Form.Group className="mb-3" >
        <Form.Label>Passsword</Form.Label>
        <Form.Control type="password"  onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
            
                        
                         
                         <button  onClick={handleAction}className="btn btn-block mb-4 " style={{background:'#547EEB',border:'2px solid white',borderRadius:'24px'}}>
                            Sign up
                          </button>
                        
                
                        
            
                     
                          <div className="text-center">
                            <p>or sign up with:</p>
                            <div classNameName="d-flex">
                            <button type="button" className="btn btn-link btn-floating mx-1 icons" >
                              <FaFacebook/>
                            </button>
            
                            <button type="button" className="btn btn-link btn-floating mx-1 icons">
                              <FaGoogle/>
                            </button>
            
                            <button type="button" className="btn btn-link btn-floating mx-1 icons">
                            <FaTwitter/>
                            </button>
            
                            <button type="button" className="btn btn-link btn-floating mx-1 icons">
                              <FaGithub/>
                            </button>
                            </div>
                          </div>
                        </Form>
                        </Col>
                        </Row>
                        </Container>
                        </>
                    
                   
               
          
          )}
