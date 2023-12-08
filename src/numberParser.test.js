import { getConjunction, getFactorValues, parseNumber } from './numberParser';

describe('parseNumber', () => {
  it('should return the correct string for a number less than 20', () => {
    expect(parseNumber(0)).toBe('zero');
    expect(parseNumber(1)).toBe('one');
    expect(parseNumber(10)).toBe('ten');
    expect(parseNumber(15)).toBe('fifteen');
  });

  it('should return the correct string for a number less than 100', () => {
    expect(parseNumber(20)).toBe('twenty');
    expect(parseNumber(21)).toBe('twenty-one');
    expect(parseNumber(52)).toBe('fifty-two');
    expect(parseNumber(99)).toBe('ninety-nine');
  });

  it('should return the correct string for a number less than 1000', () => {
    expect(parseNumber(100)).toBe('one hundred');
    expect(parseNumber(101)).toBe('one hundred and one');
    expect(parseNumber(352)).toBe('three hundred and fifty-two');
    expect(parseNumber(999)).toBe('nine hundred and ninety-nine');
  });

  it('should return the correct string for a number less than 10000', () => {
    expect(parseNumber(1000)).toBe('one thousand');
    expect(parseNumber(1001)).toBe('one thousand and one');
    expect(parseNumber(9999)).toBe('nine thousand, nine hundred and ninety-nine');
  });

  it('should return the correct string for a number less than 100000', () => {
    expect(parseNumber(10000)).toBe('ten thousand');
    expect(parseNumber(10001)).toBe('ten thousand and one');
    expect(parseNumber(12300)).toBe('twelve thousand, three hundred');
    expect(parseNumber(12055)).toBe('twelve thousand and fifty-five');
    expect(parseNumber(12345)).toBe('twelve thousand, three hundred and forty-five');
    expect(parseNumber(99999)).toBe('ninety-nine thousand, nine hundred and ninety-nine');
  });

  it('should return the correct string for 100000', () => {
    expect(parseNumber(100000)).toBe('one hundred thousand');
    expect(parseNumber(200001)).toBe('two hundred thousand and one');
    expect(parseNumber(330000)).toBe('three hundred and thirty thousand');
    expect(parseNumber(350402)).toBe('three hundred and fifty thousand, four hundred and two');
    expect(parseNumber(123456)).toBe('one hundred and twenty-three thousand, four hundred and fifty-six');
  });

  it('should return the correct string for a negative number', () => {
    expect(parseNumber(-1)).toBe('minus one');
    expect(parseNumber(-10)).toBe('minus ten');
    expect(parseNumber(-101)).toBe('minus one hundred and one');
    expect(parseNumber(-1205)).toBe('minus one thousand, two hundred and five');
    expect(parseNumber(-12345)).toBe('minus twelve thousand, three hundred and forty-five');
    expect(parseNumber(-100000)).toBe('minus one hundred thousand');
    expect(parseNumber(-105020)).toBe('minus one hundred and five thousand and twenty');
  });

  it('should return the correct string for a number with a floating point (redact the value after the floating point)', () => {
    expect(parseNumber(0.5)).toBe('zero');
    expect(parseNumber(1.5)).toBe('one');
    expect(parseNumber(15.5)).toBe('fifteen');
    expect(parseNumber(52.5)).toBe('fifty-two');
    expect(parseNumber(100.5)).toBe('one hundred');
    expect(parseNumber(352.5)).toBe('three hundred and fifty-two');
    expect(parseNumber(1001.5)).toBe('one thousand and one');
    expect(parseNumber(9999.5)).toBe('nine thousand, nine hundred and ninety-nine');
  });
});

describe('getConjunction', () => {
  it('should return an empty string for 0', () => {
    expect(getConjunction(0)).toBe('');
  });

  it('should return " and " for a number less than 100', () => {
    expect(getConjunction(1)).toBe(' and ');
    expect(getConjunction(99)).toBe(' and ');
  });

  it('should return ", " for a number less than 1000', () => {
    expect(getConjunction(100)).toBe(', ');
    expect(getConjunction(999)).toBe(', ');
  });
});

describe('getFactorValues', () => {
  it('should return the correct values for a number less than 100', () => {
    expect(getFactorValues(1)).toEqual({ factor: 1, factorString: '', factoredAmount: 1 });
    expect(getFactorValues(10)).toEqual({ factor: 10, factorString: '', factoredAmount: 1 });
    expect(getFactorValues(99)).toEqual({ factor: 10, factorString: '', factoredAmount: 9 });
  });

  it('should return the correct values for a number less than 1000', () => {
    expect(getFactorValues(100)).toEqual({ factor: 100, factorString: ' hundred', factoredAmount: 1 });
    expect(getFactorValues(999)).toEqual({ factor: 100, factorString: ' hundred', factoredAmount: 9 });
  });

  it('should return the correct values for a number less than 10000', () => {
    expect(getFactorValues(1000)).toEqual({ factor: 1000, factorString: ' thousand', factoredAmount: 1 });
    expect(getFactorValues(9999)).toEqual({ factor: 1000, factorString: ' thousand', factoredAmount: 9 });
  });

  it('should return the correct values for a number less than 100000', () => {
    expect(getFactorValues(10000)).toEqual({ factor: 1000, factorString: ' thousand', factoredAmount: 10 });
    expect(getFactorValues(99999)).toEqual({ factor: 1000, factorString: ' thousand', factoredAmount: 99 });
  });
});
