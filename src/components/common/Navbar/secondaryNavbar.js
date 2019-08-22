import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default (props) => {
  const { user } = props;
  return (
    <Navbar className="navbar" expand="lg">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Container>
          <Nav className="navbar__list">
            <Nav.Item>
              <Link to="/categories">Shop Categories</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/how-cashback-works">How Cashback Works</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/refer-friend">Refer a Friend</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/categories">VIP Beifits</Link>
            </Nav.Item>
            {user.authenticated ? (
              <Nav.Item>
                <Link to="/categories">My Account</Link>
              </Nav.Item>
            ) : null}
          </Nav>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
};
