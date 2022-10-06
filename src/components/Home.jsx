import { Container,Row,Col,Form} from "react-bootstrap";
import {React} from "react";
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import { useNavigate } from 'react-router-dom'

import Cards from "./Cards.jsx";
import { useState } from "react";
import { useEffect } from "react";


export default function Home(){
  const handleLogout = () => {
    sessionStorage.removeItem('Auth Token');
    navigate('/signin')
}

let navigate = useNavigate();
useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (authToken) {
        navigate('/home')
    }

    if (!authToken) {
        navigate('/')
    }
}, [])


    
    const [days, setDays] = useState([]);
    const [cit,setCit]=useState()
    let num;
    let city;
   

    function handleChange(e){
num=e.target.value
console.log(num)


    }
    function handleCity(e){
       
        city=e.target.value
        console.log(city)
        
        
        
            }

    function handleSubmit(e){
        e.preventDefault();
        setCit(city)
for(var i=0;i<num;i++){
   setDays(current=>[...current,num])
}
    }



    return(
<Container fluid style={{padding:0,width:'100vw'}} >
<Row>
<Col xs={12}  >
    {<NavBar handleLogout={handleLogout}/>}


</Col>
</Row>

<Container fluid className="d-flex back" style={{padding:'0'}}>
    <Col xs={3} style={{padding:'0'}}>
    <Container fluid  className=" pt-3 pb-2 back2" style={{height:'100%'}}>

<div className="form-outline mb-2">
  <Form>
  <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Country</Form.Label>
        <Form.Control style={{borderRadius:'24px'}} type="text" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>City</Form.Label>
        <Form.Control style={{borderRadius:'24px'}} type="text" placeholder="City" value={cit} onChange={handleCity} />
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
        <Form.Control style={{borderRadius:'24px'}} type="text" placeholder="Stay(D/N)" value={num} onChange={handleChange} />
      </Form.Group>
      <div className="pt-1 mb-2">
                    <button className="btn  btn-lg btn-block"style={{border:"solid 2px white",borderRadius:"24px",background:"#A4D4FB"}} type="button" onClick={handleSubmit}>Submit</button>
                    
                  </div>
                  </Form>

                  
                  </div>
                 
 
                  
                  
                  
                 
 
 
 


</Container>
        
    </Col>
    <Col xs={9} className="d-flex flex-wrap justify-content-between align-items-center" style={{padding:'15px'}}>
    {days.map(( index) => {
          return (
            
             <Cards day={index} place={cit} img="https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900"/>
          
          );
        })}
       
      
        
    </Col>

</Container>





<Row>
<Col xs={12} >
    {<Footer/>}


</Col>

</Row>

</Container>



    )
}