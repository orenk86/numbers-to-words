import { validateInput } from './input';

describe('isInputValid', () => {
  it('should return true for a valid numeric string', () => {
    expect(validateInput(['10']).isValid).toBe(true);
  });

  it('should return true for a valid number', () => {
    expect(validateInput([10]).isValid).toBe(true);
  });

  it('should return false for no input', () => {
    expect(validateInput([]).isValid).toBe(false);
  });

  it('should return false for a non-numeric string', () => {
    expect(validateInput(['abc']).isValid).toBe(false);
  });

  it('should return false for a number less than 0', () => {
    expect(validateInput([-1]).isValid).toBe(false);
  });

  it('should return false for a number greater than 100,000', () => {
    expect(validateInput([100001]).isValid).toBe(false);
  });

  it('should return false for more than one input', () => {
    expect(validateInput([1, 2]).isValid).toBe(false);
  });

  it('should return false for a numeric string with a floating point', () => {
    expect(validateInput(['1.5']).isValid).toBe(false);
  });

  it('should return false for a number with a floating point', () => {
    expect(validateInput([1.5]).isValid).toBe(false);
  });
});
