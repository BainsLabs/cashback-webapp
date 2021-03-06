import React from 'react';
import { categories } from 'constants/categories';
import { Container } from 'react-bootstrap';
import uuidv1 from 'uuid';

export default () => (
  <section className="home__category">
    <Container>
      <ul className="home__category-list">
        {categories.map(item => (
          <li key={uuidv1()}>
            <img src={item.icon} alt={item.label} />
            <p>{item.label}</p>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);
