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
const arrayTwoMessage =
  'takes in 4 and plus which is then reset by AC.0.6 is then added to 2 to give 2.6. 2.6 is then negated';

const arrayThree = ['1', '2', '-', '3', '÷', '3', '=', '.', '2', '%', '+', '3', '='];
const arrayThreeMessage =
  'operate 12-3/3 to give 3. then 0.2 is displayed. and the % of 0.2 is 0.002 and added to 3';

const arrayFour = ['2', '0', '0', '%', '+/-', '.', '5', '+', '2', '.', '5', '='];
const arrayFourMessage =
  'the % of 200 is operated to give 2 and negated and concatenated with .5 to give -2.5 then added to 2.5 to result 0';

const tester = (arrays, resultTotal, testMessage) => {
  test(testMessage, () => {
    let dataObject = { total: null, next: null, operation: null };

    const result = { total: resultTotal, next: null, operation: null };

    arrays.forEach(num => {
      dataObject = calculate({ ...dataObject }, num);
    });

    expect(dataObject).toEqual(result);
  });
};

tester(arrayOne, '60', '20 is added to 60 to equals 60');
tester(arrayTwo, '-2.6', arrayTwoMessage);
tester(arrayThree, '3.002', arrayThreeMessage);
tester(arrayFour, '0', arrayFourMessage);

test('for this test case All values are evaluated to null when AC is pressed', () => {
  let dataObject = { total: null, next: null, operation: null };

  const result = { total: null, next: null, operation: null };
  const arrays = ['AC'];
  arrays.forEach(num => {
    dataObject = calculate({ ...dataObject }, num);
  });

  expect(dataObject).toEqual(result);
});

test('for this test case next value is negated when +/- is pressed', () => {
  let dataObject = { total: '13', next: '5', operation: '-' };

  const result = { total: '13', next: '-5', operation: '-' };
  const arrays = ['+/-'];
  arrays.forEach(num => {
    dataObject = calculate({ ...dataObject }, num);
  });

  expect(dataObject).toEqual(result);
});

test('for this test case total value is divided by 100 when % is pressed', () => {
  let dataObject = { total: '13', next: null, operation: null };

  const result = { total: '0.13', next: null, operation: null };
  const arrays = ['%'];
  arrays.forEach(num => {
    dataObject = calculate({ ...dataObject }, num);
  });

  expect(dataObject).toEqual(result);
});

test('for this test case next value is divided by 100 when % is pressed and total is null', () => {
  let dataObject = { total: null, next: '4', operation: '+' };

  const result = { total: null, next: '0.04', operation: null };
  const arrays = ['%'];
  arrays.forEach(num => {
    dataObject = calculate({ ...dataObject }, num);
  });

  expect(dataObject).toEqual(result);
});

test('for this test case,when = is pressed 13 is added to 12 to result 25', () => {
  let dataObject = { total: '13', next: '12', operation: '+' };

  const result = { total: '25', next: null, operation: null };
  const arrays = ['='];
  arrays.forEach(num => {
    dataObject = calculate({ ...dataObject }, num);
  });

  expect(dataObject).toEqual(result);
});

test('for this test case total value 13 is added to next(5),the results is assigned to total and the operation is assigned to buttonName and next is null', () => {
  let dataObject = { total: '13', next: '5', operation: '-' };

  const result = { total: '8', next: null, operation: '+' };
  const arrays = ['+'];
  arrays.forEach(num => {
    dataObject = calculate({ ...dataObject }, num);
  });

  expect(dataObject).toEqual(result);
});

test('for this test case total is null, operation is null and when a sign is pressed it is assigned to operation', () => {
  let dataObject = { total: null, next: '5', operation: null };

  const result = { total: null, next: '5', operation: '+' };
  const arrays = ['+'];
  arrays.forEach(num => {
    dataObject = calculate({ ...dataObject }, num);
  });

  expect(dataObject).toEqual(result);
});

test('for this test case for when . is pressed and when next and operation is not null but total is', () => {
  let dataObject = { total: null, next: '5', operation: '+' };

  const result = { total: '5', next: '0.', operation: '+' };
  const arrays = ['.'];
  arrays.forEach(num => {
    dataObject = calculate({ ...dataObject }, num);
  });

  expect(dataObject).toEqual(result);
});

test('for this test case for when . is pressed and when total and operation is not null but next is', () => {
  let dataObject = { total: '5', next: null, operation: '+' };

  const result = { total: '5', next: '0.', operation: '+' };
  const arrays = ['.'];
  arrays.forEach(num => {
    dataObject = calculate({ ...dataObject }, num);
  });

  expect(dataObject).toEqual(result);
});

test('for this test case for when 7 is pressed and when next and operation is null but total isnt', () => {
  let dataObject = { total: '5', next: null, operation: null };

  const result = { total: null, next: '7', operation: null };
  const arrays = ['7'];
  arrays.forEach(num => {
    dataObject = calculate({ ...dataObject }, num);
  });

  expect(dataObject).toEqual(result);
});

test('for this test case for when . is pressed and when next and operation is not null but total is', () => {
  let dataObject = { total: null, next: '3', operation: '+' };

  const result = { total: '3', next: '0.', operation: '+' };
  const arrays = ['.'];
  arrays.forEach(num => {
    dataObject = calculate({ ...dataObject }, num);
  });

  expect(dataObject).toEqual(result);
});
