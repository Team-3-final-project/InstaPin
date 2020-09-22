import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from "react-bootstrap/Button";

export default function NavbarHome() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="navbar">
      <Navbar.Brand className="ml-2" style={{fontWeight: 800, fontSize: "30px"}}>InstaPin.</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <Nav>
          <Button variant="outline-dark" style={{fontWeight: 700}} className="rounded-pill shadow-sm">Login Here</Button>
          <Button variant="dark" style={{fontWeight: 700}} className="ml-3 rounded-pill shadow-sm">Register Here</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
