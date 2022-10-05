import React from 'react';
import {Row,Col,Container,Button } from 'react-bootstrap';
import CardP from './CardP';
import NavBar from './NavBar';
import {GiCarousel} from "react-icons/gi"
import { Link } from 'react-router-dom';
import Footer from './Footer'

export default function Carouse(){
    return(

 

<Container fluid style={{padding:'0'}} className="back">
    <NavBar/>
    <Row>
        <Col xs={12}>
            <Container fluid style={{width:'100%',height:'200px'}}>

              <Link to="/car"><Button className='mt-5 back2'  style={{borderRadius:'24px',color:'blue'}}><GiCarousel />  Start slideshow</Button></Link> 

            </Container>
            </Col>
    </Row>
<Row>
    <Col xs={12} className="d-flex back2  mt-5 ml-5">
        <CardP src="https://www.travelandleisure.com/thmb/xyyOmec2yAqPGBcN-Y2FLfFadu0=/1600x1000/filters:fill(auto,1)/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg"/>
        <CardP src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1200px-Plus_symbol.svg.png"/>
        <CardP src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1200px-Plus_symbol.svg.png"/>
        </Col>
        </Row>
        <Row>
    <Col xs={12} className="d-flex back2 ml-5  mt-5">
        <CardP src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1200px-Plus_symbol.svg.png"/>
        <CardP src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1200px-Plus_symbol.svg.png"/>
        <CardP src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1200px-Plus_symbol.svg.png"/>
        </Col>
        </Row>
        <Footer/>
     

</Container>
    



    )
}