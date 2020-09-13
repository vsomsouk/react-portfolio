import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';



function Footer(){
    return (
        <div className="footer">
        <Container>
          <Row>
           <Col xs="0"></Col>
           <Col xs="12" className="footer mr-1 ml-1" color="white">
                Vanida @ 2020
           </Col>
           <Col xs="0"></Col>
          </Row>
        </Container>
        </div>
    );
};


export default Footer;