import React from 'react';
import Banner from 'components/common/Banner';
import CategorySection from 'components/LandingPage/CategorySection';
import { Container, Row, Col } from 'react-bootstrap';
import bannerImg from 'static/icons-images/bannerimage.jpg';
import Card from 'components/common/Card';
import Amazon from 'static/icons-images/amazon.png';
import BlackLine from 'static/icons-images/black-line.png';
import ReferAFriendBG from 'static/icons-images/refer-a-friend-banner.jpg';
import joinNow from 'static/icons-images/join-now.png';
import AddSection from './AddSection';

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
                  <p>10$ BONUS</p>
                </Col>
              </Row>
            </Col>
            <Col lg={4}>
              <button className="banner-btn" type="button">
                JOIN NOW
              </button>
            </Col>
          </Row>
        </div>
      </Banner>
      <div className="merchant">
        <Card backgroundColor="#B7BFCD" textPosition="center">
          <>
            <img src={Amazon} alt="amazon" />
            <div className="card__content">
              <p>2.5%</p>
              <p>Cash Back</p>
              <img src={BlackLine} alt="line" className="mx-auto" height="1rem" widht="inherit" />
              <p>
                Plus 3 TLC
                <br />
                Rewards
              </p>
              <p>
                CODE
                <span>JULY 2019</span>
              </p>
              <p>Expire 7/07/2019</p>
            </div>
          </>
        </Card>
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
    </Container>
  </>
);
