import React from 'react';
import Button from './Button';

const ButtonPanel = () => {
  const symbols = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'X'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];
  const size = sign => sign === '0' && true;
  const changeColor = (ind, length) => (length === ind + 1 ? 'color' : '');
  return (
    <div className="buttonPanel">
      {symbols.map(symbol => (
        <div className="row" key={symbol}>
          {symbol.map((sign, index) => (
            <Button
              key={sign}
              color={changeColor(index, symbol.length)}
              wide={size(sign)}
              buttonName={sign}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ButtonPanel;
