import operate from '../logic/operate';

test('it returns a string', () => {
  expect(typeof operate('12', '13', '+')).toBe('string');
});

test('it adds two positive numbers', () => {
  expect(operate('12', '13', '+')).toBe('25');
});

test('it adds numbers with negative value', () => {
  expect(operate('12', '-13', '+')).toBe('-1');
});

test('it subtracts numbers', () => {
  expect(operate('14', '11', '-')).toBe('3');
});

test('it returns 0 when operation is ÷ and numberTwo is 0', () => {
  expect(operate('12', '0', '÷')).toBe('0');
});

test('it returns 0 when operation is ÷ and numberTwo is 0.0', () => {
  expect(operate('12', '0.0', '÷')).toBe('0');
});

test('it divides numbers', () => {
  expect(operate('12', '6', '÷')).toBe('2');
});

test('it multiplies numbers', () => {
  expect(operate('12', '2', 'X')).toBe('24');
});

test('it returns empty string when operation is null', () => {
  expect(operate('12', '2', '')).toBe('');
});
