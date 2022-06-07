import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

function Button({ title, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="button"
    >
      {title}
    </button>
  );
}
Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  title: '',
  onClick: () => {},
};

export default Button;
