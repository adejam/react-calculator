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
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ButtonPanel;
