import React from "react";
import {Row, Col, Container, Image} from 'react-bootstrap';
import Navbar from "./Navbar";




function Contact() {
    return (
        <div className="container">
        <Container fluid="md" className="vertical">
        <Navbar />
          <Row>
           <Col xs="1"></Col>
           <Col xs="10" className="bio">
             Add the contacts in hereeee


           </Col>
           <Col xs="1"></Col>
          </Row>
        </Container>
        </div>
    );
  }
  
  export default Contact;
  