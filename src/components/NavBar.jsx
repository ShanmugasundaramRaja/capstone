import React from "react";
import { Container,Nav,Navbar,NavDropdown } from "react-bootstrap";
import '../styles/Home.css';
import { BsFillBellFill } from "react-icons/bs";
import {FaGlobeAmericas,FaRegEnvelope,FaHome} from "react-icons/fa"
import {Link} from "react-router-dom"

export default function NavBar(){
    return(
        <Nav className="navbar navbar-expand-lg back2" style={{color:'black'}}>

  <Container fluid>
   
    <a className="navbar-brand" href="#">Globetrotter</a>


  

    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav me-auto d-flex flex-row mt-3 mt-lg-0">
        <li className="nav-item text-center mx-2 mx-lg-1">
          <a className="nav-link active" aria-current="page" href="#!">
            <div>
              <Link to="/home"> <FaHome classNameName="mb-1"></FaHome></Link>
           
            </div>
            Home
          </a>
        </li>
       
        
      
      </ul>
      
      <ul className="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
       
        <li className="nav-item text-center mx-2 mx-lg-1">
          
          <a className="nav-link" href="#!">
            <div>
            <Link to="/images">
              <FaGlobeAmericas classNameName="mb-1"></FaGlobeAmericas> </Link>
             
            </div>
           Photos
          </a>
         
        </li>
      </ul>
     
      
                
      <img src="https://staudt-gmbh.com/wp-content/uploads/2018/07/person-dummy.jpg" className="rounded-circle" style={{height:"42px",marginLeft:"80%"}} alt=""
                  loading="lazy" />
             <Navbar.Collapse id="navbar-dark-example" >
          <Nav  >
            <NavDropdown 
           
              
              
            >
              
            
              <Link to="/user"><NavDropdown.Item className="back2" href="#action/3.2">
                User info
              </NavDropdown.Item></Link>
          
           
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
            </div>
    

     
      <Link to="/"> <button classNameName="btn ml-2 p-3" type="button" style={{border:"1px solid white",borderRadius:'24px',background:'transparent'}} >
          Sign out
        </button></Link>
       
     
    

  </Container>

</Nav>


    )
}
