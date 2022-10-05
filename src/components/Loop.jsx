import {React,useState} from "react";
import {Col,Row,Form,Button,FormControl} from "react-bootstrap"
import Cards from "./Cards";



export default function Loop(){

    const [num,setNum]=useState(0)

  function updateBoxes(e) {
  e.preventDefault();
    setNum(e.target.value);

  }

  function getBoxes(){
  var rows=[];
  for(var i=0;i<{num};i++ ){
  rows.push(<Cards/>);
  }
  return rows;
  }
    
    return (
 

        <Col xs={12} sm={8} md={8} lg={8}  >

            

                <Form >

                    <Row>
                      <Col  lg={6}>
                        How many boxes do you want to create?
                      </Col>

                      <Col lg={4}>
                        <FormControl onChange={updateBoxes} placeholder="Enter a number..." />
                      </Col>

                      <Col lg={2}>
                        <Button type="submit">
          Submit
                        </Button>
                      </Col>
                    </Row>

                </Form>

{getBoxes}
            

        </Col>

    
    );
  }
