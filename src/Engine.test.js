const engine = require('./Engine');

test('get test results', () => {
  expect(engine(7)).toBe("seven");
  expect(engine(42)).toBe("forty-two");
  expect(engine(1999)).toBe("one thousand nine hundred and ninety-nine");
  expect(engine(2001)).toBe("two thousand and one");
  expect(engine(17999)).toBe("seventeen thousand nine hundred and ninety-nine");
  expect(engine(342251)).toBe("three hundred and forty-two thousand two hundred and fifty-one");
  expect(engine(1300420)).toBe("one million three hundred thousand four hundred and twenty");
});