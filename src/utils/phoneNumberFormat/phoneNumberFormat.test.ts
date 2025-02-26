import { describe, it, expect } from 'vitest';
import phoneNumberFormat from './phoneNumberFormat';

describe('formatPhoneNumber function', () => {
  it('should format a valid phone number correctly', () => {
    expect(phoneNumberFormat('5550321654789')).toBe('+55 (50) 321654789');
    expect(phoneNumberFormat('5511998765432')).toBe('+55 (11) 998765432');
    expect(phoneNumberFormat('551234567890')).toBe('+55 (12) 34567890');
  });

  it('should return the original string if input is not a valid phone number', () => {
    expect(phoneNumberFormat('123456')).toBe('123456');
    expect(phoneNumberFormat('abcdefghijklm')).toBe('abcdefghijklm');
    expect(phoneNumberFormat('55 50 321654789')).toBe('55 50 321654789');
  });

  it('should handle edge cases', () => {
    expect(phoneNumberFormat('')).toBe('');
    expect(phoneNumberFormat('55119876543210')).toBe('55119876543210');
    expect(phoneNumberFormat('9999999999999')).toBe('+99 (99) 999999999');
  });
});
