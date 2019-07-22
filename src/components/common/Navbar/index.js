/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getContent } from 'redux/actions/contentActions';
import { sidebarState } from 'redux/actions/sidebarActions';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MobileNavBar from './Mobile/MobileNavbar';
import TopNavbar from './TopNavbar';

const style = {
  buttonBackground: {
    background: '#272F3A',
    width: '100%',
    height: '3rem',
    padding: '0.5rem 0rem',
  },
};

class NavBar extends Component {
  render() {
    // eslint-disable-next-line no-unused-vars
    const {
      user, content, sidebarState, sidebar, getContent,
    } = this.props;
    return (
      <>
        <div className="mobile" style={style.buttonBackground}>
          <MobileNavBar Open={sidebar} closeMenu={sidebarState} />
        </div>
        <TopNavbar content={getContent} />
        <Navbar className="navbar" expand="lg">
          <Container>
            <Nav className="navbar__list">
              {content.map((con) => {
                if (con.section === 'menu') {
                  return (
                    <Nav.Item>
                      <Link to={con.path}>{con.content}</Link>
                    </Nav.Item>
                  );
                }
                return null;
              })}
              {/* <Nav.Item>
                <Link to="/categories">Shop Categories</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/how-cashback-works">How Cashback Works</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/refer-friend">Refer a Friend</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/categories">VIP Benifits</Link>
              </Nav.Item> */}
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

const mapDispatchToProps = {
  getContent,
  sidebarState,
};

const mapStateToProps = state => ({
  user: state.User,
  content: state.Content.contentList || [],
  sidebar: state.Sidebar.open,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);
