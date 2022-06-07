import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/authSlice';
import Overlay from '../overlay';
import Button from '../button';
import users from '../../db/users';
import './LoginPopup.scss';

function LoginPopup({ handleClose }) {
  const dispatch = useDispatch();

  const [error, setError] = useState({
    status: false,
    message: '',
  });

  const loginInputEl = useRef(null);
  const passwordInputEl = useRef(null);

  const getValue = (input) => input.current.value.toLowerCase();
  const getUserByName = (login) => users.find((user) => user.name === login);

  const checkUserPassword = (login, password) => {
    const userData = getUserByName(login);
    return userData.password === password;
  };

  const handleSuccess = () => {
    const login = getValue(loginInputEl);
    const userData = getUserByName(login);
    const userName = userData.name;
    const userType = userData.type;

    setError({
      status: false,
      message: null,
    });
    dispatch(logIn({
      userName,
      userType,
    }));
    handleClose();
  };

  const handleError = (message) => {
    setError({
      status: true,
      message,
    });
  };

  const checkInputsLength = () => {
    const login = getValue(loginInputEl).length;
    const password = getValue(passwordInputEl).length;

    return login === 0 || password === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const login = getValue(loginInputEl);
    const password = getValue(passwordInputEl);

    if (checkInputsLength()) {
      handleError('Пожалуйста, заполните все необходимые поля');
    } else if (getUserByName(login) === undefined) {
      handleError('Пользователя с указанным логином не существует');
    } else if (checkUserPassword(login, password) === false) {
      handleError('Введен неверный пароль');
    } else {
      handleSuccess();
    }
  };

  return (
    <Overlay>
      <div className="login-popup">
        <Button className="login-popup__close-button" handleClick={handleClose}>X</Button>
        <form action="submit" className="login-popup__form" onSubmit={handleSubmit}>
          <label htmlFor="login" className="login-popup__input-wrapper">
            <span className="login-popup__input-label">
              Логин:
            </span>
            <input
              type="text"
              id="login"
              ref={loginInputEl}
              className="login-popup__text-input"
            />
          </label>
          <label htmlFor="password" className="login-popup__input-wrapper">
            <span className="login-popup__input-label">
              Пароль:
            </span>
            <input
              type="password"
              id="password"
              ref={passwordInputEl}
              className="login-popup__text-input"
            />
          </label>
          {
            error.status && <span className="login-popup__error-message">{error.message}</span>
          }
          <Button type="submit" className="login-popup__submit-button">Войти</Button>
        </form>
      </div>
    </Overlay>
  );
}
LoginPopup.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default LoginPopup;
