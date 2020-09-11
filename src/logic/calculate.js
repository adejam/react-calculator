import operate from './operate';

const calculate = (dataObj, buttonName) => {
  let { total, next, operation } = dataObj;

  const ArithmeticOperators = ['+', '-', 'X', '÷'];

  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
  const modifierOrPercent = ['+/-', '%'];
  const modifierOrPercentFunc = (number, operator) => {
    if (next) {
      next = operate(next, number, operator);
    } else if (total) {
      total = operate(total, number, operator);
    }
  };

  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  } else if (modifierOrPercent.includes(buttonName)) {
    if (buttonName === '+/-') {
      modifierOrPercentFunc(-1, 'X');
    } else if (buttonName === '%') {
      modifierOrPercentFunc(100, '÷');
    }
  } else if (buttonName === '=') {
    if (total && next && operation) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    }
  } else if (ArithmeticOperators.includes(buttonName)) {
    if (total && next && operation) {
      total = operate(total, next, operation);
      next = null;
      operation = buttonName;
    } else {
      operation = buttonName;
    }
  } else if (numbers.includes(buttonName)) {
    if (buttonName === '.') {
      if (next) {
        next += buttonName;
      } else if (total) {
        total += buttonName;
      } else {
        next = '0.';
      }
    } else if (buttonName !== '.') {
      if (next) {
        if (operation) {
          if (total) {
            next += buttonName;
          } else {
            total = next;
            next = buttonName;
          }
        } else {
          next += buttonName;
        }
      } else if (!next) {
        if (total) {
          if (operation) {
            next = buttonName;
          } else {
            total += buttonName;
          }
        } else {
          next = buttonName;
        }
      }
    }
  }
  return { total, next, operation };
};

export default calculate;
