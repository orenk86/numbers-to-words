import { getConjunction, parseNumber } from './numberParser';

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
