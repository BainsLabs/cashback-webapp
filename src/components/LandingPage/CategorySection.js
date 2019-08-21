import React from 'react';
import { categories } from 'constants/categories';
import { Container } from 'react-bootstrap';
import uuidv1 from 'uuid';
import { Link } from 'react-router-dom';
import CommonSlider from 'components/common/Slider/Slider';

export default () => {
  return (
    <section className="home__category">
      <Container>
        <ul className="home__category-list">
          <CommonSlider
            speedSetting="500"
            slidesToScrollSetting="1"
            slidesToShowSetting="5"
            initialSlideSetting="2"
          >
            {categories.map(item => (
              <Link to="/categories" style={{ width: 0 }} className="category-slider">
                <li key={uuidv1()}>
                  <img src={item.icon} alt={item.label} />
                  <p className="category-label">{item.label}</p>
                </li>
              </Link>
            ))}
          </CommonSlider>
        </ul>
      </Container>
    </section>
  );
};
