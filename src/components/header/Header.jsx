import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector, logOut } from '../../redux/authSlice';
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

  const closePopup = () => {
    setLoginPopupIsOpen(false);
  };

  const userLogOut = () => {
    dispatch(logOut());
  };

  return (
    <header className="header">
      <Logo />
      <Nav pages={navPages} />
      <div className="header__personal-info">
        {
        isLoggedIn
          ? (
            <>
              <span className="header__user-name">{userName.charAt(0).toUpperCase() + userName.slice(1)}</span>
              <Button handleClick={userLogOut}>Выйти</Button>
            </>
          )
          : <Button handleClick={openPopup}>Войти</Button>
      }
      </div>
      {
        loginPopupIsOpen && <LoginPopup handleClose={closePopup} />
      }
    </header>
  );
}

export default Header;
