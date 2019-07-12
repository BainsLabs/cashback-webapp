import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MobileLogo from 'static/icons-images/logo-icon.png';
import { faBars } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TopNavbar from './TopNavbar';
import MobileNavBar from './Mobile/MobileNavbar';

const style = {
  icon: {
    float: 'right',
    padding: '1rem',
    color: '#fff',
    fontSize: '1.5rem',
  },
  buttonBackground: {
    background: '#272F3A',
  },
  image: {
    padding: '.5rem',
  },
};

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      cross: false,
    };
    this.navRef = React.createRef();
  }
  MenuOpen = () => {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  };
  render() {
    const { user } = this.props;
    return (
      <>
        <div className="mobile" style={style.buttonBackground}>
          <img src={MobileLogo} alt="mobile__logo" style={style.image} />
          <i className="fas fa-bars" onClick={this.MenuOpen} style={style.icon} />
          <MobileNavBar Open={this.state.open} closeMenu={this.MenuOpen} />
        </div>
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
