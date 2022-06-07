import React from 'react';
import PropTypes from 'prop-types';
import './PageTitle.scss';

function PageTitle({ children, className }) {
  return (
    <h2 className={`page-title ${className}`}>
      {children}
    </h2>
  );
}
PageTitle.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};
PageTitle.defaultProps = {
  className: '',
};

export default PageTitle;
