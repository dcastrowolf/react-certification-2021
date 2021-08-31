import { rgba } from './fns';

describe('Testing rgba utility function', () => {
  it('Converts a hex of length 6 color to rgba format', () => {
    const expected = 'rgba(255,255,255, 1)';
    const actual = rgba('#ffffff');
    expect(actual).toBe(expected);
  });

  it('Converts a hex of length 3 to rgba format', () => {
    const expected = 'rgba(255,255,255, 1)';
    const actual = rgba('#fff');
    expect(actual).toBe(expected);
  });

  it('Converts a hex to rgba with specific opacity', () => {
    const expected = 'rgba(255,255,255, 0.5)';
    const actual = rgba('#fff', 0.5);
    expect(actual).toBe(expected);
  });
});
