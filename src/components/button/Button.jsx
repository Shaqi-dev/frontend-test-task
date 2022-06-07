import React from 'react';
import PropTypes, { string } from 'prop-types';
import './Button.scss';

function Button({
  title,
  type,
  handleClick,
  className,
}) {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={handleClick}
      className={`button ${className}`}
    >
      {title}
    </button>
  );
}
Button.propTypes = {
  title: PropTypes.string.isRequired,
  type: string,
  handleClick: PropTypes.func,
  className: string,
};
Button.defaultProps = {
  type: '',
  handleClick: () => {},
  className: '',
};

export default Button;
