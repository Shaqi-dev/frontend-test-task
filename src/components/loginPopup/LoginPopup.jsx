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
  const loginInputEl = useRef(null);
  const passwordInputEl = useRef(null);
  const getLowerCaseValue = (input) => input.current.value.toLowerCase();
  const getUserByName = (login) => users.find((user) => user.name === login);

  const [error, setError] = useState({
    status: false,
    message: '',
  });

  const onSuccess = (login) => {
    const userData = getUserByName(login);
    const userName = userData.name;
    const userType = userData.type;

    setError({ status: false, message: null });
    dispatch(logIn({ userName, userType }));
    handleClose();
  };

  const onError = (message) => {
    setError({ status: true, message });
  };

  const checkLengthError = (login, password) => login.length === 0 || password.length === 0;

  const checkLoginError = (login) => getUserByName(login) === undefined;

  const checkPasswordError = (login, password) => getUserByName(login).password !== password;

  const handleSubmit = (e) => {
    e.preventDefault();

    const login = getLowerCaseValue(loginInputEl);
    const password = getLowerCaseValue(passwordInputEl);

    if (checkLengthError(login, password)) return onError('Пожалуйста, заполните все необходимые поля');
    if (checkLoginError(login)) return onError('Пользователя с указанным логином не существует');
    if (checkPasswordError(login, password)) return onError('Введен неверный пароль');

    return onSuccess(login);
  };

  return (
    <Overlay>
      <div className="login-popup">
        <Button
          className="login-popup__close-button"
          handleClick={handleClose}
        >
          X
        </Button>
        <form
          action="submit"
          className="login-popup__form"
          onSubmit={handleSubmit}
        >
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
            error.status && (
              <span className="login-popup__error-message">
                {error.message}
              </span>
            )
          }
          <Button
            type="submit"
            className="login-popup__submit-button"
          >
            Войти
          </Button>
        </form>
      </div>
    </Overlay>
  );
}
LoginPopup.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default LoginPopup;
