import React from 'react';
import PropTypes from 'prop-types';
import './Overlay.scss';

function Overlay({ children }) {
  return (
    <div className="overlay">
      {children}
    </div>
  );
}
Overlay.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};

export default Overlay;
