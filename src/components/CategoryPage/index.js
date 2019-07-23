import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Banner from "components/common/Banner";
import bannerImg from "static/images/shop-categories/banner.jpg";
import Card from "components/common/Card";
import CardContent from "components/common/CardContent";
import { adds } from "constants/adds";
import uuidv1 from "uuid";

export default () => (
  <>
    <Banner imgSrc={bannerImg} textPosition="center">
      <Container>
        <div className="category__banner">
          <h3>Shop Categories</h3>
          <p>Home&gt;Shop Categories&gt;Travel</p>
        </div>
      </Container>
    </Banner>
    <Container className="category__content">
      <Row>
        <Col lg={3} className="category__filter">
          <div className="filters">
            <h5>SERVICE AREA</h5>
            <div>
              <input type="checkbox" />
              <span>Global</span>
            </div>
            <div className="filter-line" />
            <div>
              <input type="checkbox" />
              <span>Select Country</span>
            </div>
          </div>
          <div className="filters">
            <h5>SERVICE AREA</h5>
            <div>
              <input type="checkbox" />
              <span>Global</span>
            </div>
            <div className="filter-line" />
            <div>
              <input type="checkbox" />
              <span>Select Country</span>
            </div>
          </div>
          <div className="filters">
            <h5>SERVICE AREA</h5>
            <div>
              <input type="checkbox" />
              <span>Global</span>
            </div>
            <div className="filter-line" />
            <div>
              <input type="checkbox" />
              <span>Select Country</span>
            </div>
          </div>
          <div className="filters">
            <h5>SERVICE AREA</h5>
            <div>
              <input type="checkbox" />
              <span>Global</span>
            </div>
            <div className="filter-line" />
            <div>
              <input type="checkbox" />
              <span>Select Country</span>
            </div>
          </div>
        </Col>
        <Col lg={9}>
          <div className="category-section">
            <Container>
              <Row>
                <Col className="category-section__heading">
                  <h2>TRAVEL</h2>
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
                {adds.map(item => (
                  <Col md={6} lg={4} key={uuidv1()} className="mb-2 no-padding">
                    <Card
                      classValue="card__content-hover"
                      backgroundImage={item.bgImg}
                      textPosition="center"
                      border
                      width="15rem"
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
