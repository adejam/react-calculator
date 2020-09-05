import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonName, color, wide }) => (
  <button type="button" className={`button border ${wide ? 'wide' : 'normalWidth'} ${color}`}>
    {buttonName}
  </button>
);

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export default Button;
