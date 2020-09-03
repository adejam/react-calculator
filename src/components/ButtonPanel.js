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

  return (
    <div>
      {symbols.map(symbol => (
        <div className="row" key={symbol}>
          {symbol.map(sign => (
            <Button key={sign} buttonName={sign} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ButtonPanel;
