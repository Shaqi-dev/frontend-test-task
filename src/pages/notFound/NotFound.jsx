import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../components/pageTitle/PageTitle';
import Button from '../../components/button';
import './NotFound.scss';

function NotFound() {
  return (
    <section className="not-found">
      <PageTitle className="not-found__title">Страница не найдена :(</PageTitle>
      <Link to="/" className="not-found__button">
        <Button>Перейти на главную</Button>
      </Link>
    </section>
  );
}

export default NotFound;
