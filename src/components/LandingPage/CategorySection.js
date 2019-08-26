import React from 'react';
import { categories } from 'constants/categories';
import { Container } from 'react-bootstrap';
import uuidv1 from 'uuid';
import { Link } from 'react-router-dom';
import CommonSlider from 'components/common/Slider/Slider';
import Slider from 'react-slick';

export default () => {
  const setting = {
    infinite: true,
    autoplay: true,
    speed: '500',
    slidesToShow: 9,
    slidesToScroll: 1,
    initialSlide: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="home__category">
      <div className="home-category">
        <ul className="home__category-list">
          <Slider {...setting}>
            {categories.map(item => (
              <Link to="/categories" style={{ width: 0 }} className="category-slider">
                <li key={uuidv1()}>
                  <img src={item.icon} alt={item.label} />
                  <p className="category-label">{item.label}</p>
                </li>
              </Link>
            ))}
          </Slider>
        </ul>
      </div>
    </section>
  );
};
