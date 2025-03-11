// components/AppNavbar.js

import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Logo from '../assets/logo.svg'; // Ensure this path is correct!

const AppNavbar = () => (
  <Navbar variant="dark" bg="dark" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#home" className="text-light">
        <img
          alt="Logo"
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        Thalassa
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-dark" />
      <Navbar.Collapse id="navbar-dark" className="justify-content-end">
        <Nav>
          <NavDropdown
            id="nav-dropdown-dark-example"
            title="Test User"
            menuVariant="dark"
          >
            <NavDropdown.Item href="#action/3.2">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Products</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default AppNavbar;