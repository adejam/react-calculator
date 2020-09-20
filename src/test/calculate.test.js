import calculate from '../logic/calculate';

test('calculate function exists', () => {
  expect(calculate).toBeDefined();
});

test('return type of calculate is a function', () => {
  const dataObject = { total: null, next: null, operation: null };
  expect(typeof calculate({ ...dataObject }, '2')).toBe('object');
});

const arrayOne = ['2', '0', '+', '4', '0', '='];
const arrayTwo = ['4', '+', 'AC', '.', '6', '+', '2', '=', '+/-'];
const arrayThree = ['1', '2', '-', '3', '÷', '3', '=', '.', '2', '%', '+', '3', '='];
const arrayFour = ['2', '0', '0', '%', '+/-', '.', '5', '+', '2', '.', '5', '='];

const tester = (arrays, resultTotal) => {
  test('Takes the given array and return the required result', () => {
    let dataObject = { total: null, next: null, operation: null };

    const result = { total: resultTotal, next: null, operation: null };

    arrays.forEach(num => {
      dataObject = calculate({ ...dataObject }, num);
    });

    expect(dataObject).toEqual(result);
  });
};

tester(arrayOne, '60');
tester(arrayTwo, '-2.6');
tester(arrayThree, '3.002');
tester(arrayFour, '0');

test('all values are evaluated to null when AC is pressed', () => {
  let dataObject = { total: null, next: null, operation: null };

  const result = { total: null, next: null, operation: null };
  const arrays = ['AC'];
  arrays.forEach(num => {
    dataObject = calculate({ ...dataObject }, num);
  });

  expect(dataObject).toEqual(result);
});

test('next value is negated when +/- is pressed', () => {
  let dataObject = { total: '13', next: '5', operation: '-' };

  const result = { total: '13', next: '-5', operation: '-' };
  const arrays = ['+/-'];
  arrays.forEach(num => {
    dataObject = calculate({ ...dataObject }, num);
  });

  expect(dataObject).toEqual(result);
});

test('total value is divided by 100 when % is pressed', () => {
  let dataObject = { total: '13', next: null, operation: null };

  const result = { total: '0.13', next: null, operation: null };
  const arrays = ['%'];
  arrays.forEach(num => {
    dataObject = calculate({ ...dataObject }, num);
  });

  expect(dataObject).toEqual(result);
});

test('next value is divided by 100 when % is pressed and total is null', () => {
  let dataObject = { total: null, next: '4', operation: '+' };

  const result = { total: null, next: '0.04', operation: null };
  const arrays = ['%'];
  arrays.forEach(num => {
    dataObject = calculate({ ...dataObject }, num);
  });

  expect(dataObject).toEqual(result);
});

test('when = is pressed operate function is executed on parameters', () => {
  let dataObject = { total: '13', next: '12', operation: '+' };

  const result = { total: '25', next: null, operation: null };
  const arrays = ['='];
  arrays.forEach(num => {
    dataObject = calculate({ ...dataObject }, num);
  });

  expect(dataObject).toEqual(result);
});

test('when = is pressed and not all the parameters are defined', () => {
  let dataObject = { total: null, next: '12', operation: '+' };

  const result = { total: null, next: '12', operation: '+' };
  const arrays = ['='];
  arrays.forEach(num => {
    dataObject = calculate({ ...dataObject }, num);
  });

  expect(dataObject).toEqual(result);
});

test('total value is added to next,the results is assigned to total and the operation is assigned to buttonName and next is null', () => {
  let dataObject = { total: '13', next: '5', operation: '-' };

  const result = { total: '8', next: null, operation: '+' };
  const arrays = ['+'];
  arrays.forEach(num => {
    dataObject = calculate({ ...dataObject }, num);
  });

  expect(dataObject).toEqual(result);
});

test('total is null, operation is null and when a sign is pressed it is assigned to operation', () => {
  let dataObject = { total: null, next: '5', operation: null };

  const result = { total: null, next: '5', operation: '+' };
  const arrays = ['+'];
  arrays.forEach(num => {
    dataObject = calculate({ ...dataObject }, num);
  });

  expect(dataObject).toEqual(result);
});

test('. is pressed and when next and operation is not null but total is', () => {
  let dataObject = { total: null, next: '5', operation: '+' };

  const result = { total: '5', next: '0.', operation: '+' };
  const arrays = ['.'];
  arrays.forEach(num => {
    dataObject = calculate({ ...dataObject }, num);
  });

  expect(dataObject).toEqual(result);
});

test('. is pressed and when total and operation is not null but next is', () => {
  let dataObject = { total: '5', next: null, operation: '+' };

  const result = { total: '5', next: '0.', operation: '+' };
  const arrays = ['.'];
  arrays.forEach(num => {
    dataObject = calculate({ ...dataObject }, num);
  });

  expect(dataObject).toEqual(result);
});

test('. is pressed and when only next value is defined and already includes .', () => {
  let dataObject = { total: null, next: '3.', operation: null };

  const result = { total: null, next: '3.', operation: null };
  const arrays = ['.'];
  arrays.forEach(num => {
    dataObject = calculate({ ...dataObject }, num);
  });

  expect(dataObject).toEqual(result);
});

test('. is pressed and next and operation are defined and total is null and next includes .', () => {
  let dataObject = { total: null, next: '3.', operation: '+' };

  const result = { total: null, next: '3.', operation: '+' };
  const arrays = ['.'];
  arrays.forEach(num => {
    dataObject = calculate({ ...dataObject }, num);
  });

  expect(dataObject).toEqual(result);
});

test('a number is pressed and when next and operation is null but total isnt', () => {
  let dataObject = { total: '5', next: null, operation: null };

  const result = { total: null, next: '7', operation: null };
  const arrays = ['7'];
  arrays.forEach(num => {
    dataObject = calculate({ ...dataObject }, num);
  });

  expect(dataObject).toEqual(result);
});

test('. is pressed and when next and operation is not null but total is', () => {
  let dataObject = { total: null, next: '3', operation: '+' };

  const result = { total: '3', next: '0.', operation: '+' };
  const arrays = ['.'];
  arrays.forEach(num => {
    dataObject = calculate({ ...dataObject }, num);
  });

  expect(dataObject).toEqual(result);
});

test('% pressed and only total is defined', () => {
  let dataObject = { total: '5', next: null, operation: null };

  const result = { total: '0.05', next: null, operation: null };
  const arrays = ['%'];
  arrays.forEach(num => {
    dataObject = calculate({ ...dataObject }, num);
  });

  expect(dataObject).toEqual(result);
});

test('+/- pressed and only total is defined', () => {
  let dataObject = { total: '5', next: null, operation: '-' };

  const result = { total: '-5', next: null, operation: null };
  const arrays = ['+/-'];
  arrays.forEach(num => {
    dataObject = calculate({ ...dataObject }, num);
  });

  expect(dataObject).toEqual(result);
});
