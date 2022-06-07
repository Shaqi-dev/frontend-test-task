import React from 'react';
import Logo from '../logo';
import Nav from '../nav';
import Button from '../button';
import './Header.scss';

function Header() {
  const navPages = [
    { link: '/news', title: 'новости' },
  ];

  const handleLogin = () => {
    console.log('click');
  };

  return (
    <header className="header">
      <Logo />
      <Nav pages={navPages} />
      <Button title="Войти" onClick={handleLogin} />
    </header>
  );
}

export default Header;
