import operate from '../logic/operate';

test('operate function exists', () => {
  expect(operate).toBeDefined();
});

test('return type of operate is a string', () => {
  expect(typeof operate('12', '13', '+')).toBe('string');
});

test('operate function adds numbers', () => {
  expect(operate('12', '13', '+')).toBe('25');
});

test('operate function adds numbers with negative value', () => {
  expect(operate('12', '-13', '+')).toBe('-1');
});

test('operate function subtracts numbers', () => {
  expect(operate('14', '11', '-')).toBe('3');
});

test('operate function divides numbers when numberTwo is 0', () => {
  expect(operate('12', '0', '÷')).toBe('0');
});

test('operate function divides numbers', () => {
  expect(operate('12', '6', '÷')).toBe('2');
});

test('operate function multiplies numbers', () => {
  expect(operate('12', '2', 'X')).toBe('24');
});

test('operate function multiplies numbers', () => {
  expect(operate('12', '2', '')).toBe('');
});
