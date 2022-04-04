import React from 'react';
import '../media/styles/home.css';
import Hero from '../components/Hero';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Storefront = () => {
  return (
    <>
      <Hero />
      <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
        <div>Your app...</div>
        <Container>
          <Row className="mx-0">
            <Button as={Col} variant="primary">
              Button #1
            </Button>
            <Button as={Col} variant="secondary" className="mx-2">
              Button #2
            </Button>
            <Button as={Col} variant="success">
              Button #3
            </Button>
          </Row>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Storefront;
