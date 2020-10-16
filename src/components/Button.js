import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonName, color, wide, handleClick }) => {
  return (
    <button
      type="button"
      className={`button border ${wide ? 'wide' : 'normalWidth'} ${color}`}
      onClick={() => handleClick(buttonName)}
    >
      {buttonName}
    </button>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
  handleClick: null,
};

export default Button;
