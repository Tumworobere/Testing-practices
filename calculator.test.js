const calc = require('./calculator.js')
describe('calculator', () => {

  test('Add method', () => {
    expect(calc.add(1, 3)).toBe(4);
    expect(calc.add(2, 4)).toBe(6);
    expect(calc.add(5, 6)).toBe(11);
  });

  test('Subtract method', () => {
    expect(calc.subtract(3, 1)).toBe(2);
    expect(calc.subtract(4, 2)).toBe(2);
    expect(calc.subtract(6, 5)).toBe(1);
  });


  test('Divide method', () => {
    expect(calc.divide(3, 1)).toBeCloseTo(3);
    expect(calc.divide(5, 2)).toBeCloseTo(2.5);
    expect(calc.divide(6, 3)).toBeCloseTo(2);
  });

  test('Multiply method', () => {
    expect(calc.multiply(3, 1)).toBe(3);
    expect(calc.multiply(5, 3)).toBe(15);
    expect(calc.multiply(4, 2.5)).toBe(10);
  });


});