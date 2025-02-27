import { renderHook, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import useFetch from '../useFetch';

vi.stubGlobal('fetch', vi.fn());

describe('useFetch', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should return loading state initially', () => {
    (fetch as vi.Mock).mockResolvedValueOnce(new Response(JSON.stringify([])));
    const { result } = renderHook(() => useFetch('/api/employees'));
    expect(result.current).toEqual({ data: null, error: null, loading: true });
  });

  it('should return data after successful fetch', async () => {
    const mockData = [
      {
        id: 1,
        name: 'João',
        job: 'Back-end',
        admission_date: '2019-12-02',
        phone: '5551234567890',
        image: 'url1',
      },
    ];

    (fetch as vi.Mock).mockResolvedValueOnce(
      new Response(JSON.stringify(mockData), { status: 200 })
    );

    const { result } = renderHook(() => useFetch('/api/employees'));

    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current).toEqual({ data: mockData, error: null, loading: false });
  });

  it('should handle fetch error', async () => {
    (fetch as vi.Mock).mockRejectedValueOnce(new Error('Failed to fetch'));

    const { result } = renderHook(() => useFetch('/api/employees'));

    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current).toEqual({ data: null, error: 'Failed to fetch', loading: false });
  });
});
