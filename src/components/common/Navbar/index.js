import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MobileLogo from 'static/icons-images/logo-icon.png';
import { getContent } from 'redux/actions/contentActions';
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

  async componentDidMount() {
    const { getContent } = this.props;
    const params = {
      lang: 'en',
    };
    await getContent(params);
  }

  MenuOpen = () => {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  };

  render() {
    const { user, content, getContent } = this.props;
    console.log(...content, 'content');

    return (
      <>
        <div className="mobile" style={style.buttonBackground}>
          <img src={MobileLogo} alt="mobile__logo" style={style.image} />
          <i className="fas fa-bars" onClick={this.MenuOpen} style={style.icon} />
          <MobileNavBar Open={this.state.open} closeMenu={this.MenuOpen} />
        </div>
        <TopNavbar content={getContent} />
        <Navbar className="navbar" expand="lg" ref={this.navRef}>
          <Container>
            <Nav className="navbar__list">
              {content.map((con) => {
                // console.log(con, 'con');
                if (con.section === 'menu') {
                  return (
                    <Nav.Item>
                      <Link to={con.path}>{con.content}</Link>
                    </Nav.Item>
                  );
                }
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
};

const mapStateToProps = state => ({
  user: state.User,
  content: state.Content.contentList || [],
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);
