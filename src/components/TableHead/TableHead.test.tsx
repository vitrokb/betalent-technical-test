import { afterEach, describe, expect, it, vi } from 'vitest';
import useMediaQuery from '../../hooks/useMediaQuery';
import { render, screen } from '@testing-library/react';
import TableHead from './TableHead';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import EmployeesProvider from '../../contexts/EmployeesContext/EmployeesProvider';

vi.mock('../../hooks/useMediaQuery');

describe('TableHead component', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render the table head with the correct informations on mobile', () => {
    vi.mocked(useMediaQuery).mockReturnValue(true);

    render(
      <EmployeesProvider>
        <ThemeProvider theme={theme}>
          <TableHead />
        </ThemeProvider>
      </EmployeesProvider>
    );

    expect(screen.getByText('FOTO')).toBeVisible();
    expect(screen.getByText('NOME')).toBeVisible();
    expect(screen.getByText('CARGO')).not.toBeVisible();
    expect(screen.getByText('DATA DE EMISSÃO')).not.toBeVisible();
    expect(screen.getByText('TELEFONE')).not.toBeVisible();
    expect(screen.getByAltText('White Circle on table header')).toBeVisible();
  });

  it('should render the table head with the correct informations on web', () => {
    vi.mocked(useMediaQuery).mockReturnValue(false);

    render(
      <EmployeesProvider>
        <ThemeProvider theme={theme}>
          <TableHead />
        </ThemeProvider>
      </EmployeesProvider>
    );

    expect(screen.getByText('FOTO')).toBeVisible();
    expect(screen.getByText('NOME')).toBeVisible();
    expect(screen.getByText('CARGO')).toBeVisible();
    expect(screen.getByText('DATA DE EMISSÃO')).toBeVisible();
    expect(screen.getByText('TELEFONE')).toBeVisible();
    expect(screen.getByAltText('White Circle on table header')).not.toBeVisible();
  });
});
