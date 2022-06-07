import React from 'react';
import PropTypes from 'prop-types';
import './NavItem.scss';

function NavItem({ page }) {
  const { link, title } = page;
  const displayTitle = title.charAt(0).toUpperCase() + title.slice(1);
  return (
    <a href={link} className="nav__item">
      {displayTitle}
    </a>
  );
}
NavItem.propTypes = {
  page: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default NavItem;
