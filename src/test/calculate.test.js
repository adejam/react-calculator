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

const arrayThree = ['1', '2', '-', '3', '÷', '3', '=', '.', '2', '%', '='];
const arrayThreeMessage =
  'operate 12-3/3 to give 3. then 0.2 is displayed. and the % of 0.2 is 0.002';

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
tester(arrayThree, '0.002', arrayThreeMessage);
tester(arrayFour, '0', arrayFourMessage);
