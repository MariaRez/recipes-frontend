import PropTypes from 'prop-types';
import React from 'react';
import Card from '../Card/Card';
import './CardList.css';
import taco from '../../images/recipes/taco.jpeg';

function CardList({ title }) {
  return (
    <section className="card-list section">
      <h3 className="card-list__title dark-color-text medium-text small-letter-spacing">
        Категория:
        {title}
      </h3>
      <ul className="card-list__items">
        <li>
          <Card
            cardTitle="Тако с растительным фаршем"
            cardDescription="Быстрое и простое блюдо, из минимума ингредиентов, которое подойдет как для плотного обеда так и для сытного ужина"
            to="/recipe"
            image={taco}
          />
        </li>
        <li>
          <Card
            cardTitle="Тако с растительным фаршем"
            cardDescription="Быстрое и простое блюдо, из минимума ингредиентов, которое подойдет как для плотного обеда так и для сытного ужина"
            to="/recipe"
            image={taco}
          />
        </li>
        <li>
          <Card
            cardTitle="Тако с растительным фаршем"
            cardDescription="Быстрое и простое блюдо, из минимума ингредиентов, которое подойдет как для плотного обеда так и для сытного ужина"
            to="/recipe"
            image={taco}
          />
        </li>
        <li>
          <Card
            cardTitle="Тако с растительным фаршем"
            cardDescription="Быстрое и простое блюдо, из минимума ингредиентов, которое подойдет как для плотного обеда так и для сытного ужина"
            to="/recipe"
            image={taco}
          />
        </li>
      </ul>
    </section>
  );
}

CardList.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CardList;
