import operate from './operate';

const calculate = (dataObject, buttonName) => {
  let { total, next, operation } = dataObject;

  const ArithmeticOperators = ['+', '-', 'X', '÷'];

  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
  const modifierOrPercent = ['+/-', '%'];
  const calculateModifiers = buttonName => {
    const number = buttonName === '%' ? 100 : -1;
    const operator = buttonName === '%' ? '÷' : 'X';
    if (next) {
      if (operation && !total) {
        operation = null;
      }
      next = operate(next, number, operator);
    } else {
      operation = null;
      total = operate(total, number, operator);
    }
  };

  const nextValue = () => {
    if (buttonName === '.') {
      next = '0.';
    } else {
      next = buttonName;
    }
  };

  if (modifierOrPercent.includes(buttonName)) {
    calculateModifiers(buttonName);
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
    if ((next && operation && total) || (next && !operation && !total)) {
      if (buttonName === '.') {
        if (!next.includes(buttonName)) {
          next += buttonName;
        }
      } else {
        next += buttonName;
      }
    } else if (next && operation && !total) {
      if (buttonName === '.') {
        if (!next.includes(buttonName)) {
          total = next;
          next = '0.';
        }
      } else {
        total = next;
        next = buttonName;
      }
    } else if ((!next && operation && total) || !total) {
      nextValue();
    } else {
      total = null;
      nextValue();
    }
  } else {
    total = null;
    next = null;
    operation = null;
  }
  return { total, next, operation };
};

export default calculate;
