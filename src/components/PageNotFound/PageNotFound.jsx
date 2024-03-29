import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PageNotFound.css';
import back from '../../images/icons/back.svg';

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <section className="page-not-found section">
      <h1 className="page-not-found__title dark-color-text big-text">
        Упс! Данной страницы не существует
      </h1>
      <h3 className="page-not-found__description dark-color-text medium-text small-letter-spacing">
        Возвращайтесь скорее назад
      </h3>
      <button
        type="button"
        className="page-not-found__button"
        onClick={() => navigate(-1)}
      >
        <img
          className="page-not-found__button-image"
          src={back}
          alt="Назад"
          title="Вернуться назад"
        />
      </button>
    </section>
  );
}

export default PageNotFound;
