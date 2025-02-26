import { describe, it, expect } from 'vitest';
import dateFormat from './dateFormat';

describe('dateFormat function', () => {
  it('should format valid ISO date strings correctly', () => {
    expect(dateFormat('2020-03-12T00:00:00.000Z')).toBe('11/03/2020');
    expect(dateFormat('2023-07-28T15:45:00.000Z')).toBe('28/07/2023');
    expect(dateFormat('1999-01-01T10:30:00.000Z')).toBe('01/01/1999');
  });

  it("should return '00/00/0000' for null, undefined, or empty values", () => {
    expect(dateFormat(null)).toBe('00/00/0000');
    expect(dateFormat(undefined)).toBe('00/00/0000');
    expect(dateFormat('')).toBe('00/00/0000');
  });
});
