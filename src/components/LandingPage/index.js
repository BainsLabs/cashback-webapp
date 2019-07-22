import React from 'react';
import Banner from 'components/common/Banner';
import CategorySection from 'components/LandingPage/CategorySection';
import { Container, Row, Col } from 'react-bootstrap';
import bannerImg from 'static/icons-images/bannerimage.jpg';
import Card from 'components/common/Card';
import BlackLine from 'static/icons-images/black-line.png';
import ReferAFriendBG from 'static/icons-images/joinnow.jpg';
import joinNow from 'static/icons-images/join-now.png';
import AddSection from 'components/LandingPage/AddSection';
import DealsNews from 'components/LandingPage/DealsNews';
import { merchants } from 'constants/merchants';

export default () => (
  <>
    <Banner imgSrc={bannerImg}>
      <Container>
        <div className="home__banner">
          <p>$100</p>
          <p>CASHBACK</p>
          <div className="line" />
          <p>
            <span>Limited</span>
            <span>Period</span>
            <span>Offer</span>
          </p>
          <button className="home__book-btn" type="button">
            BOOK NOW
          </button>
        </div>
      </Container>
    </Banner>
    <CategorySection />
    <AddSection />
    <Container>
      <Banner imgSrc={ReferAFriendBG} textPosition="center">
        <div className="join-now">
          <Row>
            <Col lg={8}>
              <Row>
                <Col lg={6} className="join-now__logo">
                  <img src={joinNow} alt="joinNowLogo" />
                </Col>
                <Col lg={6} className="join-now__text">
                  <p>JOIN 6 DEGREES</p>
                  <p>FOR FREE AND GET A</p>
                  <p>$ 10 BONUS</p>
                </Col>
              </Row>
            </Col>
            <Col lg={4}>
              <button className="banner-btn banner-btn-mobile" type="button">
                JOIN NOW
              </button>
            </Col>
          </Row>
        </div>
      </Banner>
      <div className="merchant">
        <Row>
          <Col xs={12}>
            <h3>FEATURED DEALS</h3>
          </Col>
        </Row>
        <Row>
          {merchants.map(item => (
            <Col xs={12} md={6} lg={3} className="mb-2">
              <Card>
                <>
                  <img src={item.brandImg} className="mx-auto" alt="amazon" />
                  <div className="card__content">
                    <p>{item.offer}</p>
                    <p>{item.offerType}</p>
                    <img
                      src={BlackLine}
                      alt="line"
                      className="mx-auto"
                      height="1rem"
                      widht="inherit"
                    />
                    <p>
                      Plus
                      {item.tlc}
                      <br />
                      Rewards
                    </p>
                    <p>
                      CODE &nbsp;
                      <span>JULY 2019</span>
                    </p>
                    <p>Expire 7/07/2019</p>
                  </div>
                </>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <Banner imgSrc={ReferAFriendBG} textPosition="center">
        <>
          <Row>
            <Col lg={8}>
              <p className="refer__banner">REFER A FRIEND</p>
            </Col>
            <Col lg={4}>
              <button className="banner-btn" type="button">
                REFER A FRIEND
              </button>
            </Col>
          </Row>
        </>
      </Banner>
      <DealsNews />
    </Container>
  </>
);
