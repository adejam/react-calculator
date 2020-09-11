import Big from 'big-js';

const operate = (numberOne, numberTwo, operation) => {
  const bigNumberOne = Big(numberOne);
  let result;

  switch (operation) {
    case '+':
      result = bigNumberOne.plus(numberTwo);
      break;
    case '-':
      result = bigNumberOne.minus(numberTwo);
      break;
    case 'X':
      result = bigNumberOne.times(numberTwo);
      break;
    case '÷':
      if (numberTwo === '0') {
        result = 0;
      } else {
        result = bigNumberOne.div(numberTwo);
      }
      break;
    default:
      result = '';
      break;
  }
  return result.toString();
};

export default operate;
