import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TopNavbar from './TopNavbar';

export default () => (
  <>
    <TopNavbar />
    <Navbar className="navbar" expand="lg">
      <Container>
        <Nav className="navbar__list">
          <Nav.Item>
            <Link to="/categories">Shop Categories</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/categories">How Cashback Works</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/categories">Refer a Friend</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/categories">VIP Beifits</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/categories">My Account</Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  </>
);
