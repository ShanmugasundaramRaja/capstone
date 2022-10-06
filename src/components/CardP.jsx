import React from 'react';
import { Card,Button,Row,Col,Container } from 'react-bootstrap';
import {FcLike} from "react-icons/fc"
import {AiFillLike} from "react-icons/ai"
import {BiShare} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"

export default function CardP({src}){
    return(

 

<Container fluid>
<Row>
    <Col xs={12}>
    <Card style={{ width: '23rem',height:'550px' }}>
      <Card.Img variant="top" style={{height:'70%',objectFit:"cover",padding:"10%"}} src={src} />
      <Card.Body>
        <Card.Title>Eiffel Tower <br />Paris</Card.Title>
        <Card.Text>
         9:30 PM
        </Card.Text>
        <div className='d-flex justify-content-between'><div><AiFillDelete/></div><div><FcLike className='mr-2' /><AiFillLike className='mr-2'/><BiShare /></div></div>
      </Card.Body>
    </Card>

</Col>
</Row>

</Container>
    



    )
}