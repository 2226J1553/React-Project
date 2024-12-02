import React from "react";
import { Container, Row, Col } from 'react-bootstrap'; 
const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <Container>
        <Row>
          <Col>
            <p> MY DEMO HOME PAGE</p>
            <p>Welcoming you!</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
