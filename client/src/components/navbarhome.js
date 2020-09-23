import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from "react-bootstrap/Button";
import { useHistory, useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import Dropdown from 'react-bootstrap/esm/Dropdown';

export default function NavbarHome() {
  const history = useHistory()
  const location = useLocation()
  console.log(location.pathname);
  const { access_token } = useSelector( (state) => state.userReducer)
  const goLogin = () => {
    history.push('/login')
  }
  const goRegis = () => {
    history.push('/register')
  }
  const goLogout = () => {
    localStorage.clear()
    history.push('/login')
  }
  if (location.pathname === '/login' || location.pathname === '/register') {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="navbar">
        <Link to='/'>
         <Navbar.Brand className="ml-2" style={{fontWeight: 800, fontSize: "30px"}}>InstaPin.</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />      
      </Navbar>
    )
  }
  if (localStorage.access_token) {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="navbar">
        <Navbar.Brand className="ml-2" style={{fontWeight: 800, fontSize: "30px"}}>InstaPin.</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Dropdown>
              <Dropdown.Toggle 
                style={{fontWeight: 700}}
                className="btn dropdown-toggle rounded-pill shadow-sm"
                variant="outline-dark">
                Welcome, {localStorage.email}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => goLogout()}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>        
      </Navbar>
    )
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="navbar">
      <Navbar.Brand className="ml-2" style={{fontWeight: 800, fontSize: "30px"}}>InstaPin.</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <Nav>
          <Button 
            onClick={() => goLogin()}
            variant="outline-dark" 
            style={{fontWeight: 700}} 
            className="rounded-pill shadow-sm">
              Login Here
          </Button>
          <Button 
            onClick={() => goRegis()}
            variant="dark" 
            style={{fontWeight: 700}} 
            className="ml-3 rounded-pill shadow-sm">
              Register Here
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
