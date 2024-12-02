
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {


  const showAlert = () => {
    alert('Welcome to the Demo Home page!');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" onClick={showAlert}>
      <Container>
        <Navbar.Brand href="#home">My Demo Home Page</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
