
    import React from "react"
   
   

  
    import '../styles/signup.css';
    import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { Container, Row, Col, Form } from "react-bootstrap";

    
        export default function SignUp({handleAction,handleChange,user}){

         
        
          return(
          
            
             
            
              <>
              <Container fluid className="back" style={{height:'100vh'}}>
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
                    <Col md={5} >

                    
                  
            
            
                        <div className="back2" style={{margin:'5%',padding:'20px',border:'4px solid white',borderRadius:'24px'}} >
                        
                         
                          <Row>
                            <Col  className=" mb-4 d-flex flex-column">
                            <label for="fname">First Name</label>
          
                            <input type="text" id="fname" className="inputs" name="firstname"   placeholder="firstname"  onChange={handleChange} ></input>
                            </Col>
                           
                          </Row>
                          <Row>
                          <Col  className=" mb-4 d-flex flex-column">
                            <label for="lname">Last Name</label>
                            <input type="text" id="lname" name="lastname"  className="inputs"  placeholder="lastname"  onChange={handleChange} ></input>
       
                            </Col>

                          </Row>
                          <Row>
                          <Col  className=" mb-4 d-flex flex-column">
                          
                          <label for="dob">Date of birth</label>
                          <input type="date" id="dob" name="dob" className="inputs" value={user.dob}  placeholder="date of birth" onChange={handleChange} ></input>
                          </Col>
                          </Row>
            
                          <Row>
                          <Col  className=" mb-4 d-flex flex-column">
                          <label for="email">Email</label>
        <input type="email" id="email" name="email" value={user.email} className="inputs"   placeholder="email" onChange={handleChange}></input>
       </Col>
       </Row>
       <Row>
                          <Col  className=" mb-4 d-flex flex-column">
            
                          
        <label for="password">Password</label>
        <input type="password" name="password" value={user.password} className="inputs"   placeholder="password" onChange={handleChange}></input>
       
            </Col>
            </Row>
                        
                         
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
                        </div>
                        </Col>
                        </Row>
                        </Container>
                        </>
                    
                   
               
          
          )}
