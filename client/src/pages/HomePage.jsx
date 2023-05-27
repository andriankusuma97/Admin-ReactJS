import React from 'react'
import {Button, Container, Row,Col} from 'react-bootstrap';

function HomePage() {
  return (
    <Container fluid  className='bg-success vh-100'>
      <Row className='vh-100'>
        <Col sm={3} className="justify-content-center align-items-center bg-light border border-2" >
       
        <Row className='bg-success justify-content-center'>
        sm=8 
        
        </Row>
        </Col>
        <Col sm={9} className="bg-light border border-2">
        <Row className="p-2 py-3 bg-light border border-2">
          Header
        </Row>
        <Row className=" justify-content-center align-items-center p-2 h-75 bg-light border border-2">
          Content
        </Row>
        <Row className="p-2 py-3 bg-light border border-2">
          Footer
        </Row>

        </Col>
      </Row>
   
    </Container>
  )
}

export default HomePage