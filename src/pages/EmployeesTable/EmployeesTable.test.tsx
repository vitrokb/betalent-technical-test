import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import EmployeesTable from './EmployeesTable';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import useMediaQuery from '../../hooks/useMediaQuery';
import useFetch from '../../hooks/useFetch';
import EmployeesProvider from '../../contexts/EmployeesContext/EmployeesProvider';

vi.mock('../../hooks/useMediaQuery');
vi.mock('../../hooks/useFetch');

describe('EmployeesTable component', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render the EmployeesTable correctly', () => {
    vi.mocked(useMediaQuery).mockReturnValue(false);
    vi.mocked(useFetch).mockReturnValue(undefined);

    render(
      <EmployeesProvider>
        <ThemeProvider theme={theme}>
          <EmployeesTable />
        </ThemeProvider>
      </EmployeesProvider>
    );

    expect(screen.getByText('Funcionários')).toBeVisible();
    expect(screen.getByText('FOTO')).toBeVisible();
  });
});
