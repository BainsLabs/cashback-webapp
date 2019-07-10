import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { faBars } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TopNavbar from './TopNavbar';
import MobileNavBar from './MobileNavbar';

const style = {
  icon: {
    float: 'right',
    padding: '1rem',
    color: 'white',
    fontSize: '1.5rem',
  },
};

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.navRef = React.createRef();
  }
  MenuOpen = () => {
    this.setState({
      open: !this.state.open,
    });
    console.log(this.state);
  };
  render() {
    const { user } = this.props;
    return (
      <>
        <i class="fas fa-bars" onClick={this.MenuOpen} style={style.icon} />

        <TopNavbar />
        <Navbar className="navbar" expand="lg" ref={this.navRef}>
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
        </Navbar>
        <MobileNavBar Open={this.state.open} closeMenu={this.MenuOpen} />
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
