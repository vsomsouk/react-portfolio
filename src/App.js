import React from 'react';
import './App.css';
import Navbar from "./Navbar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Row, Col, Container, Image} from 'react-bootstrap';
import Project from './Project';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/project" component={Project} />
        </Switch>
      </div>
    </Router>
  )
}

const About = () => (
  <div className="container">
  <Container fluid="md" className="vertical">
  <Navbar />
    <Row>
     <Col xs="1"></Col>
     <Col xs="10" className="bio">
       <Image className="vanida" md={4} roundedCircle fluid src="bioimg.jpg" width="300"></Image>
       <Row className="paragraph">
     <p>Hi there! My name is Vanida, and I am currently a full stack web development student at U of M Coding Boot Camp.
     I am also a Project Support Specialist for a medical products company.
     I graduated from Minnesota State University, Mankato with Bachelor's Degree of Science in Parks, Recreation & Leisure Services - Program Management.</p>
     <p>I started my career in the events industry utilizing my program management skills. I always had an interest in technology, so I decided to make a change in my career path and dive into web development.</p>
     </Row>
     </Col>
     <Col xs="1"></Col>
    </Row>
  </Container>
  </div>
);

export default App;
