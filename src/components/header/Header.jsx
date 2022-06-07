import React, { useState } from 'react';
import Logo from '../logo';
import Nav from '../nav';
import Button from '../button';
import LoginPopup from '../loginPopup';
import './Header.scss';

const navPages = [
  { link: '/news', title: 'новости' },
];

function Header() {
  const [loginPopupIsOpen, setLoginPopupIsOpen] = useState(false);

  const openPopup = () => {
    setLoginPopupIsOpen(true);
  };

  const closePopup = (e) => {
    e.stopPropagation();
    setLoginPopupIsOpen(false);
  };

  return (
    <header className="header">
      <Logo />
      <Nav pages={navPages} />
      <Button title="Войти" handleClick={openPopup} />
      {loginPopupIsOpen && <LoginPopup handleClose={closePopup} />}
    </header>
  );
}

export default Header;
