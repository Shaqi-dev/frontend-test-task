import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector } from '../../redux/authSlice';
import { addNews } from '../../redux/newsSlice';
import users from '../../db/users';
import { ADMIN, USER } from '../../constants';
import PageTitle from '../pageTitle';
import Button from '../button';
import './AddNewsArticle.scss';

function AddNewsArticle() {
  const dispatch = useDispatch();
  const inputTitleEl = useRef(null);
  const inputDescriptionEl = useRef(null);
  const inputImageEl = useRef(null);
  const { userName, userType } = useSelector(authSelector);
  const linkRegEx = /(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;

  const [error, setError] = useState({
    status: false,
    message: null,
  });

  const getUserIdByName = (name) => users.find((user) => user.name === name).id;

  const getValue = (input) => input.current.value.toLowerCase();

  const handleSuccess = () => {
    const title = getValue(inputTitleEl);
    const description = getValue(inputDescriptionEl);
    const image = getValue(inputImageEl);
    const authorId = getUserIdByName(userName);
    const datePosted = '07.06.2022';
    const isApproved = userType === ADMIN;

    setError({
      status: false,
      message: null,
    });
    dispatch(addNews({
      title,
      description,
      image,
      authorId,
      datePosted,
      isApproved,
    }));
  };

  const handleError = (message) => {
    setError({
      status: true,
      message,
    });
  };

  const checkInputsLength = () => {
    const title = getValue(inputTitleEl).length;
    const description = getValue(inputDescriptionEl).length;
    const image = getValue(inputImageEl).length;

    return title === 0 || description === 0 || image === 0;
  };

  const checkImageMatch = () => {
    const image = getValue(inputImageEl);

    return !image.match(linkRegEx);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (checkInputsLength()) {
      handleError('Пожалуйста, заполните все необходимые поля');
    } else if (checkImageMatch()) {
      handleError('Пожалуйста, введите корректную ссылку на изображение');
    } else {
      handleSuccess();
    }
  };

  return (
    <div className="add-news">
      <PageTitle className="add-news__title">Добавить новость: </PageTitle>
      <form className="add-news__form">
        <div className="add-news__inputs-row">
          <textarea ref={inputTitleEl} placeholder="Загловок" className="add-news__input add-news__input--text-area" />
          <textarea ref={inputDescriptionEl} placeholder="Описание" className="add-news__input add-news__input--text-area" />
        </div>
        <input ref={inputImageEl} type="text" placeholder="Ссылка на изображение" className="add-news__input add-news__input--text-input" />
        {
          error.status && <span className="add-news__error-message">{error.message}</span>
        }
        <Button type="submit" className="add-news__submit-button" handleClick={handleSubmit}>Отправить</Button>
        {
          userType === USER && (
            <span className="add-news__privacy">
              Нажимая на кнопку, вы даете согласие на обработку своих персональных данных.
              <Link to="/privacy" className="add-news__link"> Политика конфиденциальности</Link>
            </span>
          )
        }
      </form>
    </div>
  );
}

export default AddNewsArticle;
