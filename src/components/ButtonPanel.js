import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const symbols = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'X'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];
  const changeColor = (index, length) => (length === index + 1 ? 'pink' : undefined);
  return (
    <div className="buttonPanel">
      {symbols.map(symbol => (
        <div className="row" key={symbol}>
          {symbol.map((sign, index) => (
            <Button
              key={sign}
              color={changeColor(index, symbol.length)}
              wide={sign === '0'}
              buttonName={sign}
              handleClick={clickHandler}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};

ButtonPanel.defaultProps = {
  clickHandler: null,
};
export default ButtonPanel;
