import React from "react";
import {Row, Col, Container} from 'react-bootstrap';
import Navbar from "./Navbar";
import Footer from './Footer';
import {FaGithub, FaFilePdf, FaLinkedin } from "react-icons/fa";









function Contact() {
    return (
        <div className="container">
        <Container fluid="md" className="vertical">
        <Navbar />
          <Row>
           <Col xs="1"></Col>
           <Col xs="10" className="bio">
              <p className="contactinfo"> Thanks for checking out my portfilio.</p>
              <p className="contactinfo mb-5">Check out the links below for more information.</p>
              <div className="contactinfo ">

                  <div className="icon ">
                    <a href="Resume.pdf">
                    <FaFilePdf  size="2em" color="red" /> Resume
                    </a>
                  </div>
                  <div className="icon ">
                    <a href="https://github.com/vsomsouk">
                    <FaGithub size="2em" color="black" /> GitHub
                  </a>
                  </div>
                  <div className="icon ">
                    <a href="https://www.linkedin.com/in/vanida-somchaleunsouk">
                    <FaLinkedin size="2em" color="blue" /> LinkedIn
                  </a>
                  </div>
              </div>
           </Col>
           <Col xs="1"></Col>
          </Row>

        </Container>
        <Footer/>
        </div>


    );
  }
  
  export default Contact;
  