import React from 'react';
import TopNavbar from './TopNavbar';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container
} from 'react-bootstrap';

export default () => (
  <>
    <TopNavbar />
    <Navbar className="navbar" expand="lg">
      <Container>
        <Nav className="navbar__list">
          <Nav.Link href="#home">Shop Categories</Nav.Link>
          <Nav.Link href="#link">How Cashback Works</Nav.Link>
          <Nav.Link href="#link">Refer a Friend</Nav.Link>
          <Nav.Link href="#link">VIP Beifits</Nav.Link>
          <Nav.Link href="#link">My Account</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </>
);
