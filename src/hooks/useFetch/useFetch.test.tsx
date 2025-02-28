import { renderHook } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import useFetch from '../useFetch';
import useEmployees from '../useEmployees/useEmployees';
import { act } from 'react';

vi.mock('../useEmployees/useEmployees');

describe('useFetch', () => {
  const dispatchMock = vi.fn();

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should dispatch loading state when mounted', async () => {
    vi.mocked(useEmployees).mockReturnValue({
      state: {
        employees: null,
        error: null,
        loading: true,
        allEmployees: null,
      },
      dispatch: dispatchMock,
    });

    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => [],
      })
    );

    await act(async () => {
      renderHook(() => useFetch('url'));
    });

    expect(dispatchMock).toHaveBeenCalledWith({ type: 'SET_LOADING', payload: true });
  });

  it('should dispatch employees data when fetch is successful', async () => {
    const employees = [{ id: 1, name: 'João', job: 'Back-end', phone: '5551234567890' }];

    vi.mocked(useEmployees).mockReturnValue({
      state: {
        employees: null,
        error: null,
        loading: false,
        allEmployees: null,
      },
      dispatch: dispatchMock,
    });

    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => employees,
      })
    );

    await act(async () => {
      renderHook(() => useFetch('url'));
    });

    expect(dispatchMock).toHaveBeenCalledWith({ type: 'SET_ALL_EMPLOYEES', payload: employees });
    expect(dispatchMock).toHaveBeenCalledWith({ type: 'SET_EMPLOYEES', payload: employees });
    expect(dispatchMock).toHaveBeenCalledWith({ type: 'SET_LOADING', payload: false });
  });

  it('should dispatch error when fetch fails', async () => {
    vi.mocked(useEmployees).mockReturnValue({
      state: {
        employees: null,
        error: null,
        loading: false,
        allEmployees: null,
      },
      dispatch: dispatchMock,
    });

    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: false,
        json: async () => [],
        error: 'Error',
      })
    );

    await act(async () => {
      renderHook(() => useFetch('url'));
    });

    expect(dispatchMock).toHaveBeenCalledWith({
      type: 'SET_ERROR',
      payload: 'Algo deu errado com a requisição!',
    });
    expect(dispatchMock).toHaveBeenCalledWith({ type: 'SET_LOADING', payload: false });
  });
});
