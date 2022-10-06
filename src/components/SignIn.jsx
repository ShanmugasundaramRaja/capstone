
    

    import React from "react"
import { Row,Col,Container,Form } from "react-bootstrap"
import Image from 'react-bootstrap/Image'
import '../styles/signin.css';
import { Link } from "react-router-dom";



   

    
    export default function SignIn({handleAction,handleChange,user}){

      
      
      return(
        <section className="vh-100">
        <Container fluid>
          <Row>
            <Col md={6}>
      
              <div className="px-5 ms-xl-4 my-4 out">
                
                
                    <div className="bigc"></div>
                    <div className="smallc my-5"></div>
                    <div className="h1 fw-bold ">Globetrotter</div>
                          
              
              </div>
      
              
      
                

                
       
              <Row style={{marginTop:'100px'}}>
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
                        
                         
                         
                 
                    
                    <div className="pt-1 mb-4">
                     
                    <button style={{borderRadius:'24px'}} className="btn btn-block"  onClick={handleAction}>Login</button>
                    
                  </div>
                    
                    
      
                  <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Forgot password?</a></p>
                  <p>Don't have an account? <Link to="/signup"><a href="#!" className="link-info">Register here</a></Link></p>
      
               
      
              
      
            </Col>
            <Col md={6} className=" px-0 d-none d-md-block">
              <Image src="https://artstore.house/wp-content/uploads/2018/04/Tavla-Santorini-50x70cm.jpg"
                alt="Login image" className="w-100 vh-100 imag" />
            </Col>
            </Row>
        </Container>
      </section>

      )

    }
   
   

