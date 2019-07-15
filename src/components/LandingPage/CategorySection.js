import React from "react";
import { categories } from "constants/categories";
import { Container } from "react-bootstrap";
import uuidv1 from "uuid";
import CommonSlider from "components/common/Slider/Slider";

export default () => {
  return (
    <section className="home__category">
      <Container>
        <ul className="home__category-list">
          <CommonSlider
            speedSetting="500"
            slidesToScrollSetting="1"
            slidesToShowSetting="3"
            initialSlideSetting="2"
          >
            {categories.map(item => (
              <li key={uuidv1()} style={{ width: 0 }}>
                <img src={item.icon} alt={item.label} />
                <p>{item.label}</p>
              </li>
            ))}
          </CommonSlider>
        </ul>
      </Container>
    </section>
  );
};
