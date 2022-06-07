import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector, logOut } from '../../redux/slices/authSlice';
import Logo from '../logo';
import Nav from '../nav';
import Button from '../button';
import LoginPopup from '../loginPopup';
import './Header.scss';

const navPages = [
  { link: '/news', title: 'новости' },
];

function Header() {
  const dispatch = useDispatch();

  const { isLoggedIn, userName } = useSelector(
    authSelector,
  );

  const [loginPopupIsOpen, setLoginPopupIsOpen] = useState(false);

  const openPopup = () => {
    setLoginPopupIsOpen(true);
  };

  const closePopup = (e) => {
    e.stopPropagation();
    setLoginPopupIsOpen(false);
  };

  const userLogOut = () => {
    dispatch(logOut());
  };

  return (
    <header className="header">
      <Logo />
      <Nav pages={navPages} />
      {
        isLoggedIn
          ? (
            <label htmlFor="log-out-button">
              <span className="header__user-name">{userName}</span>
              <Button id="log-out-button" handleClick={userLogOut}>Выйти</Button>
            </label>
          )
          : <Button handleClick={openPopup}>Войти</Button>
      }
      {
        loginPopupIsOpen && <LoginPopup handleClose={closePopup} />
      }
    </header>
  );
}

export default Header;
