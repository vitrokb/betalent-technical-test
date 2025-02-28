import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Table from '../Table';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import useMediaQuery from '../../hooks/useMediaQuery';
import EmployeesProvider from '../../contexts/EmployeesContext/EmployeesProvider';
import useEmployees from '../../hooks/useEmployees/useEmployees';

vi.mock('../../hooks/useEmployees/useEmployees');
vi.mock('../../hooks/useMediaQuery');

describe('Table Component', () => {
  const dispatchMock = vi.fn();

  it('should render loading state initially', () => {
    vi.mocked(useMediaQuery).mockReturnValue(false);
    vi.mocked(useEmployees).mockReturnValue({
      state: {
        employees: null,
        error: null,
        loading: true,
        allEmployees: null,
      },
      dispatch: dispatchMock,
    });

    render(
      <EmployeesProvider>
        <ThemeProvider theme={theme}>
          <Table />
        </ThemeProvider>
      </EmployeesProvider>
    );

    expect(screen.getByTestId('loader')).toBeVisible();
  });

  it('should render error message when get some error from API', () => {
    vi.mocked(useMediaQuery).mockReturnValue(false);
    vi.mocked(useEmployees).mockReturnValue({
      state: {
        employees: null,
        error: true,
        loading: false,
        allEmployees: null,
      },
      dispatch: dispatchMock,
    });

    render(
      <EmployeesProvider>
        <ThemeProvider theme={theme}>
          <Table />
        </ThemeProvider>
      </EmployeesProvider>
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

    vi.mocked(useMediaQuery).mockReturnValue(false);
    vi.mocked(useEmployees).mockReturnValue({
      state: {
        employees: mockData,
        error: null,
        loading: false,
        allEmployees: null,
      },
      dispatch: dispatchMock,
    });

    render(
      <EmployeesProvider>
        <ThemeProvider theme={theme}>
          <Table />
        </ThemeProvider>
      </EmployeesProvider>
    );

    expect(screen.getByText('João')).toBeVisible();
  });
});
