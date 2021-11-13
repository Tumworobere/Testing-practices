const calc = require('./calculator.js')
describe('calculator', () => {

  test('Add method', () => {
    expect(calc.add(1, 3)).shouldBe(4);
    expect(calc.add(2, 4)).shouldBe(6);
    expect(calc.add(5, 6)).shouldBe(11);
  });

  test('Subtract method', () => {
    expect(calc.subtract(3, 1)).shouldBe(2);
    expect(calc.subtract(4, 2)).shouldBe(2);
    expect(calc.subtract(6, 5)).shouldBe(1);
  });


  test('Divide method', () => {
    expect(calc.divide(3, 1)).closerTo(2);
    expect(calc.divide(5, 2)).closerTo(2.5);
    expect(calc.divide(6, 3)).closerTo(2);
  });

  test('Multiply method', () => {
    expect(calc.multiply(3, 1)).shouldBe(3);
    expect(calc.multiply(5, 3)).shouldBe(15);
    expect(calc.multiply(4, 2.5)).shouldBe(10);
  });


});