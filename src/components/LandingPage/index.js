import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Banner from 'components/common/Banner';
import bannerImg from 'static/icons-images/bannerimage.jpg';
import Navbar from 'components/common/Navbar';
import CategorySection from 'components/LandingPage/CategorySection';
import Card from 'components/common/Card';
import Amazon from 'static/icons-images/amazon.png';
import BlackLine from 'static/icons-images/black-line.png';
import ReferAFriendBG from 'static/icons-images/refer-a-friend-banner.jpg';
export default () => (
  <>
    <Navbar />
    <Banner imgSrc={bannerImg}>
      <Container>
        <div className="home__banner">
          <p>$100</p>
          <p>CASHBACK</p>
          <div className="line" />
          <p>
            <span>Limited</span> <span>Period</span> <span>Offer</span>
          </p>
          <button className="home__book-btn">BOOK NOW</button>
        </div>
      </Container>
    </Banner>
    <CategorySection />
    <Card backgroundColor="#B7BFCD" textPosition="center">
      <>
        <img src={Amazon} alt="amazon" />
        <div className="card__content">
          <p>2.5%</p>
          <p>Cash Back</p>
          <img
            src={BlackLine}
            alt="line"
            className="mx-auto"
            height="1rem"
            widht="inherit"
          />
          <p>
            Plus 3 TLC <br />
            Rewards
          </p>
          <p>
            CODE <span>JULY 2019</span>
          </p>
          <p>Expire 7/07/2019</p>
        </div>
      </>
    </Card>
    <Banner imgSrc={ReferAFriendBG} textPosition="center" height="20rem">
      <>
        <Row>
          <Col>
            <p className="refer__banner">REFER A FRIEND</p>
          </Col>
          <Col>
            <button className="home__book-btn">BOOK NOW</button>
          </Col>
        </Row>
      </>
    </Banner>
  </>
);
