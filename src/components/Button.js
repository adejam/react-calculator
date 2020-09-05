import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonName, color, wide }) => {
  const twice = wide === true && 'wide';
  return (
    <button type="button" className={`button border ${twice} ${color}`}>
      {buttonName}
    </button>
  );
};
Button.propTypes = {
  buttonName: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  buttonName: '',
  color: '#fe9291',
  wide: false,
};

export default Button;
