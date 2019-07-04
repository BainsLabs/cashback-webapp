import React from 'react';
import { Row, Col } from 'react-bootstrap';
import logo from 'static/icons-images/logo.png';
import Input from 'components/common/inputField';
import DropdownComponent from 'components/common/DropDown';
import {
  faMapMarkerAlt,
  faSortDown
} from '@fortawesome/fontawesome-free-solid';



const TopNavbar = () => (
  <section className="top-navbar">
    <div className="container top-navbar__container">
      <Row>
        <Col lg={3}>
          <img src={logo} width="250rem" alt="logo" />
        </Col>
        <Col lg={5}>
          <Row>
            <Col lg={8}>
              <Input
                placeholder="Search"
                autoFocus
                className="top-navbar__search"
              />
            </Col>
            <Col lg={4}>
              <DropdownComponent
                icon={faMapMarkerAlt}
                iconLeft={true}
                label="Select Country"
                className="top-navbar__select-country"
              />
            </Col>
          </Row>
        </Col>
        <Col lg={4}>
          <Row>
            <Col lg={4}>
              <DropdownComponent
                icon={faSortDown}
                label="Language"
                className="top-navbar__select-language"
              />
            </Col>
            <Col>
              <button className="top-navbar__login-btn">Login</button>
              <span className="text-white">/</span>
              <button className="top-navbar__join-btn">JOIN FREE</button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  </section>
);

export default TopNavbar;
