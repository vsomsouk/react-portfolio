import React from "react";
import {Nav} from 'react-bootstrap';


function Navbar() {
  return (
    <Nav className="navbar">
      <Nav.Link href="/" className="nav-link aboutlink" >ABOUT ME</Nav.Link>
      <Nav.Link href="/Project" className="nav-link projectlink" >PROJECTS</Nav.Link>
      <Nav.Link href="/Contact" className="nav-link contactlink" >CONTACT</Nav.Link>
    </Nav>
  );
}

export default Navbar;
