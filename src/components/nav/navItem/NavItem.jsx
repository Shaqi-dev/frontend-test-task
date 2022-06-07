import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './NavItem.scss';

function NavItem({ page }) {
  const { link, title } = page;
  const displayTitle = title.charAt(0).toUpperCase() + title.slice(1);
  return (
    <Link to={link} className="nav__item">
      {displayTitle}
    </Link>
  );
}
NavItem.propTypes = {
  page: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default NavItem;
