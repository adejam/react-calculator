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
  const size = sign => (sign === '0' ? 'wide' : '');
  return (
    <div className="buttonPanel">
      {symbols.map(symbol => (
        <div className="row" key={symbol}>
          {symbol.map(sign => (
            <Button key={sign} color="color" wide={size(sign)} buttonName={sign} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ButtonPanel;
