import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import EmptyTable from './EmptyTable';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import EmployeesProvider from '../../contexts/EmployeesContext/EmployeesProvider';

describe('EmptyTable component', () => {
  it('should render the correctly error message', () => {
    render(
      <EmployeesProvider>
        <ThemeProvider theme={theme}>
          <EmptyTable />
        </ThemeProvider>
      </EmployeesProvider>
    );

    expect(screen.getByText('Não há informações a serem mostradas na tabela!')).toBeVisible();
  });
});
