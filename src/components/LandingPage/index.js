import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from 'components/common/Banner';
import bannerImg from 'static/icons-images/bannerimage.jpg';
import Navbar from 'components/common/Navbar';
import CategorySection from 'components/LandingPage/CategorySection';
import Card from 'components/common/Card';
import Amazon from 'static/icons-images/amazon.png';
import BlackLine from 'static/icons-images/black-line.png';
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
    <Card backgroundColor="#4A535E">
      <div className="card">
        <img src={Amazon} alt="amazon" />
        <p>2.5%</p>
        <p>cashback</p>
        <img src={BlackLine} alt="line" />
      </div>
    </Card>
  </>
);
