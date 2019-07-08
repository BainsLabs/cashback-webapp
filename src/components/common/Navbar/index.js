import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TopNavbar from './TopNavbar';

class NavBar extends Component {
  render() {
    const { user } = this.props;
    return (
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
                <Link to="/refer-friend">Refer a Friend</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/categories">VIP Beifits</Link>
              </Nav.Item>
              {user.authenticated ? (
                <Nav.Item>
                  <Link to="/categories">My Account</Link>
                </Nav.Item>
              ) : (
                ''
              )}
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: state.User,
});

export default connect(
  mapStateToProps,
  null,
)(NavBar);
