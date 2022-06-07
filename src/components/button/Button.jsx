import React from 'react';
import PropTypes, { string } from 'prop-types';
import './Button.scss';

function Button({
  children,
  type,
  id,
  handleClick,
  className,
}) {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      id={id}
      onClick={handleClick}
      className={`button ${className}`}
    >
      {children}
    </button>
  );
}
Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: string,
  id: string,
  handleClick: PropTypes.func,
  className: string,
};
Button.defaultProps = {
  type: '',
  id: null,
  handleClick: () => {},
  className: '',
};

export default Button;
