
import React from 'react';
import { Button, Container } from 'react-bootstrap';

const Landingpage = () => {
  return (
      <Container>
        <h1>Welcome to My Demo Home Page</h1>
        <p>Learn more about React!</p>
                <Button variant="light" href="#about">
                  Learn More
                  </Button>
      </Container>
  );
};

export default Landingpage;
