import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Banner from 'components/common/Banner';
import bannerImg from 'static/images/shop-categories/banner.jpg';
import Card from 'components/common/Card';
import CardContent from 'components/common/CardContent';
import { addsDemo } from 'constants/adds';
import uuidv1 from 'uuid';

export default () => (
  <>
    <Banner imgSrc={bannerImg} textPosition="center">
      <Container>
        <div className="category__banner">
          <h3>Shop Categories</h3>
        </div>
      </Container>
    </Banner>
    <Container className="category__content">
      <Row>
        <Col lg={3} className="category__filter">
          <div className="filters">
            <h5>SERVICE AREA</h5>
            <div className="filter-div">
              <input type="checkbox" />
              <span>Global</span>
            </div>
            <div className="filter-line" />
            <div className="filter-div">
              <input type="checkbox" />
              <span>Select Country</span>
            </div>
          </div >
          <div className="filters">
            <h5>MERCHANT TYPE</h5>
            <div className="filter-div">
              <input type="checkbox" />
              <span>Online</span>
            </div>
            <div className="filter-line" />
            <div className="filter-div">
              <input type="checkbox" />
              <span>In-Store</span>
            </div>
          </div >
          <div className="filters">
            <h5>DEAL TYPE</h5>
            <div className="filter-div">
              <input type="checkbox" />
              <span>Rev Share Deal</span>
            </div>
            <div className="filter-line" />
            <div className="filter-div">
              <input type="checkbox" />
              <span>Flat Deal</span>
            </div>
            <div className="filter-line" />
            <div className="filter-div">
              <input type="checkbox" />
              <span>TLC Deal</span>
            </div>
          </div>
          
          
          <div className="filters">
            <h5>SPECIAL</h5>
            <div className="filter-div">
              <input type="checkbox" />
              <span>Featured Merchant</span>
            </div>
            <div className="filter-line" />
            <div className="filter-div">
              <input type="checkbox" />
              <span>Exclusive Offers</span>
            </div>
            <div className="filter-line" />
            <div className="filter-div">
              <input type="checkbox" />
              <span>Sales Offers</span>
            </div>
          </div>
        </Col>
        <Col lg={9}>
          <div className="category-section">
            <Container>
              <Row>
                <Col className="category-section__heading">
                  <h2>ALL</h2>
                  <ul>
                    <li>MOST USED</li>
                    <li>RECHARGE</li>
                    <li>FOOD</li>
                    <li>TRAVEL</li>
                    <li>FASHION</li>
                    <li>ELECTRONICS</li>
                  </ul>
                </Col>
              </Row>
              <Row>
              {addsDemo.map(item => (
              <Col xs={12} md={6} lg={4} className="mb-3 pl-0" key={uuidv1()}>
                <Card
                  classValue="card__content-hover"
                  backgroundImage={item.bgImg}
                  textPosition="center"
                  border
                >
                  <CardContent brandLogo={item.icon} data={item} />
                </Card>
              </Col>
            ))}
              </Row>
            </Container>
          </div>
        </Col>
      </Row>
    </Container>
  </>
);
