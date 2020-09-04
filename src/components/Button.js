import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonName, color, wide }) => (
  <button type="button" className={`button border ${wide} ${color}`}>
    {buttonName}
  </button>
);

Button.propTypes = {
  buttonName: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.string,
};

Button.defaultProps = {
  buttonName: '',
  color: '',
  wide: '',
};

export default Button;
