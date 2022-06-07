import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import './LoginPopup.scss';

function LoginPopup({ handleClose }) {
  return (
    <div className="overlay">
      <div className="login-popup">
        <Button title="X" className="login-popup__close-button" handleClick={handleClose} />
        <form action="submit" className="login-popup__form">
          <label htmlFor="login" className="login-popup__input-wrapper">
            <span className="login-popup__input-label">
              Логин:
            </span>
            <input type="text" id="login" className="login-popup__text-input" />
          </label>
          <label htmlFor="password" className="login-popup__input-wrapper">
            <span className="login-popup__input-label">
              Пароль:
            </span>
            <input type="text" id="password" className="login-popup__text-input" />
          </label>
          <Button type="submit" title="Войти" className="login-popup__submit-button" />
        </form>
      </div>
    </div>
  );
}
LoginPopup.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default LoginPopup;
