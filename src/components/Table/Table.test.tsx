import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Table from '../Table';
import useFetch from '../../hooks/useFetch';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import useMediaQuery from '../../hooks/useMediaQuery';

vi.mock('../../hooks/useFetch');
vi.mock('../../hooks/useMediaQuery');

describe('Table Component', () => {
  it('should render loading state initially', () => {
    vi.mocked(useFetch).mockReturnValue({ data: null, loading: true });
    vi.mocked(useMediaQuery).mockReturnValue(false);

    render(
      <ThemeProvider theme={theme}>
        <Table />
      </ThemeProvider>
    );

    expect(screen.getByTestId('loader')).toBeVisible();
  });

  it('should render error message when get some error from API', () => {
    vi.mocked(useFetch).mockReturnValue({ data: null, loading: false, error: 'Error' });
    vi.mocked(useMediaQuery).mockReturnValue(false);

    render(
      <ThemeProvider theme={theme}>
        <Table />
      </ThemeProvider>
    );

    expect(
      screen.getByText('Algo deu errado ao carregar a tabela, tente novamento mais tarde!')
    ).toBeVisible();
  });

  it('should render the table with data', () => {
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
    vi.mocked(useFetch).mockReturnValue({ data: mockData, loading: false });
    vi.mocked(useMediaQuery).mockReturnValue(false);

    render(
      <ThemeProvider theme={theme}>
        <Table />
      </ThemeProvider>
    );

    expect(screen.getByRole('table')).toBeVisible();
  });
});
