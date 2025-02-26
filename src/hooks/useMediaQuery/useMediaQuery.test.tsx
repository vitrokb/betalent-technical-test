import { renderHook, act } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import useMediaQuery from '../useMediaQuery';

describe('useMediaQuery Hook', () => {
  beforeEach(() => {
    vi.stubGlobal('matchMedia', (query: string) => {
      return {
        matches: query === '(max-width: 500px)',
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      };
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should return true when the media query matches', () => {
    const { result } = renderHook(() => useMediaQuery('(max-width: 500px)'));
    expect(result.current).toBe(true);
  });

  it('should return false when the media query does not match', () => {
    const { result } = renderHook(() => useMediaQuery('(min-width: 501px)'));
    expect(result.current).toBe(false);
  });

  it('should update value when media query changes', () => {
    let matches = true;
    let listener: (event: MediaQueryListEvent) => void = () => {};

    vi.stubGlobal('matchMedia', (_query: string) => {
      return {
        get matches() {
          return matches;
        },
        addEventListener: (_event: string, cb: (event: MediaQueryListEvent) => void) => {
          listener = cb;
        },
        removeEventListener: vi.fn(),
      };
    });

    const { result } = renderHook(() => useMediaQuery('(max-width: 500px)'));
    expect(result.current).toBe(true);

    act(() => {
      matches = false;
      listener({ matches: false } as MediaQueryListEvent);
    });

    expect(result.current).toBe(false);
  });
});
