import React from 'react';
import PropTypes from 'prop-types';
import NavItem from './navItem';
import './Nav.scss';

function Nav({ pages }) {
  return (
    <nav className="nav">
      {
        pages.map((page) => (<NavItem key={page.link} page={page} />))
      }
    </nav>
  );
}
Nav.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default Nav;
