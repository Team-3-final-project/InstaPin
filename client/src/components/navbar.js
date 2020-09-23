import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";
import Form from "react-bootstrap/Form";
import _ from "lodash";
import {Link} from 'react-router-dom';
import Dropdown from 'react-bootstrap/esm/Dropdown';

export default function NavbarProfile() {
  const history = useHistory();
  const goLogin = () => {
    history.push("/login");
  };
  const goRegis = () => {
    history.push("/register");
  };

  const goLogout = () => {

  }
  const inputLodash = _.debounce((e) => {
    if (e.length > 2) history.push(`/${e}`);
  }, 1000);

  if (localStorage.access_token) {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="navbar">
        <Link to="/">
          <Navbar.Brand className="ml-2" style={{fontWeight: 800, fontSize: "30px"}}>InstaPin.</Navbar.Brand>
        </Link>
        <Form onSubmit={e => e.preventDefault}>
        <Form.Group
            controlId="exampleForm.ControlInput1"
            className="shadow-sm rounded-pill"
          >
            <Form.Control
              onChange={(e) => inputLodash(e.target.value)}
              className="rounded-pill"
              type="text"
              placeholder="Search username..."
            />
          </Form.Group>
        </Form>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Link to="/favorites/posts">
              <Button
                variant="outline-dark"
                style={{fontWeight: 700, marginRight: '10px'}}
                className="ml-3 rounded-pill shadow-sm">
                  Favorites
              </Button>
            </Link>
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
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="navbar d-flex"
    >
      <Navbar.Brand
        onClick={() => history.push(`/`)}
        className="ml-2"
        style={{ fontWeight: 800, fontSize: "30px"}}
      >
        InstaPin.
      </Navbar.Brand>
      <Form onSubmit={e => e.preventDefault}>
        <Form.Group
          controlId="exampleForm.ControlInput1"
          className="shadow-sm rounded-pill"
        >
          <Form.Control
            onChange={(e) => inputLodash(e.target.value)}
            className="rounded-pill"
            type="text"
            placeholder="Search username..."
          />
        </Form.Group>
      </Form>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav>
          <Button
            onClick={() => goLogin()}
            variant="outline-dark"
            style={{ fontWeight: 700 }}
            className="rounded-pill shadow-sm"
          >
            Login Here
          </Button>
          <Button
            onClick={() => goRegis()}
            variant="dark"
            style={{ fontWeight: 700 }}
            className="ml-3 rounded-pill shadow-sm"
          >
            Register Here
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
