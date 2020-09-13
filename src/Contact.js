import React from "react";
import {Row, Col, Container} from 'react-bootstrap';
import Navbar from "./Navbar";
import Footer from './Footer';
import {FaGithub, FaFilePdf, FaLinkedin, FaPhoneAlt, FaEnvelope } from "react-icons/fa";





function Contact() {
    return (
        <div className="container">
        <Container fluid="md" className="vertical">
        <Navbar />
          <Row>
           <Col xs="1"></Col>
           <Col xs="10" className="bio">
              <p className="contactinfo"> Thanks for checking out my portfilio.</p>
              <p className="check">Check out the links below for more information.</p>
                <div className="contactinfo ">
                  <div className="icon ">
                    <a className="linkcolor" href="Resume.pdf">
                    <FaFilePdf  size="1.5em" color="red" /> Resume
                    </a>
                  </div>
                  <div className="icon ">
                    <a className="linkcolor" href="https://github.com/vsomsouk">
                    <FaGithub size="1.5em" color="black" /> GitHub
                  </a>
                  </div>
                  <div className="icon ">
                    <a className="linkcolor" href="https://www.linkedin.com/in/vanida-somchaleunsouk">
                    <FaLinkedin size="1.5em" color="blue" /> LinkedIn
                  </a>
                  </div>
                  <div className="icon ">
                    <FaPhoneAlt  size="1.5em" color="black" /> (605)521-4510
                  </div>
                  <div className="icon ">
                    <FaEnvelope  size="1.5em" color="white" /> vsomsouk@gmail.com
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
  