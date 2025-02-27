import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import EmployeesTable from './EmployeesTable';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import useMediaQuery from '../../hooks/useMediaQuery';
import useFetch from '../../hooks/useFetch';

vi.mock('../../hooks/useMediaQuery');
vi.mock('../../hooks/useFetch');

describe('EmployeesTable component', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render the EmployeesTable correctly', () => {
    vi.mocked(useMediaQuery).mockReturnValue(false);
    vi.mocked(useFetch).mockReturnValue({ data: null, loading: false });

    render(
      <ThemeProvider theme={theme}>
        <EmployeesTable />
      </ThemeProvider>
    );

    expect(screen.getByText('Funcionários')).toBeVisible();
    expect(screen.getByText('FOTO')).toBeVisible();
  });
});
