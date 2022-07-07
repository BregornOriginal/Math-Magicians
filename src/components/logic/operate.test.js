import operate from './operate';

const NUM_1 = 9;
const NUM_2 = 14;

describe('operate() adition', () => {
  test('must sum two numbers', () => {
    const expectedResult = NUM_1 + NUM_2;
    const result = Number(operate(NUM_1, NUM_2, '+'));
    expect(result).toBe(expectedResult);
  });
  test('must rest two numbers', () => {
    const expectedResult = NUM_1 - NUM_2;
    const result = Number(operate(NUM_1, NUM_2, '-'));
    expect(result).toBe(expectedResult);
  });
  test('must divide two numbers', () => {
    const expectedResult = NUM_1 / NUM_2;
    const result = Number(operate(NUM_1, NUM_2, '÷'));
    expect(result).toBe(expectedResult);
  });
  test('must multiply two numbers', () => {
    const expectedResult = NUM_1 * NUM_2;
    const result = Number(operate(NUM_1, NUM_2, 'x'));
    expect(result).toBe(expectedResult);
  });
  test('must multiply two numbers', () => {
    const expectedResult = NUM_1 % NUM_2;
    const result = Number(operate(NUM_1, NUM_2, '%'));
    expect(result).toBe(expectedResult);
  });
  test('show an error when a operation is invalid', () => {
    const invalidOperation = 'invalid';
    expect(() => {
      operate(1, 2, invalidOperation);
    }).toThrow(Error);
  });
  test('show an error when a operation is invalid', () => {
    const unableToDivideByZero = 'Can\'t divide by 0.';
    const result = operate(80, 0, '÷');
    expect(result).toBe(unableToDivideByZero);
  });
  test('this operation can\'t finde module of 0', () => {
    const unableToDoModule = 'Can\'t find modulo as can\'t divide by 0.';
    const result = operate(10, 0, '%');
    expect(result).toBe(unableToDoModule);
  });
});
