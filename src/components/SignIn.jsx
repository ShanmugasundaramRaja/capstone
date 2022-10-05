
    

    import React from "react"
import { Row,Col,Container,Form } from "react-bootstrap"
import Image from 'react-bootstrap/Image'
import '../styles/signin.css';



   

    
    export default function SignIn({setEmail,setPassword,handleAction}){

      
      
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
      
              <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
      
                <Form style={{width:"33rem"}}>
      
                  <h3 className="fw-normal mb-3 pb-3" >Log in</h3>
      
                  <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text"  onChange={(e) => setEmail(e.target.value)}style={{borderRadius:"24px"}}/>
        </Form.Group>
      
                  <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  onChange={(e) => setPassword(e.target.value)}style={{borderRadius:"24px"}} />
        </Form.Group>
      
                 
                    
                    <div className="pt-1 mb-4">
                     
                    <button style={{borderRadius:'24px'}} className="btn btn-block"  onClick={handleAction}>Login</button>
                  </div>
                    
                    
      
                  <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Forgot password?</a></p>
                  <p>Don't have an account? <a href="#!" className="link-info">Register here</a></p>
      
                </Form>
      
              </div>
      
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
   
   

